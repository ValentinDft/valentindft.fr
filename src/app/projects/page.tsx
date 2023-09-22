import { Metadata, NextPage } from 'next';
import styles from './page.module.scss';
import PageTransition from '@/utils/animation/PageTransition/PageTransition';
import CardProject from '@/app/projects/_components/CardProject/CardProject';
import { dataProject } from '@/utils/data';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import { TbBrandGithubFilled } from 'react-icons/tb';

export const metadata: Metadata = {
  title: 'Valentin Duffet | Project',
};

const Project: NextPage = () => {
  return (
    <div className={styles['container']}>
      <PageTransition />

      <div className={styles['container-list-project']}>
        {dataProject.map((project) => (
          <CardProject key={project.id} data={project} />
        ))}
      </div>
      <div className={styles['container-footer']}>
        <Link
          href={'https://github.com/ValentinDft?tab=repositories'}
          target='about-blank'
        >
          Check all my github repo
        </Link>
      </div>
    </div>
  );
};

export default Project;
