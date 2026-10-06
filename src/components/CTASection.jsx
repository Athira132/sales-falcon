import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg-pattern dark-grid-bg" />
      <div className="cta-ambient-glow" />

      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              TAKE THE NEXT STEP
            </span>

            <h2 className="cta-heading">
              Ready to Power Your Sales Team?
            </h2>

            <p className="cta-body">
              Let’s understand where your sales process stands today and identify practical opportunities for improvement.
            </p>

            <div className="cta-actions">
              <a href="#contact" className="btn btn-gold btn-lg cta-main-btn">
                <span>Talk to Sales Falcon</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/919633199772"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg cta-whatsapp-btn"
                aria-label="WhatsApp Sales Falcon at 96331 99772"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="cta-trust-note">
              <div className="trust-item">
                <ShieldCheck size={16} className="gold-text" />
                <span>Practical assessment • Realistic timelines • No generic theory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
