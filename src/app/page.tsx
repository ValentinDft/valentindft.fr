import About from '@/app/_components/Section/About/About';
import Header from '@/app/_components/Section/Header/Header';
import Skills from '@/app/_components/Section/Skills/Skills';
import { Metadata, NextPage } from 'next';
import Experience from '@/app/_components/Section/Experience/Experience';
import Education from '@/app/_components/Section/Education/Education';
import SomeProject from './_components/Section/Project/SomeProject';

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
      <SomeProject />
    </main>
  );
};

export default Home;
