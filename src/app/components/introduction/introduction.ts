/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietÃ¤r. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis fÃ¼r Details.
 */
import {Component, inject, OnDestroy, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PwaInstallService} from '../../service/pwa-install.service';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {LanguageService} from '../../service/language.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-introduction',
  imports: [
    RouterLink,
    AsyncPipe,
    NgOptimizedImage,
    FormsModule,
  ],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction implements OnDestroy {

  protected readonly pwaService = inject(PwaInstallService);
  protected readonly languageService = inject(LanguageService);
  isShowSpinner = signal(false);


  protected installApp() {
    this.pwaService.triggerInstall();
  }

  protected showQRCode(colapseDivBox: HTMLDivElement) {
    colapseDivBox.classList.contains('collapse') ? colapseDivBox.classList.remove('collapse') : colapseDivBox.classList.add('collapse')
    colapseDivBox ? colapseDivBox.scrollIntoView({behavior: 'smooth'}) : null
  }

  protected showSpinner() {
    this.isShowSpinner.set(true);
  }

  ngOnDestroy(): void {
    this.isShowSpinner.set(false);
  }
}
