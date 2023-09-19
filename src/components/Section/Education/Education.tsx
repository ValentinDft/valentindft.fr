import Pill from '@/components/Pill/Pill';
import styles from './Education.module.scss';
import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';
import CardExperience from '@/components/CardExperience/CardExperience';
import { dataEducation } from '@/utils/data';

const Education = () => {
  return (
    <FadeInIpAnimation>
      <div className={styles['container']}>
        <h2 className='title-section-right'>
          Education<span className='dot-title'></span>
        </h2>

        <div>
          {dataEducation.map((element, i) => (
            <CardExperience data={element} key={i} />
          ))}
        </div>
      </div>
    </FadeInIpAnimation>
  );
};

export default Education;
