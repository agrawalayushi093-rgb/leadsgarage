import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { FloatingIcons } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import styles from './WebDevelopment.module.css';

const capabilities = [
  ['Icon Container (3).png', 'Web Applications'],
  ['Icon Container (2).png', 'Mobile Applications'],
  ['Icon Container.png', 'Workflow Automation'],
  ['Icon Container (1).png', 'CRM & ERP Systems'],
];
const steps = [
  ['Group 40217 (2).png', 'Discover', 'We understand your business, goals, and challenges.'],
  ['Group 40217 (1).png', 'Plan', 'We define the strategy, features, and roadmap for success.'],
  ['Group 40217.png', 'Design', 'We create intuitive UI/UX designs focused on user experience.'],
  ['Group 40217 (3).png', 'Develop', 'We build clean, scalable, and reliable solutions using modern technology.'],
  ['Group 40217 (5).png', 'Launch', 'We test, launch, and support your solution as your business grows.'],
];
const webAsset = file => publicAsset(`/image/WebDevelopment/${file}`);
const processCurves = ['Frame 1000004767 (2).png', 'Frame 1000004767 (1).png', 'Frame 1000004767.png', 'Frame 1000004767 (3).png', 'Frame 1000004767 (5).png'];
const strengths = [
  ['Engineering Business Impact', 'We develop custom solutions tailored to your workflows and business goals, delivering efficiency, simplicity, and measurable results.', 'Channel image.png', 'A team reviewing business workflows and digital solutions.'],
  ['End-to-End Digital Excellence', 'From strategy and UI/UX design to development, testing, and deployment, we manage the complete product lifecycle.', 'digital-excellence.webp', 'A team planning a digital product together.'],
  ['Innovation Built to Scale', 'Our scalable solutions adapt to your needs, support growth, and integrate evolving technologies.', 'innovation-scale.webp', 'Modern server infrastructure built to scale.'],
  ['Your Long-Term Technology Partner', 'We provide ongoing support, maintenance, and improvements to keep your solutions performing at their best.', 'technology-partner.webp', 'A technology specialist providing ongoing support.'],
];

export default function WebDevelopment() {
  const [step, setStep] = useState(0);
  const strengthsSection = useRef(null);
  useEffect(() => {
    const section = strengthsSection.current;
    if (!section || !window.IntersectionObserver || !section.animate) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set();
    const play = (element, frames, options) => {
      const animation = element.animate(frames, options);
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || motion.matches) return;
        observer.unobserve(target);
        play(target, [{ opacity: 0, transform: 'translate3d(0,24px,0)' }, { opacity: 1, transform: 'translate3d(0,0,0)' }], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' });
        const image = target.querySelector('img');
        if (image) play(image, [{ transform: 'translate3d(10px,0,0) scale(.97)' }, { transform: 'translate3d(0,0,0) scale(1)' }], { duration: 750, easing: 'cubic-bezier(.22,1,.36,1)' });
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    if (!motion.matches) section.querySelectorAll('[data-strength-reveal]').forEach(element => observer.observe(element));
    const stopMotion = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    motion.addEventListener('change', stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener('change', stopMotion);
    };
  }, []);
  useEffect(() => {
    const previous = document.title;
    document.title = 'Web Development | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main>
      <section className={`${shared.hero} ${styles.hero}`} aria-labelledby="web-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>Web Development</span>
          <h1 id="web-title">Transforming Ideas In<br /><span>Digital Solutions</span></h1>
          <p>At Leadsgarage, we help organizations turn ideas into scalable digital products that improve efficiency, enhance customer experiences, and accelerate business growth.</p>
          <a className={shared.whiteButton} href="#contact">Start Your Project</a>
        </div>
        <img className={styles.heroArt} src={publicAsset('/image/WebDevelopment/hero-art.webp')} width="775" height="716" alt="A development team building a secure, scalable digital experience with modern technology." fetchPriority="high" />
      </section>

      <div className={styles.curvedArea}>
        <section ref={strengthsSection} className={styles.strengths} aria-labelledby="strengths-title">
          <h2 id="strengths-title" data-strength-reveal>Our Core Strengths</h2>
          <p data-strength-reveal>Everything you need to fill your sales pipeline with ready-to-buy prospects.</p>
          <div className={styles.strengthList}>{strengths.map(([title, description, image, alt], index) => <article key={title} data-strength-reveal className={`${styles.strengthCard} ${styles[`strength${index}`]}`}>
            <div><h3>{title}</h3><p>{description}</p></div>
            <img src={webAsset(image)} width="410" height="302" alt={alt} loading="lazy" />
          </article>)}</div>
        </section>

        <section className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.capabilityHeading}><h2 id="capabilities-title">What We <br />Can Develop</h2><p>Flexible solutions tailored to<br />your goals and KPIs.</p></div>
          {capabilities.map(([icon, title], i) => <article key={title} className={styles[`capability${i}`]}><span><img src={webAsset(icon)} width="126" height="126" alt="" /></span><h3>{title}</h3><p>High-impact strategies designed to deliver consistent results for your specific business goals.</p></article>)}
        </section>
      </div>

      <section className={styles.process} aria-labelledby="development-process-title">
        <div className={styles.processHeading}><h2 id="development-process-title">Our Development Process</h2><div className={styles.arrows}><button aria-label="Previous development step" disabled={step === 0} onClick={() => setStep(n => n - 1)}><ArrowLeft size={20} /></button><button aria-label="Next development step" disabled={step === steps.length - 1} onClick={() => setStep(n => n + 1)}><ArrowRight size={20} /></button></div></div>
        <div className={styles.processGrid}>{steps.map(([icon, title, description], i) => <button key={title} type="button" className={`${styles.step} ${step === i ? styles.activeStep : ''}`} aria-pressed={step === i} onClick={() => setStep(i)}><span className={styles.number}>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p><img className={styles.stepCurve} src={webAsset(processCurves[i])} width="354" height="171" alt="" /><span className={styles.stepIcon}><img src={webAsset(icon)} width="170" height="170" alt="" /></span></button>)}</div>
      </section>
    </main>

    <div className={`${shared.footerShell} ${styles.footer}`}>
      <section className={`${shared.closingCta} ${styles.cta}`} aria-labelledby="web-cta-title">
        <FloatingIcons />
        <h2 id="web-cta-title">Unlock the Power of<br />Digital Solutions</h2>
        <p>Let's discuss how we can help your business reach new heights</p>
        <a href="#contact" className={styles.connect}>Let’s connect <span><ArrowRight size={20} /></span></a>
      </section>
      <Footer page="webDevelopment" />
    </div>
  </div>;
}
