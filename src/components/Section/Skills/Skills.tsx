'use client';

import styles from './Skills.module.scss';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiReact, SiJest } from 'react-icons/si';
import {
  TbBrandNextjs,
  TbBrandAngular,
  TbBrandRedux,
  TbBrandGit,
  TbBrandFigma,
} from 'react-icons/tb';
import { LiaJira } from 'react-icons/lia';
import { IconContext } from 'react-icons';
import Tooltip from '../../Tooltip/Tooltip';
import FadeInIpAnimation from '@/utils/animation/FadeInUp/FadeInUp';

const Skills = () => {
  return (
    <FadeInIpAnimation>
      <div className={styles['container']}>
        <h2 className='title-section-right'>
          Skills<span className='dot-title'></span>
        </h2>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <div className={styles['skills']}>
            <Tooltip icon={<FaHtml5 />} content='HTML' />
            <Tooltip icon={<FaCss3Alt />} content='CSS' />
            <Tooltip icon={<SiJavascript />} content='JavaScript' />
            <Tooltip icon={<SiTypescript />} content='TypeScript' />
            <Tooltip icon={<SiReact />} content='React.js' />
            <Tooltip icon={<TbBrandNextjs />} content='Next.js' />
            <Tooltip icon={<TbBrandAngular />} content='Angular' />
            <Tooltip icon={<TbBrandRedux />} content='Redux' />
            <Tooltip icon={<TbBrandGit />} content='Git' />
            <Tooltip icon={<SiJest />} content='Jest' />
            <Tooltip icon={<LiaJira />} content='Jira' />
            <Tooltip icon={<TbBrandFigma />} content='Figma' />
          </div>
        </IconContext.Provider>
      </div>
    </FadeInIpAnimation>
  );
};

export default Skills;
