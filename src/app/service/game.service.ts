/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietÃ¤r. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis fÃ¼r Details.
 */
import {inject, Injectable, signal} from '@angular/core';
import {Asteroid, Comet, LogEntry, Projectile, ScoreEntry} from '../model/game.model';
import {LanguageService} from './language.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private languageService = inject(LanguageService);

  gameActive = signal(false);
  winState = signal(false);
  highScore = signal(parseInt(localStorage.getItem('orbital_hs') || '0'));
  lastScore = signal(parseInt(localStorage.getItem('orbital_last_score') || '0'));
  scoreHistory = signal<ScoreEntry[]>(JSON.parse(localStorage.getItem('orbital_history') || '[]'));
  resumeCountdown = signal(0);
  pauseStartTime: number = 0;
  totalPausedTime: number = 0;

  lastTimestamp: number = 0;
  startTime: number = 0;
  score = 0;
  ep = 0;
  maxEp = 2000;
  epOverflowLogged = false;
  researchLevel = 1;
  playerR = 350;
  marinesActive = false;
  isRecovering = false;
  isJumping = false;
  // Warp/Slipstream Animation State
  warpActive = false;
  warpStart = 0;
  warpDuration = 3000;
  satellitesCount = 0;
  marinesReadyTime = 0;
  novaBombeActive = false;
  novaBombeVisuals: { x: number, y: number, r: number, alpha: number } | null = null;
  stopSpawningUntil = 0;
  shieldActive = false;
  shieldHp = 0;
  comets: Comet[] = [];
  isInsideHabitableZone = false;
  private spawnInterval: any;
  isPaused = false;
  showRewardDialog = signal(false);
  flightDirection = 1; // 1 = Uhrzeigersinn, -1 = gegen den Uhrzeigersinn

  asteroids: Asteroid[] = [];
  scienceLog: LogEntry[] = [];
  projectiles: Projectile[] = [];

  isColorsInverted = false;

  toggleInversion() {
    this.isColorsInverted = !this.isColorsInverted;
  }

  startSpawning() {
    this.cleanup();
    const interval = Math.max(400, 1500 - Math.floor((this.researchLevel - 1) / 3) * 250);
    this.spawnInterval = setInterval(() => {
      if (Date.now() < this.stopSpawningUntil) return;
      this.spawnAsteroid();
    }, interval);
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
    this.lastTimestamp = performance.now();
    this.startTime = Date.now();
    this.gameActive.set(true);
    this.winState.set(false);
    this.score = 0;
    this.ep = 100;
    this.epOverflowLogged = false;
    this.researchLevel = 1;
    this.playerR = 350;
    this.asteroids = [];
    this.scienceLog = [];
    this.projectiles = [];
    this.marinesActive = false;
    this.isRecovering = false;
    this.isJumping = false; // Reset Jump Status
    this.warpActive = false;
    this.warpStart = 0;
    this.satellitesCount = 0;
    this.marinesReadyTime = 0;
    this.novaBombeActive = false;
    this.novaBombeVisuals = null;
    this.stopSpawningUntil = 0;
    this.showRewardDialog.set(false);
    this.shieldActive = false;
    this.shieldHp = 0;
    this.comets = [];
    this.isInsideHabitableZone = false;
    this.flightDirection = 1;
    this.pauseStartTime = 0;
    this.totalPausedTime = 0;
  }


  vibrateAction(duration: number) {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate([duration, 160]);
  }
}
