import TypingHighlight from '../components/TypingHighlight';
import React, { useEffect } from 'react';
import heroStyles from './BuyersHero.module.css';
import { ArrowRight, BadgeCheck, ChartNoAxesCombined, ChartNoAxesColumnIncreasing, Headphones, House, Landmark, Layers, ShieldCheck, SlidersHorizontal, Target, Users, Zap } from 'lucide-react';
import { BenefitsCloud, FloatingIcons, HowItWorks, IndustriesSection, SiteFooter, RequirementsSection } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import styles from '../components/PartnershipPage.module.css';

const requirements = [
  [Target, 'Targeting', 'Define the geography, audience, vertical, and customer profile you want to reach.', '#5683ff'],
  [BadgeCheck, 'Lead Quality', 'We focus on leads that meet the agreed campaign criteria and quality requirements.', '#9865ff'],
  [SlidersHorizontal, 'Flexible Volume', 'Scale lead volume around your acquisition goals and requirements.', '#22bee4'],
  [Zap, 'Real-Time Delivery', 'Receive leads through your agreed delivery method while the opportunity is fresh.', '#18c6a4'],
  [ChartNoAxesCombined, 'Quality Monitoring', 'Campaign performance and lead quality are monitored to maintain agreed standards.', '#38a8ff'],
  [Headphones, 'Dedicated Support', 'Work directly with our team to discuss requirements, performance, and optimization opportunities.', '#53dbb9'],
];
const benefits = ['Fresh Lead Delivery', 'Quality Monitoring', 'Transparent Communication', 'Targeted Geography', 'Quality-Focused Leads', 'Custom Qualification Criteria'];
const asset = name => `/image/Buyers/${name}.png`;
const requirementIcons = ['Feature symbol', 'Feature symbol (1)', 'Feature symbol (2)', 'Icon bg (3)', 'Icon bg (4)', 'Icon bg (5)'].map(asset);
const processIcons = ['Group 40217', 'Group 40217 (1)', 'Group 40217 (2)', 'Group 40217 (3)'].map(asset);
const processCurves = ['Frame 1000004767', 'Frame 1000004767 (1)', 'Frame 1000004767 (2)', 'Frame 1000004767 (3)'].map(asset);
const steps = [
  [Users, 'Tell Us What You Need', 'Share your vertical, target geography, lead type, qualification criteria, and desired volume.'],
  [ChartNoAxesColumnIncreasing, 'We Build Your Campaign', 'We match your requirements with the appropriate traffic & lead-generation sources.'],
  [Layers, 'Receive Your Leads', 'Qualified leads are delivered through your agreed delivery method.'],
  [BadgeCheck, 'Review & Optimize', 'We monitor campaign performance and work with you to refine targeting and improve results.'],
];
const industries = [
  [ShieldCheck, 'Insurance', 'Reach customers exploring insurance products and coverage options.', 'insurance'],
  [Landmark, 'Finance', 'Connect with prospects interested in financial products and services.', 'finance'],
  [House, 'Home Services', 'Reach homeowners looking for trusted home improvement services.', 'home-services'],
];
export default function Buyers() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Buy Quality Leads | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={styles.page}>
    <main id="buyers-main">
      <section className={styles.hero} data-page-hero aria-labelledby="buyers-title">
        <a className={styles.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>BUYERS</span>
          <h1 id="buyers-title">Quality Leads. Built<br className={styles.desktopBreak} /> for <span><TypingHighlight>Your Business.</TypingHighlight></span></h1>
          <p>Connect with customers who are actively looking for the products and services you offer.</p>
          <a className={styles.whiteButton} href="#contact">Let's Work Together <ArrowRight size={22} /></a>
        </div>
        <div data-hero-art className={`${styles.heroArt} ${heroStyles.art}`}>
          <div className={styles.orbits} aria-hidden="true">{[0, 1, 2, 3].map(index => <i key={index} />)}</div>
          <img className={heroStyles.team} src={publicAsset('/image/Buyers/Customer acquisition team.png')} width="582" height="698" alt="A customer acquisition team reviewing opportunities together." fetchPriority="high" />
          <img className={heroStyles.targeting} src={publicAsset('/image/Buyers/Targeting card.png')} width="368" height="168" alt="Targeting: Geography, Audience, Vertical." />
          <img className={heroStyles.quality} src={publicAsset('/image/Buyers/Quality card.png')} width="494" height="182" alt="Quality-Focused Leads. Built around your requirements." />
        </div>
      </section>
      <RequirementsSection title="Built Around Your Requirements" items={requirements} iconAssets={requirementIcons} />
      <BenefitsCloud title="Why Buy Leads From" emphasis="Leadsgarage?" items={benefits} assetFolder="Buyers" />
      <HowItWorks steps={steps} artworkAssets={processIcons} curveAssets={processCurves} />
      <section className={`${styles.container} ${styles.benefitSummary}`} aria-labelledby="summary-title">
        <h2 id="summary-title">Why Buy Leads From<br /><strong>Leadsgarage?</strong></h2>
        <ul>{['Quality-Focused Leads', 'Targeted Geography', 'Custom Qualification Criteria', 'Fresh Lead Delivery', 'Quality Monitoring', 'Transparent Communication'].map(benefit => <li key={benefit}><span className={styles.assetPill}><img src={publicAsset(asset('Check symbol'))} alt="" width="50" height="50" /></span>{benefit}</li>)}</ul>
        <FloatingIcons assetFolder="Buyers" />
      </section>
      <IndustriesSection title="Industries We Support" items={industries} folder="Buyers" />
    </main>
    <SiteFooter page="buyers" assetFolder="Buyers" />
  </div>;
}
