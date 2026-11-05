import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck, ChartNoAxesCombined, ChartNoAxesColumnIncreasing, Check, Headphones, House, Landmark, Layers, ShieldCheck, SlidersHorizontal, Target, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { publicAsset } from '../utils/publicAsset';
import styles from './Buyers.module.css';

const requirements = [
  [Target, 'Targeting', 'Define the geography, audience, vertical, and customer profile you want to reach.', '#5683ff'],
  [BadgeCheck, 'Lead Quality', 'We focus on leads that meet the agreed campaign criteria and quality requirements.', '#9865ff'],
  [SlidersHorizontal, 'Flexible Volume', 'Scale lead volume around your acquisition goals and requirements.', '#22bee4'],
  [Zap, 'Real-Time Delivery', 'Receive leads through your agreed delivery method while the opportunity is fresh.', '#18c6a4'],
  [ChartNoAxesCombined, 'Quality Monitoring', 'Campaign performance and lead quality are monitored to maintain agreed standards.', '#38a8ff'],
  [Headphones, 'Dedicated Support', 'Work directly with our team to discuss requirements, performance, and optimization opportunities.', '#53dbb9'],
];
const benefits = ['Fresh Lead Delivery', 'Quality Monitoring', 'Transparent Communication', 'Targeted Geography', 'Quality-Focused Leads', 'Custom Qualification Criteria'];
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
const floatingIcons = ['Group 40197.png', 'Group 40195.png', 'Group 40198.png', 'Group 40196.png'];

function FloatingIcons({ className = '' }) {
  return <div className={`${styles.floatingIcons} ${className}`} aria-hidden="true">
    {floatingIcons.map(file => <img key={file} src={publicAsset(`/image/Home/${file}`)} alt="" width="150" height="150" />)}
  </div>;
}

