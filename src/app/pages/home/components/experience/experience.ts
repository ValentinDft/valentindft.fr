import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES_DATA } from '../../../../datas/experiences-data';
import { ExperienceCard } from '../experience-card/experience-card';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExperienceCard],
})
export class Experience {
  protected readonly experienceData = EXPERIENCES_DATA;
}
