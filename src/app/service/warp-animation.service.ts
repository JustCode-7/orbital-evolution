/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarpAnimationService {
  private shipImage: HTMLImageElement | null = null;
  private particles: { angle: number, r: number, speed: number, length: number }[] = [];
  private imageLoaded = false;

  constructor() {
  }

  public setShipImage(src: string) {
    if (this.shipImage && this.shipImage.src.endsWith(src)) return;
    this.imageLoaded = false;
    this.shipImage = new Image();
    this.shipImage.src = src;
    this.shipImage.onload = () => {
      this.imageLoaded = true;
    };
  }

  public initParticles(width: number, height: number) {
    if (this.particles.length === 0) {
      for (let i = 0; i < 150; i++) {
        this.particles.push({
          angle: Math.random() * Math.PI * 2,
          r: Math.random() * Math.max(width, height),
          speed: 15 + Math.random() * 25,
          length: 5 + Math.random() * 10
        });
      }
    }
  }

  public reset() {
    this.particles = [];
  }

  public drawWarp(ctx: CanvasRenderingContext2D, width: number, height: number, now: number, warpStart: number, warpDuration: number, shipColor?: string) {
    const elapsed = now - warpStart;
    const progress = Math.min(1, Math.max(0, elapsed / warpDuration));

    this.initParticles(width, height);

    ctx.save();
    ctx.translate(width / 2, height / 2);

    // 1. Hintergrund & Fade
    let overlayAlpha = 0;
    if (progress < 0.1) {
      overlayAlpha = progress * 10;
    } else if (progress > 0.8) {
      overlayAlpha = (1 - progress) * 5;
    } else {
      overlayAlpha = 1;
    }

    ctx.fillStyle = `rgba(0, 10, 40, ${overlayAlpha * 0.9})`;
    ctx.fillRect(-width / 2, -height / 2, width, height);

    ctx.globalCompositeOperation = 'lighter';

    // 2. Tunnel-Effekt (Organischer durch Wellenbewegung)
    this.drawTunnel(ctx, width, height, overlayAlpha, now);

    // 3. Ereignishorizont (Wasser-Wabern)
    this.drawEventHorizon(ctx, progress, overlayAlpha, now);

    // 4. Raumschiff-Animation
    this.drawShip(ctx, progress, overlayAlpha, now, width, height, shipColor);

    // 5. Zentraler Blitz
    this.drawFlash(ctx, progress, overlayAlpha, now, width, height);

    ctx.restore();
  }

  private drawTunnel(ctx: CanvasRenderingContext2D, width: number, height: number, overlayAlpha: number, now: number) {
    this.particles.forEach(p => {
      p.r += p.speed;
      if (p.r > Math.max(width, height)) {
        p.r = 20;
        p.angle = Math.random() * Math.PI * 2;
      }

      // Organischere Bewegung durch leichten Sinus-Versatz im Winkel
      const waveAngle = p.angle + Math.sin(p.r * 0.01 + now * 0.002) * 0.1;
      const x1 = Math.cos(waveAngle) * p.r;
      const y1 = Math.sin(waveAngle) * p.r;
      const currentLen = p.length * (1 + p.r / 100);
      const x2 = Math.cos(waveAngle) * (p.r + currentLen);
      const y2 = Math.sin(waveAngle) * (p.r + currentLen);

      const alpha = Math.min(1, p.r / 300) * overlayAlpha;
      const thickness = 0.5 + (p.r / 200);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = `rgba(150, 230, 255, ${alpha})`;
      ctx.stroke();
    });
  }

  private drawEventHorizon(ctx: CanvasRenderingContext2D, progress: number, overlayAlpha: number, now: number) {
    const ringCount = 5;
    const timeFactor = now * 0.003;

    for (let i = 0; i < ringCount; i++) {
      const baseRadius = (progress * 800) + (i * 40);
      const ringAlpha = (1 - (i / ringCount)) * 0.6 * overlayAlpha;

      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.1) {
        // Intensivere Wasser-Wellen
        const wave = Math.sin(a * 5 + timeFactor + i) * 20 + Math.cos(a * 3 - timeFactor * 0.5) * 10;
        const r = baseRadius + wave;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;

        if (a === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = 3;
      const color = i % 2 === 0 ? `rgba(0, 255, 255, ${ringAlpha})` : `rgba(0, 100, 255, ${ringAlpha})`;
      ctx.strokeStyle = color;
      ctx.stroke();

      if (i < 2) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(255, 255, 255, ${ringAlpha * 0.5})`;
        ctx.stroke();
      }
    }
  }

  private drawShip(ctx: CanvasRenderingContext2D, progress: number, overlayAlpha: number, now: number, width: number, height: number, shipColor?: string) {
    if (!this.imageLoaded || !this.shipImage) return;

    ctx.save();

    // Positionieren am unteren rechten Rand (relativ zum Zentrum 0,0)
    // Wir wählen einen Punkt, der weit genug außen liegt, aber noch sichtbar ist.
    const posX = width * 0.35;
    const posY = height * 0.35;

    // Rotation: Das Schiff soll zum Mittelpunkt (0,0) zeigen.
    // Die Standard-Ausrichtung des SVGs scheint nach oben zu sein (0 Grad).
    // Der Winkel von (posX, posY) zu (0,0) ist Math.atan2(-posY, -posX).
    // Da das Schiff standardmäßig "hochkant" ist, müssen wir Math.PI/2 addieren,
    // damit die Spitze (oben) zum Zentrum zeigt.
    const angle = Math.atan2(-posY, -posX) + Math.PI / 2;

    ctx.translate(posX, posY);
    ctx.rotate(angle);

    // Z-Achse: Schiff wird kleiner zu Beginn für Tiefeneffekt (Eintauchen)
    // Aber insgesamt GRÖSSER starten (Faktor 2.5 statt 1.0)
    const zScale = (2.5 - (progress * 1.0));

    // Spaghettisierung: Strecken in Y, Stauchen in X
    const stretchIntensity = Math.sin(progress * Math.PI) * 0.8;
    const scaleX = (1 - stretchIntensity * 0.3) * zScale;
    const scaleY = (1 + stretchIntensity * 1.5) * zScale;

    // Vibration (High-Speed Jitter) - leicht reduziert, da Schiff nun größer ist
    const jitterAmount = progress * 15;
    const jitterX = (Math.random() - 0.5) * jitterAmount;
    const jitterY = (Math.random() - 0.5) * jitterAmount;

    ctx.translate(jitterX, jitterY);

    const shipW = 100;
    const shipH = 100;

    let shipToDraw: HTMLImageElement | HTMLCanvasElement = this.shipImage;

    if (shipColor) {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = shipW;
      offCanvas.height = shipH;
      const offCtx = offCanvas.getContext('2d')!;
      offCtx.drawImage(this.shipImage, 0, 0, shipW, shipH);
      offCtx.globalCompositeOperation = 'source-in';
      offCtx.fillStyle = shipColor;
      offCtx.fillRect(0, 0, shipW, shipH);
      shipToDraw = offCanvas;
    }

    // Ghost-Image (Motion Blur)
    ctx.save();
    ctx.globalAlpha = 0.3 * overlayAlpha;
    ctx.translate(0, 25); // Stärker versetzt für größeren Scale
    ctx.scale(scaleX * 1.05, scaleY * 1.05);
    ctx.drawImage(shipToDraw, -shipW / 2, -shipH / 2, shipW, shipH);
    ctx.restore();

    // Hauptschiff
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.globalAlpha = overlayAlpha;
    ctx.drawImage(shipToDraw, -shipW / 2, -shipH / 2, shipW, shipH);
    ctx.restore();

    ctx.restore();
  }

  private drawFlash(ctx: CanvasRenderingContext2D, progress: number, overlayAlpha: number, now: number, width: number, height: number) {
    const flashSize = (progress < 0.2)
      ? (progress * 5 * Math.max(width, height))
      : (30 + Math.sin(now * 0.01) * 10);

    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, flashSize);
    grad.addColorStop(0, `rgba(255, 255, 255, ${overlayAlpha})`);
    grad.addColorStop(0.3, `rgba(0, 255, 255, ${overlayAlpha * 0.7})`);
    grad.addColorStop(1, 'rgba(0, 50, 150, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, flashSize, 0, Math.PI * 2);
    ctx.fill();
  }
}
