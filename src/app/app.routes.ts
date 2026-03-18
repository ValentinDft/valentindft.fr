import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Projects} from './pages/projects/projects';
import {Timeline} from './pages/timeline/timeline';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'projects', component: Projects},
  {path: 'timeline', component: Timeline},
];
