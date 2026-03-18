import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Chip } from '../../../../components/chip/chip';
import { CareerEntry } from '../../../../interfaces/career-entry.interface';

@Component({
  selector: 'app-experience-card',
  imports: [Chip],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCard {
  data = input.required<CareerEntry>();
}
