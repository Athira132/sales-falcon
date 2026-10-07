import React from 'react';
import { 
  Rocket, 
  UserPlus, 
  Users, 
  Target, 
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';
import './IdealClients.css';

export default function IdealClients() {
  const clientTypes = [
    {
      title: 'Growing Businesses',
      desc: 'Companies preparing to scale revenue and ready for a structured commercial approach.',
      icon: Rocket,
    },
    {
      title: 'Companies Building Their First Sales Team',
      desc: 'Founders shifting from founder-led selling to an independent, reliable sales unit.',
      icon: UserPlus,
    },
    {
      title: 'Businesses With an Existing Sales Team',
      desc: 'Organizations seeking to upgrade skills, instill accountability, and eliminate complacency.',
      icon: Users,
    },
    {
      title: 'Organizations Looking to Improve Conversion',
      desc: 'Businesses with sufficient lead flow that need better qualification, follow-ups, and closing rates.',
      icon: Target,
    },
    {
      title: 'Businesses That Need Better Sales Processes',
      desc: 'Teams requiring streamlined pipelines, CRM discipline, clear KPIs, and reliable reporting.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Enterprises Entering New Markets',
      desc: 'Organizations launching new offerings or territories needing proven playbooks and outbound structure.',
      icon: Rocket,
    },
  ];

  return (
    <section className="section section-light ideal-clients-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            WHO WE SERVE
          </span>
          <h2 className="section-title">Built for Businesses That Want to Grow.</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            Whether you are building your initial commercial engine or refining an established sales force, we provide the structured capability to scale.
          </p>
        </div>

        <div className="ideal-clients-grid">
          {clientTypes.map((client) => {
            const Icon = client.icon;
            return (
              <div key={client.title} className="client-card">
                <div className="client-card-accent" />
                <div className="client-icon-box">
                  <Icon size={22} />
                </div>
                <h3 className="client-card-title">{client.title}</h3>
                <p className="client-card-desc">{client.desc}</p>
                <a href="#contact" className="client-card-action">
                  <span>Explore Fit</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
