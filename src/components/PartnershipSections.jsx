import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Footer from './Footer';
import { publicAsset } from '../utils/publicAsset';
import styles from './PartnershipPage.module.css';

const floatingIcons = ['Group 40197.png', 'Group 40195.png', 'Group 40198.png', 'Group 40196.png'];

export function FloatingIcons({ className = '' }) {
  return <div className={`${styles.floatingIcons} ${className}`} aria-hidden="true">
    {floatingIcons.map(file => <img key={file} src={publicAsset(`/image/Home/${file}`)} alt="" width="150" height="150" />)}
  </div>;
}

export function RequirementsSection({ title, items }) {
  return <section className={styles.requirements} aria-labelledby="requirements-title">
    <div className={styles.container}>
      <h2 id="requirements-title">{title}</h2>
      <div className={styles.requirementGrid}>{items.map(([Icon, heading, description, color]) => <article key={heading} className={styles.requirementCard}>
        <span className={styles.requirementIcon} style={{ background: color }}><Icon size={32} strokeWidth={1.6} aria-hidden="true" /></span>
        <h3>{heading}</h3><p>{description}</p>
      </article>)}</div>
    </div>
  </section>;
}

export function BenefitsCloud({ title, emphasis, subtitle, items }) {
  return <section className={`${styles.container} ${styles.benefitCloud}`} aria-labelledby="benefits-title">
    <FloatingIcons />
    <div className={styles.cloudCopy}><h2 id="benefits-title">{title}<br /><strong>{emphasis}</strong></h2>{subtitle && <p>{subtitle}</p>}</div>
    <ul>{items.map((benefit, index) => <li key={benefit} className={styles[`pill${index}`]}><span><Check size={19} /></span>{benefit}</li>)}</ul>
  </section>;
}

export function HowItWorks({ steps }) {
  const track = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
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
  return <section className={`${styles.container} ${styles.howItWorks}`} aria-labelledby="steps-title">
    <div className={styles.sectionHeader}><h2 id="steps-title">How It Works</h2>
      <div className={styles.stepControls}>
        <button type="button" aria-label="Previous step" disabled={activeStep === 0} onClick={() => goToStep(activeStep - 1)}><ArrowLeft size={20} /></button>
        <button type="button" aria-label="Next step" disabled={activeStep === steps.length - 1} onClick={() => goToStep(activeStep + 1)}><ArrowRight size={20} /></button>
      </div>
    </div>
    <div ref={track} className={`${styles.stepsTrack} ${styles.hiddenScrollbars}`} onScroll={syncStep} role="region" aria-label="Campaign process steps" tabIndex={0}>
      {steps.map(([Icon, title, description], index) => <article className={`${styles.stepCard} ${activeStep === index ? styles.activeStep : ''}`} key={title}>
        <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>
        <div className={styles.stepArtwork} aria-hidden="true"><Icon size={58} strokeWidth={1.6} /></div>
        {index < steps.length - 1 && <button className={styles.stepArrow} type="button" aria-label={`Go to step ${index + 2}`} onClick={() => goToStep(index + 1)}><ArrowRight size={24} /></button>}
      </article>)}
    </div>
    <div className={styles.stepDots} aria-label="Select a step">{steps.map(([, title], index) => <button key={title} type="button" aria-label={`Step ${index + 1}: ${title}`} aria-current={activeStep === index ? 'step' : undefined} onClick={() => goToStep(index)} />)}</div>
  </section>;
}

export function IndustriesSection({ title, items, folder }) {
  return <section className={`${styles.container} ${styles.industries}`} aria-labelledby="industries-title">
    <h2 id="industries-title">{title}</h2>
    <div className={styles.industryGrid}>{items.map(([Icon, heading, description, asset]) => <article className={styles.industryCard} key={heading}>
      <img src={publicAsset(`/image/${folder}/${asset}.webp`)} width="540" height="237" alt={`${heading} industry`} loading="lazy" />
      <div><h3><Icon size={27} strokeWidth={1.7} aria-hidden="true" />{heading}</h3><p>{description}</p></div>
    </article>)}</div>
  </section>;
}

export function PartnershipFooter({ page, children }) {
  return <div className={styles.footerShell}>
    {children}
    <section className={styles.closingCta} aria-labelledby="partnership-cta-title">
      <FloatingIcons />
      <h2 id="partnership-cta-title">Ready to Start Buying<br />Quality Leads?</h2>
      <p>Tell us what you're looking for, and our team will work with you to<br className={styles.desktopBreak} /> build a lead-generation campaign around your requirements.</p>
      <a className={styles.darkButton} href="#contact">Let's Work Together <ArrowRight size={22} /></a>
    </section>
    <Footer page={page} />
  </div>;
}
