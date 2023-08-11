import About from '@/components/About/About';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Skills from '@/components/Skills/Skills';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <About />
      <Skills />
    </main>
  );
};

export default Home;
