import React from 'react';
import { content } from '../content';

const Achievements = () => {
  return (
    <section className="container">
        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '2rem', justifyContent: 'center' }}>
            <div className="vertical-text" style={{ flexShrink: 0, borderRight: 'none', borderLeft: '4px solid var(--crimson)', paddingRight: 0, paddingLeft: '1rem' }}>
                <h2 style={{ margin: 0, fontSize: '2.5rem' }}>HONORS</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, maxWidth: '600px' }}>
                {content.achievements.map((item, idx) => (
                    <div key={idx} style={{ 
                        padding: '1rem 2rem', 
                        borderLeft: '2px solid var(--crimson)',
                        background: 'linear-gradient(to right, white, transparent)',
                        textAlign: 'left'
                    }}>
                        <h4 style={{ margin: 0 }}>{item.title}</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted-gray)' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Achievements;