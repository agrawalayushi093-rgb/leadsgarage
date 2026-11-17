import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Footer from './Footer';
import { publicAsset } from '../utils/publicAsset';
import styles from './PartnershipPage.module.css';

const floatingIcons = ['Group 40197.png', 'Group 40195.png', 'Group 40198.png', 'Group 40196.png'];

export function FloatingIcons({ className = '', assetFolder = 'Home' }) {
  return <div className={`${styles.floatingIcons} ${className}`} aria-hidden="true">
    {floatingIcons.map(file => <img key={file} src={publicAsset(`/image/${assetFolder}/${file}`)} alt="" width="150" height="150" />)}
  </div>;
}

export function RequirementsSection({ title, items, iconColor, iconAssets, className = '' }) {
  return <section className={`${styles.requirements} ${className}`} aria-labelledby="requirements-title">
    <div className={styles.container}>
      <h2 id="requirements-title">{title}</h2>
      <div className={styles.requirementGrid}>{items.map(([Icon, heading, description, color], index) => <article key={heading} className={styles.requirementCard}>
        {iconAssets?.[index] ? <img className={styles.requirementIcon} src={publicAsset(iconAssets[index])} alt="" width="80" height="80" /> : <span className={styles.requirementIcon} style={{ background: color, color: iconColor }}><Icon size={32} strokeWidth={1.6} aria-hidden="true" /></span>}
        <h3>{heading}</h3><p>{description}</p>
      </article>)}</div>
    </div>
  </section>;
}

export function BenefitsCloud({ title, emphasis, subtitle, items, iconAssets, assetFolder, compact = false, className = '' }) {
  return <section className={`${styles.container} ${styles.benefitCloud} ${className}`} aria-labelledby="benefits-title">
    <div className={compact ? styles.benefitCanvas : styles.cloudLayout}>
    <FloatingIcons assetFolder={assetFolder} />
    <div className={styles.cloudCopy}><h2 id="benefits-title">{title}<br /><strong>{emphasis}</strong></h2>{subtitle && <p>{subtitle}</p>}</div>
    <ul>{items.map((benefit, index) => <li key={benefit} className={styles[`pill${index}`]}><span className={iconAssets?.[index] ? styles.assetPill : undefined}>{iconAssets?.[index] ? <img src={publicAsset(iconAssets[index])} alt="" width="49" height="49" /> : <Check size={19} />}</span>{benefit}</li>)}</ul>
    </div>
  </section>;
}

