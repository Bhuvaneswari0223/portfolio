import React, { useState } from 'react';
import { X, Save, Upload, Download, RefreshCw, Image, User, Briefcase, Code } from 'lucide-react';

export default function PortfolioEditorModal({ data, onSave, onClose }) {
  const [editedData, setEditedData] = useState(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState('personal');

  const handlePersonalChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handlePersonalChange('avatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(editedData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "portfolio_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJson = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          setEditedData(parsed);
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Customize Your Portfolio</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Update your resume text, bio, links, and profile photo directly.
            </p>
          </div>
          <button onClick={onClose} className="btn btn-icon">
            <X size={18} />
          </button>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('personal')} 
            className={`filter-btn ${activeTab === 'personal' ? 'active' : ''}`}
          >
            <User size={14} style={{ display: 'inline', marginRight: '4px' }} />
            Personal & Bio
          </button>
          <button 
            onClick={() => setActiveTab('json')} 
            className={`filter-btn ${activeTab === 'json' ? 'active' : ''}`}
          >
            Import / Export JSON
          </button>
        </div>

        {activeTab === 'personal' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                className="form-input" 
                value={editedData.personal.name} 
                onChange={e => handlePersonalChange('name', e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Professional Title</label>
              <input 
                type="text" 
                className="form-input" 
                value={editedData.personal.title} 
                onChange={e => handlePersonalChange('title', e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tagline / Short Hook</label>
              <input 
                type="text" 
                className="form-input" 
                value={editedData.personal.tagline} 
                onChange={e => handlePersonalChange('tagline', e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">About / Biography</label>
              <textarea 
                className="form-textarea" 
                value={editedData.personal.about} 
                onChange={e => handlePersonalChange('about', e.target.value)} 
              ></textarea>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  value={editedData.personal.email} 
                  onChange={e => handlePersonalChange('email', e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Location</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={editedData.personal.location} 
                  onChange={e => handlePersonalChange('location', e.target.value)} 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Profile Photo (Upload file or Image URL)</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="https://..." 
                  value={editedData.personal.avatar} 
                  onChange={e => handlePersonalChange('avatar', e.target.value)} 
                />
                <label className="btn btn-secondary" style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>
                  <Upload size={16} />
                  <span>Upload Photo</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handlePhotoUpload} 
                    style={{ display: 'none' }} 
                  />
                </label>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">GitHub URL</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={editedData.personal.github} 
                  onChange={e => handlePersonalChange('github', e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">LinkedIn URL</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={editedData.personal.linkedin} 
                  onChange={e => handlePersonalChange('linkedin', e.target.value)} 
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'json' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: '1rem 0' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              You can download your entire portfolio dataset to JSON or import a previously saved JSON file to restore your configuration anytime.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={handleExportJson} className="btn btn-primary">
                <Download size={16} />
                <span>Export Portfolio JSON</span>
              </button>

              <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                <Upload size={16} />
                <span>Import Portfolio JSON</span>
                <input type="file" accept=".json" onChange={handleImportJson} style={{ display: 'none' }} />
              </label>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button 
            onClick={() => {
              onSave(editedData);
              onClose();
            }} 
            className="btn btn-primary"
          >
            <Save size={16} />
            <span>Apply & Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
