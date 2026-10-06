import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Values from './components/Values';
import Process from './components/Process';
import WhySalesFalcon from './components/WhySalesFalcon';
import PerformanceSystems from './components/PerformanceSystems';
import ToolsSystems from './components/ToolsSystems';
import IdealClients from './components/IdealClients';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

export default function App() {
  return (
    <div className="sales-falcon-app">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Website Structure */}
      <main id="main-content">
        <Hero />
        <ValueStrip />
        <About />
        <VisionMission />
        <Services />
        <Values />
        <Process />
        <WhySalesFalcon />
        <PerformanceSystems />
        <ToolsSystems />
        <IdealClients />
        <CTASection />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Contact Widget */}
      <WhatsAppButton />
    </div>
  );
}
