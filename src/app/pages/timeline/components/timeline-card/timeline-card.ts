import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TimelineEntry } from '../../../../interfaces/timeline-entry.interface';
import { Chip } from '../../../../components/chip/chip';

@Component({
  selector: 'app-timeline-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Chip],
  templateUrl: './timeline-card.html',
  styleUrl: './timeline-card.scss',
})
export class TimelineCard {
  public timelineData = input<TimelineEntry | null>(null);
  public isLast = input<boolean>(false);
  public isEven = input<boolean>(false);
}
