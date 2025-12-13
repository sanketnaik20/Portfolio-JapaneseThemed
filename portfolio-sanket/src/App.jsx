import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Loader from './components/Loader';

// Lazy load heavy/lower sections
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced simulated loading time for snappier feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms is enough to show the loader animation without annoying the user

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="washi-texture"></div>
      <Header />
      <Hero />
      
      <Suspense fallback={<div style={{ height: '100px' }}></div>}>
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
      </Suspense>
    </>
  );
}

export default App;