/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {ThreeDimensions} from '../three-dimensions/three-dimensions';
import {GameService} from '../../service/game.service';
import {ToggleFullscreenService} from '../../service/toggle-fullscreen.service';
import {GameDialog} from '../game-dialog/game-dialog';
import {MusicService} from '../../service/music.service';
import {Star} from '../../model/game.model';
import {LanguageService} from '../../service/language.service';
import {WarpAnimationService} from '../../service/warp-animation.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [
    DecimalPipe,
    ThreeDimensions,
    GameDialog,
  ],
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  protected languageService = inject(LanguageService);
  private warpAnimationService = inject(WarpAnimationService);
  private _canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;

  // 3. Der Setter: Wird von Angular aufgerufen, sobald das Element erscheint oder verschwindet
  @ViewChild('gameCanvas', {static: false}) set canvas(content: ElementRef<HTMLCanvasElement> | undefined) {
    if (content) {
      this._canvas = content;
      this.ctx = this._canvas.nativeElement.getContext('2d')!;

      // Sobald das Canvas da ist, müssen wir die Größe berechnen
      this.resize();

      // Falls die Sterne noch nicht da sind, initialisieren
      if (this.stars.length === 0) {
        this.initStars();
      }
    }
  }

  // Hilfsmethode, falls du im restlichen Code "this.canvas" statt "this._canvas" nutzt
  get canvasRef(): ElementRef<HTMLCanvasElement> {
    return this._canvas;
  }

  // WICHTIG: In der resize() Methode musst du jetzt prüfen, ob das Canvas da ist
  @HostListener('window:orientationchange')
  @HostListener('window:resize')
  resize() {
    // Sicherheitssperre, falls das Canvas gerade im @if-Block versteckt ist
    if (!this._canvas) return;

    this._canvas.nativeElement.width = window.innerWidth;
    this._canvas.nativeElement.height = window.innerHeight;
    this.scale = Math.min(window.innerWidth, window.innerHeight) / 900;
    this.initStars();
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

  private cdr = inject(ChangeDetectorRef);
  protected readonly fullscreenService = inject(ToggleFullscreenService);

  gameService = inject(GameService)
  isPressing = false;
  playerAngle = 0;
  playerRotation = 0;
  shipDirection = 0;
  marinesCooldown = 15000;
  marinesCooldownProgress = 100;
  lastShotTime = 0;

  private lastDelta: number = 0;
  private plusParticles: {
    x: number,
    y: number,
    vx: number,
    vy: number,
    alpha: number,
    color: string,
    text: string,
    life: number
  }[] = [];
  stars: Star[] = [];
  isScoreZone = false;
  isInsideYellowZone = false;  // Die äußere Gefahrenzone (Gelb/Orange)
  isInsideRedZone = false;     // Die mittlere Gefahrenzone (Rot)
  isInsideCoronaZone = false;  // Direkt vor der Sonne (Extrem)
  private playerImg = new Image();
  private animFrame: any;
  private musicservice = inject(MusicService);
  private scale = 1;
  private cachedGlassCanvas: HTMLCanvasElement | null = null;
  private lastShieldHpForCracks: number = -1;
  private lastInvertedState: boolean = false;

  ngOnInit() {
    this.setShipSkin('assets/ship-skin/elite-interceptor-skin.svg');
    this.gameLoop();

    // Listener für Visibility Change hinzufügen
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && this.gameService.isPaused) {
        // Wenn die App wieder in den Vordergrund kommt und pausiert ist,
        // stellen wir sicher, dass der Fullscreen-Status korrekt reflektiert wird.
        // Wir setzen isFullScreen auf false, damit resumeGame() erneut requestFullscreen aufrufen kann.
        this.fullscreenService.isFullScreen.set(!!document.fullscreenElement);
        window.focus()
      }
    });
  }

  private setShipSkin(skin: string) {
    this.playerImg.src = skin;
    this.warpAnimationService.setShipImage(this.playerImg.src);
  }

  ngOnDestroy() {
    this.gameService.cleanup();
    cancelAnimationFrame(this.animFrame);
    this.musicservice.stopMusic();
  }

  get scoreFromated(): number {
    return Math.floor(this.gameService.score);
  }

  get jumpBounsLevel(): number {
    return Math.floor(this.gameService.researchLevel / 10);
  }

  get jumpBonus(): number {
    if (this.gameService.researchLevel < 10) return 0;

    // Bonus-Skalierungsfaktor 0.212:
    // Level 10: sqrt(10) * 0.212 ≈ 0.67 (67% Bonus)
    // Level 30: sqrt(30) * 0.212 ≈ 1.16 (116% Bonus)
    // Level 50: sqrt(50) * 0.212 ≈ 1.50 (150% Bonus) - Das "Lohnenswerte Ziel"
    // Level 100: sqrt(100) * 0.212 = 2.12 (212% Bonus) - Flacht spürbar ab
    const percentage = Math.sqrt(this.gameService.researchLevel) * 0.212;

    return Math.floor(this.gameService.score * percentage);
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
    if (!this.fullscreenService.isFullScreen().valueOf()) {
      this.fullscreenService.toggleTabFullScreenModeGame()
    }
    this.isPressing = true;
    e.preventDefault();
  }

  triggerOrbitalJump() {
    if (this.gameService.researchLevel >= 10 && !this.gameService.isJumping) {
      const finalBonus = this.jumpBonus;
      this.gameService.isJumping = true;

      this.gameService.score += finalBonus;
      this.gameService.addLog(this.languageService.t('GAME.LOG_ORBITAL_JUMP', [finalBonus.toLocaleString()]), 'event');
    }
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
    if (this.gameService.ep >= 100 && this.gameService.shieldHp < 100) {
      this.gameService.ep -= 100;
      this.gameService.shieldActive = true;
      this.gameService.shieldHp = 100;
      this.gameService.addLog(this.languageService.t('GAME.LOG_SHIELD_ACTIVE'), "system");
      this.gameService.vibrateAction(30)
    }
  }

  private handleSatelliteAction() {
    // Wenn bereits 10 Satelliten da sind: Richtungswechsel (kostenlos)
    if (this.gameService.satellitesCount >= 10) {
      this.gameService.flightDirection *= -1;
      const dirText = this.gameService.flightDirection === 1 ? this.languageService.t('GAME.LOG_CLOCKWISE') : this.languageService.t('GAME.LOG_COUNTER_CLOCKWISE');
      this.gameService.addLog(this.languageService.t('GAME.LOG_ORBIT_REVERSE', [dirText]), "system");
      this.gameService.vibrateAction(20)
      return;
    }

    // Ansonsten: Satellit kaufen
    if (this.gameService.ep >= 150) {
      this.gameService.ep -= 150;
      this.gameService.satellitesCount++;
      this.gameService.addLog(this.languageService.t('GAME.LOG_SATS_LEVEL_UP', [this.gameService.satellitesCount * 10, this.gameService.satellitesCount + "/10 online"]), "system");
      this.gameService.vibrateAction(20)

      if (this.gameService.satellitesCount === 10) {
        this.gameService.addLog(this.languageService.t('GAME.LOG_MAX_SATS'), "event");
      }
    }
  }

  private buyMarines() {
    const now = Date.now();
    if (this.gameService.ep >= 250 && now >= this.gameService.marinesReadyTime) {
      this.gameService.ep -= 250;
      this.gameService.marinesActive = true;
      this.gameService.addLog(this.languageService.t('GAME.LOG_MARINES_STARTED'), 'event');
      this.gameService.vibrateAction(30)

      setTimeout(() => (this.gameService.marinesActive = false), 10000);
      this.gameService.marinesReadyTime = now + this.marinesCooldown;
    }
  }

  private updateNovaBombe() {
    if (this.gameService.novaBombeVisuals) {
      const v = this.gameService.novaBombeVisuals;
      v.r += 15;
      v.alpha -= 0.01;

      // Zerstöre Asteroiden in der Welle
      for (let i = this.gameService.asteroids.length - 1; i >= 0; i--) {
        const a = this.gameService.asteroids[i];
        const px = Math.cos(this.playerAngle) * this.gameService.playerR;
        const py = Math.sin(this.playerAngle) * this.gameService.playerR;
        const distToNovaSource = Math.hypot(a.x - px, a.y - py);

        if (distToNovaSource < v.r && distToNovaSource > v.r - 100) {
          this.gameService.score += Math.floor(a.size * 10);
          this.gameService.asteroids.splice(i, 1);
        }
      }

      if (v.alpha <= 0) {
        this.gameService.novaBombeVisuals = null;
      }
    }
  }

  private drawNovaBombe(s: number, cx: number, cy: number) {
    if (!this.gameService.novaBombeVisuals || !this.ctx) return;
    const v = this.gameService.novaBombeVisuals;
    const px = cx + Math.cos(this.playerAngle) * (this.gameService.playerR * s);
    const py = cy + Math.sin(this.playerAngle) * (this.gameService.playerR * s);

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(px, py, v.r * s, 0, Math.PI * 2);
    this.ctx.strokeStyle = `rgba(255, 100, 0, ${v.alpha})`;
    this.ctx.lineWidth = 15 * s;
    this.ctx.stroke();

    // Glühen
    this.ctx.shadowBlur = 30 * s;
    this.ctx.shadowColor = 'orange';
    this.ctx.stroke();
    this.ctx.restore();
  }

  protected triggerNovaBombe() {
    this.gameService.novaBombeVisuals = {x: 0, y: 0, r: 0, alpha: 1};
    this.gameService.stopSpawningUntil = Date.now() + 5000;
    this.gameService.addLog(this.languageService.t('GAME.LOG_REWARD_NOVA'), 'event');
  }

  protected selectReward(choice: number) {
    this.gameService.showRewardDialog.set(false);
    switch (choice) {
      case 1:
        // Soforteinsatz: Ignoriert EP und Cooldown
        this.gameService.marinesActive = true;
        this.gameService.addLog(this.languageService.t('GAME.LOG_REWARD_MARINES'), 'event');
        setTimeout(() => (this.gameService.marinesActive = false), 10000);
        // Optional: Cooldown zurücksetzen, falls gewünscht
        this.gameService.marinesReadyTime = Date.now() + this.marinesCooldown;
        break;
      case 2:
        this.gameService.ep = Math.min(this.gameService.maxEp, this.gameService.ep + 300);
        this.gameService.addLog(this.languageService.t('GAME.LOG_REWARD_EP', [300]), 'event');
        break;
      case 3:
        this.triggerNovaBombe();
        break;
    }
    this.gameService.isPaused = false;
  }

  private buyResearch() {
    if (this.gameService.ep < 200) return;

    // 1. Schwellenwert auf Basis des 3er-Intervalls vor dem Upgrade
    const oldThreshold = Math.floor((this.gameService.researchLevel - 1) / 3);

    this.gameService.ep -= 200;
    this.gameService.researchLevel++;
    this.gameService.vibrateAction(20);

    // Logik für Kometen-Spawn (bleibt bei jedem 3. Level für die Abwechslung)[cite: 2]
    if (this.gameService.researchLevel % 3 === 0) {
      this.spawnComet();
      this.gameService.addLog(this.languageService.t('GAME.LOG_COMET_SIGHTED'), 'research');
    }

    // 2. Logik für Asteroiden-Intensität (Intervall-Anpassung)
    const newThreshold = Math.floor((this.gameService.researchLevel - 1) / 3);

    // Wir starten das Spawning nur neu, wenn:
    // - Ein neuer 3er-Schwellenwert erreicht wurde
    // - UND wir noch nicht über Level 50 sind (da das Intervall dort sein Maximum von 400ms erreicht)
    if (newThreshold > oldThreshold && this.gameService.researchLevel <= 50) {
      this.gameService.startSpawning();
      this.gameService.addLog(this.languageService.t('GAME.LOG_DANGER_INCREASED'), 'event');
    }
    // Berechnung des aktuellen Prozentwertes für den Log (z.B. 150 für 150%)
    const currentBonusPercent = Math.floor(Math.sqrt(this.gameService.researchLevel) * 0.212 * 100);

    this.gameService.addLog(this.languageService.t('GAME.LOG_TECH_LEVEL_UP', [currentBonusPercent]), 'research');

    if (this.gameService.researchLevel % 5 === 0) {
      this.gameService.isPaused = true;
      this.gameService.showRewardDialog.set(true);
    }

    if (this.gameService.researchLevel === 10) {
      this.gameService.addLog(this.languageService.t('GAME.LOG_ANTIGRAV_READY'), 'event');
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

    this.gameService.comets.push({
      x: startX, y: startY,
      vx: Math.cos(angleToTarget) * speed,
      vy: Math.sin(angleToTarget) * speed,
      hue: Math.random() * 360,
      lifespan: 0,
      tail: []
    });
    this.gameService.addLog(this.languageService.t('GAME.LOG_COMET_APPROACH'), 'event');
  }

  private gameLoop() {
    const now = performance.now();
    if (this.gameService.lastTimestamp === 0) this.gameService.lastTimestamp = now;

    // Zeit seit dem letzten Frame in Sekunden (z.B. 0.0166 bei 60 FPS)
    this.lastDelta = (now - this.gameService.lastTimestamp) / 1000;
    this.gameService.lastTimestamp = now;

    // Falls das Spiel durch einen Tab-Wechsel pausiert war,
    // begrenzen wir das Delta, damit man nicht plötzlich Milliarden Punkte kriegt
    if (this.lastDelta > 0.1) this.lastDelta = 0.1;

    this.update();
    this.draw();
    this.cdr.detectChanges();
    this.animFrame = requestAnimationFrame(() => this.gameLoop());
  }

  private update() {
    if (!this.gameService.gameActive() || this.gameService.winState() || this.gameService.isPaused || this.gameService.resumeCountdown() > 0) return;

    const now = Date.now();

    // 1. Zeitliche Abläufe & Cooldowns
    this.updateCooldowns(now);

    // 2. Spieler-Radius berechnen (dr = Delta Radius)
    const dr = this.calculatePlayerRadiusDelta();

    // 3. Transformationen (Position, Winkel, Richtung)
    this.applyPlayerPhysics(dr);

    // 3.1 Warp/Slipstream Triggern und Abschluss prüfen
    if (this.gameService.isJumping) {
      const s = Math.min(window.innerWidth, window.innerHeight) / 900;
      const maxVisibleR = (Math.max(window.innerWidth, window.innerHeight) / 2) / s;
      // Starte Warp, sobald das Schiff den sichtbaren Bereich verlassen hat
      if (!this.gameService.warpActive && this.gameService.playerR > maxVisibleR + 30) {
        this.gameService.warpActive = true;
        this.gameService.warpStart = Date.now();
      }
      // Beende nach Ablauf der Animation
      if (this.gameService.warpActive) {
        const elapsed = Date.now() - this.gameService.warpStart;
        const crossfadeDiff = 500 // für den besseren Übergang zwischen warp und enddialog
        if (elapsed >= this.gameService.warpDuration - crossfadeDiff) {
          this.gameService.warpActive = false;
          this.gameService.isJumping = false;
          this.endGame(true);
          return; // Update hier beenden, Dialog erscheint anschließend
        }
      }
    }

    // 4. Weltraum-Hintergrund & Neutrale Objekte
    const px = Math.cos(this.playerAngle) * this.gameService.playerR;
    const py = Math.sin(this.playerAngle) * this.gameService.playerR;

    this.updateStars();
    this.updateComets(px, py);

    // 5. Kampf & Abwehr
    this.updateCombat(now, px, py);
    this.updateNovaBombe();
    this.updatePlusParticles();

    // 6. Gefahrenprüfung
    this.checkDeathConditions();
  }

// --- HELPER METHODS ---

  private updateCooldowns(now: number) {
    const remaining = this.gameService.marinesReadyTime - now;
    this.marinesCooldownProgress = remaining > 0
      ? ((this.marinesCooldown - remaining) / this.marinesCooldown) * 100
      : 100;
  }

  private calculatePlayerRadiusDelta(): number {
    if (this.gameService.isJumping) {
      return 15.0; // Sprung-Geschwindigkeit
    }

    // Normale Bewegung & Recovery-Logik
    const s = Math.min(window.innerWidth, window.innerHeight) / 900;
    const maxVisibleR = (Math.max(window.innerWidth, window.innerHeight) / 2) / s;

    if (this.gameService.playerR > maxVisibleR + 50) this.gameService.isRecovering = true;

    let dr = this.isPressing ? 4.5 : -2.0;

    if (this.gameService.isRecovering) {
      dr = -6.0;
      if (this.gameService.playerR < maxVisibleR - 50) this.gameService.isRecovering = false;
    }

    // Zone Check & Belohnung
    this.updateZonesAndScoring();

    return dr;
  }

  private updateZonesAndScoring() {
    // 1. Habitable Zone (Grüner Nebel)
    this.gameService.isInsideHabitableZone = (this.gameService.playerR > 300 && this.gameService.playerR < 420);

    // 1. Gelbe/Orange Zone (r: 250, Breite: 100 -> Bereich 200 bis 300)
    this.isInsideYellowZone = (this.gameService.playerR > 200 && this.gameService.playerR <= 300);

    // 1. Rote Zone (r: 150, Breite: 80 -> Bereich 110 bis 190)
    this.isInsideRedZone = (this.gameService.playerR > 110 && this.gameService.playerR <= 190);

    // 1. Corona/Extreme Zone (Direkt vor der Sonne, r: 85, Breite: 40 -> Bereich 65 bis 105)
    // 65 ist dein Todes-Radius
    this.isInsideCoronaZone = (this.gameService.playerR >= 65 && this.gameService.playerR <= 110);

    if (this.gameService.isInsideHabitableZone) {
      this.isScoreZone = false;

      // EP Gewinn: ca. 15 EP pro Sekunde als Basis
      const epPerSecond = 15 * (1 + (this.gameService.satellitesCount * 0.1));
      const gain = epPerSecond * this.lastDelta;

      if (this.gameService.ep < this.gameService.maxEp) {
        this.gameService.ep = Math.min(this.gameService.maxEp, this.gameService.ep + gain);
        this.spawnPlusParticle('green');
        this.gameService.epOverflowLogged = false;
      } else {
        if (!this.gameService.epOverflowLogged) {
          this.gameService.addLog(this.languageService.t('GAME.LOG_EP_OVERFLOW'), 'system');
          this.gameService.epOverflowLogged = true;
        }
      }

    } else if (this.gameService.playerR <= 300) {
      this.isScoreZone = true;

      // 2. Der Potenzielle Score (Basis ist die Nähe)
      // Die '10' ist ein Skalierungswert, damit die Zahlen im HUD gut aussehen
      const basisSkalierung = 10
      const potentialPoints = Math.pow(1000 / Math.max(1, this.gameService.playerR), 2) * basisSkalierung;

      // 3. Effizienz-Faktor basierend auf der Zone
      let efficiency = 0.4; // Standardwert außerhalb der Zonen (Fallback)

      if (this.isInsideCoronaZone) {
        efficiency = 1.4; // 140% der Punkte ganz nah dran
      } else if (this.isInsideRedZone) {
        efficiency = 0.8; // 80% der Punkte in der mittleren Zone
      } else if (this.isInsideYellowZone) {
        efficiency = 0.6; // 60% der Punkte in der äußeren Zone
      }

      // 4. Forschung bleibt ein zusätzlicher Bonus obendrauf
      const resMultiplier = 1 + (this.gameService.researchLevel * 0.1);

      // Finale Berechnung
      const pointsPerSecond = potentialPoints * efficiency * resMultiplier;

      this.gameService.score += pointsPerSecond * this.lastDelta;
      this.spawnPlusParticle('orange');

    } else {
      this.isScoreZone = false;
    }
  }

  private spawnPlusParticle(color: 'orange' | 'green', isMarineKill: boolean = false) {
    // Wenn es ein Marine-Kill ist, erzwingen wir den Spawn (kein Random)
    if (!isMarineKill && Math.random() > 0.15) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const s = this.scale;

    let amount = 1;
    if (this.isInsideCoronaZone) {
      amount = 5; // Maximale Intensität im Kern (r: 85)
    } else if (this.isInsideRedZone) {
      amount = 2; // Mittlere Intensität (r: 150)
    } else if (this.isInsideYellowZone) {
      amount = 1; // Leichtes Feedback (r: 250)
    }

    // Position am Schiff
    const pxBase = cx + Math.cos(this.playerAngle) * (this.gameService.playerR * s);
    const pyBase = cy + Math.sin(this.playerAngle) * (this.gameService.playerR * s);

    for (let i = 0; i < amount; i++) {
      this.plusParticles.push({
        x: pxBase + (Math.random() - 0.5) * 15,
        y: pyBase + (Math.random() - 0.5) * 15,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -1 - Math.random() * 2,
        alpha: 1,
        color: color === 'orange' ? '#ffcc00' : '#00ff00',
        // Nur das allererste Partikel zeigt den Text "EP+", der Rest sind schicke Pluszeichen
        text: (isMarineKill && i === 0) ? 'EP+' : '+',
        life: 1.0
      });
    }
  }

  private updatePlusParticles() {
    for (let i = this.plusParticles.length - 1; i >= 0; i--) {
      const p = this.plusParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      p.alpha = p.life;
      if (p.life <= 0) {
        this.plusParticles.splice(i, 1);
      }
    }
  }

  private drawPlusParticles() {
    if (!this.ctx) return;
    this.ctx.font = `${Math.floor(20 * this.scale)}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.plusParticles.forEach((p, index) => {
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.font = p.text === 'EP+' ? 'bold 18px Arial' : 'bold 14px Arial'; // EP+ etwas größer

      this.ctx.fillText(p.text, p.x, p.y);

      // Physik-Update für die Partikel
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;

      if (p.alpha <= 0) {
        this.plusParticles.splice(index, 1);
      }
      this.ctx.restore();
    });
    this.ctx.globalAlpha = 1.0;
  }

  private applyPlayerPhysics(dr: number) {
    const da = 0.015 * this.gameService.flightDirection;
    this.gameService.playerR += dr;
    this.playerAngle += da;
    this.playerRotation += 0.08 * this.gameService.flightDirection;

    // Richtungs-Vektor berechnen für die Schiff-Rotation (ShipDirection)
    const shipVx = dr * Math.cos(this.playerAngle) - this.gameService.playerR * Math.sin(this.playerAngle) * da;
    const shipVy = dr * Math.sin(this.playerAngle) + this.gameService.playerR * Math.cos(this.playerAngle) * da;
    this.shipDirection = Math.atan2(shipVy, shipVx);
  }

  private updateStars() {
    this.stars.forEach(st => {
      st.x += 0.5;
      if (st.x > window.innerWidth) st.x = -10;
    });
  }

  private updateComets(px: number, py: number) {

    for (let i = this.gameService.comets.length - 1; i >= 0; i--) {
      const c = this.gameService.comets[i];
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
        this.gameService.comets.splice(i, 1);
        continue;
      }

      // Kollisionsprüfung (Spieler)
      if (Math.hypot(px - c.x, py - c.y) < 40) {
        const cometValue = Math.floor(100 * this.gameService.researchLevel * 50)
        this.gameService.score += cometValue;
        this.gameService.addLog(this.languageService.t('GAME.LOG_COMET_EXTRACTED', [cometValue]), 'research');
        this.gameService.comets.splice(i, 1);
        continue;
      }

      // Cleanup: weit im All verschwunden
      if (distToSun > 1500) {
        this.gameService.comets.splice(i, 1);
      }
    }
  }

  private updateCombat(now: number, px: number, py: number) {
    // Marines Feuerbefehl
    if (this.gameService.marinesActive && now - this.lastShotTime > 350) {
      this.fireMarines(px, py);
      this.lastShotTime = now;
    }

    this.updateProjectiles();
    this.updateAsteroids(px, py);
  }

  private updateAsteroids(px: number, py: number) {
    const recoveryRate = 0.012;

    for (let i = this.gameService.asteroids.length - 1; i >= 0; i--) {
      const ast = this.gameService.asteroids[i];

      // Recovery & Movement
      ast.vx += (ast.ovx - ast.vx) * recoveryRate;
      ast.vy += (ast.ovy - ast.vy) * recoveryRate;
      ast.x += ast.vx;
      ast.y += ast.vy;

      const distToSun = Math.hypot(ast.x, ast.y);

      // In die Sonne geflogen
      if (distToSun < 60) {
        this.gameService.asteroids.splice(i, 1);
        continue;
      }

      // Kollision Spieler
      const distToPlayer = Math.hypot(px - ast.x, py - ast.y);
      if (distToPlayer < ast.size + 15) {
        this.gameService.asteroids.splice(i, 1);
        this.handleHit();
        continue;
      }

      // Aus dem Bildschirm
      if (Math.hypot(ast.x, ast.y) > 1200) {
        this.gameService.asteroids.splice(i, 1);
      }
    }
  }

  private checkDeathConditions() {
    if (this.gameService.playerR < 65) {
      this.gameService.vibrateAction(1000)
      this.endGame(false);
    }
  }

  private fireMarines(px: number, py: number) {
    if (this.gameService.asteroids.length === 0) return;
    for (let i = 0; i < 3; i++) {
      const marineAngle = this.playerAngle + (i * (Math.PI * 2 / 3));
      const mx = px + Math.cos(marineAngle) * 35;
      const my = py + Math.sin(marineAngle) * 35;

      let target = this.gameService.asteroids[0];
      let minDist = Infinity;
      this.gameService.asteroids.forEach(a => {
        const d = Math.hypot(mx - a.x, my - a.y);
        if (d < minDist) {
          minDist = d;
          target = a;
        }
      });

      const dx = target.x - mx;
      const dy = target.y - my;
      const dist = Math.hypot(dx, dy);
      this.gameService.projectiles.push({x: mx, y: my, vx: (dx / dist) * 14, vy: (dy / dist) * 14});
    }
  }

  private updateProjectiles() {
    const impactFactor = 0.55;

    // Rückwärts durch Projektile ist korrekt!
    for (let i = this.gameService.projectiles.length - 1; i >= 0; i--) {
      const p = this.gameService.projectiles[i];
      p.x += p.vx;
      p.y += p.vy;

      let hit = false; // Flag hinzufügen

      for (let j = this.gameService.asteroids.length - 1; j >= 0; j--) {
        const a = this.gameService.asteroids[j];

        if (Math.hypot(p.x - a.x, p.y - a.y) < a.size + 6) {
          a.vx *= impactFactor;
          a.vy *= impactFactor;
          a.hp--;

          if (a.hp <= 0) {
            const rawEpGain = Math.floor(a.size * 2);
            const spaceLeft = this.gameService.maxEp - this.gameService.ep;
            const actualGain = Math.max(0, Math.min(rawEpGain, spaceLeft));

            this.gameService.ep += actualGain;

            if (actualGain > 0) {
              this.spawnPlusParticle('green', true);
            }
            this.gameService.asteroids.splice(j, 1);
          }

          hit = true; // Treffer registrieren
          break; // Innere Schleife verlassen
        }
      }

      // Erst HIER das Projektil löschen, nachdem die Asteroiden-Prüfung beendet ist
      if (hit) {
        this.gameService.projectiles.splice(i, 1);
      }
    }
  }

  handleHit() {
    if (this.gameService.isRecovering || this.gameService.isJumping) return; // Unsterblich während Rückkehr oder Orbitalsprung
    this.gameService.vibrateAction(80)
    if (this.gameService.shieldActive && this.gameService.shieldHp > 0) {
      this.gameService.shieldHp -= 34;
      if (this.gameService.shieldHp <= 0) {
        this.gameService.shieldHp = 0;
        this.gameService.shieldActive = false;
      }
    } else if (this.gameService.satellitesCount > 0) {
      this.gameService.satellitesCount--;
    } else {
      this.endGame(false);
    }
  }

  endGame(win: boolean) {
    this.gameService.gameActive.set(false);
    this.gameService.winState.set(win);
    const finalScore = Math.floor(this.gameService.score);
    this.gameService.lastScore.set(finalScore);
    localStorage.setItem('orbital_last_score', finalScore.toString());

    if (finalScore > this.gameService.highScore()) {
      this.gameService.highScore.set(finalScore);
      localStorage.setItem('orbital_hs', finalScore.toString());
    }

    // Historie aktualisieren
    const playtime = Math.floor((Date.now() - this.gameService.startTime - this.gameService.totalPausedTime) / 1000);
    const newEntry = {
      score: finalScore,
      time: playtime,
      date: Date.now()
    };

    const history = [newEntry, ...this.gameService.scoreHistory()];
    if (history.length > 5) history.pop();
    this.gameService.scoreHistory.set(history);
    localStorage.setItem('orbital_history', JSON.stringify(history));
  }

  private draw() {

    if (!this.ctx) return; // Abbruch, wenn das Canvas (noch) nicht existiert
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const s = Math.min(window.innerWidth, window.innerHeight) / 900;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    // Hintergrund & Basis
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.drawStars();
    this.drawEnvironmentZones(s, cx, cy);
    this.drawComets(s, cx, cy);
    this.cutFor3dSun(cx, cy, s);

    // Spieler-System berechnen
    const px = cx + Math.cos(this.playerAngle) * (this.gameService.playerR * s);
    const py = cy + Math.sin(this.playerAngle) * (this.gameService.playerR * s);

    // Spieler & Einheiten
    this.drawPlayerShip(s, px, py);
    this.drawSatellites(s, px, py);
    this.drawMarines(s, px, py);
    this.drawShield(s, px, py);

    // Kampf-Objekte
    this.drawProjectiles(s, cx, cy);
    this.drawNovaBombe(s, cx, cy);
    this.drawAsteroids(s, cx, cy);
    this.drawPlusParticles();


    this.drawGlassCracks(this.ctx, window.innerWidth, window.innerHeight);
    this.drawDamageVignette(this.ctx, window.innerWidth, window.innerHeight);

    // Warp/Slipstream Overlay auf oberster Ebene
    if (this.gameService.warpActive) {
      this.drawWarpOverlay();
    }
  }

  /**
   * LOCH FÜR DIE SONNE STANZEN
   * @param cx
   * @param cy
   * @param s
   * @private
   */
  private cutFor3dSun(cx: number, cy: number, s: number) {
    // --- NEU:  ---
    // Alles was wir jetzt zeichnen, "löscht" Pixel statt sie zu färben
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.beginPath();
    // Radius etwas kleiner als der Sonnen-Radius (65), damit der Rand weich bleibt
    this.ctx.arc(cx, cy, 60 * s, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
    // ---------------------------------------
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
    const isInverted = this.gameService.isColorsInverted;

    // Multiplikator für die Deckkraft: Im Light-Mode (Inverted) nehmen wir nur 40% der normalen Stärke
    const alphaMult = isInverted ? 0.4 : 1.0;

    const zones = [
      {
        name: 'Yellow',
        r: 250, w: (this.isInsideYellowZone ? 110 : 100),
        // Dynamische Alpha-Berechnung
        c: this.isInsideYellowZone
          ? `rgba(255, 230, 100, ${0.4 * alphaMult})`
          : `rgba(255, 255, 150, ${0.15 * alphaMult})`
      },
      {
        name: 'Red',
        r: 150, w: (this.isInsideRedZone ? 90 : 80),
        c: this.isInsideRedZone
          ? `rgba(255, 180, 0, ${0.5 * alphaMult})`
          : `rgba(255, 200, 50, ${0.25 * alphaMult})`
      },
      {
        name: 'Corona',
        r: 85, w: (this.isInsideCoronaZone ? 50 : 40),
        // Bei Corona nutzen wir im Inverted Mode eine rgba statt des festen Hex-Codes
        c: this.isInsideCoronaZone
          ? (isInverted ? `rgba(251, 147, 49, 0.6)` : '#fb9331')
          : `rgba(255, 200, 0, ${0.2 * alphaMult})`
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
    const resW = (this.gameService.isInsideHabitableZone ? 150 : 120) * s;

    let ringAlpha = this.gameService.isInsideHabitableZone ? 0.4 : 0.15;

    const innerR = resR - resW / 2;
    const outerR = resR + resW / 2;
    const resGradient = this.ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);

    resGradient.addColorStop(0, 'rgba(0, 255, 100, 0)');
    resGradient.addColorStop(0.5, `rgba(0, 255, 150, ${ringAlpha})`);
    resGradient.addColorStop(1, 'rgba(0, 255, 100, 0)');

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, resR, 0, Math.PI * 2);
    this.ctx.strokeStyle = resGradient;
    this.ctx.lineWidth = resW;
    this.ctx.stroke();
    this.ctx.restore();
  }

  private drawPlayerShip(s: number, px: number, py: number, color?: string) {
    const shipSize = 35 * s;
    this.ctx.save();
    this.ctx.translate(px, py);
    this.ctx.rotate(this.shipDirection + Math.PI / 2);

    if (this.playerImg.complete) {
      this.ctx.drawImage(this.playerImg, -shipSize, -shipSize, shipSize * 2, shipSize * 2);
    } else {
      // Fallback: Dreieck-Schiff
      this.ctx.fillStyle = color || '#2277ff';
      this.ctx.beginPath();
      this.ctx.moveTo(0, -shipSize);
      this.ctx.lineTo(-shipSize * 0.8, shipSize);
      this.ctx.lineTo(0, shipSize * 0.6);
      this.ctx.lineTo(shipSize * 0.8, shipSize);
      this.ctx.fill();
      // Cockpit
      this.ctx.fillStyle = '#88ccff';
      this.ctx.beginPath();
      this.ctx.arc(0, -shipSize * 0.2, shipSize * 0.3, 0, Math.PI * 2);
      this.ctx.fill();
    }


    // Triebwerke
    if (this.isPressing) {
      this.ctx.fillStyle = '#ffaa00';
      this.ctx.beginPath();
      this.ctx.moveTo(-shipSize * 0.4, shipSize * 0.7);
      this.ctx.lineTo(0, shipSize * (1.5));
      this.ctx.lineTo(shipSize * 0.4, shipSize * 0.7);
      this.ctx.fill();
    }

    if (this.gameService.isJumping) {
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
    for (let i = 0; i < this.gameService.satellitesCount; i++) {
      const a = (Math.PI * 2 / this.gameService.satellitesCount) * i + (this.playerAngle * 0.5);
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
    if (!this.gameService.marinesActive) return;

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
    this.gameService.comets.forEach(c => {
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
    this.gameService.asteroids.forEach(a => {
      const x = cx + a.x * s;
      const y = cy + a.y * s;
      const radius = a.size * s;

      // 1. Basis-Gradient für den Schatten (Dunkel nach Hauptfarbe)
      const gradient = this.ctx.createRadialGradient(
        x, y, radius * 0.2,
        x, y, radius
      );
      gradient.addColorStop(0.1, 'rgb(202 103 1.2)');      // Glanzlicht
      gradient.addColorStop(0.5, a.color);   // Die eigentliche Farbe
      gradient.addColorStop(1, 'rgb(87 45 1)');      // Schattenseite

      // 2. Das Haupt-Polygon zeichnen (Schattenseite)
      this.ctx.fillStyle = gradient;
      this.drawAsteroidShape(x, y, a.points, s);
      this.ctx.fill();

      // 3. DAS ZACKIGE GLANZLICHT (Die "Highlight-Struktur")
      // Wir speichern den Kontext, um mit Transparenz und Versatz zu arbeiten
      this.ctx.save();

      // Wir versetzen das Highlight leicht in Richtung "Lichteinfall" (oben links)
      this.ctx.translate(-radius * 0.15, -radius * 0.15);
      // Wir machen das Highlight etwas kleiner
      this.ctx.scale(0.85, 0.85);
      // Wir korrigieren die Position nach dem Skalieren (Pivot-Punkt Ausgleich)
      this.ctx.translate((x * 0.15) / 0.85, (y * 0.15) / 0.85);

      // Ein heller, zackiger Verlauf für das Licht
      const glossGradient = this.ctx.createRadialGradient(
        x, y, 0,
        x, y, radius * 0.8
      );
      glossGradient.addColorStop(0.1, 'rgb(202 103 1.25)');      // Glanzlicht
      glossGradient.addColorStop(0.5, a.color);   // Die eigentliche Farbe
      glossGradient.addColorStop(1, 'rgb(87 45 1)');      // Schattenseite
      glossGradient.addColorStop(1, 'transparent');

      this.ctx.fillStyle = glossGradient;
      // Wir nutzen dieselbe zackige Form!
      this.drawAsteroidShape(x, y, a.points, s);
      this.ctx.fill();

      this.ctx.restore();

      // Optional: Riss-Struktur (Lines)
      if (a.hp < 2) {
        this.ctx.strokeStyle = 'rgba(255, 60, 0, 0.6)';
        this.ctx.lineWidth = 1 * s;
        this.drawAsteroidShape(x, y, a.points, s);
        this.ctx.stroke();
      }
    });
  }

  private drawAsteroidShape(x: number, y: number, points: any[], s: number) {
    this.ctx.beginPath();
    if (points && points.length > 0) {
      this.ctx.moveTo(x + points[0].x * s, y + points[0].y * s);
      for (let i = 1; i < points.length; i++) {
        this.ctx.lineTo(x + points[i].x * s, y + points[i].y * s);
      }
    }
    this.ctx.closePath();
  }


  private drawProjectiles(s: number, cx: number, cy: number) {
    this.ctx.fillStyle = '#ffff00';
    this.gameService.projectiles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(cx + p.x * s, cy + p.y * s, 3 * s, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawShield(s: number, px: number, py: number) {
    if (!this.gameService.shieldActive) return;
    const shipSize = 22 * s;
    this.ctx.strokeStyle = `rgba(0, 255, 255, ${this.gameService.shieldHp / 100})`;
    this.ctx.lineWidth = 3 * s;
    this.ctx.beginPath();
    this.ctx.arc(px, py, shipSize * 2, 0, Math.PI * 2);
    this.ctx.stroke();
  }


  // Methode zum Pausieren
  togglePause(e?: Event) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!this.gameService.gameActive() || this.gameService.winState() || this.gameService.resumeCountdown() > 0) return;
    this.gameService.isPaused = true;
    this.gameService.pauseStartTime = Date.now();
    this.musicservice.pauseMusic();
  }

  /**
   * Methode zum Fortsetzen mit Countdown
   */
  resumeGame() {
    // 1. Zuerst das Fenster fokussieren (hilft manchen Android-Browsern)
    window.focus();
    this.fullscreenService.toggleTabFullScreenModeGame()
    this.gameService.isPaused = false;
    if (this.gameService.pauseStartTime > 0) {
      this.gameService.totalPausedTime += (Date.now() - this.gameService.pauseStartTime);
      this.gameService.pauseStartTime = 0;
    }
    this.musicservice.resumeMusic();
    this.gameService.resumeCountdown.set(3);

    const interval = setInterval(() => {
      this.gameService.resumeCountdown.set(this.gameService.resumeCountdown() - 1);
      if (this.gameService.resumeCountdown() <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  getShieldDashOffset(): number {
    // Umfang des Buttons (2x Breite + 2x Höhe)
    // Basierend auf den SCSS Werten (150px Breite, 60px Höhe)
    const pathLength = 420;
    const progress = this.gameService.shieldHp / 100;
    // Offset berechnet, wie viel vom Rand "leer" bleibt
    return pathLength * (1 - progress);
  }


  private drawGlassCracks(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const shieldPercent = this.gameService.shieldHp / 100;

    // NEU: Startet jetzt bei 35%
    if (shieldPercent >= 0.35) return;

    // NEU: Intensität berechnen (0.35 - 0 = 0.35 Bereich)
    // 1 / 0.35 ≈ 2.857. Damit erreichen wir bei 0% HP genau die Intensität 1.
    const intensity = (0.35 - shieldPercent) * 2.857;

    // ERWEITERTE PRÜFUNG:
    // Wir prüfen jetzt auch, ob die Breite oder Höhe des Caches noch zur Fenstergröße passt
    if (
      !this.cachedGlassCanvas ||
      this.cachedGlassCanvas.width !== width || // NEU: Check auf Breitenänderung
      this.cachedGlassCanvas.height !== height || // NEU: Check auf Höhenänderung
      this.gameService.shieldHp !== this.lastShieldHpForCracks ||
      this.gameService.isColorsInverted !== this.lastInvertedState
    ) {
      this.generateGlassCache(width, height, intensity);
      this.lastShieldHpForCracks = this.gameService.shieldHp;
      this.lastInvertedState = this.gameService.isColorsInverted;
    }

    if (this.cachedGlassCanvas) {
      ctx.drawImage(this.cachedGlassCanvas, 0, 0);
    }
  }

  private generateGlassCache(width: number, height: number, intensity: number) {
    if (!this.cachedGlassCanvas) {
      this.cachedGlassCanvas = document.createElement('canvas');
    }
    this.cachedGlassCanvas.width = width;
    this.cachedGlassCanvas.height = height;
    const offCtx = this.cachedGlassCanvas.getContext('2d')!;
    offCtx.clearRect(0, 0, width, height);

    const isInverted = this.gameService.isColorsInverted;

    // Farben (Invertierungs-Trick: Cyan -> Rot im Filter)
    const glassColor = isInverted ? 'rgba(0, 255, 255, 0.95)' : 'rgba(255, 0, 0, 0.9)';
    const darkLine = isInverted ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.6)';

    // Erhöhung auf Basis 60 (vorher 40). Bei 0% HP sind es dann bis zu 60 Risse am Rand.
    const baseRisse = 60;
    const totalRisse = Math.floor(baseRisse * 0.5 + (baseRisse * 0.5 * intensity));

    // Wir halten die Länge etwas kürzer, damit die schiere Menge nicht das UI verdeckt
    const referenceSize = Math.min(width, height);
    const maxReach = (referenceSize * 0.15 + (referenceSize * 0.2 * intensity)) * this.scale;

    const spawnPoints: { x: number, y: number, angle: number }[] = [];
    let seed = 12345;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < totalRisse; i++) {
      const side = Math.floor(random() * 4);
      let x = 0, y = 0, angle = 0;
      if (side === 0) {
        x = random() * width;
        y = 0;
        angle = Math.PI / 2;
      } else if (side === 1) {
        x = width;
        y = random() * height;
        angle = Math.PI;
      } else if (side === 2) {
        x = random() * width;
        y = height;
        angle = -Math.PI / 2;
      } else {
        x = 0;
        y = random() * height;
        angle = 0;
      }
      spawnPoints.push({x, y, angle});
    }

    // --- Zeichnen ---
    // Durchgang 1: Die dunkle Basisstruktur (Stärke erhöht auf 3.5)
    offCtx.save();
    offCtx.strokeStyle = darkLine;
    seed = 12345;
    spawnPoints.forEach(p => {
      this.drawStaticBranch(offCtx, p.x, p.y, p.angle + (random() - 0.5) * 0.8, maxReach, random, 3.5);
    });
    offCtx.restore();

    // Durchgang 2: Die feine rote Bruchlinie (Stärke erhöht auf 2.0)
    offCtx.save();
    offCtx.strokeStyle = glassColor;
    // Glow-Effekt hinzufügen
    offCtx.shadowBlur = 4 * this.scale;
    offCtx.shadowColor = glassColor;
    seed = 12345;
    spawnPoints.forEach(p => {
      this.drawStaticBranch(offCtx, p.x, p.y, p.angle + (random() - 0.5) * 0.8, maxReach, random, 2.0);
    });
    offCtx.restore();
  }

  private drawStaticBranch(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, length: number, rng: () => number, currentWidth: number) {
    if (length < 4 || currentWidth < 0.15) return; // Etwas feineres Auslaufen

    ctx.lineWidth = currentWidth * this.scale;

    const segmentLength = 4 + rng() * 8; // Kürzere Segmente für mehr "Zackigkeit"
    const nextX = x + Math.cos(angle) * segmentLength;
    const nextY = y + Math.sin(angle) * segmentLength;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();

    const nextWidth = currentWidth * 0.82; // Verjüngt sich etwas schneller[cite: 7]

    // Hauptast
    this.drawStaticBranch(ctx, nextX, nextY, angle + (rng() - 0.5) * 0.1, length - segmentLength, rng, nextWidth);

    // Nebenäste: Wahrscheinlichkeit leicht reduziert, da wir nun viel mehr Startpunkte haben
    if (rng() > 0.5) {
      const splitAngle = (rng() > 0.5 ? 1 : -1) * (Math.PI / 2.5 + rng() * Math.PI / 4);
      this.drawStaticBranch(ctx, nextX, nextY, angle + splitAngle, (length - segmentLength) * 0.35, rng, nextWidth * 0.6);
    }
  }

  private drawWarpOverlay() {
    if (!this.ctx) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const now = Date.now();

    this.warpAnimationService.setShipImage(this.playerImg.src);
    this.warpAnimationService.drawWarp(
      this.ctx,
      width,
      height,
      now,
      this.gameService.warpStart,
      this.gameService.warpDuration,
    );
  }

  private drawDamageVignette(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const shieldPercent = this.gameService.shieldHp / 100;

    // Wir bleiben bei der 35% Grenze für den Start
    if (shieldPercent >= 0.35) return;

    // EXTRAPOLATION:
    // Wir berechnen einen Basis-Faktor zwischen 0 (bei 35% HP) und 1 (bei 0% HP)
    const factor = (0.35 - shieldPercent) / 0.35;

    // EXPONENTIELLES WACHSTUM:
    // factor^2 sorgt dafür, dass der Effekt bei 30% erst bei ~0.02 (2%) startet
    // und bei 0% HP die vollen 100% erreicht.
    const intensity = Math.pow(factor, 2);

    // einheitliches Verhältnis in allen Formaten.
    const screenDiag = Math.hypot(width, height);

    // Der innere Radius (wo es transparent ist)
    // Wir nutzen 40% der Diagonale als Basis und verengen ihn bei 0 HP
    const stickOut = 1
    const innerRadius = (screenDiag * stickOut) * (1 - (intensity * stickOut));
    const outerRadius = screenDiag * 0.7;

    const grad = ctx.createRadialGradient(
      width / 2, height / 2, innerRadius,
      width / 2, height / 2, outerRadius
    );

    const color = this.gameService.isColorsInverted ? '0, 255, 255' : '150, 0, 0';
    const alpha = intensity * 0.7;

    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.6, `rgba(${color}, ${alpha * 0.3})`);
    grad.addColorStop(1, `rgba(${color}, ${alpha})`);

    ctx.save();
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
}
