'use client';
import styles from './CardProject.module.scss';
import Image from 'next/image';
import imgPortfolio from '../../../public/assets/img/screen-portfolio.png';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbBrandGithubFilled } from 'react-icons/tb';

type propsCardProject = {
  data: {
    id: number;
    image: string;
    title: string;
    githubLink: string;
    externalLink: string;
    skills: string[];
    description: string;
  };
};

const CardProject = ({ data }: propsCardProject) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-header']}>
        <Image
          src={`/assets/img/${data.image}`}
          alt='screenshoot project'
          width={350}
          height={200}
        />
      </div>
      <div className={styles['card-body']}>
        <div className={styles['card-body-title']}>
          <h3>{data.title}</h3>
          <div className='title-project-line'></div>
          <IconContext.Provider value={{ className: 'react-icons-link' }}>
            <div className={styles['card-body-title-icons']}>
              <Link href={data.githubLink} target='about-blank'>
                <TbBrandGithubFilled />
              </Link>
              <Link href={data.externalLink} target='about-blank'>
                <HiOutlineExternalLink />
              </Link>
            </div>
          </IconContext.Provider>
        </div>
        <div className={styles['card-body-skills']}>
          {data.skills.map((skills, i) => {
            if (i + 1 === data.skills.length) {
              return <span key={i}> {skills}</span>;
            } else {
              return <span key={i}> {skills} -</span>;
            }
          })}
        </div>
        <div className={styles['card-body-description']}>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
