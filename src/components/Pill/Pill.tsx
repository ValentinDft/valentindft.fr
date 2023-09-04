import styles from './Pill.module.scss';

type propsPill = {
  key: number;
  skill: string;
};

const Pill = ({ key, skill }: propsPill) => {
  return (
    <span key={key} className={styles['skills']}>
      {skill}
    </span>
  );
};

export default Pill;
