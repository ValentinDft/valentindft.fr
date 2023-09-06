'use client';
import { useEffect, useRef } from 'react';
import styles from './Pill.module.scss';
import { Variants, useAnimation, useInView, motion } from 'framer-motion';

type propsPill = {
  key: number;
  skill: string;
  delay: number;
};

const Pill = ({ key, skill, delay }: propsPill) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);
  const animationVariant: Variants = {
    hidden: {
      opacity: 0,
      transform: 'translateX(0px,1200px)',
    },
    visible: {
      opacity: 1,
      transform: 'translateX(0px,10px)',
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.span
      key={key}
      className={styles['skills']}
      variants={animationVariant}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeInOut', delay }}
      ref={ref}
    >
      {skill}
    </motion.span>
  );
};

export default Pill;
