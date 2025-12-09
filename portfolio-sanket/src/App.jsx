import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <>
      <div className="washi-texture"></div>
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;