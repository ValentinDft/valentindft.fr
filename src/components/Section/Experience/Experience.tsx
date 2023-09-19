import CardExperience from '@/components/CardExperience/CardExperience';
import styles from './Experience.module.scss';
import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';
import { dataExperience } from '@/utils/data';

const Experience = () => {
  return (
    <FadeInIpAnimation>
      <div className={styles['container']}>
        <h2 className='title-section-left'>
          Experience<span className='dot-title'></span>
        </h2>
        <div>
          {dataExperience.map((element, i) => (
            <CardExperience data={element} key={i} />
          ))}
        </div>
      </div>
    </FadeInIpAnimation>
  );
};

export default Experience;
