export interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
  lifespan: number;
  tail: { x: number, y: number }[]; // NEU: Schweif-Positionen
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
  date: number; // Timestamp für Anzeige
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
