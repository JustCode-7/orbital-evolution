import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleFullscreenService {
  private wakeLock: WakeLockSentinel | null = null;
  isFullScreen = signal(false)
  // Auf dem iPhone wird dies meist 'false' sein, außer du bist auf einem iPad
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
