import { Routes } from '@angular/router';
import {Introduction} from './components/introduction/introduction';
import {GameComponent} from './components/game/game.component';

export const routes: Routes = [
  {path: '', component: Introduction, pathMatch: 'full'},
  {path: 'game', component: GameComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''},

];
