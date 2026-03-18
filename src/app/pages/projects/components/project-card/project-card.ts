import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectEntry } from '../../../../interfaces/project-entry.interface';
import { Chip } from '../../../../components/chip/chip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, Chip, FaIconComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  public projectData = input<ProjectEntry | null>(null);
  protected readonly faGithub = faGithub;
  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
