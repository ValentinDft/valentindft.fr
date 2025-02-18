import { v4 as uuidv4 } from 'uuid';

type typeDataExperience = Array<{
  id: string;
  company: string;
  date: string;
  location: string;
  title: string;
  skills: string[];
  description: string[];
}>;

export const dataExperience: typeDataExperience = [
  {
    id: uuidv4(),
    company: 'Inovéa',
    date: 'Dec. 2023 - Now',
    location: 'Montpellier, France',
    title: 'Front-end developer',
    skills: [
      'Angular',
      'TypeScript',
      'Git',
      'Jest',
      'Jira',
      'Scrum',
    ],
    description: [
      'Develop new features and bug fixes for INOVÉA Business angular application.',
      'Graphic redesign of an old application.',
      'Creation and supply of an Angular internal component library.'
    ],
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
  id: string;
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
      'network infrastructure',
    ],
    level: 'BAC+2',
  },
];

type typeDataProject = Array<{
  id: string;
  image: string;
  title: string;
  githubLink: string;
  externalLink?: string;
  skills: string[];
  description: string;
  highlight: boolean;
}>;

export const dataProject: typeDataProject = [
  {
    id: uuidv4(),
    image: 'screen-GC.png',
    title: 'Grid Color',
    githubLink: 'https://github.com/ValentinDft/grid-color',
    externalLink: 'https://grid-color.vercel.app/',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Zustand'],
    description: 'With Grid Color you can try your hand at pixel war.',
    highlight: true,
  },
  {
    id: uuidv4(),
    image: 'screen-CV.png',
    title: 'Colorz Vizualization',
    githubLink: 'https://github.com/ValentinDft/colorz-vizualization',
    externalLink: 'https://colorz-vizualization.vercel.app/',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Zustand', 'zod'],
    description:
      'Colorz Vizialization gives you a preview of the colors you want to use in your web platform.',
    highlight: true,
  },
  {
    id: uuidv4(),
    image: 'screen-portfolio.png',
    title: 'Portfolio',
    githubLink: 'https://github.com/ValentinDft',
    externalLink: 'https://github.com/ValentinDft',
    skills: ['NextJS', 'TypeScript', 'Sass', 'Framer Motion'],
    description:
      'This is my new Portfolio. Develop with NextJs and host with Vercel.',
    highlight: false,
  },
  {
    id: uuidv4(),
    image: 'screen-TMC.png',
    title: 'The Movies Collection',
    githubLink: 'https://github.com/ValentinDft/the_movies_collection',
    externalLink: 'https://movie-collection.valentinduffet.fr/',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'ExpressJS', 'MovieDB API'],
    description:
      'Web App for collecting movies and series. Use of the MovieDB api to retrieve information on the most popular films and series currently available, and exploitation of the data received from the api.',
    highlight: false,
  },
  {
    id: uuidv4(),
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
    highlight: false,
  },
  {
    id: uuidv4(),
    image: 'screen-ISS.png',
    title: 'ISS App',
    githubLink: 'https://github.com/ValentinDft/iss-app',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'LeafletJS', 'IssPosition API'],
    description: 'Web app to view iss current position on earth.',
    highlight: false,
  },
  {
    id: uuidv4(),
    image: 'screen-FE.png',
    title: 'Fisheye',
    githubLink: 'https://github.com/ValentinDft/Fisheye_OPC',
    skills: ['JavaScript', 'HTML/CSS'],
    description:
      'JavaScript platform for photographers to publish their photos - OpenClassrooms project.',
    highlight: false,
  },
  {
    id: uuidv4(),
    image: 'screen-KASA.png',
    title: 'Kasa',
    githubLink: 'https://github.com/ValentinDft/Kasa-app_OPC',
    externalLink: 'https://kasa-ashy-nu.vercel.app/',
    skills: ['ReactJS', 'JavaScript', 'React-router', 'Sass'],
    description: 'Web app for vacation rentals - OpenClassrooms project',
    highlight: true,
  },
  {
    id: uuidv4(),
    image: 'screen-SSee.png',
    title: 'SportSee',
    githubLink: 'https://github.com/ValentinDft/Sportsee-app_OPC',
    externalLink: 'https://sportsee-flax.vercel.app/',
    skills: ['ReactJS', 'JavaScript', 'React-router', 'Sass', 'RechartJS'],
    description:
      'Analytics dashboard with React. Sport performance tracking with graphs  - OpenClassrooms project.',
    highlight: false,
  },
];

type typeDataTimelife = Array<{
  id: string;
  title: string;
  date: string;
  description: string;
  category?: 'school' | 'job';
}>;

export const dataTimelife: typeDataTimelife = [
  {
    id: uuidv4(),
    title: 'Birth',
    date: '31 Jan. 1998',
    description:
      'I was born in Montpellier, a pretty town in the south of France.',
  },
  {
    id: uuidv4(),
    title:
      'Baccalauréat Pro - ELectrotechnics, Energy, Communicating Equipment',
    date: 'Sept. 2013 - Jun. 2016',
    description:
      'I studied at the Astier High School in Aubenas, France. Where I obtained my baccalaureate in electronic engineering.',
    category: 'school',
  },
  {
    id: uuidv4(),
    title: 'BTS - Digital Systems Computing and Networks',
    date: 'Sept. 2017 - Jun. 2019',
    description:
      'I studied at the Astier High School in Aubenas, France. Where I obtained my bac +2 in computer science.',
    category: 'school',
  },
  {
    id: uuidv4(),
    title: 'Fullstack JavaScript Web Developer Bootcamp',
    date: 'Sept. 2020 - Nov. 2020',
    description:
      'I studied at La Capsule Academy where I follow a 10-week intensive bootcamp on web and mobile development with JavaScript.',
    category: 'school',
  },
  {
    id: uuidv4(),
    title: 'Teacher Assistant',
    date: 'Jan. 2021 - Feb. 2021',
    description:
      'Following the Bootcamp at La Capsule Academy. I was able to help new students as an assistant teacher. By providing technical and course assistance',
    category: 'job',
  },
  {
    id: uuidv4(),
    title: 'Front-end developer - Intership',
    date: 'Avr. 2021 - Jul. 2021',
    description:
      'Following the Bootcamp at La Capsule Academy. I was able to do an internship at Butterfly&Co as a front-end React.js developper. To build an internal app with another student.',
    category: 'job',
  },
  {
    id: uuidv4(),
    title: 'Application Developer - JavaScript React (RNCP level 6) - BAC+4',
    date: 'Fev. 2022 - Fev. 2024',
    description:
      'I then decided to take a work-study course in front-end development at OpenClassrooms to gain experience in a company.',
    category: 'school',
  },
  {
    id: uuidv4(),
    title: 'Front-end developer - Apprenticeship',
    date: 'Fev. 2022 - Dec. 2023',
    description:
      'Related to the OpenClassrooms diploma. I work 2 years in Rakuten DX as a front-end developer on Angular and React.js.',
    category: 'job',
  },
  {
    id: uuidv4(),
    title: 'Front-end developer',
    date: 'Dec. 2023 - Now',
    description:
        'Following my Apprenticeship, I was recruited by Inovéa to join their IT team as an angular front-end developer.',
    category: 'job',
  }
];
