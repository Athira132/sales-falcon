import React from 'react';
import { ArrowRight, ChevronRight, TrendingUp, Compass, ShieldCheck, Target, Zap, Activity } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Ambience & Grid */}
      <div className="hero-ambient-glow" />
      <div className="hero-grid-pattern" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow-container">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              SALES CONSULTING • TRAINING • RECRUITMENT • PERFORMANCE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            WE POWER <br />
            <span className="hero-title-highlight">YOUR SALES TEAM.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-description">
            Sales consulting, training, recruitment support and performance systems designed to help businesses build stronger sales teams and create sustainable growth.
          </p>

          {/* Action CTAs */}
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-gold btn-lg hero-primary-cta">
              <span>Book a Consultation</span>
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-outline-navy btn-lg hero-secondary-cta">
              <span>Explore Services</span>
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Brand Core Pillars Mini Strip */}
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

        {/* Sophisticated Abstract Falcon & Growth Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-stage">
            {/* Outer Concentric Precision Guidance Rings */}
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="orbit-ring orbit-ring-3" />

            {/* Main Interactive Geometric Graphic Card */}
            <div className="abstract-graphic-card">
              <svg
                viewBox="0 0 600 600"
                className="falcon-vector-canvas"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C49833" />
                    <stop offset="50%" stopColor="#D8AC45" />
                    <stop offset="100%" stopColor="#F9DF92" />
                  </linearGradient>

                  <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#102748" />
                    <stop offset="100%" stopColor="#071324" />
                  </linearGradient>

                  <linearGradient id="lineGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(216, 172, 69, 0.05)" />
                    <stop offset="60%" stopColor="rgba(216, 172, 69, 0.85)" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>

                  <radialGradient id="falconCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(216, 172, 69, 0.28)" />
                    <stop offset="100%" stopColor="rgba(16, 39, 72, 0)" />
                  </radialGradient>

                  {/* Filter for glow */}
                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Core Glow */}
                <circle cx="300" cy="300" r="220" fill="url(#falconCoreGlow)" />

                {/* Coordinate Grid Lines */}
                <line x1="80" y1="300" x2="520" y2="300" stroke="rgba(16, 39, 72, 0.08)" strokeDasharray="4 6" />
                <line x1="300" y1="80" x2="300" y2="520" stroke="rgba(16, 39, 72, 0.08)" strokeDasharray="4 6" />
                <circle cx="300" cy="300" r="160" stroke="rgba(216, 172, 69, 0.2)" strokeWidth="1" strokeDasharray="3 7" />

                {/* Falcon Wing Geometry: Left Wing Structure (Precision Angled Planes) */}
                <path
                  d="M300 240 L160 360 L240 370 L300 280 Z"
                  fill="url(#navyGradient)"
                  opacity="0.9"
                />
                <path
                  d="M300 280 L200 420 L270 415 L300 330 Z"
                  fill="#183764"
                  opacity="0.75"
                />

                {/* Falcon Wing Geometry: Right Wing Structure (Upward Ascending Planes) */}
                <path
                  d="M300 240 L440 360 L360 370 L300 280 Z"
                  fill="url(#navyGradient)"
                  opacity="0.9"
                />
                <path
                  d="M300 280 L400 420 L330 415 L300 330 Z"
                  fill="#183764"
                  opacity="0.75"
                />

                {/* Falcon Crest / Sharp Focus Beak & Head Geometry */}
                <polygon
                  points="300,165 328,230 300,218 272,230"
                  fill="url(#goldGradient)"
                  filter="url(#glowFilter)"
                />

                {/* Main Dynamic Upward Growth Trajectory Vector */}
                <path
                  d="M120 480 C 180 470, 240 400, 300 270 C 340 180, 420 120, 500 90"
                  stroke="url(#lineGlow)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="trajectory-path"
                />

                {/* Ascending Arrow Tip */}
                <polygon
                  points="500,90 460,92 485,117"
                  fill="#D8AC45"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />

                {/* Data Points on Trajectory */}
                <circle cx="180" cy="460" r="5" fill="#102748" stroke="#D8AC45" strokeWidth="2" />
                <circle cx="300" cy="270" r="7" fill="#D8AC45" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="430" cy="135" r="6" fill="#102748" stroke="#D8AC45" strokeWidth="2" />

                {/* Radar Sweep Arc */}
                <path
                  d="M 230 160 A 180 180 0 0 1 370 160"
                  stroke="rgba(216, 172, 69, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* Floating Badge 1: Sharp Vision & Precision */}
              <div className="floating-metric-badge badge-top-right">
                <div className="badge-icon-wrap gold-wrap">
                  <Target size={18} />
                </div>
                <div className="badge-content">
                  <span className="badge-title">Precision & Focus</span>
                  <span className="badge-sub">Falcon-sharp observation</span>
                </div>
              </div>

              {/* Floating Badge 2: Upward Business Trajectory */}
              <div className="floating-metric-badge badge-bottom-left">
                <div className="badge-icon-wrap navy-wrap">
                  <TrendingUp size={18} />
                </div>
                <div className="badge-content">
                  <span className="badge-title">Upward Trajectory</span>
                  <span className="badge-sub">Sustainable performance</span>
                </div>
              </div>

              {/* Floating Badge 3: Repeatable Systems */}
              <div className="floating-metric-badge badge-middle-right">
                <div className="badge-icon-wrap subtle-wrap">
                  <Zap size={16} />
                </div>
                <div className="badge-content">
                  <span className="badge-title">High-Cadence Systems</span>
                  <span className="badge-sub">Process-driven conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
