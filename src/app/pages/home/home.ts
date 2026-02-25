import { Component } from '@angular/core';
import {Header} from './components/header/header';
import {About} from './components/about/about';
import {Skills} from './components/skills/skills';
import {Experience} from './components/experience/experience';
import {Education} from './components/education/education';

@Component({
  selector: 'app-home',
  imports: [Header, About, Skills, Experience, Education],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
