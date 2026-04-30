/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietÃ¤r. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis fÃ¼r Details.
 */
import {ResolveFn, Routes} from '@angular/router';
import {Introduction} from './components/introduction/introduction';
import {GameComponent} from './components/game/game.component';
import {inject} from '@angular/core';
import {MusicService} from './service/music.service';
import {LanguageService} from './service/language.service';

export const gameMusicResolver: ResolveFn<void> = () => {
  const musicService = inject(MusicService);
  return musicService.fetchAllTracks();
};

export const languageResolver: ResolveFn<void> = () => {
  return inject(LanguageService).initialize();
};


export const routes: Routes = [
  {path: '', component: Introduction, resolve: {lang: languageResolver}, pathMatch: 'full'},
  {path: 'game', component: GameComponent, resolve: {music: gameMusicResolver}, pathMatch: 'full'},
  {path: '**', redirectTo: ''},
];
