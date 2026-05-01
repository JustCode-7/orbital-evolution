/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleFullscreenService {
  private wakeLock: WakeLockSentinel | null = null;
  isFullScreen = signal(false)
  // Auf dem iPhone wird dies meist 'false' sein, auÃƒÅ¸er du bist auf einem iPad
  // oder in einem Browser, der es emuliert.
  readonly canFullscreen = !!document.documentElement.requestFullscreen ||
    !!(document.documentElement as any).webkitRequestFullscreen;

  constructor() {
    if (this.canFullscreen) {
      document.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement) {
          this.isFullScreen.set(true)
        } else {
          this.isFullScreen.set(false)
        }
      });
    }
  }

  toggleTabFullScreenModeGame() {
    if (this.canFullscreen) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
          this.isFullScreen.set(true)
          this.initDisplayAlwaysOnMode().then(() => {
            console.log('full screen and display always on mode requested');
          })
        })
          .catch(reason => {
            console.warn("Fullscreen error: ", reason)
          });
      } else {
        // Falls wir bereits im Fullscreen sind, stellen wir sicher, dass das Signal korrekt ist
        this.isFullScreen.set(true);
      }
    }
  }

  toggleTabFullScreenModeMenue() {
    if (this.canFullscreen) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
          this.isFullScreen.set(true)
          this.initDisplayAlwaysOnMode().then(() => {
            console.log('full screen and display always on mode requested');
          })
        });
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  releaseDisplayAlwaysOnMode() {
    this.wakeLock!.release().then(() => {
      this.wakeLock = null;
    });
  }


  async initDisplayAlwaysOnMode() {
    try {
      this.wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
      // the wake lock request fails - usually system related, such being low on battery
      // @ts-ignore
      console.log(`${err.name}, ${err.message}`);
    }
  }
}
