import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATIONS_DATA } from '../../../../datas/educations-data';
import { ExperienceCard } from '../experience-card/experience-card';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExperienceCard],
})
export class Education {
  protected readonly educationData = EDUCATIONS_DATA;
}
