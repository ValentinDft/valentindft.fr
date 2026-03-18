import { CareerEntry } from '../interfaces/career-entry.interface';

export const EXPERIENCES_DATA: CareerEntry[] = [
  {
    id: '1',
    organizationName: 'Inovea',
    date: 'Dec. 2023 - Now',
    location: 'Montpellier, France',
    title: 'Front-end developer',
    skills: ['Angular', 'TypeScript', 'Git', 'Jest', 'Jira', 'Scrum'],
    description: [
      'Develop new features and bug fixes for INOVEA Business angular application.',
      'Develop new features and bug fixes for INOVEA Back Office angular application.',
      'Graphic redesign of an old application.',
      'Creation and supply of an Angular internal component library.',
    ],
  },
  {
    id: '2',
    organizationName: 'Rakuten DX',
    date: 'Feb. 2022 - Dec. 2023',
    location: 'Montpellier, France',
    title: 'Front-end developer - Apprenticeship',
    skills: ['React.js', 'Angular', 'TypeScript', 'Git', 'Jest', 'Jira', 'Scrum'],
    description: [
      'Creation of a tag plan and implementation of analytics events on the front-end part (Angular, Rakuten Analytics).',
      'Developer (Angular and React) on the front-end of a platform for developing low-code/no-code mobile applications. Bug resolution and implementation of new features.',
      "Collaborate with the UX/UI team to improve the product's user experience and accessibility.",
      'International collaboration with Japanese and Indian colleagues. Agile practices with Scrum.',
    ],
  },
  {
    id: '3',
    organizationName: 'Butterfly&Co',
    date: 'Apr. 2021 - Jul. 2021',
    location: 'Full-remote',
    title: 'Front-end developer - Internship',
    skills: ['React.js', 'Firebase', 'Styled-component'],
    description: [
      'Creation of a platform providing company coaches with tools for running interactive workshops.',
      'Design and development of the user interface using React.js.',
      'Firebase integration for data management and authentication.',
    ],
  },
  {
    id: '4',
    organizationName: 'La Capsule Academy',
    date: 'Jan. 2021 - Feb. 2021',
    location: 'Lyon, France',
    title: 'Teacher assistant',
    skills: ['React.js', 'React Native', 'MongoDB', 'Redux'],
    description: [
      'Class of 12 students for the Fullstack JavaScript Developer course.',
      'Technical problem solving with students in difficulty, and in-depth course support.',
    ],
  },
];
