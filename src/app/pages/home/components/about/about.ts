import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  imports: [
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly faGithub = faGithub;
  protected readonly faLinkedinIn = faLinkedinIn;
}
