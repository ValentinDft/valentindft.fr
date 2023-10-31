import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';
import styles from './some-project.module.scss';
import { dataProject } from '@/utils/data';
import CardProject from '@/components/CardProject/CardProject';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const SomeProject = () => {
  const list = [...dataProject.filter((item) => item.highlight === true)];

  return (
    <FadeInIpAnimation>
      <div className={styles['container']}>
        <h2 className='title-section-left'>
          Some project<span className='dot-title'></span>
        </h2>

        <div className={styles['container-list']}>
          {list.map((item) => (
            <CardProject key={item.id} data={item} />
          ))}
        </div>
        <div className={styles['container-action']}>
          <Link href='/projects'>
            See all projects <FaArrowRight />
          </Link>
        </div>
      </div>
    </FadeInIpAnimation>
  );
};

export default SomeProject;
