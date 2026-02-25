import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Chip } from '../chip/chip';
import { CardData } from '../../interfaces/card-data.interface';

@Component({
  selector: 'app-card-experience',
  imports: [Chip],
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExperience {
  data = input.required<CardData>();
}
