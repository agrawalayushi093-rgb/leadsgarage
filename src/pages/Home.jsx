import React from 'react';
import usePageScroll from '../hooks/usePageScroll';
import styles from './Home.module.css';
import Hero from '../components/Hero';
import ServicesShowcase from '../components/ServicesShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import QualityControl from '../components/QualityControl';
import AudienceSegments from '../components/AudienceSegments';
import EcosystemNetwork from '../components/EcosystemNetwork';
import LeadershipTeam from '../components/LeadershipTeam';
import DashboardCTA from '../components/DashboardCTA';
import Footer from '../components/Footer';
import shared from '../components/PartnershipPage.module.css';
import footerStyles from './HomeFooter.module.css';

export default function Home({ introComplete = true }) {
  usePageScroll();
  return (
    <div className={`${styles.backgroundMerge} min-h-screen bg-[#FDFBF7] font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white`}>
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

      <div className={`${shared.footerShell} ${footerStyles.shell}`}>
        <DashboardCTA contactHref="#contact" />
        <Footer page="home" />
      </div>
    </div>
  );
}
