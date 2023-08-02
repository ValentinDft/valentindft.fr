'use client';

import styles from './About.module.scss';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles['container']}>
      <h1 className='title-section-left'>About Me</h1>
      <div className={styles['description']}>
        <p>
          Young developer, passionate about web technologies. I learned to code
          in high school simply out of curiosity, to understand the reality of
          website development. It was a discovery that allowed me to blossom in
          an extremely rewarding field. I then went on to obtain a{' '}
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
        <img src='./assets/img/profile-pic.png' alt='image of me' />
      </div>
      <IconContext.Provider value={{ className: 'react-icons-link' }}>
        <div className={styles['icons']}>
          <Link
            href='https://www.linkedin.com/in/valentin-duffet/'
            target='about-blank'
          >
            <FaLinkedinIn />
          </Link>
          <Link href='https://github.com/ValentinDft' target='about-blank'>
            <TbBrandGithubFilled />
          </Link>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default About;
