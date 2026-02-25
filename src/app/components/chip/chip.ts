import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chip {
  label = input.required<string>();
}