import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  GitMerge, 
  Gauge, 
  BriefcaseBusiness, 
  Infinity as InfinityIcon, 
  TrendingUp, 
  Eye, 
  Compass, 
  Zap, 
  ShieldCheck,
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IdealClients from '../components/IdealClients';
import './WhySalesFalcon.css';

export default function WhySalesFalcon() {
  const differentiators = [
    {
      num: '01',
      title: 'Practical, Not Theoretical',
      lead: 'Training and consulting built around real sales situations.',
      desc: 'Most sales training is forgotten 48 hours after delivery because it relies on textbook theory. We train directly on your real buyer objections, your actual customer personas, and your live commercial conversations.',
      icon: Target,
    },
    {
      num: '02',
      title: 'People + Process',
      lead: 'We focus on both the salesperson and the system supporting them.',
      desc: 'Top talent trapped inside a disorganized pipeline will inevitably burn out or underperform. Conversely, rigid CRM tools without confident, trained salespeople fail. We strengthen the individual salesperson and the underlying system in tandem.',
      icon: GitMerge,
    },
    {
      num: '03',
      title: 'Measurable Performance',
      lead: 'Focus on observable activity, conversion, follow-up and outcomes.',
      desc: 'We replace subjective feelings with clear operational metrics: outbound cadence rigor, stage conversion percentages, proposal velocity, and deal closure ratios. Every improvement is visible and verifiable.',
      icon: Gauge,
    },
    {
      num: '04',
      title: 'Business-First Thinking',
      lead: "Solutions are designed around the organization's actual goals.",
      desc: 'Your sales motion must mirror your margins, customer acquisition cost limits, and cash flow cycle. We build workflows that serve your bottom-line profitability, not generic templates borrowed from unrelated industries.',
      icon: BriefcaseBusiness,
    },
    {
      num: '05',
      title: 'Continuous Improvement',
      lead: 'Review performance, learn from results and refine the approach.',
      desc: 'Markets evolve, buyer expectations shift, and sales teams grow. We institute ongoing feedback loops, pipeline reviews, and deal post-mortems so your sales methodology continuously adapts and sharpens.',
      icon: TrendingUp,
    },
    {
      num: '06',
      title: 'Long-Term Partnership',
      lead: 'Work alongside businesses to support sustainable sales improvement.',
      desc: 'True behavioral change takes continuous reinforcement. We work alongside business founders and sales leaders to monitor execution, refine battlecards, and build an enduring high-performance culture.',
      icon: InfinityIcon,
    },
  ];

  const falconMindset = [
    {
      name: 'Vision',
      sub: 'Sharp Observation',
      text: 'Identifying real buyer triggers and market opportunities with high-resolution clarity.',
      icon: Eye,
    },
    {
      name: 'Focus',
      sub: 'Disciplined Targeting',
      text: 'Zero wasted motion. Eliminating tire-kickers and prioritizing high-probability pipeline deals.',
      icon: Compass,
    },
    {
      name: 'Speed',
      sub: 'Decisive Cadence',
      text: 'Prompt response SLAs and quick proposal turnaround to maintain buyer enthusiasm.',
      icon: Zap,
    },
    {
      name: 'Precision',
      sub: 'Systemic Rigor',
      text: 'Exact discovery questions, disciplined follow-ups, and structured pipeline exit criteria.',
      icon: Target,
    },
    {
      name: 'Performance',
      sub: 'Upward Trajectory',
      text: 'Continuous commercial growth, healthy conversion rates, and measurable sales output.',
      icon: TrendingUp,
    },
    {
      name: 'Accountability',
      sub: 'Execution Rigor',
      text: 'Consistent ownership of agreed activity targets, pipeline hygiene, and deal progression.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="page-wrapper why-page page-enter">
      <SEOHead
        title="Why Sales Falcon | Sales Consulting & Sales Performance"
        description="Discover why businesses choose Sales Falcon: practical sales consulting, people and process alignment, measurable conversion, and long-term partnership."
        canonicalPath="/why-sales-falcon"
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              THE SALES FALCON ADVANTAGE
            </span>
            <h1 className="page-hero-title">
              Powering People.<br />
              Strengthening Systems.<br />
              Improving Performance.
            </h1>
            <div className="gold-line" />
            <p className="page-hero-subtitle">
              We are not motivational speakers or detached theorists. We are commercial growth partners who engineer high-converting sales teams and scalable systems.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Editorial Section with Single Indian Leader Photo */}
      <section className="section section-white why-leader-section">
        <div className="container">
          <div className="why-leader-grid">
            <div className="why-leader-text">
              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" />
                COMMERCIAL LEADERSHIP
              </span>
              <h2 className="why-leader-title">
                Sales Success Is Built on Conviction, Structure, and Relentless Discipline.
              </h2>
              <div className="gold-line" />
              <p className="why-leader-lead">
                Most sales challenges are not motivational—they are structural. When leadership aligns the right salespeople with defined processes, predictability follows.
              </p>
              <p className="why-leader-body">
                At Sales Falcon, we work directly at the intersection of leadership vision and front-line sales execution. Whether mentoring sales leaders, coaching account executives through high-stakes deals, or engineering multi-stage pipelines, our focus remains singular: creating high-performing, self-sustaining sales teams.
              </p>

              <div className="why-leader-highlights">
                <div className="why-leader-highlight-item">
                  <div className="why-highlight-check"><CheckCircle2 size={16} /></div>
                  <div>
                    <strong>Strategic Alignment</strong>
                    <p>Connecting board-level revenue objectives directly to daily sales reps' activities.</p>
                  </div>
                </div>
                <div className="why-leader-highlight-item">
                  <div className="why-highlight-check"><CheckCircle2 size={16} /></div>
                  <div>
                    <strong>Sustainable Capability</strong>
                    <p>Building internal sales rigor so your organization grows without external dependency.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-leader-visual">
              <div className="why-leader-image-frame">
                <div className="why-leader-gold-accent" />
                <img
                  src="/images/why-leader.jpg"
                  alt="Sales Falcon commercial leadership and executive sales consulting"
                  className="why-leader-img"
                  loading="lazy"
                />
                <div className="why-leader-badge">
                  <span className="badge-icon"><TrendingUp size={16} /></span>
                  <div className="badge-text">
                    <span className="badge-label">Executive Leadership</span>
                    <span className="badge-val">Vision • Focus • Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exactly 6 Differentiators in 2x3 Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              OUR 6 CORE REASONS
            </span>
            <h2 className="section-title">Why Sales Falcon</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle">
              Six foundational principles that define how we work, how we consult, and how we deliver measurable commercial value.
            </p>
          </div>

          <div className="why-reasons-grid">
            {differentiators.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="why-reason-card">
                  <div className="reason-card-header">
                    <span className="reason-card-num">{pillar.num}</span>
                    <div className="reason-icon-box">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="reason-card-title">{pillar.title}</h3>
                  <p className="reason-card-lead">{pillar.lead}</p>
                  <p className="reason-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE FALCON MINDSET - 6 Items in 3x2 Grid */}
      <section className="section section-dark falcon-mindset-section">
        <div className="dark-grid-bg story-bg-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-pill">
              <span className="eyebrow-dot" />
              BRAND SYMBOLISM & PHILOSOPHY
            </span>
            <h2 className="section-title text-white">The Falcon Mindset</h2>
            <div className="gold-line gold-line-center" />
            <p className="section-subtitle text-muted-light">
              The falcon represents sharp vision, focus, speed, observation and precision. The upward arrow represents progress and business growth.
            </p>
          </div>

          <div className="mindset-visual-wrapper">
            <div className="mindset-cards-grid">
              {falconMindset.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="mindset-card">
                    <div className="mindset-icon-box">
                      <Icon size={24} />
                    </div>
                    <h3 className="mindset-title">{item.name}</h3>
                    <span className="mindset-sub">{item.sub}</span>
                    <p className="mindset-desc">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Clients Component - 6 items */}
      <IdealClients />

      {/* Final Action CTA */}
      <section className="section section-white">
        <div className="container">
          <div className="why-bottom-cta">
            <span className="eyebrow eyebrow-dark">
              <span className="eyebrow-dot" />
              LET'S COLLABORATE
            </span>
            <h2>Ready to Experience the Falcon Advantage?</h2>
            <p>Speak directly with our team to explore how we can help your salespeople excel.</p>
            <div className="why-cta-buttons">
              <Link to="/contact" className="btn btn-navy btn-lg">
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
