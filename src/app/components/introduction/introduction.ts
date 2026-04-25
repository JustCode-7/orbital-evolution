import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PwaInstallService} from '../../service/pwa-install.service';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [
    RouterLink,
    AsyncPipe,
    NgOptimizedImage,
  ],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {
  protected readonly pwaService = inject(PwaInstallService);

  protected installApp() {
    this.pwaService.triggerInstall();
  }

  protected showQRCode(colapseDivBox: HTMLDivElement) {
    colapseDivBox.classList.contains('collapse') ? colapseDivBox.classList.remove('collapse') : colapseDivBox.classList.add('collapse')
    colapseDivBox ? colapseDivBox.scrollIntoView({behavior: 'smooth'}) : null
  }
}
