import React from 'react';
import { content } from '../content';

const About = () => {
  return (
    <section id="about" className="container">
      <div style={{ display: 'flex', gap: '2rem', paddingTop: '2rem' }}>
        <div className="vertical-text" style={{ flexShrink: 0 }}>
          <h2 style={{ margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>ABOUT</h2>
        </div>

        <div className="shoji-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', flexGrow: 1, position: 'relative' }}>
          {/* Background Character for 'Learn/Study' (Gaku) */}
          <div style={{ position: 'absolute', right: '10px', bottom: '10px', fontSize: '8rem', opacity: 0.05, pointerEvents: 'none', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
              学
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--crimson)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Who I Am</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {content.profile.summary}
            </p>
            <p style={{ lineHeight: '1.8' }}>
              Currently a final-year student at <strong>{content.education[0].school}</strong>.
              I approach coding with the discipline of traditional craftsmanship—focusing on clean architecture and efficient backend logic.
            </p>
          </div>
          
          {/* Education Timeline */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--crimson)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Education</h3>
            <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem', position: 'relative' }}>
                {content.education.map((edu, index) => (
                    <div key={index} style={{ marginBottom: '2.5rem', position: 'relative' }}>
                        {/* Dot */}
                        <span style={{ 
                            position: 'absolute', 
                            left: '-2.4rem', 
                            top: '6px', 
                            width: '12px', 
                            height: '12px', 
                            background: 'var(--rice-paper)', 
                            border: '3px solid var(--crimson)', 
                            borderRadius: '50%' 
                        }}></span>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{edu.school}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--muted-gray)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{edu.year}</p>
                        <p style={{ marginBottom: '0.2rem' }}>{edu.degree}</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--indigo)' }}>{edu.gpa}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;