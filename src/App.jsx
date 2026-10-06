import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import WhySalesFalcon from './pages/WhySalesFalcon';
import Contact from './pages/Contact';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="sales-falcon-app">
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Sticky Header Navigation with prominent logo & active state */}
        <Navbar />

        {/* 6 Dedicated Landing Page Routes */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/why-sales-falcon" element={<WhySalesFalcon />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Sophisticated Charcoal / Graphite Footer */}
        <Footer />

        {/* Sticky Floating WhatsApp Contact Widget (Icon Only) */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
