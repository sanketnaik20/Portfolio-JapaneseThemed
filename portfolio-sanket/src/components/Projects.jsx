import React from 'react';
import { content } from '../content';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div style={{ display: 'flex', gap: '2rem',marginTop:'2rem' }}>
        {/* Vertical Header */}
        <div className="vertical-text" style={{ flexShrink: 0 }}>
          <h2 style={{ margin: 0, fontSize: '2.5rem' }}>PROJECTS</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', flexGrow: 1 }}>
          {content.projects.map((project, index) => (
              <div key={index} className="shoji-card">
                  <h3 style={{ marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--muted-gray)', position: 'relative', zIndex: 1 }}>{project.description}</p>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                      {project.tech.map(t => (
                          <span key={t} style={{ fontSize: '0.75rem', color: 'var(--indigo)', background: '#eee', padding: '2px 6px' }}>
                              {t}
                          </span>
                      ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="ink-brush" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>
                      <Github size={16} /> View Code
                  </a>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;