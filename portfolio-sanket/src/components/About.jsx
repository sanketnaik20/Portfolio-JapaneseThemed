import React from 'react';
import { content } from '../content';

const About = () => {
  return (
    <section id="about" className="container">
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div className="vertical-text" style={{ flexShrink: 0 }}>
          <h2 style={{ margin: 0, fontSize: '2.5rem' }}>ABOUT</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', flexGrow: 1 }}>
          <div>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {content.profile.summary}
            </p>
            <p>
              Currently a final-year student at <strong>{content.education[0].school}</strong>.
              I approach coding with the discipline of traditional craftsmanship—focusing on clean architecture and efficient backend logic.
            </p>
          </div>
          
          {/* Education Timeline */}
          <div style={{ borderLeft: '1px solid var(--crimson)', paddingLeft: '2rem', position: 'relative' }}>
              {content.education.map((edu, index) => (
                  <div key={index} style={{ marginBottom: '2rem', position: 'relative' }}>
                      {/* Dot */}
                      <span style={{ position: 'absolute', left: '-2.35rem', top: '5px', width: '10px', height: '10px', background: 'var(--crimson)', borderRadius: '50%' }}></span>
                      <h4 style={{ fontSize: '1.1rem' }}>{edu.school}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-gray)' }}>{edu.year}</p>
                      <p>{edu.degree}</p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{edu.gpa}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;