/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
import {AfterViewInit, Component, ElementRef, HostListener, inject, NgZone, OnDestroy, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-3d',
  standalone: true,
  template: `
    <canvas #threeDimensionsCanvas></canvas>`,
  styles: [`
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `]
})
export class ThreeDimensions implements AfterViewInit, OnDestroy {
  @ViewChild('threeDimensionsCanvas', {static: true}) canvasRef!: ElementRef<HTMLCanvasElement>;

  @HostListener('window:resize')
  @HostListener('window:orientationchange')
  onWindowResize() {
    if (!this.camera) return;
    this.updateCameraPosition();
    setTimeout(() => {
      this.updateCameraPosition();
    }, 100);
  }

  gameService = inject(GameService)
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private sunMesh!: THREE.Mesh;
  private glowMesh!: THREE.Mesh;
  private clock = new THREE.Timer();
  private animationId?: number;

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewInit(): void {
    this.initThree();
    this.createRealisticSun();
    this.updateCameraPosition();
    this.startAnimation();

    // Kleiner Puffer fÃ¼r den Initialen Start
    setTimeout(() => this.onWindowResize(), 50);
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.renderer.dispose();
    this.sunMesh.geometry.dispose();
    (this.sunMesh.material as THREE.Material).dispose();
    this.glowMesh.geometry.dispose();
    (this.glowMesh.material as THREE.Material).dispose();
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });

    this.scene = new THREE.Scene();

    // Kamera initial erstellen (noch ohne finale Werte)
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 2000);
  }

  private updateCameraPosition(): void {
    if (!this.camera || !this.renderer || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    const fov = 75;
    const vFov = (fov * Math.PI) / 180;

    const desiredUnits = this.gameService.COORDINATE_BASE + this.gameService.SUN_3D_DESIRED_UNITS_CORRECTION

    this.camera.aspect = width / height;
    this.renderer.setSize(width, height, false);

    if (width > height) {
      this.camera.position.z = desiredUnits / (2 * Math.tan(vFov / 2));
    } else {
      const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
      this.camera.position.z = desiredUnits / (2 * Math.tan(hFov / 2));
    }

    this.camera.updateProjectionMatrix();
    this.camera.lookAt(0, 0, 0);
  }

  private createRealisticSun(): void {
    // Da wir den Zoom nun wieder auf 900 standardisiert haben,
    // machen wir das OBJEKT grÃ¶ÃŸer, um das 70er 2D-Loch zu fÃ¼llen!
    const sunRadius = 68; // Vorher 55. Passt jetzt perfekt zum 2D-Cutout (70)

    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load('assets/sun-surface.jpg');
    sunTexture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

    const sunGeometry = new THREE.SphereGeometry(sunRadius, 64, 64);
    const sunMaterial = new THREE.MeshStandardMaterial({
      map: sunTexture,
      emissive: 0xffddaa,
      emissiveMap: sunTexture,
      emissiveIntensity: 1.0,
    });

    this.sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    this.scene.add(this.sunMesh);

    // Der GlÃ¼heffekt etwas Ã¼ber den Radius hinaus
    const glowGeometry = new THREE.SphereGeometry(sunRadius + 15, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });

    this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    this.scene.add(this.glowMesh);

    // --- 4. Lichtquellen ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Ganz schwaches Umgebungslicht
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 3.0, 600); // Sehr starkes Punktlicht im Zentrum
    this.scene.add(pointLight);
  }

  private startAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      const animate = (timestamp: number) => { // timestamp wird von requestAnimationFrame geliefert
        this.animationId = requestAnimationFrame(animate);

        // 1. Timer aktualisieren
        this.clock.update(timestamp);

        // 2. Zeitwerte abrufen
        // Der neue Timer gibt Sekunden zurueck
        // Wir nutzen .getDelta(), um die Zeit seit dem letzten Frame zu bekommen
        const delta = this.clock.getDelta();
        const elapsed = this.clock.getElapsed(); // fuer das Pulsieren

        // 3. Animationen anwenden
        if (this.sunMesh) {
          this.sunMesh.rotation.y += 0.08 * delta;
        }

        // Der Glow pulsiert sanft in die Corona-Zone hinein
        if (this.glowMesh) {
          const pulse = Math.sin(elapsed * 2) * 0.05;
          this.glowMesh.scale.set(1.05 + pulse, 1.05 + pulse, 1.05 + pulse);
          (this.glowMesh.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(elapsed * 1.5) * 0.1;
        }
        this.renderer.render(this.scene, this.camera);
      };

      // Den Loop starten und den ersten Timestamp ÃƒÂ¼bergeben
      this.animationId = requestAnimationFrame(animate);
    });
  }
}
