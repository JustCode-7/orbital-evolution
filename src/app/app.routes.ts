import {ResolveFn, Routes} from '@angular/router';
import {Introduction} from './components/introduction/introduction';
import {GameComponent} from './components/game/game.component';
import {inject} from '@angular/core';
import {MusicService} from './service/music.service';

export const gameMusicResolver: ResolveFn<void> = () => {
  const musicService = inject(MusicService);
  return musicService.fetchAllTracks();
};


export const routes: Routes = [
  {path: '', component: Introduction, pathMatch: 'full'},
  {path: 'game', component: GameComponent, resolve: {music: gameMusicResolver}, pathMatch: 'full'},
  {path: '**', redirectTo: ''},
];
