import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Chip } from '../chip/chip';
import { CareerEntry } from '../../interfaces/career-entry.interface';

@Component({
  selector: 'app-card-experience',
  imports: [Chip],
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExperience {
  data = input.required<CareerEntry>();
}
