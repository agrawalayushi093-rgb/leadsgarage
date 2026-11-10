import TypingHighlight from '../components/TypingHighlight';
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Search, FileText, PenTool, Code, Rocket, Calculator, Smartphone, Workflow, Database, CheckCheck } from 'lucide-react';
import Footer from '../components/Footer';
import { FloatingIcons, HowItWorks } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import styles from './WebDevelopment.module.css';

const capabilities = [
  [Calculator, 'Web Applications', '#00ba91'],
  [Smartphone, 'Mobile Applications', '#3b6df7'],
  [Workflow, 'Workflow Automation', '#3b6df7'],
  [Database, 'CRM & ERP Systems', '#0bb9dc'],
  ['Icon Container.png', 'Admin Dashboards'],
  ['Icon Container (1).png', 'SaaS Products'],
  ['Icon Container (2).png', 'API Development'],
  ['Icon Container (3).png', 'E-Commerce Platforms'],
];
const steps = [
  ['Group 40217 (2).png', 'Discover', 'We understand your business, goals, and challenges.'],
  ['Group 40217 (1).png', 'Plan', 'We define the strategy, features, and roadmap for success.'],
  ['Group 40217.png', 'Design', 'We create intuitive UI/UX designs focused on user experience.'],
  ['Group 40217 (3).png', 'Develop', 'We build clean, scalable, and secure solutions using modern technologies.'],
  ['Group 40217 (4).png', 'Test', 'We test thoroughly to ensure quality, security, and performance.'],
  ['Group 40217 (5).png', 'Deploy & Support', 'We deploy your solution and provide continuous support and updates.'],
];
const webAsset = file => publicAsset(`/image/WebDevelopment/${file}`);
const processCurves = ['Frame 1000004767 (2).png', 'Frame 1000004767 (1).png', 'Frame 1000004767.png', 'Frame 1000004767 (3).png', 'Frame 1000004767 (4).png', 'Frame 1000004767 (5).png'];
const strengths = [
  ['Engineering Business Impact', 'We develop custom solutions tailored to your workflows and business goals, delivering efficiency, simplicity, and measurable results.', 'Channel image.png', 'A team reviewing business workflows and digital solutions.'],
  ['End-to-End Digital Excellence', 'From strategy and UI/UX design to development, testing, and deployment, we manage the complete product lifecycle.', 'digital-excellence.webp', 'A team planning a digital product together.'],
  ['Innovation Built to Scale', 'Our scalable solutions adapt to your needs, support growth, and integrate evolving technologies.', 'innovation-scale.webp', 'Modern server infrastructure built to scale.'],
  ['Your Long-Term Technology Partner', 'We provide ongoing support, maintenance, and improvements to keep your solutions performing at their best.', 'technology-partner.webp', 'A technology specialist providing ongoing support.'],
];

export default function WebDevelopment() {
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
      <section className={`${shared.hero} ${styles.hero}`} data-page-hero aria-labelledby="web-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>Web Development</span>
          <h1 id="web-title">Transforming Ideas In<br /><span><TypingHighlight>Digital Solutions</TypingHighlight></span></h1>
          <p>At Leadsgarage, we help organizations turn ideas into scalable digital products that improve efficiency, enhance customer experiences, and accelerate business growth.</p>
          <a className={shared.whiteButton} href="#contact">Start Your Project</a>
        </div>
        <div data-hero-art className={styles.heroVisual}>
          <img className={styles.developmentArt} src={webAsset('Group 40244.png')} width="979" height="736" alt="A development team building modern web and mobile experiences." fetchPriority="high" />
          <img className={`${styles.heroBadge} ${styles.technology}`} src={webAsset('Frame.png')} width="234" height="73" alt="Modern Technology Stack" />
          <img className={`${styles.heroBadge} ${styles.delivery}`} src={webAsset('Frame (1).png')} width="246" height="56" alt="On-Time Delivery" />
          <img className={`${styles.heroBadge} ${styles.security}`} src={webAsset('Frame (2).png')} width="225" height="56" alt="Secure & Reliable" />
          <img className={`${styles.heroBadge} ${styles.conversion}`} src={webAsset('Frame (3).png')} width="319" height="56" alt="Conversion Focused UI/UX" />
          <img className={`${styles.heroBadge} ${styles.scalable}`} src={webAsset('Frame (4).png')} width="269" height="56" alt="Scalable & Future-Ready" />
        </div>
      </section>

      <div className={styles.curvedArea}>
        <section ref={strengthsSection} className={styles.strengths} aria-labelledby="strengths-title">
          <h2 id="strengths-title" data-strength-reveal>Our Core Strengths</h2>
          <p data-strength-reveal>Everything you need to fill your sales pipeline with ready-to-buy prospects.</p>
          <div className={styles.strengthList} role="region" aria-label="Core strengths" tabIndex={0}>{strengths.map(([title, description, image, alt], index) => <article key={title} data-strength-reveal className={`${styles.strengthCard} ${styles[`strength${index}`]}`}>
            <div><h3>{title}</h3><p>{description}</p></div>
            <img src={webAsset(image)} width="410" height="302" alt={alt} loading="lazy" />
          </article>)}</div>
        </section>

        <section tabIndex={0} className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.capabilityHeading}><h2 id="capabilities-title">What We <br />Can Develop</h2><p>Flexible solutions tailored to<br />your goals and KPIs.</p></div>
          {capabilities.map(([icon, title, color], i) => <article key={title} className={styles[`capability${i}`]}><span style={color ? { background: color } : undefined}>{typeof icon === 'string' ? <img src={webAsset(icon)} width="126" height="126" alt="" /> : React.createElement(icon, { size: 34, strokeWidth: 1.8, 'aria-hidden': true })}</span><h3>{title}</h3><p>High-impact strategies designed to deliver consistent results for your specific business goals.</p></article>)}
        </section>
      </div>

      <div className={styles.process}>
        <HowItWorks showConnectors={false} title="Our Development Process" label="Development process steps" steps={steps.map(([, title, description], index) => [[Search, FileText, PenTool, Code, CheckCheck, Rocket][index], title, description])} artworkAssets={steps.map(([icon]) => webAsset(icon))} curveAssets={processCurves.map(webAsset)} />
      </div>
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
