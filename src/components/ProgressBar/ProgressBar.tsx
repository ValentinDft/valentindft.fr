'use client';
import { motion, useScroll } from 'framer-motion';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles['progress-bar']}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
