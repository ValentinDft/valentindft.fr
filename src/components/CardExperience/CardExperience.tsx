'use client';
import styles from './CardExperience.module.scss';
import Pill from '@/components/Pill/Pill';

type propsCardExperience = {
  data: any;
};

const CardExperience = ({ data }: propsCardExperience) => {
  let delay = 0.2;
  return (
    <div key={data.id} className={styles['card']}>
      <div className={styles['card-section']}>
        <h3 className={styles['company']}>{data.company || data.school}</h3>
        <span>{data.date}</span>
      </div>
      <div className={styles['card-section']}>
        <h3 className={styles['title']}>{data.title}</h3>
        <span>{data.location}</span>
      </div>
      <ul className={styles['card-list']}>
        {data.description?.map((desc: string, i: number) => {
          return <li key={i}>{desc}</li>;
        })}
      </ul>
      <div className={styles['card-skills']}>
        {data.skills?.map((skill: string, i: number) => {
          delay = delay + 0.2;
          return <Pill key={i} skill={skill} delay={delay} />;
        })}
      </div>
    </div>
  );
};

export default CardExperience;
