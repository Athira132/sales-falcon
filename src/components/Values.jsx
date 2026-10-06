import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  BookOpenCheck, 
  Handshake, 
  RefreshCw,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './Values.css';

export default function Values() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  const valuesData = [
    {
      id: 'integrity',
      title: 'INTEGRITY',
      tagline: 'Give honest advice and set realistic expectations.',
      icon: ShieldCheck,
      details: 'We believe sales consulting only works when built on complete transparency. We don’t sell overnight miracles or inflated promises; we diagnose real bottlenecks and provide clear, candid guidance on what will genuinely drive results.',
      proofPoints: [
        'Realistic timeline and KPI expectations',
        'Transparent assessment of team and process gaps',
        'Objective advice focused on long-term client health',
      ],
    },
    {
      id: 'performance',
      title: 'PERFORMANCE',
      tagline: 'Focus on observable activity, conversion and business outcomes.',
      icon: TrendingUp,
      details: 'Motivation without measurement fades quickly. Our interventions focus squarely on tangible sales metrics: call quality, follow-up consistency, pipeline velocity, conversion ratios, and bottom-line revenue impact.',
      proofPoints: [
        'Observable daily sales activities & cadences',
        'Pipeline stage conversion tracking',
        'Direct connection between activity and revenue outcomes',
      ],
    },
    {
      id: 'practical-learning',
      title: 'PRACTICAL LEARNING',
      tagline: 'Train through examples, role-play, feedback and follow-up.',
      icon: BookOpenCheck,
      details: 'Theory doesn’t close deals. We train through live simulated scenarios, objection role-plays, real conversation critiques, and continuous coaching that salespeople can immediately apply on their next prospect call.',
      proofPoints: [
        'Scenario-based role-play drills',
        'Structured real-time feedback loops',
        'Actionable talk tracks and negotiation frameworks',
      ],
    },
    {
      id: 'partnership',
      title: 'PARTNERSHIP',
      tagline: 'Work alongside owners and managers, not just deliver one-off sessions.',
      icon: Handshake,
      details: 'We embed ourselves as your trusted growth ally. Instead of delivering a PowerPoint and leaving, we work side-by-side with business owners, founders, and sales leaders to embed behaviors and support execution.',
      proofPoints: [
        'Direct collaboration with founders & sales leadership',
        'Hands-on implementation support',
        'Ongoing accountability and guidance',
      ],
    },
    {
      id: 'continuous-improvement',
      title: 'CONTINUOUS IMPROVEMENT',
      tagline: 'Review data and refine the process over time.',
      icon: RefreshCw,
      details: 'Markets evolve, buyers shift, and sales playbooks must continually adapt. We establish systematic feedback loops to evaluate conversion data, learn from lost deals, and sharpen your sales motion on an ongoing basis.',
      proofPoints: [
        'Regular pipeline reviews and win/loss analysis',
        'Iterative playbook and script refinement',
        'Data-informed process optimization',
      ],
    },
  ];

  const current = valuesData[activeValueIndex];
  const CurrentIcon = current.icon;

  return (
    <section className="section section-light values-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            CORE PHILOSOPHY
          </span>
          <h2 className="section-title">What We Believe</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            Principles that guide how we advise, train, and build sales capability for our clients.
          </p>
        </div>

        {/* Interactive Values Layout */}
        <div className="values-interactive-layout">
          {/* Left/Tab Navigation Column */}
          <div className="values-nav-col" role="tablist" aria-label="Core Values Tabs">
            {valuesData.map((val, idx) => {
              const Icon = val.icon;
              const isActive = idx === activeValueIndex;
              return (
                <button
                  key={val.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`value-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveValueIndex(idx)}
                >
                  <div className="value-tab-icon">
                    <Icon size={20} />
                  </div>
                  <div className="value-tab-info">
                    <span className="value-tab-title">{val.title}</span>
                    <span className="value-tab-summary">{val.tagline}</span>
                  </div>
                  <ArrowRight size={16} className="value-tab-arrow" />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Showcase Panel */}
          <div className="values-display-col">
            <div className="value-display-card" role="tabpanel">
              <div className="display-card-header">
                <div className="display-icon-box">
                  <CurrentIcon size={28} />
                </div>
                <div>
                  <span className="display-badge">VALUE 0{activeValueIndex + 1}</span>
                  <h3 className="display-title">{current.title}</h3>
                </div>
              </div>

              <blockquote className="display-tagline">
                “{current.tagline}”
              </blockquote>

              <p className="display-details">{current.details}</p>

              <div className="display-proof-list">
                <span className="proof-heading">How This Translates Into Action:</span>
                <ul>
                  {current.proofPoints.map((point) => (
                    <li key={point}>
                      <CheckCircle size={16} className="proof-check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
