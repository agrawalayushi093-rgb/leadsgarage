import TypingHighlight from '../components/TypingHighlight';
import React, { useEffect } from 'react';
import { ArrowRight, UsersRound, Award, TrendingUp, Zap } from 'lucide-react';
import DashboardCTA from '../components/DashboardCTA';
import Footer from '../components/Footer';
import { pageUrl } from '../utils/pageRoutes';
import shared from '../components/PartnershipPage.module.css';
import footerStyles from './AffiliateFooter.module.css';
import { publicAsset } from '../utils/publicAsset';
import styles from './AboutUs.module.css';

const values = [
  [UsersRound, 'Performance Focused', 'We focus on quality over volume. Our strategies are built around relevant audiences, smart targeting, and opportunities that create real value.', '#087bff'],
  [Award, 'Quality First', 'Every campaign has a goal. We track what matters & continuously optimize to improve performance and drive better results.', '#8b48f7'],
  [TrendingUp, 'Built on Partnership', "We’re not just a vendor. We work alongside you, understand your challenges, & build solutions around your goals.", '#00a3ad'],
  [Zap, 'Transparent & Reliable', 'Clear communication, real-time visibility, & honest reporting are at the heart of how we work. Trust is the foundation of every partnership we build.', '#087bff'],
];
const models = [
  ['Affiliate Marketing', 'Reach the right audience and drive quality leads, traffic, and sales.', 'affiliateMarketing'],
  ['Email & SMS', 'Build engagement and boost conversions through targeted campaigns.'],
  ['Web Development + SMM', 'Create impactful websites and social strategies that grow your brand.', 'webDevelopment'],
  ['PPC', 'Maximize visibility and generate quality leads through paid campaigns.'],
];
const orbitIcons = ['Group 39692.png', 'Group 39690.png', 'Group 39691.png', 'Group 39693.png', 'Group 39695.png', 'Group 39696.png', 'Group 39694.png'];
const aboutAsset = file => publicAsset(`/image/About/${file}`);
const valueIcons = ['About (4).png', 'About (3).png', 'About (2).png', 'About (1).png'];

export default function AboutUs() {
  useEffect(() => { const previous = document.title; document.title = 'About Us | Leads Garage'; return () => { document.title = previous; }; }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main>
      <section className={`${shared.hero} ${styles.hero}`} data-page-hero aria-labelledby="about-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}><span className={shared.eyebrow}>About Leadsgarage</span><h1 id="about-title">More Than<br />Performance. <span><TypingHighlight>Built for Growth.</TypingHighlight></span></h1><p>We're marketers, builders, and problem-solvers who believe great marketing starts with the right people and the right approach.</p><a className={shared.whiteButton} href="#contact">Let's Work Together</a></div>
        <div data-hero-art className={styles.heroArt}><img src={aboutAsset('Group 40256.png')} width="642" height="474" alt="The LeadsGarage team working together on digital growth." /><img className={styles.aboutGlobe} src={aboutAsset('Group.png')} width="110" height="110" alt="" /><img className={styles.aboutPhone} src={aboutAsset('Group (1).png')} width="90" height="90" alt="" /><img className={styles.aboutEmail} src={aboutAsset('Group (2).png')} width="110" height="110" alt="" /></div>
      </section>

      <section className={styles.values} aria-labelledby="values-title"><h2 id="values-title">What Drives Leadsgarage</h2><div className={styles.valueGrid}>{values.map(([, title, description], index) => <article key={title}><img className={styles.valueIcon} src={aboutAsset(valueIcons[index])} width="74" height="74" alt="" /><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <section className={styles.purpose} aria-label="Our vision and mission">
        <div className={styles.purposeCopy}>
          <article><h2>Our Vision</h2><p>To be a trusted global partner in performance marketing, known for quality, innovation, and partnerships that drive sustainable growth for businesses and strong opportunities for our partners.</p></article>
          <article><h2>Our Mission</h2><p>To connect the right audiences with the right businesses through ethical marketing, advanced technology, and data-driven strategies that create real value for everyone we work with.</p></article>
        </div>
        <div className={styles.orbit} aria-hidden="true"><i /><i /><i /><i />{orbitIcons.map((file, index) => <span key={file} className={styles[`bubble${index}`]}><img src={aboutAsset(file)} width="80" height="80" alt="" /></span>)}</div>
      </section>

      <section className={styles.models} aria-labelledby="working-models-title"><h2 id="working-models-title">Our Working Models</h2><p>How we drive growth for your business</p><ol>{models.map(([title, description, page], index) => <li key={title}><span className={styles.number}>{String(index + 1).padStart(2, '0')}</span><h3><a href={page ? pageUrl(page) : '#contact'}>{title}</a></h3><p>{description}</p></li>)}</ol></section>
    </main>
    <div className={`${shared.footerShell} ${footerStyles.shell} ${styles.footer}`}><DashboardCTA contactHref="#contact" /><Footer page="about" /></div>
    
  </div>;
}
