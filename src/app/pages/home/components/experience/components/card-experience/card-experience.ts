import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceData } from '../../interfaces/experience.interface';
import { Chip } from '../../../../../../components/chip/chip';

@Component({
  selector: 'app-card-experience',
  imports: [Chip],
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExperience {
  data = input.required<ExperienceData>();
}
