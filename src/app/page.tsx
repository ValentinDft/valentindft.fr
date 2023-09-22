import About from '@/app/_components/About/About';
import Header from '@/app/_components/Header/Header';
import Skills from '@/app/_components/Skills/Skills';
import { Metadata, NextPage } from 'next';
import Experience from '@/app/_components/Experience/Experience';
import Education from '@/app/_components/Education/Education';

export const metadata: Metadata = {
  title: 'Valentin Duffet | Portfolio',
  description: 'Welcome to my portfolio',
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
