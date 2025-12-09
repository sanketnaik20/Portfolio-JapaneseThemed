import React from 'react';
import { content } from '../content';

const Experience = () => {
  const { internship } = content;
  return (
    <section id="experience" className="container">
        <h2 style={{ marginBottom: '2rem', borderLeft: '4px solid var(--crimson)', paddingLeft: '1rem' }}>Experience</h2>
        
        <div style={{ 
            background: '#fff', 
            padding: '2rem', 
            borderLeft: '4px solid var(--indigo)',
            boxShadow: 'var(--shoji-shadow)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background pattern hint */}
            <div style={{ position: 'absolute', right: '-20px', top: '-20px', fontSize: '10rem', opacity: 0.03, pointerEvents: 'none' }}>
                職
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>{internship.company}</h3>
                <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--crimson)' }}>{internship.period}</span>
            </div>
            
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{internship.role} | {internship.location}</p>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>{internship.description}</p>
            
            <ul style={{ paddingLeft: '1.2rem' }}>
                {internship.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                ))}
            </ul>

            <div style={{ marginTop: '1.5rem' }}>
                <a href={internship.repo} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '0.8rem' }}>
                    View Code on GitHub
                </a>
            </div>
        </div>
    </section>
  );
};

export default Experience;