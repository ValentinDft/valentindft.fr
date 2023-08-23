import styles from './Experience.module.scss';

const Experience = () => {
  const dataExperience = [
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
    },
    {
      id: 2,
      company: 'Butterfly&Co',
      date: 'Apr. 2021 - Jul. 2021',
      location: 'Full-remote',
      title: 'Front-end developer - Intership',
      skills: ['React.js', 'Firebase', 'Styled-component'],
    },
    {
      id: 3,
      company: 'La Capsule Academy',
      date: 'Jan. 2021 - Feb. 2021',
      location: 'Lyon, France',
      title: 'Teacher assistant',
      skills: ['React.js', 'React Native', 'MongoDB', 'Redux'],
    },
  ];
  return (
    <div className={styles['container']}>
      <h2 className='title-section-left'>
        Experience<span className='dot-title'></span>
      </h2>
      <div>
        {dataExperience.map((element) => {
          return (
            <div key={element.id} className={styles['card']}>
              <div className={styles['card-section']}>
                <h3 className={styles['company']}>{element.company}</h3>
                <span>{element.date}</span>
              </div>
              <div className={styles['card-section']}>
                <h3 className={styles['title']}>{element.title}</h3>
                <span>{element.location}</span>
              </div>
              <p>Je suis la description...............................</p>
              <div className={styles['card-skills']}>
                {element.skills?.map((skill, i) => {
                  return (
                    <span key={i} className={styles['skills']}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
