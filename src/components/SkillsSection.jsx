import React from 'react';
import { Layers, Server, Wrench } from 'lucide-react';

export default function SkillsSection({ data }) {
  const { skills } = data;

  const categoryIcons = [
    <Layers size={22} />,
    <Server size={22} />,
    <Wrench size={22} />
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of technologies, frameworks, and tools I utilize daily.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((cat, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className="category-title">
                {categoryIcons[idx % categoryIcons.length]}
                <span>{cat.category}</span>
              </div>

              <div className="skills-list">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-bar-wrapper">
                    <div className="skill-info">
                      <span>{item.name}</span>
                      <span style={{ color: 'var(--accent-cyan)' }}>{item.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div 
                        className="skill-fill" 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
