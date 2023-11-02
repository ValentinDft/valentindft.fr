import styles from './card-timelife.module.scss';

type propsCardTimelife = {
  title: string;
  date: string;
  description: string;
};

const CardTimelife = ({ title, date, description }: propsCardTimelife) => {
  return (
    <div className={styles['card']}>
      <div className={styles['date']}>
        <h3>{date}</h3>
      </div>
      <div className={styles['info']}>
        <h3 className={styles['title']}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardTimelife;
