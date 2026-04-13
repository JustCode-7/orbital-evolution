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

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
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
  type: 'research' | 'event';
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
    DecimalPipe
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
  isJumping = false; // Neu: Flag für den Orbitalsprung
  shieldActive = false;
  shieldHp = 0;
  satellitesCount = 0;

  marinesActive = false;
  marinesCooldown = 15000;
  marinesReadyTime = 0;
  marinesCooldownProgress = 100;
  projectiles: Projectile[] = [];
  lastShotTime = 0;

  asteroids: Asteroid[] = [];
  scienceLog: LogEntry[] = [];
  stars: Star[] = [];
  comets: Comet[] = [];
  isScoreZone = false;
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

  // Neu: Berechnet die Extrapunkte anhand der Stufe (alle 10 Stufen x1 Multiplikator)
  get jumpBonus(): number {
    const multiplier = Math.floor(this.researchLevel / 10);
    return multiplier * 50000;
  }

  // Neu: Startet den Orbitalsprung
  triggerOrbitalJump() {
    if (this.researchLevel >= 10 && !this.isJumping) {
      this.isJumping = true;
      this.score += this.jumpBonus;
      this.addLog(`Orbitalsprung initiiert! (+${this.jumpBonus} PTS)`, 'event');
    }
  }

  startGame() {
    this.fullscreenService.initDisplayAlwaysOnMode();
    this.fullscreenService.toggleTabFullScreenModeGame();
    this.cleanup();
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
    if (item === 'shield' && this.ep >= 100) {
      this.ep -= 100;
      this.shieldActive = true;
      this.shieldHp = 100;
    } else if (item === 'sats' && this.ep >= 150) {
      this.ep -= 150;
      this.satellitesCount++;
    } else if (item === 'marines' && this.ep >= 250 && Date.now() >= this.marinesReadyTime) {
      this.ep -= 250;
      this.marinesActive = true;
      this.addLog("Marines Einsatzgruppe gestartet!", 'event');
      setTimeout(() => this.marinesActive = false, 10000);
      this.marinesReadyTime = Date.now() + this.marinesCooldown;
    } else if (item === 'research' && this.ep >= 200) {
      const oldThreshold = Math.floor((this.researchLevel - 1) / 3);
      this.ep -= 200;
      this.researchLevel++;
      if (this.researchLevel % 3 === 0) {
        this.spawnComet();
        this.addLog(`Seltener Energie-Komet gesichtet!`, 'research');
      }

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
  }

  private spawnComet() {
    const angle = Math.random() * Math.PI * 2;
    const dist = 1000;

    this.comets.push({
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      vx: -Math.cos(angle) * 5,
      vy: -Math.sin(angle) * 5,
      hue: Math.random() * 360,
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
    this.update();
    this.draw();
    this.cdr.detectChanges();
    this.animFrame = requestAnimationFrame(() => this.gameLoop());
  }

  private update() {
    if (!this.gameActive || this.winState || this.isPaused || this.resumeCountdown() > 0) return;

    const now = Date.now();
    const remaining = this.marinesReadyTime - now;
    this.marinesCooldownProgress = remaining > 0 ? ((this.marinesCooldown - remaining) / this.marinesCooldown) * 100 : 100;

    let dr = 0;

    if (this.isJumping) {
      // Wenn der Orbitalsprung aktiv ist, fliege rasant nach außen
      dr = 15.0;
      if (this.playerR > 1500) {
        this.endGame(true); // Spiel erfolgreich beenden, wenn weit genug weg
      }
    } else {
      // Normale Spiel-Logik (nur wenn nicht gesprungen wird)
      const s = Math.min(window.innerWidth, window.innerHeight) / 900;
      const maxVisibleR = (Math.max(window.innerWidth, window.innerHeight) / 2) / s;

      if (this.playerR > maxVisibleR + 50) {
        this.isRecovering = true;
      }

      dr = this.isPressing ? 4.5 : -2.0;

      if (this.isRecovering) {
        dr = -6.0;
        if (this.playerR < maxVisibleR - 50) {
          this.isRecovering = false;
        }
      }

      // EP Gewinnung in der Habitablen Zone
      this.isInsideHabitableZone = (this.playerR > 300 && this.playerR < 420);

      if (this.isInsideHabitableZone) {
        this.isScoreZone = false;
        this.ep += 0.25;
      } else {
        this.isScoreZone = true
        this.score += Math.floor(1000 / Math.max(1, this.playerR));
      }
    }


    this.playerR += dr;
    const da = 0.015;
    this.playerAngle += da;
    this.playerRotation += 0.08;

    const shipVx = dr * Math.cos(this.playerAngle) - this.playerR * Math.sin(this.playerAngle) * da;
    const shipVy = dr * Math.sin(this.playerAngle) + this.playerR * Math.cos(this.playerAngle) * da;
    this.shipDirection = Math.atan2(shipVy, shipVx);

    this.stars.forEach(st => {
      st.x += 0.5;
      if (st.x > window.innerWidth) st.x = -10;
    });

    const px = Math.cos(this.playerAngle) * this.playerR;
    const py = Math.sin(this.playerAngle) * this.playerR;

    // KOMETEN LOGIK
    for (let i = this.comets.length - 1; i >= 0; i--) {
      const c = this.comets[i];
      const distToSun = Math.hypot(c.x, c.y);

      // Gravitation: Verlangsamen in Sonnennähe (Faktor 0.4 bis 1.0)
      const gravitySlowdown = Math.max(0.4, Math.min(1, distToSun / 500));

      c.x += c.vx * gravitySlowdown;
      c.y += c.vy * gravitySlowdown;
      c.hue = (c.hue + 1) % 360;

      // Schweif-Management
      c.tail.unshift({x: c.x, y: c.y});
      if (c.tail.length > 20) c.tail.pop();

      // Kollision mit Spieler
      const px = Math.cos(this.playerAngle) * this.playerR;
      const py = Math.sin(this.playerAngle) * this.playerR;
      if (Math.hypot(px - c.x, py - c.y) < 40) {
        this.score += 3000;
        this.addLog("+3000 EP durch Kometen-Staub!", 'research');
        this.comets.splice(i, 1);
        continue;
      }
      if (distToSun > 1200) this.comets.splice(i, 1);
    }

    if (this.marinesActive && now - this.lastShotTime > 350) {
      this.fireMarines(px, py);
      this.lastShotTime = now;
    }

    this.updateProjectiles();

    const recoveryRate = 0.012;
    for (let i = this.asteroids.length - 1; i >= 0; i--) {
      const ast = this.asteroids[i];
      ast.vx += (ast.ovx - ast.vx) * recoveryRate;
      ast.vy += (ast.ovy - ast.vy) * recoveryRate;
      ast.x += ast.vx;
      ast.y += ast.vy;

      const distToSun = Math.hypot(ast.x, ast.y);
      if (distToSun < 60) {
        this.asteroids.splice(i, 1);
        continue;
      }

      const dist = Math.hypot(px - ast.x, py - ast.y);
      if (dist < ast.size + 15) {
        this.asteroids.splice(i, 1);
        this.handleHit();
      }
      if (Math.hypot(ast.x, ast.y) > 1200) this.asteroids.splice(i, 1);
    }

    // In die Sonne gefallen
    if (this.playerR < 65) this.endGame(false);
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
    this.lastScore = this.score;
    localStorage.setItem('orbital_last_score', this.lastScore.toString());
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('orbital_hs', this.highScore.toString());
    }
  }

  private draw() {
    const s = Math.min(window.innerWidth, window.innerHeight) / 900;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const ringAlpha = this.isInsideHabitableZone ? 0.4 : 0.15;
    const ringWidth = (this.isInsideHabitableZone ? 130 : 120) * s;

    this.ctx.strokeStyle = `rgba(0, 255, 136, ${ringAlpha})`;
    this.ctx.lineWidth = ringWidth;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 360 * s, 0, Math.PI * 2);
    this.ctx.stroke();

    if (this.isInsideHabitableZone) {
      // Zweiter dünner, heller Kern-Ring für Glow-Effekt ohne Performance-Verlust
      this.ctx.strokeStyle = `rgba(150, 255, 200, 0.6)`;
      this.ctx.lineWidth = 4 * s;
      this.ctx.stroke();
    }


    // KOMET ZEICHNEN
    this.comets.forEach(c => {
      // Schweif
      this.ctx.beginPath();
      c.tail.forEach((pos, idx) => {
        const alpha = 1 - (idx / c.tail.length);
        this.ctx.fillStyle = `hsla(${c.hue}, 100%, 70%, ${alpha * 0.5})`;
        this.ctx.arc(cx + pos.x * s, cy + pos.y * s, (8 - idx * 0.3) * s, 0, Math.PI * 2);
        this.ctx.fill();
      });
      // Kopf
      this.ctx.fillStyle = `white`;
      this.ctx.beginPath();
      this.ctx.arc(cx + c.x * s, cy + c.y * s, 10 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.stars.forEach(st => {
      this.ctx.fillStyle = `rgba(255,255,255,${st.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    const zones = [
      {r: 150, w: 80, c: 'rgba(255, 0, 0, 0.08)'},
      {r: 250, w: 100, c: 'rgba(255, 165, 0, 0.05)'}
    ];
    zones.forEach(z => {
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, z.r * s, 0, Math.PI * 2);
      this.ctx.strokeStyle = z.c;
      this.ctx.lineWidth = z.w * s;
      this.ctx.stroke();
    });

    const resR = 360 * s;
    const resW = 120 * s;
    const innerR = resR - resW / 2;
    const outerR = resR + resW / 2;
    const resGradient = this.ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
    resGradient.addColorStop(0, 'rgba(0, 255, 100, 0)');
    resGradient.addColorStop(0.3, 'rgba(0, 255, 100, 0.15)');
    resGradient.addColorStop(0.5, 'rgba(0, 255, 100, 0.25)');
    resGradient.addColorStop(0.7, 'rgba(0, 255, 100, 0.15)');
    resGradient.addColorStop(1, 'rgba(0, 255, 100, 0)');

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, resR, 0, Math.PI * 2);
    this.ctx.strokeStyle = resGradient;
    this.ctx.lineWidth = resW;
    this.ctx.stroke();
    this.ctx.restore();

    const sunR = 55 * s;
    const sunGradient = this.ctx.createRadialGradient(cx, cy, sunR * 0.2, cx, cy, sunR);
    sunGradient.addColorStop(0, '#fffbe6');
    sunGradient.addColorStop(0.2, '#ffcc00');
    sunGradient.addColorStop(0.5, '#ff6600');
    sunGradient.addColorStop(1, '#ff3300');


    this.ctx.save();
    this.ctx.shadowBlur = 40 * s;
    this.ctx.shadowColor = '#ff6600';
    this.ctx.fillStyle = sunGradient;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, sunR, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.shadowBlur = 80 * s;
    this.ctx.strokeStyle = 'rgba(255, 102, 0, 0.3)';
    this.ctx.lineWidth = 10 * s;
    this.ctx.stroke();
    this.ctx.restore();

    const px = cx + Math.cos(this.playerAngle) * (this.playerR * s);
    const py = cy + Math.sin(this.playerAngle) * (this.playerR * s);
    const shipSize = 15 * s;

    this.ctx.save();
    this.ctx.translate(px, py);
    this.ctx.rotate(this.shipDirection + Math.PI / 2);


    if (this.playerImg.complete) {
      // Zentriert zeichnen (-shipSize)
      this.ctx.drawImage(this.playerImg, -shipSize, -shipSize, shipSize * 2, shipSize * 2);
    } else {
      // Fallback falls Bild noch lädt
      this.ctx.fillStyle = '#2277ff';
      this.ctx.beginPath();
      this.ctx.moveTo(0, -shipSize);
      this.ctx.lineTo(-shipSize * 0.8, shipSize);
      this.ctx.lineTo(0, shipSize * 0.6);
      this.ctx.lineTo(shipSize * 0.8, shipSize);
      this.ctx.closePath();
      this.ctx.fill();
    }
    this.ctx.fillStyle = '#88ccff';
    this.ctx.beginPath();
    this.ctx.arc(0, -shipSize * 0.2, shipSize * 0.3, 0, Math.PI * 2);
    this.ctx.fill();

    // Stärkere Triebwerke beim Sprung
    if (this.isPressing || this.isJumping) {
      this.ctx.fillStyle = this.isJumping ? '#00ffff' : '#ffaa00';
      this.ctx.beginPath();
      this.ctx.moveTo(-shipSize * 0.4, shipSize * 0.7);
      this.ctx.lineTo(0, shipSize * (this.isJumping ? 3.0 : 1.5));
      this.ctx.lineTo(shipSize * 0.4, shipSize * 0.7);
      this.ctx.fill();
    }
    this.ctx.restore();

    for (let i = 0; i < this.satellitesCount; i++) {
      const a = (Math.PI * 2 / this.satellitesCount) * i + (this.playerAngle * 0.5);
      const sx = px + Math.cos(a) * 30 * s;
      const sy = py + Math.sin(a) * 30 * s;
      this.ctx.save();
      this.ctx.translate(sx, sy);
      this.ctx.rotate(this.playerRotation);
      this.ctx.fillStyle = '#aaa';
      this.ctx.fillRect(-4 * s, -2 * s, 8 * s, 4 * s);
      this.ctx.fillStyle = '#44f';
      this.ctx.fillRect(-6 * s, -4 * s, 2 * s, 8 * s);
      this.ctx.fillRect(4 * s, -4 * s, 2 * s, 8 * s);
      this.ctx.restore();
    }

    if (this.marinesActive) {
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

    this.ctx.fillStyle = '#ffff00';
    this.projectiles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(cx + p.x * s, cy + p.y * s, 3 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });

    if (this.shieldActive) {
      this.ctx.strokeStyle = `rgba(0, 255, 255, ${this.shieldHp / 100})`;
      this.ctx.lineWidth = 3 * s;
      this.ctx.beginPath();
      this.ctx.arc(px, py, shipSize * 2, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    // ASTEROIDEN (mit Treffer-Feedback)
    this.asteroids.forEach(a => {
      this.ctx.fillStyle = a.hp === 1 ? '#4a3333' : '#777';
      this.ctx.beginPath();
      this.ctx.moveTo(cx + (a.x + a.points[0].x) * s, cy + (a.y + a.points[0].y) * s);
      for (let i = 1; i < a.points.length; i++) {
        this.ctx.lineTo(cx + (a.x + a.points[i].x) * s, cy + (a.y + a.points[i].y) * s);
      }
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.fillStyle = '#555';
      this.ctx.beginPath();
      this.ctx.arc(cx + (a.x + a.size * 0.2) * s, cy + (a.y - a.size * 0.2) * s, a.size * 0.3 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }


  private addLog(text: string, type: 'research' | 'event') {
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
}