export default function Buyers() {
  const track = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const previous = document.title;
    document.title = 'Buy Quality Leads | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  const goToStep = index => {
    const card = track.current?.children[index];
    if (!card) return;
    track.current.scrollTo({ left: card.offsetLeft - track.current.children[0].offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    setActiveStep(index);
  };
  const syncStep = () => {
    const container = track.current;
    const first = container.children[0].offsetLeft;
    const nearest = [...container.children].reduce((best, card, index) => Math.abs(card.offsetLeft - first - container.scrollLeft) < Math.abs(container.children[best].offsetLeft - first - container.scrollLeft) ? index : best, 0);
    setActiveStep(nearest);
  };
  return <div className={styles.page}>
    <Navbar page="buyers" />
    <main id="buyers-main">
      <section className={styles.hero} aria-labelledby="buyers-title">
        <a className={styles.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>BUYERS</span>
          <h1 id="buyers-title">Quality Leads. Built<br className={styles.desktopBreak} /> for <span>Your Business.</span></h1>
          <p>Connect with customers who are actively looking for the products and services you offer.</p>
          <a className={styles.whiteButton} href="#contact">Let's Work Together <ArrowRight size={22} /></a>
        </div>
        <div className={styles.heroArt}>
          <div className={styles.orbits} aria-hidden="true">{[0, 1, 2, 3].map(index => <i key={index} />)}</div>
          <img src={publicAsset('/image/Buyers/hero-art.webp')} width="580" height="650" alt="A team reviewing customer opportunities. Targeting by geography, audience and vertical, with quality-focused leads built around your requirements." fetchPriority="high" />
        </div>
      </section>

      <section className={styles.requirements} aria-labelledby="requirements-title">
        <div className={styles.container}>
          <h2 id="requirements-title">Built Around Your Requirements</h2>
          <div className={styles.requirementGrid}>{requirements.map(([Icon, title, description, color]) => <article key={title} className={styles.requirementCard}>
            <span className={styles.requirementIcon} style={{ background: color }}><Icon size={32} strokeWidth={1.6} aria-hidden="true" /></span>
            <h3>{title}</h3><p>{description}</p>
          </article>)}</div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.benefitCloud}`} aria-labelledby="benefits-title">
        <FloatingIcons />
        <h2 id="benefits-title">Why Buy Leads From<br /><strong>Leadsgarage?</strong></h2>
        <ul>{benefits.map((benefit, index) => <li key={benefit} className={styles[`pill${index}`]}><span><Check size={19} /></span>{benefit}</li>)}</ul>
      </section>

      <section className={`${styles.container} ${styles.howItWorks}`} aria-labelledby="steps-title">
        <div className={styles.sectionHeader}><h2 id="steps-title">How It Works</h2>
          <div className={styles.stepControls}>
            <button type="button" aria-label="Previous step" disabled={activeStep === 0} onClick={() => goToStep(activeStep - 1)}><ArrowLeft size={20} /></button>
            <button type="button" aria-label="Next step" disabled={activeStep === steps.length - 1} onClick={() => goToStep(activeStep + 1)}><ArrowRight size={20} /></button>
          </div>
        </div>
        <div ref={track} className={styles.stepsTrack} onScroll={syncStep} role="region" aria-label="How buying leads works" tabIndex={0}>
          {steps.map(([Icon, title, description], index) => <article className={`${styles.stepCard} ${activeStep === index ? styles.activeStep : ''}`} key={title}>
            <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>
            <div className={styles.stepArtwork} aria-hidden="true"><Icon size={58} strokeWidth={1.6} /></div>
            {index < steps.length - 1 && <button className={styles.stepArrow} type="button" aria-label={`Go to step ${index + 2}`} onClick={() => goToStep(index + 1)}><ArrowRight size={24} /></button>}
          </article>)}
        </div>
        <div className={styles.stepDots} aria-label="Select a step">{steps.map(([, title], index) => <button key={title} type="button" aria-label={`Step ${index + 1}: ${title}`} aria-current={activeStep === index ? 'step' : undefined} onClick={() => goToStep(index)} />)}</div>
      </section>

      <section className={`${styles.container} ${styles.benefitSummary}`} aria-labelledby="summary-title">
        <h2 id="summary-title">Why Buy Leads From<br /><strong>Leadsgarage?</strong></h2>
        <ul>{['Quality-Focused Leads', 'Targeted Geography', 'Custom Qualification Criteria', 'Fresh Lead Delivery', 'Quality Monitoring', 'Transparent Communication'].map(benefit => <li key={benefit}><span><Check size={23} /></span>{benefit}</li>)}</ul>
        <FloatingIcons />
      </section>

      <section className={`${styles.container} ${styles.industries}`} aria-labelledby="industries-title">
        <h2 id="industries-title">Industries We Support</h2>
        <div className={styles.industryGrid}>{industries.map(([Icon, title, description, asset]) => <article className={styles.industryCard} key={title}>
          <img src={publicAsset(`/image/Buyers/${asset}.webp`)} width="540" height="237" alt={title === 'Insurance' ? 'Family spending time together at home' : title === 'Finance' ? 'Customer discussing financial options with an adviser' : 'Homeowner talking with a home improvement professional'} loading="lazy" />
          <div><h3><Icon size={27} strokeWidth={1.7} aria-hidden="true" />{title}</h3><p>{description}</p></div>
        </article>)}</div>
      </section>
    </main>

    <div className={styles.footerShell}>
      <section className={styles.closingCta} aria-labelledby="buyers-cta-title">
        <FloatingIcons />
        <h2 id="buyers-cta-title">Ready to Start Buying<br />Quality Leads?</h2>
        <p>Tell us what you're looking for, and our team will work with you to<br className={styles.desktopBreak} /> build a lead-generation campaign around your requirements.</p>
        <a className={styles.darkButton} href="#contact">Let's Work Together <ArrowRight size={22} /></a>
      </section>
      <Footer page="buyers" />
    </div>
  </div>;
}
