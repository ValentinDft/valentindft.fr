'use client';
import { useEffect, useRef } from 'react';
import styles from './Pill.module.scss';
import { Variants, useAnimation, useInView, motion } from 'framer-motion';

type propsPill = {
  skill: string;
  delay: number;
};

const Pill = ({ skill, delay }: propsPill) => {
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
    <motion.span
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
