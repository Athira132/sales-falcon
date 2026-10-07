import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, TrendingUp, Target, Activity } from 'lucide-react';
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
            Sales consulting, training, recruitment support and performance systems designed to help businesses build stronger sales teams and create sustainable growth.
          </p>

          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-gold btn-lg hero-primary-cta">
              <span>Book a Consultation</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline-navy btn-lg hero-secondary-cta">
              <span>Explore Services</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="hero-pillars">
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

        {/* Right Column: Creative Hero Composition with Provided Person Photo */}
        <div className="hero-visual">
          <div className="hero-person-stage">
            {/* Ambient Backlight Glow */}
            <div className="person-ambient-backdrop" />

            {/* Subtle Falcon-Inspired Geometric Graphic & Growth Trajectory */}
            <svg
              className="hero-falcon-accents"
              viewBox="0 0 540 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroGoldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C49833" />
                  <stop offset="60%" stopColor="#D8AC45" />
                  <stop offset="100%" stopColor="#FAE6AC" />
                </linearGradient>

                <linearGradient id="heroNavyPlanes" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16, 39, 72, 0.45)" />
                  <stop offset="100%" stopColor="rgba(10, 27, 51, 0.85)" />
                </linearGradient>

                <linearGradient id="growthTrajectoryGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(216, 172, 69, 0.1)" />
                  <stop offset="50%" stopColor="#D8AC45" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>

              {/* Concentric Precision Measurement Rings */}
              <circle cx="270" cy="280" r="230" stroke="rgba(216, 172, 69, 0.18)" strokeWidth="1.2" strokeDasharray="5 7" />
              <circle cx="270" cy="280" r="180" stroke="rgba(16, 39, 72, 0.08)" strokeWidth="1" />
              <circle cx="270" cy="280" r="130" stroke="rgba(216, 172, 69, 0.22)" strokeWidth="1.2" strokeDasharray="3 5" />

              {/* Subtle Geometric Falcon Wings / Precision Angles */}
              <path
                d="M 270 200 L 110 320 L 180 330 L 270 240 Z"
                fill="url(#heroNavyPlanes)"
                opacity="0.5"
              />
              <path
                d="M 270 200 L 430 320 L 360 330 L 270 240 Z"
                fill="url(#heroNavyPlanes)"
                opacity="0.5"
              />
              <polygon
                points="270,140 290,195 270,185 250,195"
                fill="url(#heroGoldGradient)"
                opacity="0.75"
              />

              {/* Upward Growth Line & Trajectory Vector */}
              <path
                d="M 60 480 C 140 460, 220 380, 310 210 C 360 120, 440 70, 500 50"
                stroke="url(#growthTrajectoryGlow)"
                strokeWidth="3"
                strokeLinecap="round"
                className="growth-trajectory-vector"
              />
              {/* Arrow Head on Growth Trajectory */}
              <polygon
                points="500,50 465,54 485,74"
                fill="#D8AC45"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              {/* Milestone data dots on growth curve */}
              <circle cx="150" cy="445" r="4.5" fill="#102748" stroke="#D8AC45" strokeWidth="2" />
              <circle cx="310" cy="210" r="6" fill="#D8AC45" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="430" cy="90" r="5" fill="#102748" stroke="#D8AC45" strokeWidth="2" />
            </svg>

            {/* Provided Real Person Photo */}
            <div className="hero-person-frame">
              <img
                src="/images/hero-person.png"
                alt="Sales Falcon Sales Consulting Professional"
                className="hero-person-photo"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/7DhjPL2/image-removebg-preview-2.png';
                }}
              />
              {/* Soft bottom blend gradient so portrait integrates naturally */}
              <div className="person-bottom-fade" />
            </div>

            {/* Small Business Performance Graphic 1: Precision & Focus */}
            <div className="hero-floating-card card-top-left">
              <div className="floating-card-icon icon-gold">
                <Target size={18} />
              </div>
              <div className="floating-card-body">
                <span className="card-headline">Precision & Focus</span>
                <span className="card-subheadline">Falcon-sharp execution</span>
              </div>
            </div>

            {/* Small Business Performance Graphic 2: Upward Growth */}
            <div className="hero-floating-card card-top-right">
              <div className="floating-card-icon icon-navy">
                <TrendingUp size={18} />
              </div>
              <div className="floating-card-body">
                <span className="card-headline">Upward Growth</span>
                <span className="card-subheadline">Measurable conversion</span>
              </div>
            </div>

            {/* Small Business Performance Graphic 3: Repeatable Systems */}
            <div className="hero-floating-card card-bottom-center">
              <div className="floating-card-icon icon-white">
                <Activity size={18} />
              </div>
              <div className="floating-card-body">
                <span className="card-headline">Repeatable Systems</span>
                <span className="card-subheadline">Pipeline & cadence control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
