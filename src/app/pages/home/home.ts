import { Component } from '@angular/core';
import {Header} from './components/header/header';
import {About} from './components/about/about';
import {Skills} from './components/skills/skills';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-home',
  imports: [Header, About, Skills, Experience],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
