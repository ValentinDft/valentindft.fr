'use client';
import styles from './CardProject.module.scss';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { useEffect, useRef } from 'react';
import { Variants, motion, useAnimation, useInView } from 'framer-motion';

type propsCardProject = {
  data: {
    id: string;
    image: string;
    title: string;
    githubLink: string;
    externalLink?: string;
    skills: string[];
    description: string;
  };
  delay: number;
};

const CardProject = ({ data, delay }: propsCardProject) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);
  const animationVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  return (
    <motion.div
      className={styles['card']}
      variants={animationVariant}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeInOut', delay }}
      ref={ref}
    >
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
              {data?.externalLink && (
                <Link href={data.externalLink} target='about-blank'>
                  <HiOutlineExternalLink />
                </Link>
              )}
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
    </motion.div>
  );
};

export default CardProject;
