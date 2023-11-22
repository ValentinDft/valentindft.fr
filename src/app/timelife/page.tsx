import { Metadata, NextPage } from 'next';
import styles from './page.module.scss';
import CardTimelife from './_components/CardTimelife/CardTimelife';
import { dataTimelife } from '@/utils/data';
import PageTransition from '@/utils/animation/PageTransition/PageTransition';

export const metadata: Metadata = {
  title: 'Valentin Duffet | TimeLife',
};

const Timelife: NextPage = () => {
  return (
    <div className={styles['timeline']}>
      <PageTransition />
      <div>
        {dataTimelife.map((data) => (
          <CardTimelife
            key={data.id}
            title={data.title}
            date={data.date}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timelife;
