import { Component } from '@angular/core';
import { PROJECTS_DATA } from '../../datas/projects-data';
import { CardProject } from '../../components/card-project/card-project';

@Component({
  selector: 'app-projects',
  imports: [CardProject],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projectsData = PROJECTS_DATA;
}
