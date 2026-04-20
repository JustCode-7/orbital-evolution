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
