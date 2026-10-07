import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Target, 
  Zap, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  BookOpenCheck, 
  Handshake, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  Award
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './About.css';

export default function About() {
  const falconPillars = [
    {
      num: '01',
      title: 'SHARP VISION',
      subtitle: 'Observation & Opportunity',
      desc: 'The falcon spots target prey from miles away. We identify high-probability revenue opportunities and diagnose pipeline bottlenecks with razor-sharp clarity.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'UNWAVERING FOCUS',
      subtitle: 'Targeted Execution',
      desc: 'No distractions. We focus your sales team on qualified prospects, rigorous follow-up rhythms, and high-impact daily sales activity.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'DECISIVE SPEED',
      subtitle: 'Momentum & Conversion',
      desc: 'Rapid deal progression without losing precision. We streamline proposal cycles and objection management to prevent pipeline stall.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'METICULOUS PRECISION',
      subtitle: 'Repeatable Systems',
      desc: 'Consistent results require exact processes. From qualification checklists to CRM stages, every action is structured and repeatable.',
      icon: Target,
    },
    {
      num: '05',
      title: 'UPWARD GROWTH',
      subtitle: 'Continuous Trajectory',
      desc: 'The upward arrow represents continuous improvement, performance elevation, and long-term business health.',
      icon: TrendingUp,
    },
    {
      num: '06',
      title: 'ENDURING RESILIENCE',
      subtitle: 'Sustainable Capability',
      desc: 'Building institutional sales muscle that withstands market cycles, competitive headwinds, and team turnover.',
      icon: ShieldCheck,
    },
  ];

  const coreValues = [
    {
      num: '01',
      title: 'INTEGRITY',
      tagline: 'Give honest advice and set realistic expectations.',
      desc: 'We diagnose real sales challenges with candor and never sell generic shortcuts.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      title: 'PERFORMANCE',
      tagline: 'Focus on observable activity, conversion and business outcomes.',
      desc: 'We measure concrete sales metrics: calls, pipeline velocity, conversion and revenue.',
      icon: TrendingUp,
    },
    {
      num: '03',
      title: 'PRACTICAL LEARNING',
      tagline: 'Train through examples, role-play, feedback and follow-up.',
      desc: 'Hands-on conversation coaching and live objection drills designed for immediate application.',
      icon: BookOpenCheck,
    },
    {
      num: '04',
      title: 'PARTNERSHIP',
      tagline: 'Work alongside owners and managers, not just deliver one-off sessions.',
      desc: 'We embed ourselves as strategic allies supporting commercial execution.',
      icon: Handshake,
    },
    {
      num: '05',
      title: 'CONTINUOUS IMPROVEMENT',
      tagline: 'Review data and refine the process over time.',
      desc: 'Constantly evaluating lost deals, pipeline analytics, and market dynamics to sharpen the playbook.',
      icon: RefreshCw,
    },
    {
      num: '06',
      title: 'ACCOUNTABILITY',
      tagline: 'Take ownership of agreed responsibilities, actions and measurable progress.',
      desc: 'Take ownership of agreed responsibilities, actions and measurable progress across the team.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="page-wrapper about-page page-enter">
      <SEOHead
        title="About Sales Falcon | Sales Growth Partner"
        description="Learn how Sales Falcon helps businesses build stronger sales teams, practical training, structured sales systems, and sustainable commercial growth."
        canonicalPath="/about"
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              ABOUT SALES FALCON
            </span>
            <h1 className="page-hero-title">More Than Sales Training.</h1>
            <div className="gold-line" />
            <p className="page-hero-subtitle">
              Sales Falcon is a business-to-business sales growth partner. We help businesses recruit suitable salespeople, develop their skills, strengthen sales processes, implement effective systems and build teams that consistently convert opportunities into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Promise Callout */}
      <section className="section section-white">
        <div className="container">
          <div className="about-promise-box">
            <div className="promise-emblem-wrap">
              <img
                src="/images/sales-falcon-icon.png"
                alt="Sales Falcon Emblem"
                className="promise-emblem-img"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/Xx8vtHPD/Sales-Falcon-Logo-with-Golden-x.png';
                }}
              />
            </div>
            <div className="promise-content">
              <span className="promise-label">OUR CORE BRAND PROMISE</span>
              <blockquote className="promise-quote">
                “We help businesses turn salespeople into performers, sales processes into systems, and sales potential into measurable growth.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Large Indian Professional Leader - Text + Image Section with Subtle Gold Frame */}
      <section className="section section-light about-leadership-section">
        <div className="container">
          <div className="about-editorial-grid">
            {/* Text Column */}
            <div className="about-editorial-text">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                SALES CONSULTING LEADERSHIP
              </span>
              <h2 className="about-editorial-title">
                Grounded in Real Sales Experience.
              </h2>
              <div className="gold-line" />
              <p className="about-editorial-para">
                Sales Falcon was established to provide business owners and sales leaders with practical, grounded support. Many organizations struggle not because their products lack merit, but because their sales teams lack structured conversation coaching, pipeline visibility, and consistent execution rhythms.
              </p>
              <p className="about-editorial-para">
                We partner directly with founders and leadership teams to turn unorganized sales efforts into disciplined, high-converting commercial engines built for long-term sustainability.
              </p>

              <div className="about-pillar-checks">
                <div className="about-check-item">
                  <CheckCircle2 size={18} className="gold-text" />
                  <span>Frontline conversation coaching and objection handling drills</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={18} className="gold-text" />
                  <span>Objective pipeline velocity and conversion audits</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={18} className="gold-text" />
                  <span>Role profiling and sales team recruitment support</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={18} className="gold-text" />
                  <span>Repeatable B2B workflows and CRM accountability systems</span>
                </div>
              </div>

              <div className="about-editorial-cta">
                <Link to="/contact" className="btn btn-navy btn-lg">
                  <span>Speak With Our Team</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Image Column - Single Professional Indian Person with subtle gold frame */}
            <div className="about-editorial-image-wrap">
              <div className="about-photo-frame">
                <div className="about-photo-gold-border" />
                <img
                  src="/images/about-leader.jpg"
                  alt="Sales Falcon Senior Sales Consultant and Leadership"
                  className="about-leader-photo"
                  loading="lazy"
                />
                <div className="about-photo-badge">
                  <Award size={18} className="gold-text" />
                  <div className="badge-text-group">
                    <span className="badge-main">B2B Sales Consulting</span>
                    <span className="badge-sub">Trust • Experience • Professionalism</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              OUR FOUNDATION
            </span>
            <h2 className="section-title">Vision & Mission</h2>
            <div className="gold-line gold-line-center" />
          </div>

          <div className="about-vm-grid">
            <div className="about-vm-card vision">
              <span className="about-vm-type">OUR VISION</span>
              <h3 className="about-vm-title">Building Sustainable Sales Culture</h3>
              <p className="about-vm-text">
                To become a trusted sales growth partner for businesses by building high-performance sales teams and creating a culture of consistent, sustainable growth.
              </p>
            </div>

            <div className="about-vm-card mission">
              <span className="about-vm-type">OUR MISSION</span>
              <h3 className="about-vm-title">Execution-Oriented Enablement</h3>
              <p className="about-vm-text">
                To help businesses recruit suitable salespeople, develop their skills, strengthen sales processes, implement effective systems and build teams that consistently convert opportunities into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Falcon Concept Visual Story - 6 Items */}
      <section className="section section-dark about-falcon-story-section">
        <div className="dark-grid-bg story-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              THE BRAND SYMBOLISM
            </span>
            <h2 className="section-title text-white">The Falcon Concept</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle text-muted-light">
              The falcon represents sharp vision, focus, speed, observation and precision — while the upward arrow symbolizes continuous performance improvement and business growth.
            </p>
          </div>

          <div className="falcon-story-grid">
            {falconPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="falcon-story-card">
                  <div className="story-icon-box">
                    <Icon size={24} />
                  </div>
                  <h3 className="story-card-title">{item.title}</h3>
                  <span className="story-card-sub">{item.subtitle}</span>
                  <p className="story-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section - Exactly 6 Items in 3 x 2 Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="section-title">Core Values</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              Principles that govern how we interact, advise, coach, and deliver value to our clients.
            </p>
          </div>

          <div className="about-values-grid">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="about-value-card">
                  <div className="about-value-top">
                    <div className="about-value-icon">
                      <Icon size={22} />
                    </div>
                    <div className="about-value-title-wrap">
                      <span className="about-value-num">{val.num}</span>
                      <h3 className="about-value-title">{val.title}</h3>
                    </div>
                  </div>
                  <blockquote className="about-value-tagline">“{val.tagline}”</blockquote>
                  <p className="about-value-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="about-bottom-cta">
            <h3>Ready to partner with Sales Falcon?</h3>
            <p>Let's evaluate your current team dynamics and sales systems.</p>
            <div className="about-cta-btns">
              <Link to="/contact" className="btn btn-navy btn-lg">
                <span>Start a Conversation</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline-navy btn-lg">
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
