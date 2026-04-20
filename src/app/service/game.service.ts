import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  gameActive = signal(false);
  winState = signal(false);
  highScore = signal(parseInt(localStorage.getItem('orbital_hs') || '0'));
  lastScore = signal(parseInt(localStorage.getItem('orbital_last_score') || '0'));
  resumeCountdown = signal(0);

  lastTimestamp: number = 0;
  score = 0;
  ep = 0;
  researchLevel = 1;
  playerR = 350;
  marinesActive = false;
  isRecovering = false;
  isJumping = false;
  satellitesCount = 0;
  marinesReadyTime = 0;
  shieldActive = false;
  shieldHp = 0;
  comets: Comet[] = [];
  isInsideHabitableZone = false;
  private spawnInterval: any;
  isPaused = false;

  asteroids: Asteroid[] = [];
  scienceLog: LogEntry[] = [];
  projectiles: Projectile[] = [];

  startSpawning() {
    this.cleanup();
    const interval = Math.max(400, 1500 - Math.floor((this.researchLevel - 1) / 3) * 250);
    this.spawnInterval = setInterval(() => this.spawnAsteroid(), interval);
  }

  private spawnAsteroid() {
    if (this.isPaused || this.resumeCountdown() > 0 || !this.gameActive()) return;
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
    const colors = ['#8B4513', 'rgb(97 55 7)', 'rgb(202 103 1.3)', '#8B4513'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    this.asteroids.push({
      x: Math.cos(angle) * 900, y: Math.sin(angle) * 900,
      vx, vy, ovx: vx, ovy: vy,
      size, color: color, points, hp
    });
  }

  cleanup() {
    if (this.spawnInterval) {
      clearInterval(this.spawnInterval)
    }
  }

  addLog(text: string, type: 'research' | 'event' | 'system') {
    this.scienceLog.unshift({text, timestamp: Date.now(), type});
    if (this.scienceLog.length > 4) this.scienceLog.pop();
  }


  initGameVariables() {
    this.lastTimestamp = performance.now()
    this.gameActive.set(true);
    this.winState.set(false);
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
  }
}
