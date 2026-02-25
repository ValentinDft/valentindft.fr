import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardExperience } from './components/card-experience/card-experience';
import { EXPERIENCE_DATA } from './data/experience-data';

@Component({
  selector: 'app-experience',
  imports: [CardExperience],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly experienceData = EXPERIENCE_DATA;
}
