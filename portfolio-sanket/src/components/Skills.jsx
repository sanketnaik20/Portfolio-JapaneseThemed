import React from 'react';
import { content } from '../content';

const Skills = () => {
  return (
    <section id="skills" className="container">
       <h2 style={{ marginBottom: '2rem', textAlign: 'right', borderRight: '4px solid var(--crimson)', paddingRight: '1rem' }}>Technical Proficiency</h2>
       
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {Object.entries(content.skills).map(([category, items]) => (
            <div key={category} style={{ 
                background: '#fff', 
                padding: '1.5rem', 
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: 'var(--shoji-shadow)' 
            }}>
                <h3 style={{ textTransform: 'capitalize', marginBottom: '1rem', color: 'var(--indigo)', fontSize: '1.1rem' }}>{category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {items.map(skill => (
                        <span key={skill} style={{ 
                            fontSize: '0.85rem', 
                            padding: '4px 10px', 
                            background: 'var(--rice-paper)', 
                            border: '1px solid #ddd', 
                            borderRadius: '2px' 
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          ))}
       </div>
    </section>
  );
};

export default Skills;