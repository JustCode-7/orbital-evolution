/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
import {Component, inject, OnDestroy, signal} from '@angular/core';
import {PwaInstallService} from './service/pwa-install.service';
import {ToggleFullscreenService} from './service/toggle-fullscreen.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {UpdatePwa} from './service/update-pwa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnDestroy {

  protected readonly title = signal('orbital-evolution');
  private pwaInstallService = inject(PwaInstallService);
  protected readonly fullscreenService = inject(ToggleFullscreenService);
  private readonly updateService = inject(UpdatePwa);
  private readonly router = inject(Router);

  isLoading = signal(false);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.fullscreenService.releaseDisplayAlwaysOnMode()
  }
}
