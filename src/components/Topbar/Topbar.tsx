'use client';
import Link from 'next/link';
import styles from './Topbar.module.scss';
import { usePathname } from 'next/navigation';

const Topbar = () => {
  const slug = usePathname();
  const searchWork = true;
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h1>@valentindft{slug}</h1>
        <div className={styles['jobs']}>
          {searchWork ? (
            <>
              <div
                className={styles['bullet']}
                style={{ backgroundColor: '#00adb5' }}
              ></div>
              <p style={{ color: '#00adb5' }}>Open to work</p>
            </>
          ) : (
            <>
              <div
                className={styles['bullet']}
                style={{ backgroundColor: '#E84545' }}
              ></div>
              <p style={{ color: '#E84545' }}>Not open to work</p>
            </>
          )}
        </div>
      </div>

      <nav>
        <Link href='/' className={slug === '/' ? styles['active'] : ''}>
          Home
        </Link>
        <Link
          href='/projects'
          className={slug === '/projects' ? styles['active'] : ''}
        >
          Projects
        </Link>
        <Link
          href='/timelife'
          className={slug === '/timelife' ? styles['active'] : ''}
        >
          TimeLife
        </Link>
      </nav>
    </div>
  );
};

export default Topbar;
