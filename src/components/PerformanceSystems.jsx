import React from 'react';
import { 
  Users2, 
  Workflow, 
  Percent, 
  Clock, 
  Repeat, 
  TrendingUp, 
  Info,
  CheckCircle2
} from 'lucide-react';
import './PerformanceSystems.css';

export default function PerformanceSystems() {
  const dashboardCards = [
    {
      num: '01',
      id: 'leads',
      title: 'Qualified Leads',
      category: 'Lead Qualification',
      icon: Users2,
      concept: 'ICP identification, lead scoring & incoming opportunity filters',
      metricVisual: {
        type: 'bars',
        stages: ['Total Inbound', 'MQL Filtered', 'Sales Accepted'],
        percentages: [100, 65, 42],
      },
    },
    {
      num: '02',
      id: 'pipeline',
      title: 'Sales Pipeline',
      category: 'Stage Velocity',
      icon: Workflow,
      concept: 'Clear stages from discovery to proposal with structured exit criteria',
      metricVisual: {
        type: 'funnel',
        stages: ['Discovery', 'Demo/Audit', 'Proposal', 'Closing'],
        progress: 'Structured Pipeline Flow',
      },
    },
    {
      num: '03',
      id: 'conversion',
      title: 'Conversion',
      category: 'Stage Transitions',
      icon: Percent,
      concept: 'Measuring conversion at each step to systematically remove deal drop-offs',
      metricVisual: {
        type: 'gauge',
        indicators: ['Lead → Meeting', 'Audit → Proposal', 'Proposal → Won'],
      },
    },
    {
      num: '04',
      id: 'followups',
      title: 'Follow-ups',
      category: 'Cadence Rigor',
      icon: Clock,
      concept: 'Multi-touch sequences, response SLAs and no-drop-off follow-up cadences',
      metricVisual: {
        type: 'cadence',
        cadenceDays: ['Day 1 Call', 'Day 3 Follow-up', 'Day 6 Value Add', 'Day 10 Check-in'],
      },
    },
    {
      num: '05',
      id: 'retention',
      title: 'Client Retention',
      category: 'Account Health',
      icon: Repeat,
      concept: 'Post-sales onboarding handoffs, relationship cadences and recurring value',
      metricVisual: {
        type: 'retention',
        factors: ['Onboarding SLA', 'Check-in Rhythm', 'Upsell Readiness'],
      },
    },
    {
      num: '06',
      id: 'performance',
      title: 'Sales Performance',
      category: 'Execution Indicators',
      icon: TrendingUp,
      concept: 'Pipeline health, activity momentum and execution indicators across the team',
      metricVisual: {
        type: 'trend',
        label: 'Predictable Growth Curve',
      },
    },
  ];

  return (
    <section className="section section-light performance-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            OPERATIONAL VISIBILITY
          </span>
          <h2 className="section-title">Make Sales Performance Visible.</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            A strong sales function needs more than motivated people. It needs visibility into activity, pipeline, conversion, follow-up and outcomes.
          </p>
        </div>

        {/* Disclaimer / Framing pill */}
        <div className="performance-disclaimer-wrap">
          <div className="performance-disclaimer">
            <Info size={16} className="gold-text" />
            <span>Illustrative Design Framework — Visual operational pillars we structure for client sales organizations.</span>
          </div>
        </div>

        {/* 6 Dashboard-Inspired Cards */}
        <div className="performance-cards-grid">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="perf-card">
                <div className="perf-card-header">
                  <div className="perf-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div className="perf-header-text">
                    <span className="perf-category">{card.category}</span>
                    <h3 className="perf-title">{card.title}</h3>
                  </div>
                </div>

                <p className="perf-concept">{card.concept}</p>

                {/* Dashboard-style Visual Element */}
                <div className="perf-visual-widget">
                  {card.metricVisual.type === 'bars' && (
                    <div className="widget-bars">
                      {card.metricVisual.stages.map((stg, i) => (
                        <div key={stg} className="bar-row">
                          <span className="bar-label">{stg}</span>
                          <div className="bar-track">
                            <div 
                              className="bar-fill" 
                              style={{ width: `${card.metricVisual.percentages[i]}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.metricVisual.type === 'funnel' && (
                    <div className="widget-funnel">
                      {card.metricVisual.stages.map((step, i) => (
                        <div key={step} className="funnel-step">
                          <span className="funnel-badge">Step {i + 1}</span>
                          <span className="funnel-title">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.metricVisual.type === 'gauge' && (
                    <div className="widget-gauge">
                      {card.metricVisual.indicators.map((ind) => (
                        <div key={ind} className="gauge-item">
                          <CheckCircle2 size={14} className="gold-text" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.metricVisual.type === 'cadence' && (
                    <div className="widget-cadence">
                      {card.metricVisual.cadenceDays.map((cDay) => (
                        <div key={cDay} className="cadence-chip">
                          <span className="cadence-dot" />
                          <span>{cDay}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.metricVisual.type === 'retention' && (
                    <div className="widget-retention">
                      {card.metricVisual.factors.map((factor) => (
                        <div key={factor} className="retention-pill">
                          <span>{factor}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.metricVisual.type === 'trend' && (
                    <div className="widget-trend">
                      <div className="trend-line-svg-wrap">
                        <svg viewBox="0 0 200 48" className="mini-trend-svg" fill="none">
                          <path
                            d="M 5 40 Q 50 35, 90 24 T 195 8"
                            stroke="#D8AC45"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <circle cx="195" cy="8" r="4" fill="#102748" stroke="#D8AC45" strokeWidth="2" />
                        </svg>
                      </div>
                      <span className="trend-caption">Predictable Baseline → Compounding Growth</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
