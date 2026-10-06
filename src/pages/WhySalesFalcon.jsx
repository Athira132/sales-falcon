import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  GitMerge, 
  Gauge, 
  BriefcaseBusiness, 
  Infinity as InfinityIcon, 
  CheckCircle2, 
  Eye, 
  Zap, 
  TrendingUp, 
  Compass, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IdealClients from '../components/IdealClients';
import './WhySalesFalcon.css';

export default function WhySalesFalcon() {
  const differentiators = [
    {
      title: 'PRACTICAL, NOT THEORETICAL',
      subtitle: 'Real Conversations, Not Generic Slideware',
      lead: 'Training and consulting built around real sales situations.',
      desc: 'Most sales training is forgotten 48 hours after delivery because it relies on textbook theory. We train directly on your real buyer objections, your actual customer personas, and your live commercial conversations.',
      icon: Target,
    },
    {
      title: 'PEOPLE + PROCESS',
      subtitle: 'The Symbiosis of Talent & System',
      lead: 'We focus on both the salesperson and the system supporting them.',
      desc: 'Top talent trapped inside a disorganized pipeline will inevitably burn out or underperform. Conversely, rigid CRM tools without confident, trained salespeople fail. We strengthen the individual salesperson and the underlying system in tandem.',
      icon: GitMerge,
    },
    {
      title: 'MEASURABLE PERFORMANCE',
      subtitle: 'Observable Pipeline Economics',
      lead: 'Focus on observable activity, conversion, follow-up and outcomes.',
      desc: 'We replace subjective feelings with clear operational metrics: outbound cadence rigor, stage conversion percentages, proposal velocity, and deal closure ratios. Every improvement is visible and verifiable.',
      icon: Gauge,
    },
    {
      title: 'BUSINESS-FIRST THINKING',
      subtitle: 'Tailored Commercial Architecture',
      lead: "Solutions are designed around the organization's actual goals.",
      desc: 'Your sales motion must mirror your margins, customer acquisition cost limits, and cash flow cycle. We build workflows that serve your bottom-line profitability, not generic templates borrowed from unrelated industries.',
      icon: BriefcaseBusiness,
    },
    {
      title: 'LONG-TERM PARTNERSHIP',
      subtitle: 'Sustained Commercial Capability',
      lead: 'The goal is sustainable improvement, not a one-day intervention.',
      desc: 'True behavioral change takes continuous reinforcement. We partner with business founders and sales managers to monitor execution, refine battlecards, and build an enduring high-performance culture.',
      icon: InfinityIcon,
    },
  ];

  const falconMindset = [
    {
      name: 'Vision',
      sub: 'Sharp Observation',
      text: 'Identifying real buyer triggers and market opportunities with high-resolution clarity.',
      icon: Eye,
    },
    {
      name: 'Focus',
      sub: 'Disciplined Targeting',
      text: 'Zero wasted motion. Eliminating tire-kickers and prioritizing high-probability pipeline deals.',
      icon: Compass,
    },
    {
      name: 'Speed',
      sub: 'Decisive Cadence',
      text: 'Prompt response SLAs and quick proposal turnaround to maintain buyer enthusiasm.',
      icon: Zap,
    },
    {
      name: 'Precision',
      sub: 'Systemic Rigor',
      text: 'Exact discovery questions, disciplined follow-ups, and structured pipeline exit criteria.',
      icon: Target,
    },
    {
      name: 'Performance',
      sub: 'Upward Trajectory',
      text: 'The upward arrow represents continuous business growth and measurable conversion gains.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="page-wrapper why-page page-enter">
      <SEOHead
        title="Why Sales Falcon | Sales Consulting & Sales Performance"
        description="Discover why businesses choose Sales Falcon: practical sales consulting, people and process alignment, measurable conversion, and long-term partnership."
        canonicalPath="/why-sales-falcon"
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              THE SALES FALCON ADVANTAGE
            </span>
            <h1 className="page-hero-title">
              Powering People.<br />
              Strengthening Systems.<br />
              Improving Performance.
            </h1>
            <div className="gold-line" />
            <p className="page-hero-subtitle">
              We are not motivational speakers or detached theorists. We are commercial growth partners who engineer high-converting sales teams and scalable systems.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Core Pillars Detailed Stack */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              OUR 5 CORE PILLARS
            </span>
            <h2 className="section-title">What Makes Our Approach Different</h2>
            <div className="gold-line gold-line-center" />
          </div>

          <div className="why-pillars-stack">
            {differentiators.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="why-pillar-card">
                  <div className="pillar-header-row">
                    <span className="pillar-counter">0{idx + 1}</span>
                    <div className="pillar-headings">
                      <span className="pillar-sub-label">{pillar.subtitle}</span>
                      <h3 className="pillar-main-title">{pillar.title}</h3>
                    </div>
                    <div className="pillar-icon-box">
                      <Icon size={24} />
                    </div>
                  </div>

                  <p className="pillar-lead-statement">{pillar.lead}</p>
                  <p className="pillar-body-text">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE FALCON MINDSET - Strong Visual Section */}
      <section className="section section-dark falcon-mindset-section">
        <div className="dark-grid-bg story-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              BRAND SYMBOLISM & PHILOSOPHY
            </span>
            <h2 className="section-title text-white">The Falcon Mindset</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle text-muted-light">
              The falcon represents sharp vision, focus, speed, observation and precision. The upward arrow represents progress and business growth.
            </p>
          </div>

          {/* Geometric Falcon Concept Graphic */}
          <div className="mindset-visual-wrapper">
            <div className="mindset-cards-grid">
              {falconMindset.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="mindset-card">
                    <div className="mindset-icon-box">
                      <Icon size={24} />
                    </div>
                    <h3 className="mindset-title">{item.name}</h3>
                    <span className="mindset-sub">{item.sub}</span>
                    <p className="mindset-desc">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Clients Component */}
      <IdealClients />

      {/* Final Action CTA */}
      <section className="section section-white">
        <div className="container">
          <div className="why-bottom-cta">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              LET'S COLLABORATE
            </span>
            <h2>Ready to Experience the Falcon Advantage?</h2>
            <p>Speak directly with our team to explore how we can help your salespeople excel.</p>
            <div className="why-cta-buttons">
              <Link to="/contact" className="btn btn-navy btn-lg">
                <span>Start a Conversation</span>
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
