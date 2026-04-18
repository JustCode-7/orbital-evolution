import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild
} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {ToggleFullscreenService} from '../../service/toggle-fullscreen.service';
import {ThreeDimensions} from '../three-dimensions/three-dimensions';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
  lifespan: number;
  tail: { x: number, y: number }[]; // NEU: Schweif-Positionen
}

interface Asteroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ovx: number;
  ovy: number;
  size: number;
  color: string;
  points: { x: number, y: number }[];
  hp: number;
}

interface LogEntry {
  text: string;
  timestamp: number;
  type: 'research' | 'event' | 'system';
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface Projectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [
    DecimalPipe,
    ThreeDimensions,
    MatIcon,
    MatIconButton,
    RouterLink,
  ],
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private cdr = inject(ChangeDetectorRef);

  score = 0;
  ep = 0;
  researchLevel = 1;
  gameActive = false;
  winState = false;
  isPressing = false;
  highScore = parseInt(localStorage.getItem('orbital_hs') || '0');
  lastScore = parseInt(localStorage.getItem('orbital_last_score') || '0');

  playerR = 350;
  playerAngle = 0;
  playerRotation = 0;
  shipDirection = 0;
  isRecovering = false;
  isJumping = false;
  shieldActive = false;
  shieldHp = 0;
  satellitesCount = 0;

  marinesActive = false;
  marinesCooldown = 15000;
  marinesReadyTime = 0;
  marinesCooldownProgress = 100;
  projectiles: Projectile[] = [];
  lastShotTime = 0;
  // In den Klassen-Eigenschaften (State)
  private flightDirection = 1; // 1 = Uhrzeigersinn, -1 = gegen den Uhrzeigersinn
  private lastTimestamp: number = 0;
  private lastDelta: number = 0;

  asteroids: Asteroid[] = [];
  scienceLog: LogEntry[] = [];
  stars: Star[] = [];
  comets: Comet[] = [];
  isScoreZone = false;
  isInsideYellowZone = false;  // Die äußere Gefahrenzone (Gelb/Orange)
  isInsideRedZone = false;     // Die mittlere Gefahrenzone (Rot)
  isInsideCoronaZone = false;  // Direkt vor der Sonne (Extrem)
  isInsideHabitableZone = false;
  isPaused = false;
  resumeCountdown = signal(0);
  private playerImg = new Image();

