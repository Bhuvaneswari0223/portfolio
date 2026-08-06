import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import PortfolioEditorModal from './components/PortfolioEditorModal';
import Footer from './components/Footer';
import { defaultPortfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data');
    return saved ? JSON.parse(saved) : defaultPortfolioData;
  });
  const [activeSection, setActiveSection] = useState('hero');
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync theme attribute to HTML tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Save portfolio updates to local storage
  const handleSaveData = (newData) => {
    setPortfolioData(newData);
    localStorage.setItem('portfolio_data', JSON.stringify(newData));
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Scroll spy for active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Animated Mesh Orbs Background */}
      <div className="bg-mesh">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
      </div>

      <Navbar 
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenEditor={() => setIsEditorOpen(true)}
        data={portfolioData}
      />

      <main>
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <ProjectsSection data={portfolioData} />
        <ExperienceSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>

      <Footer data={portfolioData} />

      {isEditorOpen && (
        <PortfolioEditorModal 
          data={portfolioData}
          onSave={handleSaveData}
          onClose={() => setIsEditorOpen(false)}
        />
      )}
    </div>
  );
}
