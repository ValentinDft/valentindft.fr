import CardExperience from '@/components/CardExperience/CardExperience';
import styles from './Experience.module.scss';
import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';

type typeDataExperience = Array<{
  id: number;
  company: string;
  date: string;
  location: string;
  title: string;
  skills: string[];
  description: string[];
}>;

const Experience = () => {
  const dataExperience: typeDataExperience = [
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

  return (
    <FadeInIpAnimation>
      <div className={styles['container']}>
        <h2 className='title-section-left'>
          Experience<span className='dot-title'></span>
        </h2>
        <div>
          {dataExperience.map((element, i) => {
            return <CardExperience data={element} key={i} />;
          })}
        </div>
      </div>
    </FadeInIpAnimation>
  );
};

export default Experience;
