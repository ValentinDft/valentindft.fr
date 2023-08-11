/* eslint-disable react/no-unescaped-entities */
import styles from './Header.module.scss';
import Image from 'next/image';
import scrollImg from '../../../public/assets/gif/animation-scroll.gif';

const Header = () => {
  return (
    <div className={styles['container']}>
      <div>
        <span className='title'>Hello, my name is </span>
        <h1
          className='animated-text-word'
          style={{ animationDelay: '0.5s' }}
          id='title-name'
        >
          VALENTIN DUFFET.
        </h1>
        <h2 className='animated-text-word' style={{ animationDelay: '1s' }}>
          I'm a Front-end developer from Montpellier, France
        </h2>
        <p className='animated-text-word' style={{ animationDelay: '1.5s' }}>
          I worked for 2 years at Rakuten DX as a front-end developer using
          React.js and Angular. <br></br>On a low-code/no-code platform for
          generating mobile applications.
        </p>
      </div>
      <div
        className={`${styles['container-img']} animated-text-word`}
        style={{ animationDelay: '2s' }}
      >
        <Image
          src={scrollImg}
          alt='logo scroll animation'
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Header;
