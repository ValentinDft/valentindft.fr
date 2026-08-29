import { ProjectEntry } from '../interfaces/project-entry.interface';

export const PROJECTS_DATA: ProjectEntry[] = [
  {
    id: '1',
    image: 'screen-PW.png',
    title: 'Pixel War',
    githubLink: 'https://github.com/ValentinDft/pixel-war',
    externalLink: 'https://pixel-war.valentindft.fr',
    skills: ['Angular', 'TypeScript', 'Sass', 'Supabase'],
    description:
      '16×16 collaborative grid: Each player places pixels, and everyone sees the changes in real time. Angular 22 on the client side, Supabase (Postgres + Realtime) on the server side.',
    highlight: true,
  },
  {
    id: '2',
    image: 'screen-CV.png',
    title: 'Colorz Vizualization',
    githubLink: 'https://github.com/ValentinDft/colorz-vizualization',
    externalLink: 'https://colorz-vizualization.valentindft.fr',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Zustand', 'zod'],
    description:
      'Colorz Vizualization gives you a preview of the colors you want to use in your web platform.',
    highlight: true,
  },
];
