import { Component } from '@angular/core';
import { PROJECTS_DATA } from '../../datas/projects-data';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  imports: [ProjectCard],
})
export class Projects {
  protected readonly projectsData = PROJECTS_DATA;
}
