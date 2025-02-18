'use client';
import {
  Variants,
  useAnimation,
  useInView,
  motion,
  useScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const FadeInIpAnimation = (props: any) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  const animationVariant: Variants = {
    hidden: {
      opacity: 0,
      transform: 'translate(0px,100px)',
    },
    visible: {
      opacity: 1,
      transform: 'translate(0px,0px)',
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible').then(r => r);
    }
  }, [isInView, controls]);

  return (
    <motion.section
      variants={animationVariant}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      ref={ref}
      // style={{
      //   scale: scrollYProgress,
      //   opacity: scrollYProgress,
      // }}
    >
      {props.children}
    </motion.section>
  );
};

export default FadeInIpAnimation;
