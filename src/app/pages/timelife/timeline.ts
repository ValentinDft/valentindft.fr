import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TIMELIFE_DATA } from '../../datas/timelife-data';
import { TimelineCard } from './components/timeline-card/timeline-card';

@Component({
  selector: 'app-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimelineCard],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  protected readonly timelifeData = TIMELIFE_DATA;
}
