import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection({ data }) {
  const { experience, education } = data;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Career & Education</span>
          <h2 className="section-title">Experience Timeline</h2>
          <p className="section-subtitle">
            A chronological timeline of my professional roles and academic foundation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          {/* Work Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.6rem', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', borderRadius: 'var(--radius-md)' }}>
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Work Experience</h3>
            </div>

            <div className="timeline">
              {experience.map(exp => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-node"></div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                      <span className="timeline-date">{exp.period}</span>
                    </div>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.6rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-indigo)', borderRadius: 'var(--radius-md)' }}>
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Education & Certs</h3>
            </div>

            <div className="timeline">
              {education.map(edu => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-node" style={{ borderColor: 'var(--accent-indigo)', boxShadow: '0 0 10px var(--accent-indigo)' }}></div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{edu.degree}</h4>
                        <div className="timeline-company" style={{ color: 'var(--accent-indigo)' }}>{edu.institution}</div>
                      </div>
                      <span className="timeline-date">{edu.period}</span>
                    </div>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
