import { ReactNode, useState } from 'react';
import styles from './Tooltip.module.scss';

type TooltipProps = {
  icon: ReactNode;
  content: string;
};

const Tooltip = ({ icon, content }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={styles['tooltip-container']}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon}
      {showTooltip && <div className={styles['tooltip']}>{content}</div>}
    </div>
  );
};

export default Tooltip;
