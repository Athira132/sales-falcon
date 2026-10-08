import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Settings, 
  Share2, 
  Zap 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import './Home.css';

export default function Home() {
  const sixWaysToImprove = [
    {
      num: '01',
      title: 'Improve Sales Skills',
      image: '/images/ways-01-skills.jpg',
      alt: 'Sales Professional Practicing Presentation and Client Discussion',
      objectPosition: 'center 20%',
      desc: 'Build foundational and advanced sales acumen through structured role-play, pitch refinement, discovery rigor, and practical objection-handling practice that equips salespeople to handle high-stakes customer conversations with poise.',
    },
    {
      num: '02',
      title: 'Strengthen Communication',
      image: '/images/ways-02-communication.jpg',
      alt: 'Business Professional in Client Consultation Discussion',
      objectPosition: 'center 20%',
      desc: 'Elevate commercial dialogue from transactional pitch to strategic consultation. Teach reps to ask incisive questions, actively listen to buyer priorities, articulate differentiated value, and communicate with authority at every stage.',
    },
    {
      num: '03',
      title: 'Improve Follow-Up',
      image: '/images/ways-03-followup.jpg',
      alt: 'Sales Professional Reviewing Leads and CRM Dashboard',
      objectPosition: 'center 18%',
      desc: 'Eliminate lead leakage by instituting disciplined multi-touch cadence standards, timely response protocols, and structured CRM follow-up schedules so promising prospects never stall or fall through the cracks.',
    },
    {
      num: '04',
      title: 'Improve Conversion',
      image: '/images/ways-04-conversion.jpg',
      alt: 'Sales Professional Discussing Proposal and Closing Conversation',
      objectPosition: 'center 20%',
      desc: 'Sharpen proposal presentation, pricing defense, and closing techniques. Help your team identify real decision-makers early, resolve hesitations proactively, and convert qualified pipeline opportunities into committed clients.',
    },
    {
      num: '05',
      title: 'Strengthen Sales Systems',
      image: '/images/ways-05-systems.jpg',
      alt: 'Business Professional Working with Sales Process Workflow',
      objectPosition: 'center 20%',
      desc: 'Design clear pipeline stages, activity benchmarks, and CRM automation that standardize best practices across the organization, giving reps clear daily execution playbooks and leadership complete pipeline visibility.',
    },
    {
      num: '06',
      title: 'Improve Sales Performance',
      image: '/images/ways-06-performance.jpg',
      alt: 'Sales Manager Reviewing Performance Charts and Metrics',
      objectPosition: 'center 20%',
      desc: 'Implement transparent KPI tracking, weekly deal velocity reviews, and constructive 1-on-1 coaching cadence that keep teams accountable, motivated, and aligned with monthly and annual revenue targets.',
    },
  ];

  const whyHighlights = [
    {
      num: '01',
      title: 'Practical, Not Theoretical',
      desc: 'Training and consulting built around real sales situations.',
    },
    {
      num: '02',
      title: 'People + Process',
      desc: 'We focus on both the salesperson and the system supporting them.',
    },
    {
      num: '03',
      title: 'Measurable Performance',
      desc: 'Focus on observable activity, conversion, follow-up and outcomes.',
    },
    {
      num: '04',
      title: 'Business-First Thinking',
      desc: "Solutions are designed around the organization's actual goals.",
    },
    {
      num: '05',
      title: 'Continuous Improvement',
      desc: 'Review performance, learn from results and refine the approach.',
    },
    {
      num: '06',
      title: 'Long-Term Partnership',
      desc: 'Work alongside businesses to support sustainable sales improvement.',
    },
  ];

  return (
    <div className="page-wrapper home-page page-enter">
      <SEOHead
        title="Sales Falcon | We Power Your Sales Team"
        description="Sales Falcon helps businesses build stronger sales teams through sales consulting, training, recruitment support, sales systems and performance improvement."
        canonicalPath="/"
      />

      {/* 1. Concise Hero */}
      <Hero />

      {/* 2. Short Introduction Section */}
      <section className="section section-white home-intro-section">
        <div className="container">
          <div className="home-intro-grid">
            <div className="home-intro-lead">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                WHO WE ARE
              </span>
              <h2 className="home-intro-heading">
                A Dedicated Sales Growth Partner
              </h2>
              <div className="gold-line" />
              <p className="home-intro-text">
                Sales Falcon is a business-to-business sales growth partner helping organizations build stronger sales teams and more effective sales systems.
              </p>
              <div className="home-intro-cta">
                <Link to="/about" className="btn btn-navy">
                  <span>Learn More About Sales Falcon</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="home-intro-quote-card">
              <div className="quote-mark-icon">“</div>
              <blockquote className="home-quote-body">
                We help businesses turn salespeople into performers, sales processes into systems, and sales potential into measurable growth.
              </blockquote>
              <div className="gold-line" />
              <span className="home-quote-caption">SALES FALCON PROMISE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Sales Team Section with Provided Photos */}
      <section className="section home-team-section">
        <div className="container">
          <div className="home-team-grid">
            {/* Left Content Column */}
            <div className="home-team-content">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                TEAM CAPABILITY &amp; TALENT
              </span>
              <h2 className="home-team-heading">
                BUILD A STRONGER SALES TEAM.
              </h2>
              <div className="gold-line" />
              <p className="home-team-lead">
                Sales consulting, training, recruitment support and structured execution systems designed to turn salespeople into high performers. We work directly with leadership to strengthen commercial skill, hiring precision, and daily sales discipline.
              </p>

              <div className="home-team-features-grid">
                <div className="home-team-feature-item">
                  <div className="feature-item-num">01</div>
                  <div className="feature-item-text">
                    <h3 className="feature-item-title">Talent Profiling &amp; Recruitment Alignment</h3>
                    <p className="feature-item-desc">
                      Define the exact sales acumen, behavioral profiles, and commercial experience needed to succeed in your target accounts.
                    </p>
                  </div>
                </div>

                <div className="home-team-feature-item">
                  <div className="feature-item-num">02</div>
                  <div className="feature-item-text">
                    <h3 className="feature-item-title">Real-World Conversational Mastery</h3>
                    <p className="feature-item-desc">
                      Hands-on skill building focused on discovery rigor, commercial objection handling, price defense, and closing confidence.
                    </p>
                  </div>
                </div>

                <div className="home-team-feature-item">
                  <div className="feature-item-num">03</div>
                  <div className="feature-item-text">
                    <h3 className="feature-item-title">Daily Pipeline &amp; Follow-Up Cadence</h3>
                    <p className="feature-item-desc">
                      Instill predictable activity rhythms, multi-touch follow-up standards, and CRM hygiene across field and inside sales reps.
                    </p>
                  </div>
                </div>

                <div className="home-team-feature-item">
                  <div className="feature-item-num">04</div>
                  <div className="feature-item-text">
                    <h3 className="feature-item-title">Leadership Coaching &amp; Accountability</h3>
                    <p className="feature-item-desc">
                      Empower managers with high-impact 1-on-1 review frameworks, KPI scorecards, and deal velocity tracking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="home-team-actions">
                <Link to="/services" className="btn btn-navy">
                  <span>Explore Team Training &amp; Services</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline-navy">
                  <span>Talk to Us</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Visual Column: Creative Asymmetric 2-Image Editorial Composition */}
            <div className="home-team-visual">
              <div className="team-visual-stage">
                {/* Subtle Ambient Depth and Vector Geometry */}
                <div className="team-ambient-glow" />
                <svg
                  className="team-vector-accents"
                  viewBox="0 0 580 640"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="290" cy="320" r="260" stroke="rgba(216, 172, 69, 0.18)" strokeWidth="1.2" strokeDasharray="6 8" />
                  <circle cx="290" cy="320" r="190" stroke="rgba(16, 39, 72, 0.08)" strokeWidth="1" />
                  <path
                    d="M 60 560 C 150 510, 260 410, 390 230 C 450 140, 510 90, 560 70"
                    stroke="rgba(216, 172, 69, 0.45)"
                    strokeWidth="2.5"
                    strokeDasharray="6 5"
                    strokeLinecap="round"
                  />
                  <polygon points="560,70 530,75 548,93" fill="#D8AC45" />
                  <circle cx="390" cy="230" r="5" fill="#D8AC45" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="200" cy="480" r="4" fill="#102748" stroke="#D8AC45" strokeWidth="1.5" />
                </svg>

                {/* Overlapping Two-Professional Visual Arrangement */}
                <div className="team-images-cluster">
                  {/* Primary Professional (Photo 1 - Brown Suit) - ~60-65% visual footprint */}
                  <div className="team-person-primary">
                    <img
                      src="/images/sales-team-1.png"
                      alt="B2B Sales Leader"
                      className="team-person-img primary-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Supporting Professional (Photo 2 - Grey Suit) - ~35-40% visual footprint */}
                  <div className="team-person-secondary">
                    <img
                      src="/images/sales-team-2.png"
                      alt="B2B Sales Professional"
                      className="team-person-img secondary-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Soft gradient bottom blend so figures melt into the page background */}
                <div className="team-bottom-fade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 Ways to Improve Sales Performance Section with 6 Unique Visuals */}
      <section className="section section-light home-ways-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              PERFORMANCE IMPROVEMENT
            </span>
            <h2 className="section-title">6 Ways to Improve Sales Performance</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              Targeted, practical approaches to develop salesperson capability, streamline sales execution, and achieve predictable business growth.
            </p>
          </div>

          <div className="home-ways-grid">
            {sixWaysToImprove.map((way) => (
              <div key={way.num} className="home-way-card">
                <div className="way-image-wrap">
                  <img
                    src={way.image}
                    alt={way.alt}
                    className="way-image"
                    style={{ objectPosition: way.objectPosition }}
                    loading="lazy"
                  />
                  <div className="way-image-accent" />
                </div>
                <div className="way-content">
                  <div className="way-header">
                    <span className="way-num">{way.num}</span>
                    <h3 className="way-title">{way.title}</h3>
                  </div>
                  <p className="way-desc">{way.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-section-action">
            <Link to="/services" className="btn btn-navy btn-lg">
              <span>View All Services &amp; Key Focus Areas</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Short "Why Sales Falcon" Preview */}
      <section className="section section-dark home-why-section">
        <div className="dark-grid-bg why-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              THE FALCON ADVANTAGE
            </span>
            <h2 className="section-title text-white">Why Sales Falcon?</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle text-muted-light">
              Built on practical execution, measurable conversion, and sustainable partnership.
            </p>
          </div>

          <div className="home-why-grid">
            {whyHighlights.map((item) => (
              <div key={item.title} className="home-why-card">
                <span className="home-why-num">{item.num}</span>
                <h3 className="home-why-title">{item.title}</h3>
                <p className="home-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="home-section-action">
            <Link to="/why-sales-falcon" className="btn btn-gold btn-lg">
              <span>Explore The Falcon Approach</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="section section-light home-cta-section">
        <div className="container">
          <div className="home-cta-card">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              LET'S START
            </span>
            <h2 className="home-cta-title">Ready to Power Your Sales Team?</h2>
            <p className="home-cta-desc">
              Let’s understand where your sales process stands today and identify practical opportunities for improvement.
            </p>
            <div className="home-cta-buttons">
              <Link to="/contact" className="btn btn-gold btn-lg">
                <span>Talk to Us</span>
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
