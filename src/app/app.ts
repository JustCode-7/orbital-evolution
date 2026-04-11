import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaInstallService } from './service/pwa-install.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('orbital-evolution');
  private pwaInstallService = inject(PwaInstallService);
}
