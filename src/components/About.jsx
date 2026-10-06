import React from 'react';
import { Target, Layers, ArrowUpRight, CheckCircle2, Shield, Eye } from 'lucide-react';
import './About.css';

export default function About() {
  const pillars = [
    { label: 'Sales Consulting', desc: 'Strategy, pipeline architecture & KPI design' },
    { label: 'Practical Training', desc: 'Real conversation drills, objection handling & negotiation' },
    { label: 'Recruitment Support', desc: 'Profile matching, candidate assessment & onboarding' },
    { label: 'Performance Systems', desc: 'Structured workflows, CRM rigor & conversion tracking' },
  ];

  return (
    <section id="about" className="section section-white about-section">
      <div className="container">
        {/* Main Positioning Section */}
        <div className="about-grid">
          {/* Left Column: Falcon Emblem & Statement Graphic */}
          <div className="about-graphic-col">
            <div className="about-feature-card">
              <div className="about-emblem-badge">
                <img
                  src="/images/sales-falcon-icon.png"
                  alt="Sales Falcon Emblem"
                  className="about-emblem-img"
                  onError={(e) => {
                    e.currentTarget.src = 'https://i.ibb.co/Xx8vtHPD/Sales-Falcon-Logo-with-Golden-x.png';
                  }}
                />
                <div className="about-emblem-pulse" />
              </div>

              <div className="about-stat-quote">
                <div className="quote-mark">“</div>
                <blockquote className="quote-text">
                  We help businesses turn salespeople into performers, sales processes into systems, and sales potential into measurable growth.
                </blockquote>
                <div className="gold-line" />
                <span className="quote-source">SALES FALCON CORE PROMISE</span>
              </div>

              {/* Falcon Symbolism Badges */}
              <div className="falcon-attributes-grid">
                <div className="attribute-item">
                  <Eye size={18} className="attribute-icon" />
                  <div className="attribute-text">
                    <span className="attribute-label">Sharp Vision</span>
                    <span className="attribute-sub">Focus & Observation</span>
                  </div>
                </div>
                <div className="attribute-item">
                  <Target size={18} className="attribute-icon" />
                  <div className="attribute-text">
                    <span className="attribute-label">Precision Speed</span>
                    <span className="attribute-sub">Decisive Execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Description & Positioning Copy */}
          <div className="about-content-col">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              ABOUT SALES FALCON
            </span>

            <h2 className="about-heading">
              More Than Sales Training.
            </h2>
            <div className="gold-line" />

            <p className="about-lead">
              Sales Falcon is a business-to-business sales growth partner helping organizations build stronger sales teams and more effective sales systems.
            </p>

            <p className="about-body">
              We combine sales consulting, practical training, recruitment support, sales systems and marketing-to-sales alignment to create a more structured approach to customer acquisition and growth.
            </p>

            {/* Strategic Pillars List */}
            <div className="about-pillars-list">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="about-pillar-row">
                  <div className="pillar-check">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-row-title">{pillar.label}</h4>
                    <p className="pillar-row-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <a href="#services" className="btn btn-navy">
                <span>Discover Our Services</span>
                <ArrowUpRight size={17} />
              </a>
              <a href="#why-us" className="btn btn-outline-navy">
                <span>Why Sales Falcon?</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
