import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import { publicAsset } from '../utils/publicAsset';
import { pageUrl } from '../utils/pageRoutes';
import styles from './GrowthPages.module.css';
import assets from './InsuranceAssets.module.css';

const insuranceAsset = file => publicAsset(`/image/Insurance/${file}`);
const channels = [
  ['Lead Generation', 'Generate relevant customer opportunities from people actively searching for insurance solutions.'],
  ['Inbound Calls', "Connect high-intent customers directly with the right insurance solution experts when they're ready to talk."],
  ['Email & SMS', 'Stay connected with potential customers through targeted Email and SMS campaigns to create more engagement and opportunities throughout the customer journey.'],
];
const differences = [
  ['Benefit symbol.png', 'Quality-First Approach', 'We focus on relevant customers and meaningful conversations.'],
  ['Benefit symbol (1).png', 'Transparent & Reliable', 'Clear communication and complete transparency at every step.'],
  ['Benefit symbol (2).png', 'Scalable Solutions', 'Flexible solutions that scale as your business grows.'],
];
const highlights = [
  ['Capability symbol.png', 'Quality Leads', 'Relevant, high-intent leads generated for insurance brands we work with.'],
  ['Capability symbol (1).png', 'Quality Score', 'Traffic and leads evaluated for relevance to meet campaign goals.'],
  ['Capability symbol (2).png', 'Call Support', 'Connect customers with the right experts when they are ready to talk.'],
  ['Capability symbol (3).png', 'Monitoring', 'Ongoing monitoring and optimization for better performance and results.'],
];
const industries = ['Insurance', 'Home Services', 'Finance', 'Health & Beauty', 'E-Commerce', 'I-Gaming', 'Dating', 'Real Estate', 'Warranty', 'Legal', 'Travel'];

function ChannelArtwork({ index }) {
  if (index === 0) return <div className={assets.audiencePanel} aria-hidden="true"><div className={assets.audienceHeading}><strong>Audience match</strong><img src={insuranceAsset('sliders-horizontal.png')} alt="" width="21" height="21" /></div>{['Relevant audience', 'Campaign requirements'].map(label => <div className={assets.audienceRow} key={label}><img src={insuranceAsset('Criterion symbol.png')} width="42" height="42" alt="" /><span>{label}</span><img src={insuranceAsset('circle-check.png')} width="22" height="22" alt="" /></div>)}</div>;
  if (index === 1) return <div className={assets.callerArtwork} aria-hidden="true"><div className={assets.callerPanel}><img src={insuranceAsset('Caller symbol.png')} width="53" height="53" alt="" /><div><strong>Ready to talk</strong><span>Customer ↔ Insurance expert</span></div></div><div className={assets.callControls}>{['Call control.png', 'Call control (1).png', 'Call control (2).png'].map(file => <img key={file} src={insuranceAsset(file)} width="48" height="48" alt="" />)}</div></div>;
  return <div className={assets.messageArtwork} aria-hidden="true"><img src={insuranceAsset('Email preview.png')} width="305" height="100" alt="" /><img src={insuranceAsset('SMS preview.png')} width="294" height="81" alt="" /></div>;
}

