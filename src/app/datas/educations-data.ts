import { CareerEntry } from '../interfaces/career-entry.interface';

export const EDUCATIONS_DATA: CareerEntry[] = [
  {
    id: '1',
    title: 'Application Developer - JavaScript React (RNCP level 6)',
    organizationName: 'OpenClassrooms',
    location: 'Montpellier, France',
    date: 'Feb. 2022 - Dec 2023',
    description: [
      'Dynamic website with Javascript and React.js.',
      "Communicate with the application's back-end via an API.",
      'Implement unit and integration tests and debug code.',
    ],
    level: 'BAC+4',
    skills: ['JavaScript', 'React.js', 'Redux', 'Jest'],
  },
  {
    id: '2',
    title: 'Formation Développeur Web Fullstack JavaScript',
    organizationName: 'La Capsule Academy',
    location: 'Lyon, France',
    date: 'Sept. 2020 - Nov 2020',
    description: [
      'Intensive bootcamp, 10 projects in 10 weeks on web and mobile development with Javascript.',
    ],
    skills: ['JavaScript', 'React.js', 'React Native', 'Redux', 'Express', 'MongoDB'],
  },
  {
    id: '3',
    title: 'BTS SNIR (Systèmes Numériques informatique et Réseaux)',
    organizationName: 'Lycée Polyvalent Astier ',
    location: 'Aubenas, France',
    date: 'Sept. 2017 - Jun 2019',
    description: [
      'I was able to work very closely with networks and their security, embedded systems, cloud computing and systems programming.',
    ],
    skills: ['Java', 'HTML/CSS', 'JavaScript', 'PHP', 'SQL', 'Android', 'network infrastructure'],
    level: 'BAC+2',
  },
];
