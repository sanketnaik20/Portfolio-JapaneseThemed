import React from 'react';
import { content } from '../content';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Featured Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {content.projects.map((project, index) => (
            <div key={index} className="project-card" style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '2rem',
                position: 'relative',
                transition: 'transform 0.3s ease'
            }}>
                <style>{`.project-card:hover { transform: translateY(-5px); border-color: var(--crimson); }`}</style>
                <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--muted-gray)' }}>{project.description}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    {project.tech.map(t => (
                        <span key={t} style={{ fontSize: '0.75rem', color: 'var(--indigo)', background: '#eee', padding: '2px 6px' }}>
                            {t}
                        </span>
                    ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    <Github size={16} /> View Code
                </a>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;