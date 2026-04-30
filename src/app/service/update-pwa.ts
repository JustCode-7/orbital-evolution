/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
import {Injectable} from '@angular/core';
import {SwUpdate, VersionReadyEvent} from '@angular/service-worker';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdatePwa {

  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      // PrÃƒÂ¼ft alle 6 Stunden manuell, falls die App offen bleibt
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
        if (confirm("Eine neue Version von Deep Space Orbit ist verfÃƒÂ¼gbar. Jetzt aktualisieren?")) {
          // LÃƒÂ¤dt die Seite neu und aktiviert den neuen Service Worker
          window.location.reload();
        }
      });
  }
}
