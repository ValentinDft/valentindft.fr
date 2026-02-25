import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardExperience } from '../../../../components/card-experience/card-experience';
import { EDUCATION_DATA } from './data/education-data';

@Component({
  selector: 'app-education',
  imports: [CardExperience],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  protected readonly educationData = EDUCATION_DATA;
}
