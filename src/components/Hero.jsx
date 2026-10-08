import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Ambience & Subtle Coordinate Grid */}
      <div className="hero-ambient-glow" />
      <div className="hero-grid-pattern" />

      <div className="container hero-container">
        {/* Left Column: Brand Statement & Action */}
        <div className="hero-content">
          <div className="hero-eyebrow-container">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              SALES FALCON • B2B SALES CONSULTING
            </span>
          </div>

          <h1 className="hero-title">
            WE POWER <br />
            <span className="hero-title-highlight">YOUR SALES TEAM.</span>
          </h1>

          <p className="hero-description">
            Sales consulting, training, recruitment support and performance systems designed to help businesses build stronger sales teams and sustainable growth.
          </p>

          <div className="hero-ctas">
            <Link to="/services" className="btn btn-gold btn-lg hero-primary-cta">
              <span>Explore Our Services</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline-navy btn-lg hero-secondary-cta">
              <span>Talk to Us</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="hero-pillars hero-pillars-desktop">
            <div className="hero-pillar-item">
              <span className="pillar-dot" />
              <span>Sales</span>
            </div>
            <span className="pillar-sep">+</span>
            <div className="hero-pillar-item">
              <span className="pillar-dot" />
              <span>People</span>
            </div>
            <span className="pillar-sep">+</span>
            <div className="hero-pillar-item">
              <span className="pillar-dot" />
              <span>Process</span>
            </div>
            <span className="pillar-sep">+</span>
            <div className="hero-pillar-item">
              <span className="pillar-dot" />
              <span>Performance</span>
            </div>
            <span className="pillar-sep">+</span>
            <div className="hero-pillar-item">
              <span className="pillar-dot" />
              <span className="gold-text">Growth</span>
            </div>
          </div>
        </div>

        {/* Right Column: Corporate Sales Training Showcase */}
        <div className="hero-visual">
          <div className="hero-training-stage">
            <div className="hero-training-glow" />
            <div className="hero-training-frame">
              <img
                src="/images/sales-training-hero.jpg"
                alt="Corporate Sales Training Session with Sales Falcon"
                className="hero-training-photo"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Mobile Pillars: strictly below the hero visual */}
        <div className="hero-pillars hero-pillars-mobile">
          <div className="hero-pillar-item">
            <span className="pillar-dot" />
            <span>Sales</span>
          </div>
          <span className="pillar-sep">+</span>
          <div className="hero-pillar-item">
            <span className="pillar-dot" />
            <span>People</span>
          </div>
          <span className="pillar-sep">+</span>
          <div className="hero-pillar-item">
            <span className="pillar-dot" />
            <span>Process</span>
          </div>
          <span className="pillar-sep">+</span>
          <div className="hero-pillar-item">
            <span className="pillar-dot" />
            <span>Performance</span>
          </div>
          <span className="pillar-sep">+</span>
          <div className="hero-pillar-item">
            <span className="pillar-dot" />
            <span className="gold-text">Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
