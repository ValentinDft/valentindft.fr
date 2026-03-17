import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectEntry } from '../../interfaces/project-entry.interface';
import { Chip } from '../chip/chip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-project',
  imports: [NgOptimizedImage, Chip, FaIconComponent],
  templateUrl: './card-project.html',
  styleUrl: './card-project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProject {
  public projectData = input<ProjectEntry | null>(null);
  protected readonly faGithub = faGithub;
  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
