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
}
