/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
export interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
  lifespan: number;
  tail: { x: number, y: number }[];
}

export interface Asteroid {
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

export interface LogEntry {
  text: string;
  timestamp: number;
  type: 'research' | 'event' | 'system';
}

export interface ScoreEntry {
  score: number;
  time: number; // Spielzeit in Sekunden
  date: number; // Timestamp fÃƒÂ¼r Anzeige
}

export interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export interface Projectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
