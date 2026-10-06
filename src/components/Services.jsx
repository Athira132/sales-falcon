import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Settings, 
  Share2, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      num: '01',
      title: 'Sales Consulting',
      icon: Briefcase,
      description: 'Sales audits, sales strategy, process mapping, KPIs, conversion improvement and sales planning.',
      items: [
        'Sales Audit',
        'Sales Strategy',
        'Process Mapping',
        'KPI Design',
        'Conversion Improvement',
      ],
    },
    {
      num: '02',
      title: 'Sales Training',
      icon: GraduationCap,
      description: 'Practical sales training designed around real conversations, role-play, feedback and measurable improvement.',
      items: [
        'Sales Skills',
        'Communication',
        'Objection Handling',
        'Negotiation',
        'Role-play & Feedback',
      ],
    },
    {
      num: '03',
      title: 'Recruitment & Team Building',
      icon: Users,
      description: 'Support for finding, assessing and onboarding salespeople who fit the role and business.',
      items: [
        'Role Profiles',
        'Hiring Plans',
        'Candidate Screening',
        'Sales Aptitude Assessment',
        'Onboarding Support',
      ],
    },
    {
      num: '04',
      title: 'Sales Systems',
      icon: Settings,
      description: 'Create structured workflows that make prospecting, follow-up, pipeline management and reporting more consistent.',
      items: [
        'CRM Workflows',
        'Pipeline Structure',
        'Follow-up Systems',
        'Sales Reporting',
        'Performance Tracking',
      ],
    },
    {
      num: '05',
      title: 'Marketing-to-Sales Alignment',
      icon: Share2,
      description: 'Connect lead generation and sales execution so marketing activity produces better opportunities and stronger conversions.',
      items: [
        'Lead Generation Planning',
        'Lead Quality Review',
        'Campaign Feedback',
        'Conversion Optimization',
        'Customer Retention',
      ],
    },
  ];

  return (
    <section id="services" className="section section-white services-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            CORE CAPABILITIES
          </span>
          <h2 className="section-title">What We Do</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            Practical solutions for building stronger sales teams and creating repeatable sales growth.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.num} className="service-card">
                <div className="service-card-top">
                  <span className="service-number">{service.num}</span>
                  <div className="service-icon-box">
                    <IconComponent size={22} className="service-icon" />
                  </div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-divider" />

                <div className="service-deliverables">
                  <span className="deliverables-heading">Key Focus Areas:</span>
                  <ul className="deliverables-list">
                    {service.items.map((item) => (
                      <li key={item} className="deliverable-item">
                        <Check size={14} className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="service-action-link">
                  <span>Inquire about {service.title}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
