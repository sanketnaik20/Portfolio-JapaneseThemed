import React from 'react';
import { content } from '../content';

const Achievements = () => {
  return (
    <section className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem' }}>Honors & Achievements</h2>
        <div style={{ display: 'inline-block', textAlign: 'left' }}>
            {content.achievements.map((item, idx) => (
                <div key={idx} style={{ 
                    padding: '1rem 2rem', 
                    marginBottom: '1rem', 
                    borderLeft: '2px solid var(--crimson)',
                    background: 'linear-gradient(to right, white, transparent)' 
                }}>
                    <h4 style={{ margin: 0 }}>{item.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted-gray)' }}>{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Achievements;