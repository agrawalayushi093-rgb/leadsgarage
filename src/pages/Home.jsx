import React, { useState } from 'react';
import usePageScroll from '../hooks/usePageScroll';
import styles from './Home.module.css';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import ServicesShowcase from '../components/ServicesShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import QualityControl from '../components/QualityControl';
import AudienceSegments from '../components/AudienceSegments';
import EcosystemNetwork from '../components/EcosystemNetwork';
import LeadershipTeam from '../components/LeadershipTeam';
import { SiteFooter } from '../components/PartnershipSections';

export default function Home() {
  usePageScroll();
  const [introComplete, setIntroComplete] = useState(false);
  return (
    <div className={`${styles.backgroundMerge} min-h-screen bg-[#FDFBF7] font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white`}>
      {/* Site Preloader Screen */}
      <Preloader onComplete={() => setIntroComplete(true)} />

      {/* Main Website Content (pre-rendered underneath to prevent blinking) */}

      <main>
        <Hero enabled={introComplete} />
        <ServicesShowcase />
        <WhyChooseUs />
        <QualityControl />
        <AudienceSegments />
        <EcosystemNetwork />
        <LeadershipTeam />
      </main>

      <SiteFooter page="home" />
    </div>
  );
}
