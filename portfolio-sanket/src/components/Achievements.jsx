import React from 'react';
import { content } from '../content';

const Achievements = () => {
  return (
    <section className="container">
        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '2rem', justifyContent: 'center',paddingTop:'2rem'}}>
            <div className="vertical-text" style={{ flexShrink: 0, borderRight: 'none', borderLeft: '4px solid var(--crimson)', paddingRight: 0, paddingLeft: '1rem' }}>
                <h2 style={{ margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>HONORS</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, maxWidth: '600px' }}>
                {content.achievements.map((item, idx) => (
                    <div key={idx} className="shoji-card" style={{ 
                        padding: '1.5rem', 
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--indigo)' }}>{item.title}</h4>
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--muted-gray)' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Achievements;