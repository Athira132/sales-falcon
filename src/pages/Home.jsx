import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Settings, 
  Share2, 
  Zap 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import './Home.css';

export default function Home() {
  const servicePreviews = [
    {
      num: '01',
      title: 'Sales Consulting',
      icon: Briefcase,
      summary: 'Audits, sales strategy, process mapping, KPI design and conversion improvement.',
    },
    {
      num: '02',
      title: 'Sales Training',
      icon: GraduationCap,
      summary: 'Practical training designed around real conversations, role-play, feedback and measurable improvement.',
    },
    {
      num: '03',
      title: 'Recruitment & Team Building',
      icon: Users,
      summary: 'Role profiles, hiring plans, candidate screening, sales aptitude assessment and onboarding.',
    },
    {
      num: '04',
      title: 'Sales Systems',
      icon: Settings,
      summary: 'CRM workflows, pipeline structure, follow-up systems, sales reporting and performance tracking.',
    },
    {
      num: '05',
      title: 'Marketing-to-Sales Alignment',
      icon: Share2,
      summary: 'Lead generation planning, lead quality reviews, campaign feedback and conversion optimization.',
    },
    {
      num: '06',
      title: 'Sales Performance Management',
      icon: Zap,
      summary: 'Track sales activity, follow-up, conversion, pipeline performance and key indicators to help businesses identify gaps and improve sales execution.',
    },
  ];

  const whyHighlights = [
    {
      num: '01',
      title: 'Practical, Not Theoretical',
      desc: 'Training and consulting built around real sales situations.',
    },
    {
      num: '02',
      title: 'People + Process',
      desc: 'We focus on both the salesperson and the system supporting them.',
    },
    {
      num: '03',
      title: 'Measurable Performance',
      desc: 'Focus on observable activity, conversion, follow-up and outcomes.',
    },
    {
      num: '04',
      title: 'Business-First Thinking',
      desc: "Solutions are designed around the organization's actual goals.",
    },
    {
      num: '05',
      title: 'Continuous Improvement',
      desc: 'Review performance, learn from results and refine the approach.',
    },
    {
      num: '06',
      title: 'Long-Term Partnership',
      desc: 'Work alongside businesses to support sustainable sales improvement.',
    },
  ];

  return (
    <div className="page-wrapper home-page page-enter">
      <SEOHead
        title="Sales Falcon | We Power Your Sales Team"
        description="Sales Falcon helps businesses build stronger sales teams through sales consulting, training, recruitment support, sales systems and performance improvement."
        canonicalPath="/"
      />

      {/* 1. Concise Hero */}
      <Hero />

      {/* 2. Short Introduction Section */}
      <section className="section section-white home-intro-section">
        <div className="container">
          <div className="home-intro-grid">
            <div className="home-intro-lead">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                WHO WE ARE
              </span>
              <h2 className="home-intro-heading">
                A Dedicated Sales Growth Partner
              </h2>
              <div className="gold-line" />
              <p className="home-intro-text">
                Sales Falcon is a business-to-business sales growth partner helping organizations build stronger sales teams and more effective sales systems.
              </p>
              <div className="home-intro-cta">
                <Link to="/about" className="btn btn-navy">
                  <span>Learn More About Sales Falcon</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="home-intro-quote-card">
              <div className="quote-mark-icon">“</div>
              <blockquote className="home-quote-body">
                We help businesses turn salespeople into performers, sales processes into systems, and sales potential into measurable growth.
              </blockquote>
              <div className="gold-line" />
              <span className="home-quote-caption">SALES FALCON PROMISE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6-Service Overview Section */}
      <section className="section section-light home-services-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              WHAT WE DO
            </span>
            <h2 className="section-title">6 Ways We Strengthen Sales</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              Targeted solutions covering team recruitment, skill building, operational workflows, and pipeline conversion.
            </p>
          </div>

          <div className="home-services-grid">
            {servicePreviews.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.num} className="home-service-preview-card">
                  <div className="preview-card-header">
                    <span className="preview-num">{service.num}</span>
                    <div className="preview-icon-box">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="preview-title">{service.title}</h3>
                  <p className="preview-summary">{service.summary}</p>
                </div>
              );
            })}
          </div>

          <div className="home-section-action">
            <Link to="/services" className="btn btn-navy btn-lg">
              <span>View All Services & Key Focus Areas</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Short "Why Sales Falcon" Preview */}
      <section className="section section-dark home-why-section">
        <div className="dark-grid-bg why-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              THE FALCON ADVANTAGE
            </span>
            <h2 className="section-title text-white">Why Sales Falcon?</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle text-muted-light">
              Built on practical execution, measurable conversion, and sustainable partnership.
            </p>
          </div>

          <div className="home-why-grid">
            {whyHighlights.map((item) => (
              <div key={item.title} className="home-why-card">
                <span className="home-why-num">{item.num}</span>
                <h3 className="home-why-title">{item.title}</h3>
                <p className="home-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="home-section-action">
            <Link to="/why-sales-falcon" className="btn btn-gold btn-lg">
              <span>Explore The Falcon Approach</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="section section-light home-cta-section">
        <div className="container">
          <div className="home-cta-card">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              LET'S START
            </span>
            <h2 className="home-cta-title">Ready to Power Your Sales Team?</h2>
            <p className="home-cta-desc">
              Let’s understand where your sales process stands today and identify practical opportunities for improvement.
            </p>
            <div className="home-cta-buttons">
              <Link to="/contact" className="btn btn-gold btn-lg">
                <span>Talk to Us</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919633199772"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
