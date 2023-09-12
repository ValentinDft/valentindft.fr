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
    {
      id: 2,
      image: 'screen-TMC.png',
      title: 'The Movies Collection',
      githubLink: 'https://github.com/ValentinDft/the_movies_collection',
      externalLink: 'https://movie-collection.valentinduffet.fr/',
      skills: ['ReactJS', 'JavaScript', 'Redux', 'ExpressJS', 'MovieDB API'],
      description:
        "Web App de collection de films et de séries. Utilisation de l'api MovieDB pour récupérer les informations des films et séries les plus populaires actuellement et exploitation des données reçues de l'api.",
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
