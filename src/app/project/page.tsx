import { Metadata, NextPage } from 'next';
import styles from './page.module.scss';
import PageTransition from '@/utils/PageTransition/PageTransition';

export const metadata: Metadata = {
  title: 'Portfolio | Valentin Duffet | Project',
};

const Project: NextPage = () => {
  return (
    <div className={styles['container']}>
      Project <PageTransition />
    </div>
  );
};

export default Project;
