import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    helpTopic: 'Sales Consulting & Strategy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate frontend submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Generate pre-filled WhatsApp message
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Sales Falcon,\n\nI would like to start a conversation.\nName: ${formData.name || 'Not specified'}\nCompany: ${formData.company || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}\nRequirement: ${formData.helpTopic}\nMessage: ${formData.message || 'I would like to explore sales consulting/training.'}`
    );
    return `https://wa.me/919633199772?text=${text}`;
  };

  return (
    <section id="contact" className="section section-white contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Value Proposition */}
          <div className="contact-info-col">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              GET IN TOUCH
            </span>

            <h2 className="contact-heading">Let’s Build Better Sales.</h2>
            <div className="gold-line" />

            <p className="contact-lead">
              Whether you need to assess your sales team, refine your pipeline, or develop high-converting sales conversations, we are ready to assist.
            </p>

            {/* Direct Channels */}
            <div className="contact-channels">
              <a href="tel:9633199772" className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Direct Phone</span>
                  <span className="channel-val">96331 99772</span>
                </div>
              </a>

              <a
                href="https://wa.me/919633199772"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card channel-whatsapp"
              >
                <div className="channel-icon-wrap whatsapp-wrap">
                  <MessageSquare size={22} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Instant WhatsApp</span>
                  <span className="channel-val">96331 99772</span>
                </div>
              </a>
            </div>

            {/* Response Time & Guarantee Note */}
            <div className="contact-guarantees">
              <div className="guarantee-row">
                <Clock size={18} className="gold-text" />
                <span>Prompt response within 1 business day</span>
              </div>
              <div className="guarantee-row">
                <ShieldCheck size={18} className="gold-text" />
                <span>Strict confidentiality for all business discussions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title">Thank You, {formData.name || 'Friend'}!</h3>
                  <p className="success-message">
                    Your inquiry has been received. Our team will review your requirements and reach out promptly.
                  </p>

                  <div className="success-whatsapp-prompt">
                    <p className="success-whatsapp-text">
                      Prefer an immediate conversation? Connect directly on WhatsApp with your inquiry pre-loaded:
                    </p>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-lg w-full"
                    >
                      <MessageSquare size={18} />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-navy btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        helpTopic: 'Sales Consulting & Strategy',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3 className="form-title">Start a Conversation</h3>
                  <p className="form-subtitle">Fill in the details below or message us directly on WhatsApp.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-company" className="form-label">
                        Company <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 96331 99772"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-help-topic" className="form-label">
                      What do you need help with?
                    </label>
                    <select
                      id="contact-help-topic"
                      name="helpTopic"
                      value={formData.helpTopic}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Sales Consulting & Strategy">Sales Consulting & Strategy</option>
                      <option value="Sales Training & Coaching">Sales Training & Coaching</option>
                      <option value="Recruitment & Team Building">Recruitment & Team Building</option>
                      <option value="Sales Systems & CRM Workflows">Sales Systems & CRM Workflows</option>
                      <option value="Marketing-to-Sales Alignment">Marketing-to-Sales Alignment</option>
                      <option value="Full Sales Assessment">Full Sales Organization Assessment</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief overview of your team size, current sales challenges, or goals..."
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-navy btn-lg form-submit-btn"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Start a Conversation'}</span>
                      <Send size={16} />
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp form-whatsapp-direct"
                      title="Send directly to WhatsApp"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
