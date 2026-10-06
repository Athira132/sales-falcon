import React from 'react';
import { Search, Compass, Hammer, Rocket, LineChart } from 'lucide-react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'ASSESS',
      desc: 'Understand the current sales team, process and performance.',
      icon: Search,
    },
    {
      step: '02',
      title: 'STRATEGIZE',
      desc: 'Identify gaps and define the right sales approach.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'BUILD',
      desc: 'Strengthen people, roles, processes and systems.',
      icon: Hammer,
    },
    {
      step: '04',
      title: 'IMPLEMENT',
      desc: 'Put practical sales workflows and training into action.',
      icon: Rocket,
    },
    {
      step: '05',
      title: 'IMPROVE',
      desc: 'Measure performance, learn from results and continuously refine.',
      icon: LineChart,
    },
  ];

  return (
    <section id="process" className="section section-white process-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            HOW WE PARTNER
          </span>
          <h2 className="section-title">From Sales Challenges to Sales Growth.</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            A disciplined, step-by-step roadmap turning fragmented sales activity into a repeatable, high-performance engine.
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="process-timeline-wrapper">
          <div className="process-connecting-line" aria-hidden="true" />

          <div className="process-steps-grid">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="process-step-node">
                  <div className="process-node-header">
                    <div className="process-node-circle">
                      <span className="process-node-num">{item.step}</span>
                      <div className="process-node-icon">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="process-step-content">
                    <h3 className="process-step-title">{item.title}</h3>
                    <p className="process-step-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
