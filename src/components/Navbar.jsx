import React from 'react';
import { Sun, Moon, Edit3, Download, Sparkles } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, activeSection, onOpenEditor, data }) {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#hero" className="nav-logo">
          <span>{data.personal.name.split(' ')[0]}</span>
          <span className="gradient-text">{data.personal.name.split(' ')[1] || ''}</span>
          <span className="nav-logo-badge">PORTFOLIO</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
          <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
          <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
          <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button 
            onClick={onOpenEditor} 
            className="btn btn-secondary"
            title="Edit Portfolio Details"
          >
            <Edit3 size={16} />
            <span>Customize</span>
          </button>

          <button 
            onClick={toggleTheme} 
            className="btn btn-icon" 
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            <Sparkles size={16} />
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
