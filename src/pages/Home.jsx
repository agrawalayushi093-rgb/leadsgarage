import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesShowcase from '../components/ServicesShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import QualityControl from '../components/QualityControl';
import AudienceSegments from '../components/AudienceSegments';
import EcosystemNetwork from '../components/EcosystemNetwork';
import LeadershipTeam from '../components/LeadershipTeam';
import DashboardCTA from '../components/DashboardCTA';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Site Preloader Screen */}
      <Preloader />

      {/* Main Website Content (pre-rendered underneath to prevent blinking) */}
      <Navbar onOpenContact={handleOpenContact} />

      <main>
        <Hero onOpenContact={handleOpenContact} />
        <ServicesShowcase onOpenContact={handleOpenContact} />
        <WhyChooseUs onOpenContact={handleOpenContact} />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
