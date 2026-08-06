import React from 'react';
import { MapPin, Mail, Phone, Code, Terminal, Cpu, Award, Globe, BookOpen } from 'lucide-react';

export default function AboutSection({ data }) {
  const { personal } = data;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Biography</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know my academic background, technical focus, and engineering achievements.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }} className="gradient-text">
                Computer Science & Engineering Student
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {personal.about}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={18} color="var(--accent-cyan)" />
                  <span><strong>Location:</strong> {personal.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                  <Mail size={18} color="var(--accent-cyan)" />
                  <span><strong>Email:</strong> {personal.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                  <Phone size={18} color="var(--accent-cyan)" />
                  <span><strong>Phone:</strong> {personal.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                  <Globe size={18} color="var(--accent-cyan)" />
                  <span><strong>Languages:</strong> English (Proficient), Telugu (Native)</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>VIT-AP B.Tech CSE (CGPA: 9.27)</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Consistently top academic performer (Currently in 3-1 Semester)</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)' }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Intermediate 98.4% & EAMCET Rank 2919</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sri Chaitanya Junior College | State Rank 2919 in AP EAMCET</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: 'var(--radius-md)', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)' }}>
                  <Code size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>170+ LeetCode Solved</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Consistent problem solver focusing on Data Structures & Algorithms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
