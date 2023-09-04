import About from '@/components/Section/About/About';
import Header from '@/components/Header/Header';
import Skills from '@/components/Section/Skills/Skills';
import { Metadata, NextPage } from 'next';
import Experience from '@/components/Section/Experience/Experience';
import Education from '@/components/Section/Education/Education';

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
      <Experience />
      <Education />
    </main>
  );
};

export default Home;
