import {AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild} from '@angular/core';
import * as THREE from 'three';

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

    // 1. Sofortiger Resize für ein flüssiges Gefühl
    this.updateCameraPosition();

    // 2. Erneuter Check nach 100ms, falls sich die UI-Leisten des Handys noch bewegen
    setTimeout(() => {
      this.updateCameraPosition();
    }, 100);
  }

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private sunMesh!: THREE.Mesh;
  private glowMesh!: THREE.Mesh; // NEU: Der Glüheffekt-Layer
  private clock = new THREE.Timer();
  private animationId?: number;

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewInit(): void {
    this.initThree();
    this.createRealisticSun(); // Aktualisierte Methode
    this.startAnimation();
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

  @HostListener('window:resize')
  onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
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
    if (!this.camera || !this.renderer) return;

    const canvas = this.canvasRef.nativeElement;
    // Wir nehmen die Fenstergröße als Fallback, falls das Canvas noch nicht resized wurde
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    const fov = 75;
    const vFov = (fov * Math.PI) / 180;
    const desiredUnits = 900;

    // Renderer Größe synchron zum Canvas setzen
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;

    if (width > height) {
      // Landscape
      this.camera.position.z = desiredUnits / (2 * Math.tan(vFov / 2));
    } else {
      // Portrait
      const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
      this.camera.position.z = desiredUnits / (2 * Math.tan(hFov / 2));
    }

    this.camera.updateProjectionMatrix();
    this.camera.lookAt(0, 0, 0);
  }

  private createRealisticSun(): void {
    const sunRadius = 55; // Passend zum alten 2D-Radius

    // --- 1. Textur laden ---
    const textureLoader = new THREE.TextureLoader();
    // WICHTIG: Stelle sicher, dass die Datei unter src/assets/sun-surface.jpg existiert!
    const sunTexture = textureLoader.load('assets/sun-surface.jpg');
    sunTexture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

    // --- 2. Die feste Sonne (Innere Kugel) ---
    const sunGeometry = new THREE.SphereGeometry(sunRadius, 64, 64);
    const sunMaterial = new THREE.MeshStandardMaterial({
      map: sunTexture, // Die geladene Bild-Textur
      emissive: 0xffddaa, // Grund-Selbstleuchten (Helles Orange/Gelb)
      emissiveMap: sunTexture, // Das Leuchten folgt dem Muster der Textur
      emissiveIntensity: 1.0, // Stärke des Leuchtens
    });

    this.sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    this.scene.add(this.sunMesh);

    // --- 3. Der Glüheffekt (Äußere Kugel) ---
    // Etwas größer als die Sonne (Radius 58 statt 55)
    const glowGeometry = new THREE.SphereGeometry(sunRadius + 12, 64, 64); // Radius erhöht
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6600, // Tiefes Orange/Rot
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
        // Der neue Timer gibt Sekunden zurück.
        // Wir nutzen .getDelta(), um die Zeit seit dem letzten Frame zu bekommen
        const delta = this.clock.getDelta();
        const elapsed = this.clock.getElapsed(); // Für das Pulsieren

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

      // Den Loop starten und den ersten Timestamp übergeben
      this.animationId = requestAnimationFrame(animate);
    });
  }
}
