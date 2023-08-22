'use client';
import styles from './PageTransition.module.scss';
import { Variants, motion } from 'framer-motion';
import React from 'react';

function PageTransition() {
  const animationVariant: Variants = {
    hidden: {
      translateX: '100%',
      width: '100%',
    },
    visible: {
      translateX: '0%',
      width: '0%',
    },
  };
  return (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={animationVariant}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className={styles['animation']}
        style={{ backgroundColor: '#75cac3' }}
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={animationVariant}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
        className={styles['animation']}
        style={{ backgroundColor: '#14303f' }}
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={animationVariant}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        className={styles['animation']}
        style={{ backgroundColor: '#ffd275' }}
      />
    </>
  );
}

export default PageTransition;
