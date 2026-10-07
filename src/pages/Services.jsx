import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Settings, 
  Share2, 
  Check, 
  Database, 
  MessageSquare, 
  Calendar, 
  FileText, 
  BarChart4, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './Services.css';

export default function Services() {
  const detailedServices = [
    {
      num: '01',
      title: 'Sales Consulting',
      icon: Briefcase,
      tagline: 'Strategic diagnosis and pipeline architecture',
      desc: 'Sales audits, sales strategy, process mapping, KPIs, conversion improvement and sales planning.',
      focusItems: [
        'Sales Diagnostic Audits',
        'Sales Strategy Formulation',
        'Pipeline Process Mapping',
        'KPI & Metric Alignment',
      ],
      deliverables: 'Complete diagnostic audit of existing conversion rates, detailed pipeline stages map, and actionable quarterly commercial plan.',
    },
    {
      num: '02',
      title: 'Sales Training',
      icon: GraduationCap,
      tagline: 'Skill-building based on real customer interactions',
      desc: 'Practical sales training designed around real conversations, role-play, feedback and measurable improvement.',
      focusItems: [
        'Discovery & Value Framing',
        'Live Objection Handling Drills',
        'Commercial Negotiation Frameworks',
        'Structured Role-Play with Feedback',
      ],
      deliverables: 'Live recorded role-play drills, talk tracks for tough buyer pushbacks, and structured negotiation frameworks.',
    },
    {
      num: '03',
      title: 'Recruitment & Team Building',
      icon: Users,
      tagline: 'Attracting and assessing true commercial talent',
      desc: 'Role profiles, hiring plans, candidate sourcing/screening, sales aptitude assessment and onboarding support.',
      focusItems: [
        'Commercial Role Profiles',
        'Sales Aptitude Assessment',
        'Frontline Candidate Screening',
        'Structured 90-Day Onboarding',
      ],
      deliverables: 'Position scorecards, behavioral interview guides, aptitude evaluations, and a 30-60-90 day rep ramp plan.',
    },
    {
      num: '04',
      title: 'Sales Systems',
      icon: Settings,
      tagline: 'Operational infrastructure that prevents deal leakage',
      desc: 'CRM workflows, pipeline structure, follow-up systems, reporting and performance tracking.',
      focusItems: [
        'CRM Architecture & Stages',
        'Follow-up Cadence Automation',
        'Deal Qualification Gates',
        'Weekly Activity Dashboards',
      ],
      deliverables: 'Automated deal stage criteria, multi-channel follow-up cadences, and executive weekly visibility reporting.',
    },
    {
      num: '05',
      title: 'Marketing-to-Sales Alignment',
      icon: Share2,
      tagline: 'Connecting lead generation with frontline execution',
      desc: 'Lead-generation planning, lead quality review, campaign feedback, conversion optimization and customer retention.',
      focusItems: [
        'Lead Quality Feedback Loops',
        'MQL to SQL Qualification SLAs',
        'Campaign Conversion Optimization',
        'Account Retention Cadences',
      ],
      deliverables: 'SLA definitions between marketing and sales, inbound qualification checklists, and feedback cadences on lead quality.',
    },
    {
      num: '06',
      title: 'Sales Performance Management',
      icon: TrendingUp,
      tagline: 'Visibility, gap analysis and frontline execution control',
      desc: 'Track sales activity, follow-up, conversion, pipeline performance and key indicators to help businesses identify gaps and improve sales execution.',
      focusItems: [
        'Sales Activity Tracking',
        'Follow-up Cadence Monitoring',
        'Pipeline Velocity & Conversion',
        'Execution Gap Diagnostics',
      ],
      deliverables: 'Executive pipeline visibility dashboards, weekly rep activity scorecards, bottleneck reviews, and continuous sales coaching cadences.',
    },
  ];

  const supportingSystems = [
    { num: '01', name: 'CRM', desc: 'Custom pipeline stages, deal velocity tracking, and structured data fields.', icon: Database },
    { num: '02', name: 'WhatsApp Business', desc: 'Pre-formatted message sequences, rapid prospect response, and cadences.', icon: MessageSquare },
    { num: '03', name: 'Scheduling', desc: 'Automated consultation booking to eliminate calendar friction and no-shows.', icon: Calendar },
    { num: '04', name: 'Sales Documents', desc: 'High-converting proposal outlines, quotation templates, and battlecards.', icon: FileText },
    { num: '05', name: 'Reporting', desc: 'Weekly pipeline digests, conversion rates, and revenue predictability.', icon: BarChart4 },
    { num: '06', name: 'Learning Materials', desc: 'Objection playbooks, recorded drill libraries, and onboarding training kits.', icon: BookOpen },
  ];

  return (
    <div className="page-wrapper services-page page-enter">
      <SEOHead
        title="Sales Consulting, Training & Sales Systems | Sales Falcon"
        description="Explore Sales Falcon's 6 core services: sales audits, training, recruitment, CRM sales systems, marketing alignment, and sales performance management."
        canonicalPath="/services"
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              OUR SERVICES
            </span>
            <h1 className="page-hero-title">Build Better Sales.<br />Build Better Systems.</h1>
            <div className="gold-line" />
            <p className="page-hero-subtitle">
              Comprehensive B2B commercial growth solutions engineered to turn sales friction into repeatable conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Single Indian Sales Professional Image Integrated with Service Introduction */}
      <section className="section section-light service-intro-section">
        <div className="container">
          <div className="service-intro-grid">
            <div className="service-intro-image-wrap">
              <div className="service-photo-frame">
                <div className="service-photo-gold-border" />
                <img
                  src="/images/services-trainer.jpg"
                  alt="Indian Sales Consultant and Trainer Explaining Sales Strategy"
                  className="service-trainer-photo"
                  loading="lazy"
                />
                <div className="service-photo-tag">
                  <span className="service-tag-title">Strategic Sales Consulting</span>
                  <span className="service-tag-sub">Training • Strategy • Business Growth</span>
                </div>
              </div>
            </div>

            <div className="service-intro-text">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                SALES STRATEGY & TRAINING
              </span>
              <h2 className="service-intro-heading">
                Practical Enablement for Modern Sales Teams
              </h2>
              <div className="gold-line" />
              <p className="service-intro-body">
                Sales consulting is only effective when it directly changes what happens in real customer interactions. We work side-by-side with sales consultants, managers, and frontline executives to implement proven B2B sales methodologies.
              </p>
              <p className="service-intro-body">
                From diagnosing qualification bottlenecks on the whiteboard to installing structured CRM workflows, we ensure your sales team builds the confidence, process discipline, and closing skills needed for sustainable commercial growth.
              </p>

              <div className="service-feature-pills">
                <div className="feature-pill">
                  <span className="pill-dot" />
                  <span>Real Customer Conversations</span>
                </div>
                <div className="feature-pill">
                  <span className="pill-dot" />
                  <span>Disciplined Pipeline Stages</span>
                </div>
                <div className="feature-pill">
                  <span className="pill-dot" />
                  <span>Measurable Activity Metrics</span>
                </div>
                <div className="feature-pill">
                  <span className="pill-dot" />
                  <span>Execution Accountability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Stack - Exactly 6 Service Cards */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              6 CORE SOLUTIONS
            </span>
            <h2 className="section-title">What We Do</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              Six targeted service disciplines to strengthen every link in your commercial revenue chain.
            </p>
          </div>

          <div className="services-detailed-list">
            {detailedServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.num} className="service-detail-card" id={`service-${service.num}`}>
                  <div className="service-detail-header">
                    <div className="detail-number-badge">{service.num}</div>
                    <div className="detail-title-group">
                      <span className="detail-tagline">{service.tagline}</span>
                      <h2 className="detail-service-title">{service.title}</h2>
                    </div>
                    <div className="detail-icon-circle">
                      <Icon size={26} />
                    </div>
                  </div>

                  <p className="detail-desc">{service.desc}</p>

                  <div className="detail-grid-row">
                    <div className="detail-focus-col">
                      <span className="detail-subhead">Key Focus Areas:</span>
                      <ul className="detail-items-list">
                        {service.focusItems.map((item) => (
                          <li key={item}>
                            <Check size={16} className="item-check" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-deliverables-col">
                      <span className="detail-subhead">Operational Impact:</span>
                      <p className="detail-deliverable-text">{service.deliverables}</p>
                      <Link to="/contact" className="btn btn-navy btn-sm detail-cta-btn">
                        <span>Inquire About {service.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Systems Grid - Exactly 6 Compact Items */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              TOOLS & SYSTEMS
            </span>
            <h2 className="section-title">Systems That Support Sales</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              We help businesses create practical workflows for CRM, communication, scheduling, documents, reporting, and learning.
            </p>
          </div>

          <div className="systems-grid">
            {supportingSystems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="system-grid-card">
                  <div className="system-card-top">
                    <span className="system-num">{item.num}</span>
                    <div className="system-icon-box">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="system-title">{item.name}</h3>
                  <p className="system-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Services CTA */}
      <section className="section section-dark services-cta-section">
        <div className="dark-grid-bg story-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-final-cta-card">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              NEXT STEPS
            </span>
            <h2 className="text-white">Let's Build Your Sales Function.</h2>
            <p className="text-muted-light">
              Connect with Sales Falcon to discuss your current team capability, sales cycle length, and growth targets.
            </p>
            <div className="services-cta-buttons">
              <Link to="/contact" className="btn btn-gold btn-lg">
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
