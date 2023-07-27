import About from '@/components/About/About';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
    </main>
  );
}
