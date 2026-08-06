import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

export default function ProjectsSection({ data }) {
  const { projects } = data;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['All', 'Web App', 'AI/ML', 'Mobile'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore recent web applications, artificial intelligence implementations, and open-source software.
          </p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-img-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                />
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-primary" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-secondary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  <button 
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-icon" 
                    style={{ width: '36px', height: '36px' }}
                    title="Quick Details View"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{activeModalProject.title}</h3>
                <button 
                  onClick={() => setActiveModalProject(null)} 
                  className="btn btn-icon"
                >
                  ✕
                </button>
              </div>

              <img 
                src={activeModalProject.image} 
                alt={activeModalProject.title} 
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }} 
              />

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {activeModalProject.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>Technologies Used</h4>
                <div className="project-tech">
                  {activeModalProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {activeModalProject.liveUrl && (
                  <a href={activeModalProject.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} />
                    <span>Visit Live Site</span>
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a href={activeModalProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
