import {Component, inject} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {ToggleFullscreenService} from '../../service/toggle-fullscreen.service';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-game-dialog',
  imports: [
    DecimalPipe,
    MatIcon,
    RouterLink,
    MatIconButton
  ],
  templateUrl: './game-dialog.html',
  styleUrl: './game-dialog.scss',
})
export class GameDialog {

  protected readonly fullscreenService = inject(ToggleFullscreenService);
  gameService = inject(GameService)

  protected clearHighScore() {
    localStorage.removeItem('orbital_hs')
    this.gameService.highScore.set(parseInt(localStorage.getItem('orbital_hs') || '0'))
  }

  startGame() {
    this.fullscreenService.toggleTabFullScreenModeGame();
    this.gameService.cleanup();
    this.gameService.initGameVariables();

    this.gameService.addLog("Orbitale Verteidigung aktiviert.", 'event');

    this.gameService.startSpawning();
  }

}