  private spawnInterval: any;
  private animFrame: any;
  protected readonly fullscreenService = inject(ToggleFullscreenService);

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.playerImg.src = 'assets/ship.svg';
    this.resize();
    this.initStars();
    this.gameLoop();
  }

  ngOnDestroy() {
    this.cleanup();
    cancelAnimationFrame(this.animFrame);
  }

  private cleanup() {
    if (this.spawnInterval) clearInterval(this.spawnInterval);
  }

  @HostListener('window:resize')
  resize() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.initStars();
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < 150; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random()
      });
    }
  }

  onDown(e: Event) {
    this.isPressing = true;
    e.preventDefault();
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onUp() {
    this.isPressing = false;
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(e: Event) {
    e.preventDefault();
  }

  get scoreFromated(): number {
    return Math.floor(this.score);
  }

  get jumpBounsLevel(): number {
    return Math.floor(this.researchLevel / 10);
  }

  get jumpBonus(): number {
    if (this.researchLevel < 10) return 0;

    // Wir nehmen 5% pro Research-Level als Basis
    // Level 10 -> 0.5 (50%)
    // Level 20 -> 1.0 (100%)
    const percentage = this.researchLevel * 0.05;

    return Math.floor(this.score * percentage);
  }

  triggerOrbitalJump() {
    if (this.researchLevel >= 10 && !this.isJumping) {
      const finalBonus = this.jumpBonus;
      this.isJumping = true;

      this.score += finalBonus;
      this.addLog(`Orbitalsprung initiiert! (+${finalBonus.toLocaleString()} Punkte)`, 'event');
    }
  }

  startGame() {
    this.fullscreenService.initDisplayAlwaysOnMode();
    this.fullscreenService.toggleTabFullScreenModeGame();
    this.cleanup();
    this.lastTimestamp = performance.now()
    this.gameActive = true;
    this.winState = false;
    this.score = 0;
    this.ep = 100;
    this.researchLevel = 1;
    this.playerR = 350;
    this.asteroids = [];
    this.scienceLog = [];
    this.projectiles = [];
    this.marinesActive = false;
    this.isRecovering = false;
    this.isJumping = false; // Reset Jump Status
    this.satellitesCount = 0;
    this.marinesReadyTime = 0;
    this.shieldActive = false;
    this.shieldHp = 0;
    this.comets = [];
    this.isInsideHabitableZone = false;

    this.addLog("Orbitale Verteidigung aktiviert.", 'event');
    this.startSpawning();
  }

  private startSpawning() {
    this.cleanup();
    const interval = Math.max(400, 1500 - Math.floor((this.researchLevel - 1) / 3) * 250);
    this.spawnInterval = setInterval(() => this.spawnAsteroid(), interval);
  }

  buy(item: string, e?: Event) {
    if (e) {
      this.onDown(e);
      setTimeout(() => this.onUp(), 50);
    }

    // Delegation an die spezifischen Methoden
    switch (item) {
      case 'shield':
        this.buyShield();
        break;
      case 'sats':
        this.handleSatelliteAction();
        break; // Geänderter Name für neue Logik
      case 'marines':
        this.buyMarines();
        break;
      case 'research':
        this.buyResearch();
        break;
    }
  }

  private buyShield() {
    if (this.ep >= 100 && this.shieldHp < 100) {
      this.ep -= 100;
      this.shieldActive = true;
      this.shieldHp = 100;
      this.addLog("Schilde aktiviert!", "system");
    }
  }

  private handleSatelliteAction() {
    // Wenn bereits 10 Satelliten da sind: Richtungswechsel (kostenlos)
    if (this.satellitesCount >= 10) {
      this.flightDirection *= -1;
      const dirText = this.flightDirection === 1 ? "Uhrzeigersinn" : "Gegen Uhrzeigersinn";
      this.addLog(`Orbit-Umkehr: Flugrichtung nun ${dirText}`, "system");
      return;
    }

    // Ansonsten: Satellit kaufen
    if (this.ep >= 150) {
      this.ep -= 150;
      this.satellitesCount++;
      this.addLog(`Satellit ${this.satellitesCount}/10 online.`, "system");

      if (this.satellitesCount === 10) {
        this.addLog("MAXIMALE SATELLITEN: Orbit-Umkehr freigeschaltet!", "event");
      }
    }
  }

  private buyMarines() {
    const now = Date.now();
    if (this.ep >= 250 && now >= this.marinesReadyTime) {
      this.ep -= 250;
      this.marinesActive = true;
      this.addLog("Marines Einsatzgruppe gestartet!", 'event');

      setTimeout(() => (this.marinesActive = false), 10000);
      this.marinesReadyTime = now + this.marinesCooldown;
    }
  }

  private buyResearch() {
    if (this.ep < 200) return;

    const oldThreshold = Math.floor((this.researchLevel - 1) / 3);
    this.ep -= 200;
    this.researchLevel++;

    // Logik für Kometen-Spawn
    if (this.researchLevel % 3 === 0) {
      this.spawnComet();
      this.addLog(`Seltener Energie-Komet gesichtet!`, 'research');
    }

    // Logik für Asteroiden-Intensität
    const newThreshold = Math.floor((this.researchLevel - 1) / 3);
    if (newThreshold > oldThreshold) {
      this.startSpawning();
      this.addLog(`Gefahrenstufe erhöht! Asteroiden-Frequenz gesteigert.`, 'event');
    }

    this.addLog(`Technologie-Level ${this.researchLevel} erreicht.`, 'research');

    if (this.researchLevel === 10) {
      this.addLog(`ANTIGRAVITATIONSANTRIEB BEREIT ZUM SPRUNG!`, 'event');
    }
  }

  private spawnComet() {
    // In deiner spawnComet() Methode:
    const spawnAngle = Math.random() * Math.PI * 2;
    const startX = Math.cos(spawnAngle) * 1000;
    const startY = Math.sin(spawnAngle) * 1000;

    // ZIELE NICHT AUF 0/0, SONDERN ETWAS DANEBEN
    const offset = (Math.random() - 0.5) * 400; // 400 Einheiten Streuung
    const targetX = (Math.random() - 0.5) * offset;
    const targetY = (Math.random() - 0.5) * offset;

    const angleToTarget = Math.atan2(targetY - startY, targetX - startX);
    //Geschwindigkeit zwischen 1.5 und 3.5
    const speed = 1.5 + Math.random() * 2;

    this.comets.push({
      x: startX, y: startY,
      vx: Math.cos(angleToTarget) * speed,
      vy: Math.sin(angleToTarget) * speed,
      hue: Math.random() * 360,
      lifespan: 0,
      tail: []
    });
    this.addLog("Ein Komet nähert sich der Sonne!", 'event');
  }

  private spawnAsteroid() {
    if (this.isPaused || this.resumeCountdown() > 0 || !this.gameActive) return;
    const angle = Math.random() * Math.PI * 2;
    const vx = -Math.cos(angle) * (2 + Math.random() * 2.5);
    const vy = -Math.sin(angle) * (2 + Math.random() * 2.5);

    const size = 12 + Math.random() * 15;
    const points = [];
    const numPoints = 7 + Math.floor(Math.random() * 5);
    const hp = Math.ceil(size / 3);
    for (let i = 0; i < numPoints; i++) {
      const a = (i / numPoints) * Math.PI * 2;
      const r = size * (0.8 + Math.random() * 0.4);
      points.push({x: Math.cos(a) * r, y: Math.sin(a) * r});
    }

    this.asteroids.push({
      x: Math.cos(angle) * 900, y: Math.sin(angle) * 900,
      vx, vy, ovx: vx, ovy: vy,
      size, color: '#888', points, hp
    });
  }

  private gameLoop() {
    const now = performance.now();
    if (this.lastTimestamp === 0) this.lastTimestamp = now;

    // Zeit seit dem letzten Frame in Sekunden (z.B. 0.0166 bei 60 FPS)
    this.lastDelta = (now - this.lastTimestamp) / 1000;
    this.lastTimestamp = now;

    // Falls das Spiel durch einen Tab-Wechsel pausiert war,
    // begrenzen wir das Delta, damit man nicht plötzlich Milliarden Punkte kriegt
    if (this.lastDelta > 0.1) this.lastDelta = 0.1;

    this.update();
    this.draw();
    this.cdr.detectChanges();
    this.animFrame = requestAnimationFrame(() => this.gameLoop());
  }

  private update() {
    if (!this.gameActive || this.winState || this.isPaused || this.resumeCountdown() > 0) return;

    const now = Date.now();

    // 1. Zeitliche Abläufe & Cooldowns
    this.updateCooldowns(now);

    // 2. Spieler-Radius berechnen (dr = Delta Radius)
    const dr = this.calculatePlayerRadiusDelta();

    // 3. Transformationen (Position, Winkel, Richtung)
    this.applyPlayerPhysics(dr);

    // 4. Weltraum-Hintergrund & Neutrale Objekte
    const px = Math.cos(this.playerAngle) * this.playerR;
    const py = Math.sin(this.playerAngle) * this.playerR;

    this.updateStars();
    this.updateComets(px, py);

    // 5. Kampf & Abwehr
    this.updateCombat(now, px, py);

    // 6. Gefahrenprüfung
    this.checkDeathConditions();
  }

// --- HELPER METHODS ---

  private updateCooldowns(now: number) {
    const remaining = this.marinesReadyTime - now;
    this.marinesCooldownProgress = remaining > 0
      ? ((this.marinesCooldown - remaining) / this.marinesCooldown) * 100
      : 100;
  }

  private calculatePlayerRadiusDelta(): number {
    if (this.isJumping) {
      if (this.playerR > 1500) this.endGame(true);
      return 15.0; // Sprung-Geschwindigkeit
    }

    // Normale Bewegung & Recovery-Logik
    const s = Math.min(window.innerWidth, window.innerHeight) / 900;
    const maxVisibleR = (Math.max(window.innerWidth, window.innerHeight) / 2) / s;

    if (this.playerR > maxVisibleR + 50) this.isRecovering = true;

    let dr = this.isPressing ? 4.5 : -2.0;

    if (this.isRecovering) {
      dr = -6.0;
      if (this.playerR < maxVisibleR - 50) this.isRecovering = false;
    }

    // Zone Check & Belohnung
    this.updateZonesAndScoring();

    return dr;
  }

  private updateZonesAndScoring() {
    // 1. Habitable Zone (Grüner Nebel)
    this.isInsideHabitableZone = (this.playerR > 300 && this.playerR < 420);

    // 1. Gelbe/Orange Zone (r: 250, Breite: 100 -> Bereich 200 bis 300)
    this.isInsideYellowZone = (this.playerR > 200 && this.playerR <= 300);

    // 1. Rote Zone (r: 150, Breite: 80 -> Bereich 110 bis 190)
    this.isInsideRedZone = (this.playerR > 110 && this.playerR <= 190);

    // 1. Corona/Extreme Zone (Direkt vor der Sonne, r: 85, Breite: 40 -> Bereich 65 bis 105)
    // 65 ist dein Todes-Radius
    this.isInsideCoronaZone = (this.playerR >= 65 && this.playerR <= 110);

    if (this.isInsideHabitableZone) {
      this.isScoreZone = false;

      // EP Gewinn: ca. 15 EP pro Sekunde als Basis
      const epPerSecond = 15 * (1 + (this.satellitesCount * 0.1));
      this.ep += epPerSecond * this.lastDelta;

    } else if (this.playerR <= 300) {
      this.isScoreZone = true;

      // 2. Der Potenzielle Score (Basis ist die Nähe)
      // Die '10' ist ein Skalierungswert, damit die Zahlen im HUD gut aussehen
      const basisSkalierung = 10
      const potentialPoints = Math.pow(1000 / Math.max(1, this.playerR), 2) * basisSkalierung;

      // 3. Effizienz-Faktor basierend auf der Zone
      let efficiency = 0.4; // Standardwert außerhalb der Zonen (Fallback)

      if (this.isInsideCoronaZone) {
        efficiency = 1.0; // 100% der Punkte ganz nah dran
      } else if (this.isInsideRedZone) {
        efficiency = 0.8; // 80% der Punkte in der mittleren Zone
      } else if (this.isInsideYellowZone) {
        efficiency = 0.6; // 60% der Punkte in der äußeren Zone
      }

      // 4. Forschung bleibt ein zusätzlicher Bonus obendrauf
      const resMultiplier = 1 + (this.researchLevel * 0.1);

      // Finale Berechnung
      const pointsPerSecond = potentialPoints * efficiency * resMultiplier;

      this.score += pointsPerSecond * this.lastDelta;

    } else {
      this.isScoreZone = false;
    }
  }

  private applyPlayerPhysics(dr: number) {
    const da = 0.015 * this.flightDirection;
    this.playerR += dr;
    this.playerAngle += da;
    this.playerRotation += 0.08 * this.flightDirection;

    // Richtungs-Vektor berechnen für die Schiff-Rotation (ShipDirection)
    const shipVx = dr * Math.cos(this.playerAngle) - this.playerR * Math.sin(this.playerAngle) * da;
    const shipVy = dr * Math.sin(this.playerAngle) + this.playerR * Math.cos(this.playerAngle) * da;
    this.shipDirection = Math.atan2(shipVy, shipVx);
  }

  private updateStars() {
    this.stars.forEach(st => {
      st.x += 0.5;
      if (st.x > window.innerWidth) st.x = -10;
    });
  }

  private updateComets(px: number, py: number) {

    for (let i = this.comets.length - 1; i >= 0; i--) {
      const c = this.comets[i];
      const dx = 0 - c.x;
      const dy = 0 - c.y;
      const distToSun = Math.hypot(dx, dy);

      // 2. Anziehungskraft berechnen
      // Je näher an der Sonne, desto stärker der Zug (aber gedeckelt, damit er nicht wegschießt)
      const gravityStrength = 0.3; // Wie stark soll die Kurve sein?
      const force = gravityStrength * (100 / Math.max(50, distToSun));

      // 3. Geschwindigkeit anpassen (Der "Kurven"-Effekt)
      c.vx += (dx / distToSun) * force;
      c.vy += (dy / distToSun) * force;
      // ----------------------------------

      // Position mit der neuen, leicht gebogenen Geschwindigkeit aktualisieren
      c.x += c.vx;
      c.y += c.vy;

      // Schweif & Optik
      c.hue = (c.hue + 1) % 360;
      c.tail.unshift({x: c.x, y: c.y});
      if (c.tail.length > 25) c.tail.pop();

      // Zähler hochzählen
      c.lifespan++;

      // Wenn der Komet zu alt ist, löschen wir ihn
      if (c.lifespan > 1800) {
        this.comets.splice(i, 1);
        continue;
      }

      // Kollisionsprüfung (Spieler)
      if (Math.hypot(px - c.x, py - c.y) < 40) {
        const cometValue = Math.floor(100 * this.researchLevel * 50)
        this.score += cometValue;
        this.addLog("+" + cometValue.toString() + " Pts: Kometen-Staub extrahiert!", 'research');
        this.comets.splice(i, 1);
        continue;
      }

      // Cleanup: weit im All verschwunden
      if (distToSun > 1500) {
        this.comets.splice(i, 1);
      }
    }
  }

  private updateCombat(now: number, px: number, py: number) {
    // Marines Feuerbefehl
    if (this.marinesActive && now - this.lastShotTime > 350) {
      this.fireMarines(px, py);
      this.lastShotTime = now;
    }

    this.updateProjectiles();
    this.updateAsteroids(px, py);
  }

  private updateAsteroids(px: number, py: number) {
    const recoveryRate = 0.012;

    for (let i = this.asteroids.length - 1; i >= 0; i--) {
      const ast = this.asteroids[i];

      // Recovery & Movement
      ast.vx += (ast.ovx - ast.vx) * recoveryRate;
      ast.vy += (ast.ovy - ast.vy) * recoveryRate;
      ast.x += ast.vx;
      ast.y += ast.vy;

      const distToSun = Math.hypot(ast.x, ast.y);

      // In die Sonne geflogen
      if (distToSun < 60) {
        this.asteroids.splice(i, 1);
        continue;
      }

      // Kollision Spieler
      const distToPlayer = Math.hypot(px - ast.x, py - ast.y);
      if (distToPlayer < ast.size + 15) {
        this.asteroids.splice(i, 1);
        this.handleHit();
        continue;
      }

      // Aus dem Bildschirm
      if (Math.hypot(ast.x, ast.y) > 1200) {
        this.asteroids.splice(i, 1);
      }
    }
  }

  private checkDeathConditions() {
    if (this.playerR < 65) {
      this.endGame(false);
    }
  }

  private fireMarines(px: number, py: number) {
    if (this.asteroids.length === 0) return;
    for (let i = 0; i < 3; i++) {
      const marineAngle = this.playerAngle + (i * (Math.PI * 2 / 3));
      const mx = px + Math.cos(marineAngle) * 35;
      const my = py + Math.sin(marineAngle) * 35;

      let target = this.asteroids[0];
      let minDist = Infinity;
      this.asteroids.forEach(a => {
        const d = Math.hypot(mx - a.x, my - a.y);
        if (d < minDist) {
          minDist = d;
          target = a;
        }
      });

      const dx = target.x - mx;
      const dy = target.y - my;
      const dist = Math.hypot(dx, dy);
      this.projectiles.push({x: mx, y: my, vx: (dx / dist) * 14, vy: (dy / dist) * 14});
    }
  }

  private updateProjectiles() {
    const impactFactor = 0.55;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.x += p.vx;
      p.y += p.vy;

      for (let j = this.asteroids.length - 1; j >= 0; j--) {
        const a = this.asteroids[j];
        if (Math.hypot(p.x - a.x, p.y - a.y) < a.size + 6) {
          // 1. Verlangsamen (wie bisher)
          a.vx *= impactFactor;
          a.vy *= impactFactor;

          // 2. Schaden zufügen
          a.hp--;

          // 3. Zerstören bei 0 HP
          if (a.hp <= 0) {
            this.score += Math.floor(a.size * 10);
            this.asteroids.splice(j, 1);
          }

          this.projectiles.splice(i, 1);
          break;
        }
      }
    }
  }

  handleHit() {
    if (this.isRecovering || this.isJumping) return; // Unsterblich während Rückkehr oder Orbitalsprung
    if (this.shieldActive && this.shieldHp > 0) {
      this.shieldHp -= 34;
      if (this.shieldHp <= 0) {
        this.shieldHp = 0;
        this.shieldActive = false;
      }
    } else if (this.satellitesCount > 0) {
      this.satellitesCount--;
    } else {
      this.endGame(false);
    }
  }

  endGame(win: boolean) {
    this.gameActive = false;
    this.winState = win;
    this.lastScore = Math.floor(this.score);
    localStorage.setItem('orbital_last_score', this.lastScore.toString());
    if (this.score > this.highScore) {
      this.highScore = Math.floor(this.score);
      localStorage.setItem('orbital_hs', this.highScore.toString());
    }
  }

  private draw() {
    const s = Math.min(window.innerWidth, window.innerHeight) / 900;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    // Hintergrund & Basis
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.drawStars();
    this.drawEnvironmentZones(s, cx, cy);
    // this.drawSun(s, cx, cy);
    this.drawComets(s, cx, cy);

    // Spieler-System berechnen
    const px = cx + Math.cos(this.playerAngle) * (this.playerR * s);
    const py = cy + Math.sin(this.playerAngle) * (this.playerR * s);

    // Spieler & Einheiten
    this.drawPlayerShip(s, px, py);
    this.drawSatellites(s, px, py);
    this.drawMarines(s, px, py);
    this.drawShield(s, px, py);

    // Kampf-Objekte
    this.drawProjectiles(s, cx, cy);
    this.drawAsteroids(s, cx, cy);
  }

// --- PRIVATE HELPER METHODS ---

  private drawStars() {
    this.stars.forEach(st => {
      this.ctx.fillStyle = `rgba(255,255,255,${st.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawEnvironmentZones(s: number, cx: number, cy: number) {
    const zones = [
      {
        name: 'Yellow',
        r: 250, w: (this.isInsideYellowZone ? 110 : 100),
        c: this.isInsideYellowZone ? 'rgb(255, 230, 100, 0.4)' : 'rgba(255, 255, 150, 0.15)'
      },
      {
        name: 'Red',
        r: 150, w: (this.isInsideRedZone ? 90 : 80),
        c: this.isInsideRedZone ? 'rgb(255, 180, 0, 0.5)' : 'rgba(255, 200, 50, 0.25)'
      },
      {
        name: 'Corona',
        r: 85, w: (this.isInsideCoronaZone ? 50 : 40),
        c: this.isInsideCoronaZone ? '#fb9331' : 'rgba(255, 200, 0, 0.2)'
      }
    ];
    zones.forEach(z => {
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, z.r * s, 0, Math.PI * 2);
      this.ctx.strokeStyle = z.c;
      this.ctx.lineWidth = z.w * s;
      this.ctx.stroke();
    });

    // 2. Habitable Zone (Gasnebel-Effekt)
    const resR = 360 * s;
    // Den Nebel bei Betreten etwas "aufblähen"
    const resW = (this.isInsideHabitableZone ? 150 : 120) * s;
    const ringAlpha = this.isInsideHabitableZone ? 0.4 : 0.15;
    //
    const innerR = resR - resW / 2;
    const outerR = resR + resW / 2;
    const resGradient = this.ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);

    // Mehrstufige Farbstopps für die Gasdichte
    resGradient.addColorStop(0, 'rgba(0, 255, 100, 0)');               // Innen transparent
    resGradient.addColorStop(0.5, `rgba(0, 255, 150, ${ringAlpha})`);       // Dichtester Kern des Nebels
    resGradient.addColorStop(1, 'rgba(0, 255, 100, 0)');               // Außen transparent

    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, resR, 0, Math.PI * 2);
    this.ctx.strokeStyle = resGradient;
    this.ctx.lineWidth = resW;
    this.ctx.stroke();

    this.ctx.restore();
  }

  private drawPlayerShip(s: number, px: number, py: number) {
    const shipSize = 20 * s;
    this.ctx.save();
    this.ctx.translate(px, py);
    this.ctx.rotate(this.shipDirection + Math.PI / 2);

    if (this.playerImg.complete) {
      this.ctx.drawImage(this.playerImg, -shipSize, -shipSize, shipSize * 2, shipSize * 2);
    } else {
      // Fallback: Dreieck-Schiff
      this.ctx.fillStyle = '#2277ff';
      this.ctx.beginPath();
      this.ctx.moveTo(0, -shipSize);
      this.ctx.lineTo(-shipSize * 0.8, shipSize);
      this.ctx.lineTo(0, shipSize * 0.6);
      this.ctx.lineTo(shipSize * 0.8, shipSize);
      this.ctx.fill();
    }

    // Cockpit
    this.ctx.fillStyle = '#88ccff';
    this.ctx.beginPath();
    this.ctx.arc(0, -shipSize * 0.2, shipSize * 0.3, 0, Math.PI * 2);
    this.ctx.fill();

    // Triebwerke
    if (this.isPressing) {
      this.ctx.fillStyle = '#ffaa00';
      this.ctx.beginPath();
      this.ctx.moveTo(-shipSize * 0.4, shipSize * 0.7);
      this.ctx.lineTo(0, shipSize * (1.5));
      this.ctx.lineTo(shipSize * 0.4, shipSize * 0.7);
      this.ctx.fill();
    }

    if (this.isJumping) {
      this.ctx.fillStyle = '#00ffff';
      this.ctx.beginPath();
      this.ctx.moveTo(-shipSize * 0.6, shipSize * 0.7);
      this.ctx.lineTo(0, shipSize * 5.0);
      this.ctx.lineTo(shipSize * 0.6, shipSize * 0.7);
      this.ctx.fill();

      this.ctx.shadowBlur = 20 * s;
      this.ctx.shadowColor = '#00ffff';
    }
    this.ctx.restore();
  }

  private drawSatellites(s: number, px: number, py: number) {
    for (let i = 0; i < this.satellitesCount; i++) {
      const a = (Math.PI * 2 / this.satellitesCount) * i + (this.playerAngle * 0.5);
      const sx = px + Math.cos(a) * 30 * s;
      const sy = py + Math.sin(a) * 30 * s;

      this.ctx.save();
      this.ctx.translate(sx, sy);
      this.ctx.rotate(this.playerRotation);
      this.ctx.fillStyle = '#aaa';
      this.ctx.fillRect(-4 * s, -2 * s, 8 * s, 4 * s);
      this.ctx.fillStyle = '#44f'; // Solarpanele
      this.ctx.fillRect(-6 * s, -4 * s, 2 * s, 8 * s);
      this.ctx.fillRect(4 * s, -4 * s, 2 * s, 8 * s);
      this.ctx.restore();
    }
  }

  private drawMarines(s: number, px: number, py: number) {
    if (!this.marinesActive) return;

    for (let i = 0; i < 3; i++) {
      const a = this.playerAngle + (i * (Math.PI * 2 / 3));
      const mx = px + Math.cos(a) * 42 * s;
      const my = py + Math.sin(a) * 42 * s;

      this.ctx.save();
      this.ctx.translate(mx, my);
      this.ctx.rotate(a + Math.PI / 2);
      this.ctx.fillStyle = '#ffcc00';
      this.ctx.beginPath();
      this.ctx.moveTo(0, -6 * s);
      this.ctx.lineTo(-5 * s, 6 * s);
      this.ctx.lineTo(5 * s, 6 * s);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  private drawComets(s: number, cx: number, cy: number) {
    this.comets.forEach(c => {
      // Schweif (Tail)
      c.tail.forEach((pos, idx) => {
        const alpha = 1 - (idx / c.tail.length);
        this.ctx.fillStyle = `hsla(${c.hue}, 100%, 70%, ${alpha * 0.5})`;
        this.ctx.beginPath();
        this.ctx.arc(cx + pos.x * s, cy + pos.y * s, (8 - idx * 0.3) * s, 0, Math.PI * 2);
        this.ctx.fill();
      });
      // Kometenkopf
      this.ctx.fillStyle = `white`;
      this.ctx.beginPath();
      this.ctx.arc(cx + c.x * s, cy + c.y * s, 10 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawAsteroids(s: number, cx: number, cy: number) {
    this.asteroids.forEach(a => {
      this.ctx.fillStyle = a.hp === 1 ? '#4a3333' : '#777';
      this.ctx.beginPath();
      this.ctx.moveTo(cx + (a.x + a.points[0].x) * s, cy + (a.y + a.points[0].y) * s);
      for (let i = 1; i < a.points.length; i++) {
        this.ctx.lineTo(cx + (a.x + a.points[i].x) * s, cy + (a.y + a.points[i].y) * s);
      }
      this.ctx.closePath();
      this.ctx.fill();

      // Krater-Details
      this.ctx.fillStyle = '#555';
      this.ctx.beginPath();
      this.ctx.arc(cx + (a.x + a.size * 0.2) * s, cy + (a.y - a.size * 0.2) * s, a.size * 0.3 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawProjectiles(s: number, cx: number, cy: number) {
    this.ctx.fillStyle = '#ffff00';
    this.projectiles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(cx + p.x * s, cy + p.y * s, 3 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawShield(s: number, px: number, py: number) {
    if (!this.shieldActive) return;
    const shipSize = 15 * s;
    this.ctx.strokeStyle = `rgba(0, 255, 255, ${this.shieldHp / 100})`;
    this.ctx.lineWidth = 3 * s;
    this.ctx.beginPath();
    this.ctx.arc(px, py, shipSize * 2, 0, Math.PI * 2);
    this.ctx.stroke();
  }


  private addLog(text: string, type: 'research' | 'event' | 'system') {
    this.scienceLog.unshift({text, timestamp: Date.now(), type});
    if (this.scienceLog.length > 4) this.scienceLog.pop();
  }

  // Methode zum Pausieren
  togglePause(e?: Event) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!this.gameActive || this.winState || this.resumeCountdown() > 0) return;
    this.isPaused = true;
  }

  // Methode zum Fortsetzen mit Countdown
  resumeGame() {
    this.isPaused = false;
    this.resumeCountdown.set(3);

    const interval = setInterval(() => {
      this.resumeCountdown.set(this.resumeCountdown() - 1);
      if (this.resumeCountdown() <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }


  protected clearHighScore() {
    localStorage.removeItem('orbital_last_score')
  }

}
