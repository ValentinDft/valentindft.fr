import About from '@/components/Section/About/About';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Skills from '@/components/Section/Skills/Skills';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Valentin Duffet',
  description: 'Welcome to my new portfolio',
};

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
