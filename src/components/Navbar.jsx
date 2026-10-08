import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Why Sales Falcon', path: '/why-sales-falcon' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo - Noticeably larger, preserving aspect ratio */}
        <Link to="/" className="navbar-logo-link" aria-label="Sales Falcon Home">
          <img
            src="/images/sales-falcon-logo.png"
            alt="Sales Falcon - We Power Your Sales Team"
            className="navbar-logo-img"
            onError={(e) => {
              e.currentTarget.src = 'https://i.ibb.co/rR0r3YDp/Untitled-Design-16.png';
            }}
          />
        </Link>

        {/* Desktop Navigation Links with active route state */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? 'active-link' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Button */}
        <div className="navbar-actions desktop-only">
          <Link to="/contact" className="btn btn-gold btn-sm navbar-cta">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          id="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="mobile-drawer-panel">
          <div className="mobile-drawer-header">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/images/sales-falcon-logo.png"
                alt="Sales Falcon"
                className="mobile-drawer-logo"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/rR0r3YDp/Untitled-Design-16.png';
                }}
              />
            </Link>
            <button
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-drawer-tagline">
            <span className="gold-text">WE POWER YOUR SALES TEAM</span>
          </div>

          <ul className="mobile-drawer-menu">
            {navLinks.map((link) => (
              <li key={link.path} className="mobile-drawer-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `mobile-drawer-link ${isActive ? 'active-mobile-link' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-actions">
            <Link
              to="/contact"
              className="btn btn-gold btn-lg w-full mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={18} />
            </Link>

            <div className="mobile-quick-contact">
              <a href="tel:9633199772" className="mobile-contact-pill">
                <Phone size={15} />
                <span>96331 99772</span>
              </a>
              <a
                href="https://wa.me/919633199772"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-pill whatsapp-pill"
              >
                <MessageSquare size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
