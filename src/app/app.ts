import { Component, inject, signal } from '@angular/core';
import { PwaInstallService } from './service/pwa-install.service';
import {GameComponent} from './components/game/game.component';

@Component({
  selector: 'app-root',
  imports: [GameComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('orbital-evolution');
  private pwaInstallService = inject(PwaInstallService);
}
