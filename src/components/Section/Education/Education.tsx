import Pill from '@/components/Pill/Pill';
import styles from './Education.module.scss';

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
    <section className={styles['container']}>
      <h2 className='title-section-right'>
        Education<span className='dot-title'></span>
      </h2>

      <div>
        {dataEducation.map((element) => {
          return (
            <div key={element.id} className={styles['card']}>
              <div className={styles['card-section']}>
                <h3 className={styles['company']}>{element.school}</h3>
                <span>{element.date}</span>
              </div>
              <div className={styles['card-section']}>
                <h3 className={styles['title']}>{element.title}</h3>
                <span>{element.location}</span>
              </div>
              <span>{element.level}</span>
              <ul className={styles['card-list']}>
                {element.description?.map((desc, i) => {
                  return <li key={i}>{desc}</li>;
                })}
              </ul>
              <div className={styles['card-skills']}>
                {element.skills?.map((skill, i) => {
                  return <Pill key={i} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
