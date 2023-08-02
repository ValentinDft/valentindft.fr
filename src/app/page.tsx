import About from '@/components/About/About';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
    </main>
  );
}
