import { ReactNode, useState } from 'react';
import styles from './Tooltip.module.scss';
import { Variants, motion } from 'framer-motion';

type TooltipProps = {
  icon: ReactNode;
  content: string;
};

const Tooltip = ({ icon, content }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const animationVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div
      className={styles['tooltip-container']}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon}
      {showTooltip && (
        <motion.div
          className={styles['tooltip']}
          variants={animationVariant}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
