import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
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
      tagline: 'Understand the Current Reality',
      desc: 'Understand the current sales team, process and performance.',
      details: [
        'Evaluate rep conversation quality and objection handling',
        'Review current conversion rates at each pipeline stage',
        'Audit follow-up cadence, response times, and CRM discipline',
      ],
      icon: Search,
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      tagline: 'Define the Optimal Approach',
      desc: 'Identify gaps and define the right sales approach.',
      details: [
        'Establish ideal customer profiles (ICPs) and qualification gates',
        'Map the stages from first discovery to signed contract',
        'Define explicit stage exit criteria and measurable KPI targets',
      ],
      icon: Compass,
    },
    {
      num: '03',
      title: 'BUILD',
      tagline: 'Strengthen Infrastructure & People',
      desc: 'Strengthen people, roles, processes and systems.',
      details: [
        'Develop real-world playbooks, talk tracks, and battlecards',
        'Configure CRM pipelines, follow-up automations, and templates',
        'Refine role scorecards and recruitment criteria for hiring',
      ],
      icon: Hammer,
    },
    {
      num: '04',
      title: 'IMPLEMENT',
      tagline: 'Action & Live Coaching',
      desc: 'Put practical sales workflows and training into action.',
      details: [
        'Conduct scenario-based role-play drills with constructive feedback',
        'Roll out frontline workflows for call logging and deal progression',
        'Coach sales managers on leading rigorous pipeline review sessions',
      ],
      icon: Rocket,
    },
    {
      num: '05',
      title: 'IMPROVE',
      tagline: 'Continuous Performance Elevation',
      desc: 'Measure performance, learn from results and continuously refine.',
      details: [
        'Track conversion velocity, win/loss data, and activity ratios',
        'Iterate on pitch talk tracks based on real prospect pushbacks',
        'Embed a lasting cadence of self-sufficient commercial excellence',
      ],
      icon: LineChart,
    },
  ];

  const howWeWorkTenets = [
    {
      title: 'Practical',
      desc: 'No vague corporate jargon. Every tool, script, and process is built for direct execution in live customer meetings.',
      icon: Hammer,
    },
    {
      title: 'Data-Informed',
      desc: 'Decisions and adjustments are grounded in observable pipeline conversion data, activity cadences, and win rates.',
      icon: BarChart3,
    },
    {
      title: 'Collaborative',
      desc: 'We work side-by-side with business owners, founders, and sales managers — not as detached auditors, but as embedded partners.',
      icon: Workflow,
    },
    {
      title: 'Performance-Focused',
      desc: 'Every milestone ties back to commercial impact: shorter deal cycles, higher conversion rates, and revenue predictability.',
      icon: Target,
    },
    {
      title: 'Built for Continuous Improvement',
      desc: 'We instill repeatable systems and feedback loops so your team continues improving long after implementation.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="page-wrapper process-page page-enter">
      <SEOHead
        title="Our Sales Growth Process | Sales Falcon"
        description="Discover Sales Falcon's 5-step sales growth methodology: Assess, Strategize, Build, Implement, and Improve for consistent revenue generation."
        canonicalPath="/process"
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              OUR PROCESS
            </span>
            <h1 className="page-hero-title">
              From Sales Challenges<br />to Sales Growth.
            </h1>
            <div className="gold-line" />
            <p className="page-hero-subtitle">
              A disciplined 5-stage transformation that turns ad-hoc, unpredictable sales efforts into an organized, high-converting commercial engine.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Visual Timeline */}
      <section className="section section-white">
        <div className="container">
          <div className="process-flow-stack">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="process-flow-item">
                  <div className="flow-number-col">
                    <div className="flow-circle">
                      <span className="flow-num">{step.num}</span>
                    </div>
                    {idx < steps.length - 1 && <div className="flow-line-connector" />}
                  </div>

                  <div className="flow-card">
                    <div className="flow-card-header">
                      <div className="flow-card-title-group">
                        <span className="flow-tagline">{step.tagline}</span>
                        <h2 className="flow-title">{step.title}</h2>
                      </div>
                      <div className="flow-icon-box">
                        <Icon size={24} />
                      </div>
                    </div>

                    <p className="flow-lead-desc">{step.desc}</p>

                    <div className="flow-breakdown">
                      <span className="breakdown-label">Key Actions:</span>
                      <ul className="breakdown-list">
                        {step.details.map((detail) => (
                          <li key={detail}>
                            <CheckCircle2 size={16} className="flow-check" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK Section */}
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
                  <div className="how-work-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="how-work-title">{tenet.title}</h3>
                  <p className="how-work-desc">{tenet.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Visibility Section */}
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
            <p>We’ll evaluate your current conversion rates and identify quick-win opportunities.</p>
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
