import React from 'react';
import { content } from '../content';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ marginBottom: '4rem' }}>
      <div style={{ 
          background: 'var(--indigo)', 
          color: 'var(--rice-paper)', 
          padding: '3rem', 
          borderRadius: '4px',
          textAlign: 'center'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Let's Build Something Timeless</h2>
        <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Available for opportunities in backend development and AI integration.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <a href={`mailto:${content.profile.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} /> Email
            </a>
            <a href={content.profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Linkedin size={20} /> LinkedIn
            </a>
            <a href={content.profile.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Github size={20} /> GitHub
            </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem', fontSize: '0.9rem' }}>
            Phone: {content.profile.phone}
        </div>
      </div>
    </section>
  );
};

export default Contact;