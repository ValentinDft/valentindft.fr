import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardExperience } from '../../../../components/card-experience/card-experience';
import { EDUCATIONS_DATA } from '../../../../datas/educations-data';

@Component({
  selector: 'app-education',
  imports: [CardExperience],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  protected readonly educationData = EDUCATIONS_DATA;
}
