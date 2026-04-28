import {Component, inject} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {ToggleFullscreenService} from '../../service/toggle-fullscreen.service';
import {GameService} from '../../service/game.service';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MusicService} from '../../service/music.service';
import {FormsModule} from '@angular/forms';
import {LanguageService} from '../../service/language.service';

@Component({
  selector: 'app-game-dialog',
  imports: [
    DecimalPipe,
    MatIcon,
    RouterLink,
    MatIconButton,
    MatSlideToggle,
    FormsModule,
  ],
  templateUrl: './game-dialog.html',
  styleUrl: './game-dialog.scss',
})
export class GameDialog {

  protected readonly fullscreenService = inject(ToggleFullscreenService);
  gameService = inject(GameService)
  protected musicservice = inject(MusicService)
  protected languageService = inject(LanguageService);

  protected clearHighScore() {
    localStorage.removeItem('orbital_hs');
    localStorage.removeItem('orbital_history');
    this.gameService.highScore.set(0);
    this.gameService.scoreHistory.set([]);
  }

  protected formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  startGame() {
    this.fullscreenService.toggleTabFullScreenModeGame();
    this.gameService.cleanup();
    this.gameService.initGameVariables();

    this.gameService.addLog(this.languageService.translate('GAME.LOG_DEFENSE_ACTIVE'), 'event');

    this.gameService.startSpawning();
  }

}
