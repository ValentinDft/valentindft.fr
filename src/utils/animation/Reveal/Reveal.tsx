'use client';
import { Variants, motion } from 'framer-motion';

type propsReveal = {
  delay: number;
};

const Reveal = ({ delay }: propsReveal) => {
  const animationVariant: Variants = {
    hidden: {
      left: 0,
    },
    visible: {
      left: '100%',
    },
  };

  const animationStyle: any = {
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 0,
    right: 0,
    background: '#ffd275',
    zIndex: 20,
  };
  return (
    <motion.span
      variants={animationVariant}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.8, ease: 'easeInOut', delay: delay }}
      style={animationStyle}
    />
  );
};

export default Reveal;