export function HowItWorks({ steps, artworkAssets, curveAssets, title = 'How It Works', label = 'Campaign process steps', showConnectors = true, scrollOnWheel = false, className = '' }) {
  const track = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const active = useRef(0);
  const programmaticUntil = useRef(0);
  useEffect(() => {
    if (!scrollOnWheel || !track.current) return;
    const element = track.current;
    element.scrollLeft = 0;
    const section = element.closest('section');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, target = element.scrollLeft;
    const stop = () => { cancelAnimationFrame(frame); frame = 0; };
    const animate = () => {
      const distance = target - element.scrollLeft;
      element.scrollLeft += Math.abs(distance) < 1 ? distance : distance * .09;
      if (Math.abs(target - element.scrollLeft) > 1) frame = requestAnimationFrame(animate);
      else frame = 0;
    };
    const wheel = event => {
      if (event.ctrlKey || event.metaKey) return;
      const rawDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const delta = rawDelta * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientWidth : 1);
      const max = element.scrollWidth - element.clientWidth;
      const currentTarget = frame ? target : element.scrollLeft;
      if (!delta || max <= 1 || (delta < 0 && currentTarget <= 1) || (delta > 0 && currentTarget >= max - 1)) return;
      event.preventDefault(); event.stopPropagation();
      target = Math.max(0, Math.min(max, currentTarget + delta * .32));
      if (reduced.matches) { stop(); element.scrollLeft = target; }
      else if (!frame) frame = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { section.setAttribute('data-process-visible', ''); observer.disconnect(); }
    }, { threshold: .15 });
    observer.observe(section);
    element.addEventListener('wheel', wheel, { passive:false });
    element.addEventListener('pointerdown', stop);
    element.addEventListener('touchstart', stop, { passive:true });
    return () => { stop(); observer.disconnect(); element.removeEventListener('wheel',wheel); element.removeEventListener('pointerdown',stop); element.removeEventListener('touchstart',stop); };
  }, [scrollOnWheel]);
  const goToStep = useCallback(index => {
    const next = Math.max(0, Math.min(steps.length - 1, index));
    const element = track.current;
    if (!element) return;
    const visible = parseInt(getComputedStyle(element).getPropertyValue('--visible-steps'), 10) || 1;
    const firstVisible = Math.min(next, Math.max(0, steps.length - visible));
    const card = element.children[firstVisible];
    if (!card) return;
    const left = card.offsetLeft - element.children[0].offsetLeft;
    if (Math.abs(element.scrollLeft - left) > 1) {
      programmaticUntil.current = performance.now() + 650;
      element.scrollTo({ left, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
    active.current = next;
    setActiveStep(next);
  }, [steps.length]);
  // Allow natural vertical page scrolling; horizontal carousel navigation is handled via
  // native touch/trackpad swipe, arrow buttons, and keyboard controls.
  const syncStep = () => {
    if (performance.now() < programmaticUntil.current) return;
    const container = track.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const progress = maxScroll > 0 ? container.scrollLeft / maxScroll : 0;
    const nearest = Math.round(progress * (steps.length - 1));
    active.current = nearest;
    setActiveStep(nearest);
  };
  return <section className={`${styles.container} ${styles.howItWorks} ${className}`} aria-labelledby="steps-title" data-process-reveal={scrollOnWheel ? '' : undefined}>
    <div className={styles.sectionHeader}><h2 id="steps-title">{title}</h2></div>
    <div ref={track} className={`${styles.stepsTrack} ${styles.hiddenScrollbars}`} onScroll={syncStep} role="region" aria-label={label} tabIndex={0} onKeyDown={event => {
      const next = event.key === 'ArrowRight' ? active.current + 1 : event.key === 'ArrowLeft' ? active.current - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? steps.length - 1 : undefined;
      if (next !== undefined) { event.preventDefault(); goToStep(next); }
    }}>
      {steps.map(([Icon, title, description], index) => <article className={`${styles.stepCard} ${activeStep === index ? styles.activeStep : ''} ${curveAssets?.[index] ? styles.customCurve : ''}`} key={title} style={{ '--step-layer': steps.length - index }} aria-current={activeStep === index ? 'step' : undefined}>
        <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>
        {curveAssets?.[index] && <img className={styles.stepCurve} src={publicAsset(curveAssets[index])} alt="" width="354" height="171" />}
        <div className={`${styles.stepArtwork} ${artworkAssets?.[index] ? styles.assetArtwork : ''}`} aria-hidden="true">{artworkAssets?.[index] ? <><img src={publicAsset(artworkAssets[index])} alt="" width="170" height="170" /><Icon className={styles.activeGlyph} size={58} strokeWidth={1.6} /></> : <Icon size={58} strokeWidth={1.6} />}</div>
        {showConnectors && index < steps.length - 1 && <button className={styles.stepArrow} type="button" aria-label={`Go to step ${index + 2}`} onClick={() => goToStep(index + 1)}><ArrowRight size={24} /></button>}
      </article>)}
    </div>

  </section>;
}

export function IndustriesSection({ title, items, folder, imageAssets, className = '', hideIcons = false }) {
  return <section className={`${styles.container} ${styles.industries} ${className}`} aria-labelledby="industries-title">
    <h2 id="industries-title">{title}</h2>
    <div className={styles.industryGrid}>{items.map(([Icon, heading, description, asset]) => <article className={styles.industryCard} key={heading}>
      <img src={publicAsset(imageAssets?.[asset] || `/image/${folder}/${asset}.webp`)} width="540" height="237" alt={`${heading} industry`} loading="lazy" />
      <div><h3>{!hideIcons && <Icon size={27} strokeWidth={1.7} aria-hidden="true" />}{heading}</h3><p>{description}</p></div>
    </article>)}</div>
  </section>;
}

export function SiteFooter({ page, assetFolder, oneScreen = false }) {
  const isAdvertiser = page === 'advertisers';
  return <div className={`${styles.footerShell} ${oneScreen ? styles.compactClosing : ''}`} data-inner-section-group={oneScreen ? '' : undefined}>
    <section className={styles.closingCta} aria-labelledby="partnership-cta-title">
      <FloatingIcons assetFolder={assetFolder} />
      <h2 id="partnership-cta-title">{isAdvertiser ? <>Ready to Scale Your<br />Customer Acquisition?</> : <>Ready to Start Buying<br />Quality Leads?</>}</h2>
      <p>{isAdvertiser ? <>Tell us about your business and campaign goals, and our team will work with you to<br className={styles.desktopBreak} /> build a performance marketing campaign that delivers real results.</> : <>Tell us what you're looking for, and our team will work with you to<br className={styles.desktopBreak} /> build a lead-generation campaign around your requirements.</>}</p>
      <a className={styles.darkButton} href="#contact">Let's Work Together <ArrowRight size={22} /></a>
    </section>
    <Footer page={page} />
  </div>;
}
