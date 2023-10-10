import { FaRegCopyright } from 'react-icons/fa';
import styles from './footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles['footer']}>
      Valentin Duffet <FaRegCopyright /> {year}
    </div>
  );
};

export default Footer;
