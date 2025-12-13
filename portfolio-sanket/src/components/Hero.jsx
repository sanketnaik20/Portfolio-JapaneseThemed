import React from 'react';
import { content } from '../content';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: 'var(--header-height)' 
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ color: 'var(--crimson)', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            NAMASTE, I AM
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            {content.profile.name}
          </h1>
          <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-body)', color: 'var(--muted-gray)', marginBottom: '2rem' }}>
            {content.profile.tagline}
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn">Contact Me</a>
            <a href={content.profile.resume} target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '1px solid var(--crimson)', color: 'var(--crimson)' }}>
              Resume
            </a>
          </div>
        </motion.div>

        {/* Decorative Vertical Text - Japanese Aesthetic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ 
            position: 'relative', 
            height: '400px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            writingMode: 'vertical-rl',
            fontFamily: 'var(--font-heading)',
            fontSize: '4rem',
            color: 'rgba(0,0,0,0.03)',
            userSelect: 'none'
          }}
        >
          backend • developer
          {/* Hanko (Stamp) Representation */}
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: '80px',
            height: '80px',
            border: '3px solid var(--crimson)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--crimson)',
            fontSize: '0.8rem',
            transform: 'rotate(-15deg)',
            writingMode: 'horizontal-tb',
            fontWeight: 'bold',
            opacity: 0.8
          }}>
            SANKET
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;