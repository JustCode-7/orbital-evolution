import {Injectable} from '@angular/core';
import {SwUpdate, VersionReadyEvent} from '@angular/service-worker';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdatePwa {
  
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      // Prüft alle 6 Stunden manuell, falls die App offen bleibt
      setInterval(() => {
        this.swUpdate.checkForUpdate();
      }, 6 * 60 * 60 * 1000);

      this.subscribeToUpdates();
    }
  }

  private subscribeToUpdates() {
    this.swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(() => {
        if (confirm("Eine neue Version von Deep Space Orbit ist verfügbar. Jetzt aktualisieren?")) {
          // Lädt die Seite neu und aktiviert den neuen Service Worker
          window.location.reload();
        }
      });
  }
}
