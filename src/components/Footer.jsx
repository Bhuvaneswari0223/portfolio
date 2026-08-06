import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{data.personal.name}</span>. All rights reserved.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <span>Designed with React & CSS</span>
        </div>

        <button 
          onClick={scrollToTop} 
          className="btn btn-icon" 
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
