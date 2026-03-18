import { ProjectEntry } from '../interfaces/project-entry.interface';

export const PROJECTS_DATA: ProjectEntry[] = [
  {
    id: '1',
    image: 'screen-GC.png',
    title: 'Grid Color',
    githubLink: 'https://github.com/ValentinDft/grid-color',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Zustand'],
    description: 'With Grid Color you can try your hand at pixel war.',
    highlight: true,
  },
  {
    id: '2',
    image: 'screen-CV.png',
    title: 'Colorz Vizualization',
    githubLink: 'https://github.com/ValentinDft/colorz-vizualization',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Zustand', 'zod'],
    description:
      'Colorz Vizualization gives you a preview of the colors you want to use in your web platform.',
    highlight: true,
  },
  {
    id: '3',
    image: 'screen-TMC.png',
    title: 'The Movies Collection',
    githubLink: 'https://github.com/ValentinDft/the_movies_collection',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'ExpressJS', 'MovieDB API'],
    description:
      'Web App for collecting movies and series. Uses the MovieDB API to retrieve information on the most popular films and series currently available, and processes the data received from the API.',
    highlight: false,
  },
  {
    id: '4',
    image: 'screen-WA.png',
    title: 'Weather App',
    githubLink: 'https://github.com/ValentinDft/Weather_App',
    skills: ['ReactJS', 'JavaScript', 'Styled-components', 'LeafletJS', 'OpenWeatherMap API'],
    description:
      'Web app for searching the weather in a city. Using the OpenWeatherMap API for weather data.',
    highlight: false,
  },
  {
    id: '5',
    image: 'screen-FE.png',
    title: 'Fisheye',
    githubLink: 'https://github.com/ValentinDft/Fisheye_OPC',
    skills: ['JavaScript', 'HTML/CSS'],
    description:
      'JavaScript platform for photographers to publish their photos - OpenClassrooms project.',
    highlight: false,
  },
  {
    id: '6',
    image: 'screen-KASA.png',
    title: 'Kasa',
    githubLink: 'https://github.com/ValentinDft/Kasa-app_OPC',
    skills: ['ReactJS', 'JavaScript', 'React-router', 'Sass'],
    description: 'Web app for vacation rentals - OpenClassrooms project.',
    highlight: true,
  },
  {
    id: '7',
    image: 'screen-SSee.png',
    title: 'SportSee',
    githubLink: 'https://github.com/ValentinDft/Sportsee-app_OPC',
    skills: ['ReactJS', 'JavaScript', 'React-router', 'Sass', 'RechartJS'],
    description:
      'Analytics dashboard with React. Sport performance tracking with graphs - OpenClassrooms project.',
    highlight: false,
  },
];
