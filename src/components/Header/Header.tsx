/* eslint-disable react/no-unescaped-entities */
import styles from './Header.module.scss';
import Image from 'next/image';
import scrollImg from '../../../public/assets/gif/animation-scroll.gif';
import Reveal from '@/utils/Reveal/Reveal';

const Header = () => {
  return (
    <div className={styles['container']}>
      <div>
        <span className='title'>Hello, my name is </span>
        <h1 style={{ position: 'relative' }} id='title-name'>
          VALENTIN DUFFET.
          <Reveal delay={0} />
        </h1>

        <h2 style={{ position: 'relative' }}>
          I'm a <span className='title'>Front-end developer</span> from
          Montpellier, France <Reveal delay={0.4} />
        </h2>
        <p style={{ position: 'relative' }}>
          I worked for 2 years at Rakuten DX as a front-end developer using
          React.js and Angular. <br></br>On a low-code/no-code platform for
          generating mobile applications.
          <Reveal delay={0.6} />
        </p>
      </div>
      <div className={styles['container-img']} style={{ position: 'relative' }}>
        <Image
          src={scrollImg}
          alt='logo scroll animation'
          width={100}
          height={100}
        />
        <Reveal delay={0.8} />
      </div>
    </div>
  );
};

export default Header;
