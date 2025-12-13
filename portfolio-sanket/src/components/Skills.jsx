import React from 'react';
import { content } from '../content';

const Skills = () => {
  return (
    <section id="skills" className="container">
       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '2rem',paddingTop:'2rem' }}>
          {/* Vertical Header - Right Aligned */}
          <div className="vertical-text" style={{ flexShrink: 0, borderRight: 'none', borderLeft: '4px solid var(--crimson)', paddingRight: 0, paddingLeft: '1rem' }}>
            <h2 style={{ margin: 0, fontSize: '2.5rem' }}>SKILLS</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', flexGrow: 1 }}>
              {Object.entries(content.skills).map(([category, items]) => (
                <div key={category} className="shoji-card" style={{ padding: '2rem', textAlign: 'left' }}>
                    <h3 style={{ 
                        textTransform: 'uppercase', 
                        marginBottom: '1.5rem', 
                        color: 'var(--crimson)', 
                        fontSize: '1rem', 
                        letterSpacing: '0.1em',
                        borderBottom: '2px solid var(--border-color)',
                        paddingBottom: '0.5rem',
                        display: 'inline-block'
                    }}>
                        {category}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {items.map(skill => (
                            <span key={skill} style={{ 
                                fontSize: '0.9rem', 
                                padding: '6px 12px', 
                                background: 'rgba(255,255,255,0.5)', 
                                border: '1px solid var(--sumi-ink)', 
                                borderRadius: '4px',
                                transition: 'all 0.2s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--sumi-ink)';
                                e.currentTarget.style.color = 'var(--rice-paper)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                                e.currentTarget.style.color = 'var(--sumi-ink)';
                            }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
              ))}
          </div>
       </div>
    </section>
  );
};

export default Skills;