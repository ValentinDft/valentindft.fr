export interface TimelineEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  category?: 'school' | 'job';
}
