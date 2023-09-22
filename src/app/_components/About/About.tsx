/* eslint-disable react/no-unescaped-entities */
'use client';

import styles from './About.module.scss';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';
import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';
import { useRef } from 'react';

const About = () => {
  const refSection = useRef(null);
  return (
    <FadeInIpAnimation>
      <div className={styles['container']} ref={refSection}>
        <h2 className='title-section-left'>
          About Me<span className='dot-title'></span>
        </h2>
        <div className={styles['description']}>
          <p>
            Young developer, passionate about web technologies. I learned to
            code in high school simply out of curiosity, to understand the
            reality of website development. It was a discovery that allowed me
            to blossom in an extremely rewarding field. I then went on to obtain
            a{' '}
            <span className='title'>
              BTS SNIR (Digital Information Systems and Networks)
            </span>
            . And to consolidate my knowledge and skills in web development, I
            trained as a{' '}
            <span className='title'>fullstack Javascript web developer</span> at
            La Capsule, on the{' '}
            <span className='title'>
              MERN stack (MongoDB, Express, React Js, Node Js)
            </span>
            . And to give me some in-company experience, I worked for 2 years at
            Rakuten DX as a Front-end developer, to prepare the{' '}
            <span className='title'>
              "Application developer - JavaScript React" certification with
              Openclassrooms.
            </span>
          </p>
          <div className={styles['container-img']}>
            <Image
              src={'/assets/img/profile-pic.png'}
              alt='image of me'
              width={250}
              height={250}
            />
          </div>
        </div>

        <IconContext.Provider value={{ className: 'react-icons-link' }}>
          <div className={styles['icons']}>
            <Link
              href='https://www.linkedin.com/in/valentin-duffet/'
              target='about-blank'
              className='oui'
            >
              <FaLinkedinIn />
            </Link>
            <Link href='https://github.com/ValentinDft' target='about-blank'>
              <TbBrandGithubFilled />
            </Link>
          </div>
        </IconContext.Provider>
      </div>
    </FadeInIpAnimation>
  );
};

export default About;
