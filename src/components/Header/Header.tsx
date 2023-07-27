import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['container']}>
      <div>
        <span className='title'>Hello, my name is </span>
        <h1>VALENTIN DUFFET.</h1>
        <h2>I'm a Front-end developer from Montpellier, France</h2>
        <p>
          I worked for 2 years at Rakuten DX as a front-end developer using
          React.js and Angular. <br></br>On a low-code/no-code platform for
          generating mobile applications.
        </p>
      </div>
      <div className={styles['container-img']}>
        <img
          src='./assets/gif/animation-scroll.gif'
          alt='logo scroll animation'
        ></img>
      </div>
    </div>
  );
};

export default Header;
