import React from 'react';
import { 
  Target, 
  GitMerge, 
  Gauge, 
  BriefcaseBusiness, 
  Infinity as InfinityIcon,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './WhySalesFalcon.css';

export default function WhySalesFalcon() {
  const points = [
    {
      title: 'PRACTICAL, NOT THEORETICAL',
      desc: 'Training and consulting built around real sales situations.',
      icon: Target,
      highlight: 'Real-world scenario practice, live conversation coaching, and objection drills that can be used immediately.',
    },
    {
      title: 'PEOPLE + PROCESS',
      desc: 'We focus on both the salesperson and the system supporting them.',
      icon: GitMerge,
      highlight: 'Great salespeople struggle inside broken systems, and great systems fail without skilled talent. We align both.',
    },
    {
      title: 'MEASURABLE PERFORMANCE',
      desc: 'Activity, conversion, follow-up and outcomes matter.',
      icon: Gauge,
      highlight: 'Clear KPI visibility, activity dashboards, and objective metrics tracking pipeline velocity and revenue contribution.',
    },
    {
      title: 'BUSINESS-FIRST THINKING',
      desc: "Solutions are designed around the organization's actual goals.",
      icon: BriefcaseBusiness,
      highlight: 'We tailor sales structure directly to your unit economics, profit margins, and specific industry acquisition cycles.',
    },
    {
      title: 'LONG-TERM PARTNERSHIP',
      desc: 'The goal is sustainable improvement, not a one-day intervention.',
      icon: InfinityIcon,
      highlight: 'We walk alongside founders, owners, and commercial leaders through execution, review, and continuous refinement.',
    },
  ];

  return (
    <section id="why-us" className="section section-dark why-section">
      {/* Background Ambience */}
      <div className="why-grid-pattern dark-grid-bg" />
      <div className="why-gold-ambient" />

      <div className="container">
        <div className="section-header why-header">
          <span className="eyebrow eyebrow-pill">
            <span className="eyebrow-dot" />
            THE SALES FALCON ADVANTAGE
          </span>
          <h2 className="section-title text-white">Why Sales Falcon?</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle why-subtitle">
            Most sales initiatives fail because they offer generic theory or treat symptoms in isolation. We engineer high-performance sales capability from the ground up.
          </p>
        </div>

        <div className="why-cards-grid">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="why-card">
                <div className="why-card-glow" />
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="why-index">0{index + 1}</span>
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>

                <div className="why-card-divider" />

                <div className="why-card-highlight">
                  <CheckCircle2 size={16} className="why-highlight-icon" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Why section */}
        <div className="why-footer-banner">
          <div className="why-banner-content">
            <span className="why-banner-tagline">BUILD THE TEAM • STRENGTHEN THE SYSTEM • GROW THE BUSINESS</span>
            <h3 className="why-banner-heading">Ready to see how we can transform your sales operation?</h3>
          </div>
          <a href="#contact" className="btn btn-gold btn-lg">
            <span>Start a Conversation</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
