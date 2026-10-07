import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Stethoscope,
  Compass, 
  Hammer, 
  Rocket, 
  LineChart, 
  CheckCircle2, 
  Activity, 
  BarChart3, 
  Workflow, 
  ArrowRight,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PerformanceSystems from '../components/PerformanceSystems';
import './Process.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'ASSESS',
      tagline: 'Team & Baseline Audit',
      desc: 'Understand the current sales team, process and performance.',
      details: [
        'Evaluate rep conversation quality and buyer interactions',
        'Audit follow-up cadence, response times, and CRM discipline',
      ],
      icon: Search,
    },
    {
      num: '02',
      title: 'DIAGNOSE',
      tagline: 'Bottlenecks & Gaps',
      desc: 'Identify gaps, bottlenecks and opportunities.',
      details: [
        'Pinpoint exact pipeline drop-off stages and lost deal reasons',
        'Identify skill gaps in qualification, pitching, and negotiation',
      ],
      icon: Stethoscope,
    },
    {
      num: '03',
      title: 'STRATEGIZE',
      tagline: 'Targeted Approach',
      desc: 'Define the right sales approach and priorities.',
      details: [
        'Establish ideal customer profiles and qualification criteria',
        'Map conversion stages from first discovery to signed contract',
      ],
      icon: Compass,
    },
    {
      num: '04',
      title: 'BUILD',
      tagline: 'Systems & Capability',
      desc: 'Strengthen people, roles, processes and systems.',
      details: [
        'Develop live talk tracks, battlecards, and objection playbooks',
        'Configure structured CRM pipelines, templates, and cadences',
      ],
      icon: Hammer,
    },
    {
      num: '05',
      title: 'IMPLEMENT',
      tagline: 'Action & Execution',
      desc: 'Put practical workflows and training into action.',
      details: [
        'Conduct live scenario role-play drills with constructive feedback',
        'Roll out frontline workflows for daily activity and deal progress',
      ],
      icon: Rocket,
    },
    {
      num: '06',
      title: 'IMPROVE',
      tagline: 'Review & Refine',
      desc: 'Measure performance, learn from results and continuously refine.',
      details: [
        'Track conversion velocity, pipeline health, and outcome metrics',
        'Refine pitch tracks and systems for long-term commercial growth',
      ],
      icon: LineChart,
    },
  ];

  const howWeWorkTenets = [
    {
      num: '01',
      title: 'Practical & Grounded',
      desc: 'No vague corporate jargon. Every tool, script, and process is built for direct execution in live customer meetings.',
      icon: Hammer,
    },
    {
      num: '02',
      title: 'Data-Informed',
      desc: 'Decisions and adjustments are grounded in observable pipeline conversion data, activity cadences, and win rates.',
      icon: BarChart3,
    },
    {
      num: '03',
      title: 'Highly Collaborative',
      desc: 'We work side-by-side with business owners, founders, and sales managers — not as detached auditors, but as embedded allies.',
      icon: Workflow,
    },
    {
      num: '04',
      title: 'Systems-Driven',
      desc: 'We replace ad-hoc selling with structured pipelines, automated follow-ups, and clear exit criteria at each stage.',
      icon: Layers,
    },
    {
      num: '05',
      title: 'Performance-Focused',
      desc: 'Every milestone ties back to commercial impact: shorter deal cycles, higher conversion rates, and revenue predictability.',
      icon: Activity,
    },
    {
      num: '06',
      title: 'Continuous Improvement',
      desc: 'We instill repeatable systems and feedback loops so your team continues improving long after implementation.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="page-wrapper process-page page-enter">
      <SEOHead
        title="Our 6-Step Sales Growth Process | Sales Falcon"
        description="Discover Sales Falcon's 6-step sales growth methodology: Assess, Diagnose, Strategize, Build, Implement, and Improve for consistent revenue generation."
        canonicalPath="/process"
      />

      {/* Hero Section */}
      {/* Hero Section with Integrated Professional Planning Image */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-content">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                OUR 6-STEP PROCESS
              </span>
              <h1 className="page-hero-title">
                From Sales Challenges<br />to Sales Growth.
              </h1>
              <div className="gold-line" />
              <p className="page-hero-subtitle">
                A disciplined 6-stage transformation that turns ad-hoc, unpredictable sales efforts into an organized, high-converting commercial engine.
              </p>
              <div className="hero-ctas" style={{ marginTop: '28px', marginBottom: 0 }}>
                <Link to="/contact" className="btn btn-gold btn-lg">
                  <span>Talk to Us</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#process-timeline" className="btn btn-outline-navy btn-lg">
                  <span>Explore the 6 Steps</span>
                </a>
              </div>
            </div>

            <div className="page-hero-visual">
              <div className="page-hero-photo-frame">
                <div className="page-hero-gold-accent" />
                <img
                  src="/images/process-strategist.jpg"
                  alt="Sales Falcon Sales Process and Strategy Planning"
                  className="page-hero-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Visual Timeline: Horizontal on Desktop, Vertical on Mobile */}
      <section id="process-timeline" className="section section-white process-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              THE 6-STEP METHODOLOGY
            </span>
            <h2 className="section-title">The Sales Falcon Process</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              A structured progression designed to assess, diagnose, build, and continuously refine your commercial engine.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Flow */}
          <div className="timeline-horizontal-container">
            <div className="timeline-progress-rail" aria-hidden="true" />
            
            <div className="process-timeline-grid">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="timeline-step-card">
                    <div className="step-node-header">
                      <div className="step-circle-node">
                        <span className="node-num">{step.num}</span>
                      </div>
                      <div className="step-icon-wrap">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="step-card-content">
                      <span className="step-tagline">{step.tagline}</span>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.desc}</p>

                      <ul className="step-details-list">
                        {step.details.map((detail) => (
                          <li key={detail}>
                            <CheckCircle2 size={13} className="step-check" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK Section - 6 Items */}
      <section className="section section-dark how-we-work-section">
        <div className="dark-grid-bg story-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              OUR WORKING STYLE
            </span>
            <h2 className="section-title text-white">How We Work</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle text-muted-light">
              We operate with rigorous discipline and clarity to ensure change actually sticks inside your sales organization.
            </p>
          </div>

          <div className="how-work-grid">
            {howWeWorkTenets.map((tenet) => {
              const Icon = tenet.icon;
              return (
                <div key={tenet.title} className="how-work-card">
                  <div className="how-work-card-top">
                    <span className="how-work-num">{tenet.num}</span>
                    <div className="how-work-icon-box">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="how-work-title">{tenet.title}</h3>
                  <p className="how-work-desc">{tenet.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Visibility Section - 6 Visual Dashboard Cards */}
      <PerformanceSystems />

      {/* Final Process CTA */}
      <section className="section section-white">
        <div className="container">
          <div className="process-bottom-cta">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              START WITH STEP 01
            </span>
            <h2>Ready to Assess Your Current Sales Function?</h2>
            <p>We’ll evaluate your current conversion rates and identify practical quick-win opportunities.</p>
            <div className="process-cta-buttons">
              <Link to="/contact" className="btn btn-navy btn-lg">
                <span>Book a Sales Assessment</span>
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
