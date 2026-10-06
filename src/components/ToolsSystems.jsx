import React from 'react';
import { 
  Database, 
  MessageSquare, 
  Calendar, 
  FileText, 
  BarChart4, 
  BookOpen, 
  Layers 
} from 'lucide-react';
import './ToolsSystems.css';

export default function ToolsSystems() {
  const tools = [
    {
      name: 'CRM',
      desc: 'Pipeline organization, deal tracking, lead history, and clear stage exit criteria.',
      icon: Database,
    },
    {
      name: 'WhatsApp Business',
      desc: 'Fast prospect engagement, instant messaging templates, and structured follow-up touchpoints.',
      icon: MessageSquare,
    },
    {
      name: 'Scheduling',
      desc: 'Automated consultation booking, calendar routing, and reminder sequences that reduce no-shows.',
      icon: Calendar,
    },
    {
      name: 'Sales Documents',
      desc: 'Battlecards, quotation templates, proposal frameworks, and pitch collateral built for conversion.',
      icon: FileText,
    },
    {
      name: 'Reporting',
      desc: 'Weekly activity digests, pipeline health summaries, conversion velocity, and forecasting dashboards.',
      icon: BarChart4,
    },
    {
      name: 'Learning Materials',
      desc: 'Recorded objection drills, playbook guides, script reference libraries, and onboarding kits.',
      icon: BookOpen,
    },
  ];

  return (
    <section className="section section-white tools-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            WORKFLOW INFRASTRUCTURE
          </span>
          <h2 className="section-title">Systems That Support Sales.</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            We help businesses create practical workflows for prospects, consultations, proposals, follow-ups, deals, reporting and client relationships.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="tool-card">
                <div className="tool-icon-box">
                  <Icon size={22} className="tool-icon" />
                </div>
                <div className="tool-content">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
