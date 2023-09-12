import { Metadata, NextPage } from 'next';
import styles from './page.module.scss';
import PageTransition from '@/utils/animation/PageTransition/PageTransition';
import CardProject from '@/components/CardProject/CardProject';

export const metadata: Metadata = {
  title: 'Portfolio | Valentin Duffet | Project',
};

type typeDataProject = Array<{
  id: number;
  image: string;
  title: string;
  githubLink: string;
  externalLink: string;
  skills: string[];
  description: string;
}>;

const Project: NextPage = () => {
  const dataProject: typeDataProject = [
    {
      id: 1,
      image: 'screen-portfolio.png',
      title: 'Portfolio',
      githubLink: 'https://github.com/ValentinDft',
      externalLink: 'https://github.com/ValentinDft',
      skills: ['NextJS', 'TypeScript', 'Sass', 'Framer Motion'],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore hic quibusdam perferendis, esse minima cumque aut dolor, illum perspiciatis, debitis veritatis error voluptatum quos nostrum excepturi praesentium saepe neque necessitatibus.',
    },
  ];
  return (
    <div className={styles['container']}>
      <PageTransition />
      {dataProject.map((project) => (
        <CardProject key={project.id} data={project} />
      ))}
    </div>
  );
};

export default Project;
