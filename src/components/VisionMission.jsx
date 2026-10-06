import React from 'react';
import { Compass, Target, Sparkles, TrendingUp } from 'lucide-react';
import './VisionMission.css';

export default function VisionMission() {
  return (
    <section className="section section-light vision-mission-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            OUR PURPOSE & AMBITION
          </span>
          <h2 className="section-title">Vision & Mission</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            Guiding businesses toward sales excellence with principled focus, practical execution, and measurable outcomes.
          </p>
        </div>

        <div className="vm-grid">
          {/* Vision Card */}
          <div className="vm-card vision-card">
            <div className="vm-card-accent" />
            <div className="vm-icon-wrapper">
              <Compass size={28} className="vm-icon" />
            </div>
            <span className="vm-card-type">STRATEGIC DIRECTION</span>
            <h3 className="vm-title">VISION</h3>
            <p className="vm-text">
              To become a trusted sales growth partner for businesses by building high-performance sales teams and creating a culture of consistent, sustainable growth.
            </p>
            <div className="vm-card-footer">
              <span className="vm-footer-tag">
                <Sparkles size={14} className="gold-text" /> Long-Term Partnership
              </span>
              <span className="vm-footer-tag">
                <TrendingUp size={14} className="gold-text" /> Sustainable Cadence
              </span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card mission-card">
            <div className="vm-card-accent" />
            <div className="vm-icon-wrapper">
              <Target size={28} className="vm-icon" />
            </div>
            <span className="vm-card-type">DAILY COMMITMENT</span>
            <h3 className="vm-title">MISSION</h3>
            <p className="vm-text">
              To help businesses recruit suitable salespeople, develop their skills, strengthen sales processes, implement effective systems, and build teams that consistently convert opportunities into customers.
            </p>
            <div className="vm-card-footer">
              <span className="vm-footer-tag">
                <Sparkles size={14} className="gold-text" /> Skill & Process Mastery
              </span>
              <span className="vm-footer-tag">
                <TrendingUp size={14} className="gold-text" /> Conversion Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
