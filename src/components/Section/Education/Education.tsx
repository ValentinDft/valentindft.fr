import Pill from '@/components/Pill/Pill';
import styles from './Education.module.scss';
import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';
import CardExperience from '@/components/CardExperience/CardExperience';

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

const Education = () => {
  const dataEducation: typeDataEducation = [
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
        'BTS informatique (Java, Html/Css, JavaScript, Php, MySql et infrastructure reseau...).',
      ],
      skills: [
        'Java',
        'HTML/CSS',
        'JavaScript',
        'PHP',
        'MySql',
        'infrastructure reseau',
      ],
      level: 'BAC+2',
    },
  ];
  return (
    <FadeInIpAnimation>
      <div className={styles['container']}>
        <h2 className='title-section-right'>
          Education<span className='dot-title'></span>
        </h2>

        <div>
          {dataEducation.map((element, i) => {
            return <CardExperience data={element} key={i} />;
          })}
        </div>
      </div>
    </FadeInIpAnimation>
  );
};

export default Education;