export default function InsuranceSolutions() {
  useEffect(() => { const previous = document.title; document.title = 'Insurance Solutions | Leads Garage'; return () => { document.title = previous; }; }, []);
  return <div className={`${styles.page} ${styles.insurance} ${assets.page}`}>
    <main>
      <section className={styles.hero} data-page-hero aria-labelledby="insurance-title">
        <div className={styles.breadcrumb}><a href={pageUrl('home')}>Industries</a> / Insurance Solutions</div>
        <div><span className={styles.label}>Insurance Solutions</span><h1 id="insurance-title">Connect With<br />Customers Looking for<br />the Right Insurance<br />Coverage</h1><p>Insurance customers compare options, plans, and providers before making a decision. We help you reach people who are actively searching for insurance solutions through quality traffic, lead generation, and high-intent inbound calls.</p><div className={styles.actions}><a className={styles.primary} href="#contact">Get Started</a><a className={styles.secondary} href="#contact">Talk to Our Team</a></div></div>
        <div data-hero-art className={`${styles.heroVisual} ${assets.heroVisual}`}><img className={assets.heroPhoto} src={insuranceAsset('Industry photography.png')} width="672" height="565" alt="An insurance advisor helping a couple compare coverage options." fetchPriority="high" /><img className={assets.audienceFocus} src={insuranceAsset('Audience focus.png')} width="247" height="46" alt="Customer Acquisition" /><img className={assets.opportunity} src={insuranceAsset('Featured opportunity.png')} width="759" height="395" alt="Relevance meets intent. High-Intent Customers, Stronger Opportunities. We connect potential customers with the right insurance solution experts when they are ready." /></div>
        <div className={styles.compliance}>{['GDPR Compliant', 'SOC 2 Certified', 'CCPA Compliant', 'Trusted by Leading Insurance Brands'].map(label => <span key={label}><img src={insuranceAsset('shield-check.png')} width="27" height="27" alt="" />{label}</span>)}</div>
      </section>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="insurance-reach-title">
        <div className={styles.split}><div><span className={styles.label}>Relevant audiences. Real opportunities.</span><h2 id="insurance-reach-title">Reach More Relevant Insurance Customers</h2><p>Finding insurance customers is about more than driving traffic. It's about reaching the right audience with the right message at the right time.</p><p>Our approach combines targeted customer acquisition with performance-focused marketing to create meaningful opportunities for insurance businesses.</p><p>Whether you're looking to generate leads, drive inbound calls, or expand your reach through Email and SMS, we build solutions around your campaign goals and customer acquisition requirements.</p></div><div className={styles.reachImage}><img src={insuranceAsset('Customer photography.png')} width="776" height="603" alt="Customers reviewing insurance information and campaign insights." loading="lazy" /><img className={assets.audienceTag} src={insuranceAsset('Audience tag.png')} width="603" height="131" alt="The right coverage starts with a connection." /></div></div>
        <div className={styles.metrics}>{[['15K+', 'Insurance Leads Generated Daily'], ['95%+', 'Leads Match Our Quality Standards'], ['250+', 'Insurance Brands We Work With'], ['99.2%', 'Average Campaign Quality Score']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="insurance-channels-title"><span className={styles.label}>Connected acquisition</span><h2 id="insurance-channels-title">More Ways to Reach Your Customers</h2><div className={styles.cards}>{channels.map(([title, description], index) => <article className={styles.card} key={title}><div className={`${styles.channelArt} ${assets.channelArt}`}><ChannelArtwork index={index} /></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className={`${styles.container} ${styles.section} ${styles.split}`} aria-labelledby="insurance-difference-title"><div><span className={styles.label}>The Leadsgarage difference</span><h2 id="insurance-difference-title">Why Leading Insurance Brands Choose Leadsgarage</h2><p>Insurance marketing is competitive. Reaching the right customer requires more than just increasing traffic. Leadsgarage brings together targeted acquisition, quality-focused lead generation, inbound calls, and multi-channel solutions to help you create stronger opportunities.</p><p>We believe a successful partnership starts with quality, transparency, communication, and a clear understanding of your goals. We work around your campaign requirements and help build an acquisition strategy that grows with your business.</p></div><div className={styles.difference}>{differences.map(([icon, title, description]) => <article key={title}><img className={assets.benefitIcon} src={insuranceAsset(icon)} width="66" height="66" alt="" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="insurance-highlights-title"><span className={styles.label}>Quality at every connection</span><h2 id="insurance-highlights-title">Service Highlights</h2><div className={styles.highlights}>{highlights.map(([icon, title, description]) => <article className={styles.card} key={title}><img className={assets.capabilityIcon} src={insuranceAsset(icon)} width="66" height="66" alt="" /><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="insurance-industries-title"><span className={styles.label}>Industries we serve</span><h2 id="insurance-industries-title">Built for Your Industry. Designed for Growth.</h2><p className={styles.intro}>Our experience extends across multiple industries, helping businesses reach relevant audiences through quality traffic, lead generation, inbound calls, and targeted customer acquisition solutions.</p><div className={styles.industryLinks}>{industries.map(name => <a key={name} href={name === 'Insurance' ? pageUrl('insurance') : '#contact'} aria-current={name === 'Insurance' ? 'page' : undefined}>{name}<ArrowUpRight aria-hidden="true" /></a>)}</div></section>
      <section className={`${styles.banner} ${styles.split}`} aria-labelledby="insurance-cta-title"><div><span className={styles.label}>Your next chapter starts here</span><h2 id="insurance-cta-title">Ready to Grow Your Insurance Customer Acquisition?</h2><p>Tell us about your campaign, target audience, and traffic requirements. We'll work with you to build a customer acquisition solution around your goals.</p><div className={styles.checks}>{['Quality Traffic You Can Trust', 'Performance-Focused Approach', 'Scalable Solutions That Grow With You', 'Dedicated Support Every Step of the Way'].map(label => <span key={label}><img src={insuranceAsset('circle-check.png')} width="22" height="22" alt="" />{label}</span>)}</div><div className={styles.actions}><a className={styles.primary} href="#contact">Talk to Our Team</a><a className={styles.secondary} href="#insurance-reach-title">Learn More</a></div></div><div className={styles.growthArt} aria-hidden="true"><img className={assets.growthHub} src={insuranceAsset('Growth hub.png')} width="151" height="151" alt="" /><img className={assets.satellite} src={insuranceAsset('Audience satellite.png')} width="88" height="88" alt="" /><img className={assets.satellite} src={insuranceAsset('Connection satellite.png')} width="88" height="88" alt="" /></div></section>
    </main>
    <div className={styles.footer}><Footer page="insurance" /></div>
    
  </div>;
}
