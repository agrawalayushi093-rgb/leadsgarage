import React, { useState } from 'react';
import styles from './Home.module.css';
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

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  return (
    <div className={`${styles.backgroundMerge} min-h-screen bg-[#FDFBF7] font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white`}>
      {/* Site Preloader Screen */}
      <Preloader onComplete={() => setIntroComplete(true)} />

      {/* Main Website Content (pre-rendered underneath to prevent blinking) */}
      <Navbar />

      <main>
        <Hero enabled={introComplete} />
        <ServicesShowcase />
        <WhyChooseUs />
        <QualityControl />
        <AudienceSegments />
        <EcosystemNetwork />
        <LeadershipTeam />
      </main>

      <div className="closing-section">
        <DashboardCTA />
        <Footer />
      </div>
    </div>
  );
}
