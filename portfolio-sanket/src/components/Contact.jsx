import React from 'react';
import { content } from '../content';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ marginBottom: '4rem',paddingTop:'2rem' }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Vertical Header */}
        <div className="vertical-text" style={{ flexShrink: 0 }}>
          <h2 style={{ margin: 0, fontSize: '2.5rem' }}>CONTACT</h2>
        </div>

        <div className="shoji-card" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem' }}>
            {/* Background Character for 'Connection' (En) */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '15rem', opacity: 0.03, pointerEvents: 'none', fontFamily: 'var(--font-heading)' }}>
                縁
            </div>

            <h2 style={{ marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Let's Build Something Timeless</h2>
            <p style={{ marginBottom: '2.5rem', color: 'var(--muted-gray)', maxWidth: '600px', position: 'relative', zIndex: 1 }}>
                I am currently looking for full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <a href={`mailto:${content.profile.email}`} className="btn ink-brush" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
                    <Mail size={20} /> Say Hello
                </a>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                <a href={content.profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--indigo)', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                    <Linkedin size={20} /> LinkedIn
                </a>
                <a href={content.profile.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--indigo)', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                    <Github size={20} /> GitHub
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;