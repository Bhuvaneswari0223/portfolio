import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy } from 'lucide-react';

export default function ContactSection({ data }) {
  const { personal } = data;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Interested in collaborating, hiring for a position, or asking a question? Send me a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }} className="gradient-text">
              Contact Information
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Feel free to reach out directly via email or social platforms. I typically respond within 24 hours.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{personal.email}</span>
                  <button 
                    onClick={copyEmailToClipboard}
                    className="btn btn-icon"
                    style={{ width: '28px', height: '28px', border: 'none', background: 'transparent' }}
                    title="Copy Email"
                  >
                    <Copy size={14} />
                  </button>
                  {copiedEmail && <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>Copied!</span>}
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Phone</div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{personal.phone}</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{personal.location}</div>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div style={{ textAlignment: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle size={54} color="var(--accent-emerald)" />
                <h3 style={{ fontSize: '1.5rem' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Jane Doe" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Email</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="jane@example.com" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Project Inquiry / Job Opportunity" 
                    required 
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Write your message here..." 
                    required 
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
