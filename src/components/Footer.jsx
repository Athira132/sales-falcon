import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowUp, ChevronRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Why Sales Falcon', path: '/why-sales-falcon' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="Sales Falcon Home">
              <img
                src="/images/sales-falcon-logo.png"
                alt="Sales Falcon - We Power Your Sales Team"
                className="footer-logo-img"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/qMxDMvbn/Sales-Falcon-Logo-with-Golden-Emblem.png';
                }}
              />
            </Link>

            <div className="footer-brand-statement">
              <span className="footer-tagline">WE POWER YOUR SALES TEAM.</span>
            </div>

            <p className="footer-description">
              Sales consulting, training, recruitment support and performance systems for businesses ready to build stronger sales teams and sustainable growth.
            </p>

            <div className="footer-brand-motto">
              <span>Build the team. Strengthen the system. Grow the business.</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-menu">
              {navLinks.map((link) => (
                <li key={link.path} className="footer-menu-item">
                  <Link to={link.path} className="footer-menu-link">
                    <ChevronRight size={14} className="footer-link-chevron" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <p className="footer-contact-intro">
              Direct consultation and sales inquiries:
            </p>

            <div className="footer-contact-links">
              <a href="tel:9633199772" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="footer-contact-type">Call Directly</span>
                  <span className="footer-contact-value">96331 99772</span>
                </div>
              </a>

              <a
                href="https://wa.me/919633199772"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item whatsapp-item"
              >
                <div className="footer-contact-icon whatsapp-icon">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <span className="footer-contact-type">Instant Chat</span>
                  <span className="footer-contact-value">WhatsApp</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 Sales Falcon. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
