import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText, Code2, Trophy } from 'lucide-react';

export default function HeroSection({ data }) {
  const { personal, stats } = data;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-status">
              <span className="status-dot"></span>
              <span>{personal.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            <h2 className="hero-subtitle">
              {personal.title}
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '650px', lineHeight: '1.7' }}>
              {personal.tagline}
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              {personal.leetcode && (
                <a 
                  href={personal.leetcode} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary"
                  title="LeetCode Profile (170+ Solved)"
                >
                  <Code2 size={18} color="var(--accent-amber)" />
                  <span>LeetCode (170+ Solved)</span>
                </a>
              )}
            </div>

            <div className="social-bar">
              {personal.leetcode && (
                <a href={personal.leetcode} target="_blank" rel="noreferrer" className="social-link" title="LeetCode (170+ Problems Solved)">
                  <Code2 size={20} />
                </a>
              )}
              {personal.hackerrank && (
                <a href={personal.hackerrank} target="_blank" rel="noreferrer" className="social-link" title="HackerRank Profile">
                  <Trophy size={20} />
                </a>
              )}
              {personal.github && (
                <a href={personal.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub Profile">
                  <Github size={20} />
                </a>
              )}
              {personal.linkedin && (
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
              )}
              {personal.email && (
                <a href={`mailto:${personal.email}`} className="social-link" title="Send Email">
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="avatar-wrapper">
            <div className="avatar-card glass-card">
              <img 
                src={personal.avatar} 
                alt={personal.name} 
                className="avatar-img"
              />
              <div className="avatar-overlay">
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#fff' }}>
                  {personal.name}
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                  {personal.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item glass-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
