type typeDataExperience = Array<{
  id: number;
  company: string;
  date: string;
  location: string;
  title: string;
  skills: string[];
  description: string[];
}>;

export const dataExperience: typeDataExperience = [
  {
    id: 1,
    company: 'Rakuten DX',
    date: 'Feb. 2022 - Dec. 2023',
    location: 'Montpellier, France',
    title: 'Front-end developer - Apprenticeship',
    skills: [
      'React.js',
      'Angular',
      'TypeScript',
      'Git',
      'Jest',
      'Jira',
      'Scrum',
    ],
    description: [
      'Creation of a tag plan and implementation of analytics events on the front-end part (Angular, Rakuten Analytics).',
      'Developer (Angular and React) on the front-end of a platform for developing low-code/no-code mobile applications. Bug resolution and implementation of new features.',
      "Collaborate with the UX/UI team to improve the product's user experience and accessibility.",
      'International collaboration with Japanese and Indians. Agile practices with Scrum.',
    ],
  },
  {
    id: 2,
    company: 'Butterfly&Co',
    date: 'Apr. 2021 - Jul. 2021',
    location: 'Full-remote',
    title: 'Front-end developer - Intership',
    skills: ['React.js', 'Firebase', 'Styled-component'],
    description: [
      'Creation of a platform providing company coaches with tools for running interactive workshops.',
      'Design and development of the user interface using React.js.',
      'Firebase integration for data management and authentication.',
    ],
  },
  {
    id: 3,
    company: 'La Capsule Academy',
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

type typeDataEducation = Array<{
  id: number;
  school: string;
  date: string;
  location: string;
  title: string;
  skills: string[];
  description: string[];
  level?: string;
}>;

export const dataEducation: typeDataEducation = [
  {
    id: 1,
    title: 'Application Developer - JavaScript React (RNCP level 6)',
    school: 'OpenClassrooms',
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
    id: 2,
    title: 'Formation Développeur Web Fullstack JavaScript',
    school: 'La Capsule Academy',
    location: 'Lyon, France',
    date: 'Sept. 2020 - Nov 2020',
    description: [
      'Intensive bootcamp, 10 projects in 10 weeks on web and mobile development with Javascript.',
    ],
    skills: [
      'JavaScript',
      'React.js',
      'React Native',
      'Redux',
      'Express',
      'MongoDB',
    ],
  },
  {
    id: 3,
    title: 'BTS SNIR (Systèmes Numériques informatique et Réseaux)',
    school: 'Lycée Polyvalent Astier ',
    location: 'Aubenas, France',
    date: 'Sept. 2017 - Jun 2019',
    description: [
      'I was able to work very closely with networks and their security, embedded systems, cloud computing and systems programming.',
    ],
    skills: [
      'Java',
      'HTML/CSS',
      'JavaScript',
      'PHP',
      'SQL',
      'Android',
      'infrastructure reseau',
    ],
    level: 'BAC+2',
  },
];

type typeDataProject = Array<{
  id: number;
  image: string;
  title: string;
  githubLink: string;
  externalLink?: string;
  skills: string[];
  description: string;
}>;

export const dataProject: typeDataProject = [
  {
    id: 1,
    image: 'screen-portfolio.png',
    title: 'Portfolio',
    githubLink: 'https://github.com/ValentinDft',
    externalLink: 'https://github.com/ValentinDft',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Framer Motion'],
    description:
      'This is my new Portfolio. Develop with NextJs and host with Vercel.',
  },
  {
    id: 2,
    image: 'screen-TMC.png',
    title: 'The Movies Collection',
    githubLink: 'https://github.com/ValentinDft/the_movies_collection',
    externalLink: 'https://movie-collection.valentinduffet.fr/',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'ExpressJS', 'MovieDB API'],
    description:
      'Web App for collecting movies and series. Use of the MovieDB api to retrieve information on the most popular films and series currently available, and exploitation of the data received from the api.',
  },
  {
    id: 3,
    image: 'screen-WA.png',
    title: 'Weather App',
    githubLink: 'https://github.com/ValentinDft/Weather_App',
    externalLink: 'https://valentindft.github.io/Weather_App/',
    skills: [
      'ReactJS',
      'JavaScript',
      'Styled-components',
      'LeafletJS',
      'OpenWeatherMap API',
    ],
    description:
      'Web app for searching the weather in a city. Using the OpenWeatherMap api for weather data.',
  },
  {
    id: 4,
    image: 'screen-ISS.png',
    title: 'ISS App',
    githubLink: 'https://github.com/ValentinDft/iss-app',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'LeafletJS', 'IssPosition API'],
    description: 'Web app to view iss current position on earth.',
  },
  {
    id: 5,
    image: 'screen-FE.png',
    title: 'Fisheye',
    githubLink: 'https://github.com/ValentinDft/Fisheye_OPC',
    skills: ['JavaScript', 'HTML/CSS'],
    description:
      'JavaScript platform for photographers to publish their photos - OpenClassrooms project.',
  },
  {
    id: 6,
    image: 'screen-KASA.png',
    title: 'Kasa',
    githubLink: 'https://github.com/ValentinDft/Kasa-app_OPC',
    externalLink: 'https://kasa-ashy-nu.vercel.app/',
    skills: ['ReactJS', 'JavaScript', 'React-router', 'Sass'],
    description: 'Web app for vacation rentals - OpenClassrooms project',
  },
  {
    id: 7,
    image: 'screen-SSee.png',
    title: 'SportSee',
    githubLink: 'https://github.com/ValentinDft/Sportsee-app_OPC',
    externalLink: 'https://sportsee-flax.vercel.app/',
    skills: ['ReactJS', 'JavaScript', 'React-router', 'Sass', 'RechartJS'],
    description:
      'Analytics dashboard with React. Sport performance tracking with graphs  - OpenClassrooms project.',
  },
];