import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
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

  const [formErrors, setFormErrors] = useState({});
  const [enquirySent, setEnquirySent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.company.trim()) errors.company = 'Please provide your company name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errors.phone = 'Please provide your contact number.';
    return errors;
  };

  // Generate WhatsApp transfer URL
  const generateWhatsAppUrl = (customMsg = '') => {
    const text = encodeURIComponent(
      `Hello Sales Falcon,\n\nI would like to submit an enquiry:\n\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Company: ${formData.company || 'Not provided'}\n` +
      `• Email: ${formData.email || 'Not provided'}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Need Help With: ${formData.helpTopic}\n` +
      `• Message: ${formData.message || customMsg || 'Looking to discuss sales growth opportunities.'}`
    );
    return `https://wa.me/919633199772?text=${text}`;
  };

  const handleSendEnquiry = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Direct user inquiry seamlessly via WhatsApp without fake server simulation
    setEnquirySent(true);
    const waUrl = generateWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-wrapper contact-page page-enter">
      <SEOHead
        title="Contact Sales Falcon | We Power Your Sales Team"
        description="Contact Sales Falcon for B2B sales consulting, training, recruitment support, and systems improvement. Direct phone: 96331 99772 or instant WhatsApp."
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              START A CONVERSATION
            </span>
            <h1 className="page-hero-title">LET'S BUILD BETTER SALES.</h1>
            <div className="gold-line" />
            <p className="page-hero-subtitle">
              Tell us where your sales team or process needs improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section Content */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-page-grid">
            {/* Direct Contact Info */}
            <div className="contact-details-col">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                DIRECT CHANNELS
              </span>
              <h2 className="contact-channels-heading">Speak Directly With Us</h2>
              <div className="gold-line" />
              <p className="contact-channels-desc">
                We prefer direct, practical conversations. Reach out through our dedicated phone line or instant WhatsApp channel.
              </p>

              <div className="contact-cards-stack">
                <a href="tel:9633199772" className="contact-big-card">
                  <div className="big-card-icon">
                    <Phone size={24} />
                  </div>
                  <div className="big-card-text">
                    <span className="big-card-label">Direct Phone Line</span>
                    <span className="big-card-val">96331 99772</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919633199772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-big-card card-whatsapp"
                >
                  <div className="big-card-icon whatsapp-bg">
                    <MessageSquare size={24} />
                  </div>
                  <div className="big-card-text">
                    <span className="big-card-label">Official WhatsApp</span>
                    <span className="big-card-val">96331 99772</span>
                  </div>
                </a>
              </div>

              <div className="contact-commitments">
                <div className="commitment-item">
                  <Clock size={18} className="gold-text" />
                  <span>Direct founder & consulting team response within 1 business day</span>
                </div>
                <div className="commitment-item">
                  <ShieldCheck size={18} className="gold-text" />
                  <span>Strict commercial non-disclosure and privacy guaranteed</span>
                </div>
              </div>
            </div>

            {/* Professional Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-card">
                <h3 className="form-card-title">Enquiry Form</h3>
                <p className="form-card-subtitle">
                  Fill in the fields below. Submitting will launch your structured enquiry directly to our WhatsApp support channel for immediate processing.
                </p>

                {enquirySent && (
                  <div className="enquiry-sent-notice">
                    <CheckCircle2 size={18} className="notice-icon" />
                    <span>Enquiry prepared! A WhatsApp chat window has been opened with your details.</span>
                  </div>
                )}

                <form onSubmit={handleSendEnquiry} className="page-contact-form" noValidate>
                  <div className="form-two-cols">
                    <div className="form-field-group">
                      <label htmlFor="form-name" className="field-label">
                        Name <span className="field-req">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`field-input ${formErrors.name ? 'field-error' : ''}`}
                      />
                      {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="form-company" className="field-label">
                        Company <span className="field-req">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization name"
                        className={`field-input ${formErrors.company ? 'field-error' : ''}`}
                      />
                      {formErrors.company && <span className="error-text">{formErrors.company}</span>}
                    </div>
                  </div>

                  <div className="form-two-cols">
                    <div className="form-field-group">
                      <label htmlFor="form-email" className="field-label">
                        Email <span className="field-req">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`field-input ${formErrors.email ? 'field-error' : ''}`}
                      />
                      {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="form-phone" className="field-label">
                        Phone <span className="field-req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 96331 99772"
                        className={`field-input ${formErrors.phone ? 'field-error' : ''}`}
                      />
                      {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="form-topic" className="field-label">
                      What do you need help with?
                    </label>
                    <select
                      id="form-topic"
                      name="helpTopic"
                      value={formData.helpTopic}
                      onChange={handleChange}
                      className="field-select"
                    >
                      <option value="Sales Consulting & Strategy">Sales Consulting & Strategy</option>
                      <option value="Sales Training & Coaching">Sales Training & Coaching</option>
                      <option value="Recruitment & Team Building">Recruitment & Team Building</option>
                      <option value="Sales Systems & CRM Workflows">Sales Systems & CRM Workflows</option>
                      <option value="Marketing-to-Sales Alignment">Marketing-to-Sales Alignment</option>
                      <option value="Comprehensive Sales Audit">Comprehensive Sales Organization Audit</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="form-message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team size, sales cycle challenges, or revenue targets..."
                      className="field-textarea"
                    />
                  </div>

                  {/* Buttons: “Send Enquiry” & “WhatsApp Us” */}
                  <div className="contact-form-actions">
                    <button type="submit" className="btn btn-navy btn-lg">
                      <span>Send Enquiry</span>
                      <Send size={16} />
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-lg"
                    >
                      <MessageSquare size={18} />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
