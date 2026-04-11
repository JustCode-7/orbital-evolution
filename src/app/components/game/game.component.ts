import { Component, ElementRef, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import {DecimalPipe} from '@angular/common';

interface Asteroid {
  x: number; y: number;
  vx: number; vy: number;
  ovx: number; ovy: number; // Ursprüngliche Geschwindigkeit zur Erholung
  size: number; color: string;
}
interface LogEntry { text: string; timestamp: number; type: 'research' | 'event'; }
interface Star { x: number; y: number; size: number; opacity: number; }
interface Projectile { x: number; y: number; vx: number; vy: number; }

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [
    DecimalPipe
  ],
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  score = 0; ep = 0; researchLevel = 1;
  gameActive = false; winState = false; isPressing = false;
  highScore = parseInt(localStorage.getItem('orbital_hs') || '0');
  lastScore = parseInt(localStorage.getItem('orbital_last_score') || '0');

  playerR = 350; playerAngle = 0;
  shieldActive = false; shieldHp = 0;
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

  private spawnInterval: any;
  private animFrame: any;

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.resize();
    this.initStars();
    this.gameLoop();
  }

  ngOnDestroy() {
    this.cleanup();
    cancelAnimationFrame(this.animFrame);
  }

  private cleanup() {
    if(this.spawnInterval) clearInterval(this.spawnInterval);
  }

  @HostListener('window:resize')
  resize() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.initStars();
  }

  initStars() {
    this.stars = [];
    for(let i=0; i<150; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random()
      });
    }
  }

  onDown(e: Event) { this.isPressing = true; e.preventDefault(); }
  onUp() { this.isPressing = false; }

  startGame() {
    this.cleanup();
    this.gameActive = true; this.winState = false;
    this.score = 0; this.ep = 100; this.researchLevel = 1;
    this.playerR = 350; this.asteroids = []; this.scienceLog = [];
    this.projectiles = []; this.marinesActive = false;
    this.satellitesCount = 0; this.marinesReadyTime = 0;
    this.shieldActive = false; this.shieldHp = 0;

    this.addLog("Orbitale Verteidigung aktiviert.", 'event');
    this.spawnInterval = setInterval(() => this.spawnAsteroid(), 1500);
  }

  buy(item: string) {
    if (item === 'shield' && this.ep >= 100) { this.ep -= 100; this.shieldActive = true; this.shieldHp = 100; }
    else if (item === 'sats' && this.ep >= 150) { this.ep -= 150; this.satellitesCount++; }
    else if (item === 'marines' && this.ep >= 250 && Date.now() >= this.marinesReadyTime) {
      this.ep -= 250;
      this.marinesActive = true;
      this.addLog("Marines Einsatzgruppe gestartet!", 'event');
      setTimeout(() => this.marinesActive = false, 10000);
      this.marinesReadyTime = Date.now() + this.marinesCooldown;
    }
    else if (item === 'research' && this.ep >= 200) {
      this.ep -= 200; this.researchLevel++;
      this.addLog(`Technologie-Level ${this.researchLevel} erreicht.`, 'research');
    }
  }

  private spawnAsteroid() {
    if (!this.gameActive || this.winState) return;
    const angle = Math.random() * Math.PI * 2;
    const vx = -Math.cos(angle) * (2 + Math.random() * 2.5);
    const vy = -Math.sin(angle) * (2 + Math.random() * 2.5);

    this.asteroids.push({
      x: Math.cos(angle) * 900,
      y: Math.sin(angle) * 900,
      vx, vy, ovx: vx, ovy: vy, // Original-Speeds speichern
      size: 12 + Math.random() * 15, color: '#888'
    });
  }

  private gameLoop() {
    this.update();
    this.draw();
    this.animFrame = requestAnimationFrame(() => this.gameLoop());
  }

  private update() {
    if (!this.gameActive || this.winState) return;

    const now = Date.now();
    const remaining = this.marinesReadyTime - now;
    this.marinesCooldownProgress = remaining > 0 ? ((this.marinesCooldown - remaining) / this.marinesCooldown) * 100 : 100;

    this.isPressing ? this.playerR += 4.5 : this.playerR -= 2.0;
    this.playerAngle += 0.015;

    // EP Gewinnung in der Habitablen Zone
    if (this.playerR > 300 && this.playerR < 420) {
      this.ep += 0.25;
      if(this.score > 0) this.score -= 1;
    } else {
      this.score += Math.floor(1000 / Math.max(1, this.playerR));
    }

    const px = Math.cos(this.playerAngle) * this.playerR;
    const py = Math.sin(this.playerAngle) * this.playerR;

    if (this.marinesActive && now - this.lastShotTime > 350) {
      this.fireMarines(px, py);
      this.lastShotTime = now;
    }

    this.updateProjectiles();

    // Asteroiden Update mit Recovery-Logik
    const recoveryRate = 0.012; // Wie schnell sie zur Normalgeschwindigkeit zurückkehren
    for (let i = this.asteroids.length - 1; i >= 0; i--) {
      const ast = this.asteroids[i];

      // Geschwindigkeit langsam wieder an das Original anpassen
      ast.vx += (ast.ovx - ast.vx) * recoveryRate;
      ast.vy += (ast.ovy - ast.vy) * recoveryRate;

      ast.x += ast.vx;
      ast.y += ast.vy;

      const dist = Math.hypot(px - ast.x, py - ast.y);
      if (dist < ast.size + 15) {
        this.asteroids.splice(i, 1);
        this.handleHit();
      }
      if (Math.hypot(ast.x, ast.y) > 1200) this.asteroids.splice(i, 1);
    }

    if (this.playerR < 65) this.endGame(false);
    if (this.researchLevel >= 10 && this.playerR > 750) this.endGame(true);
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
        if (d < minDist) { minDist = d; target = a; }
      });

      const dx = target.x - mx;
      const dy = target.y - my;
      const dist = Math.hypot(dx, dy);
      this.projectiles.push({ x: mx, y: my, vx: (dx / dist) * 14, vy: (dy / dist) * 14 });
    }
  }

  private updateProjectiles() {
    const impactFactor = 0.55; // Reduziert Speed auf ~55% pro Treffer
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.x += p.vx; p.y += p.vy;

      for (let j = 0; j < this.asteroids.length; j++) {
        const a = this.asteroids[j];
        if (Math.hypot(p.x - a.x, p.y - a.y) < a.size + 6) {
          a.vx *= impactFactor;
          a.vy *= impactFactor;
          this.projectiles.splice(i, 1);
          break;
        }
      }
      if (p && Math.hypot(p.x, p.y) > 1500) this.projectiles.splice(i, 1);
    }
  }

  handleHit() {
    if (this.shieldActive && this.shieldHp > 0) {
      this.shieldHp -= 34;
      if(this.shieldHp <= 0) { this.shieldHp = 0; this.shieldActive = false; }
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

    // Sterne
    this.stars.forEach(st => {
      this.ctx.fillStyle = `rgba(255,255,255,${st.opacity})`;
      this.ctx.beginPath(); this.ctx.arc(st.x, st.y, st.size, 0, Math.PI*2); this.ctx.fill();
    });

    // Zonen
    const zones = [{ r: 150, w: 80, c: 'rgba(255, 0, 0, 0.08)' }, { r: 250, w: 100, c: 'rgba(255, 165, 0, 0.05)' }, { r: 360, w: 120, c: 'rgba(0, 255, 100, 0.12)' }];
    zones.forEach(z => {
      this.ctx.beginPath(); this.ctx.arc(cx, cy, z.r*s, 0, Math.PI*2);
      this.ctx.strokeStyle = z.c; this.ctx.lineWidth = z.w*s; this.ctx.stroke();
    });

    // Sonne
    const sunR = 55 * s;
    this.ctx.fillStyle = '#ff6600'; this.ctx.beginPath(); this.ctx.arc(cx, cy, sunR, 0, Math.PI*2); this.ctx.fill();

    // Erde
    const px = cx + Math.cos(this.playerAngle) * (this.playerR * s);
    const py = cy + Math.sin(this.playerAngle) * (this.playerR * s);
    const earthR = 13 * s;
    this.ctx.fillStyle = '#2277ff'; this.ctx.beginPath(); this.ctx.arc(px, py, earthR, 0, Math.PI*2); this.ctx.fill();

    // Satelliten
    this.ctx.fillStyle = '#777';
    for (let i = 0; i < this.satellitesCount; i++) {
      const a = (Math.PI*2/this.satellitesCount)*i + (this.playerAngle*0.5);
      const sx = px + Math.cos(a)*30*s; const sy = py + Math.sin(a)*30*s;
      this.ctx.fillRect(sx-3*s, sy-3*s, 6*s, 6*s);
    }

    // Marines (Gelbe Vierecke)
    if (this.marinesActive) {
      this.ctx.fillStyle = '#ffcc00';
      for (let i = 0; i < 3; i++) {
        const a = this.playerAngle + (i * (Math.PI*2/3));
        const mx = px + Math.cos(a)*42*s; const my = py + Math.sin(a)*42*s;
        this.ctx.fillRect(mx-4*s, my-4*s, 8*s, 8*s);
      }
    }

    // Projektile
    this.ctx.fillStyle = '#ffff00';
    this.projectiles.forEach(p => {
      this.ctx.beginPath(); this.ctx.arc(cx + p.x*s, cy + p.y*s, 3*s, 0, Math.PI*2); this.ctx.fill();
    });

    // Schild
    if(this.shieldActive) {
      this.ctx.strokeStyle = `rgba(0, 255, 255, ${this.shieldHp/100})`;
      this.ctx.lineWidth = 3*s; this.ctx.beginPath(); this.ctx.arc(px, py, earthR*1.8, 0, Math.PI*2); this.ctx.stroke();
    }

    // Asteroiden
    this.asteroids.forEach(a => {
      this.ctx.fillStyle = '#888';
      this.ctx.beginPath(); this.ctx.arc(cx + a.x*s, cy + a.y*s, a.size*s, 0, Math.PI*2); this.ctx.fill();
    });
  }

  private addLog(text: string, type: 'research' | 'event') {
    this.scienceLog.unshift({ text, timestamp: Date.now(), type });
    if(this.scienceLog.length > 4) this.scienceLog.pop();
  }
}
