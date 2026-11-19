import TypingHighlight from '../components/TypingHighlight';
import usePageScroll from '../hooks/usePageScroll';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Calculator, Smartphone, Workflow, Database } from 'lucide-react';
import Footer from '../components/Footer';
import { FloatingIcons } from '../components/PartnershipSections';
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
const processSteps = [
  ['01', 'Discover', 'We understand your business, goals, and challenges.', 'Group 40316.png'],
  ['02', 'Plan', 'We define the strategy, features, and roadmap for success.', 'Group 40317.png'],
  ['03', 'Design', 'We create intuitive UI/UX designs focused on user experience.', 'Group 40318.png'],
  ['04', 'Develop', 'We build clean, scalable, and secure solutions using modern technologies.', 'Group 40319.png'],
  ['05', 'Test', 'We test thoroughly to ensure quality, security, and performance.', 'Group 40320.png'],
  ['06', 'Deploy & Support', 'We deploy your solution and provide continuous support and updates.', 'Group 40321.png'],
];
const webAsset = file => publicAsset(`/image/WebDevelopment/${file}`);
const strengths = [
  ['Engineering Business Impact', 'We develop custom solutions tailored to your workflows and business goals, delivering efficiency, simplicity, and measurable results.', 'Channel image.png', 'A team reviewing business workflows and digital solutions.'],
  ['End-to-End Digital Excellence', 'From strategy and UI/UX design to development, testing, and deployment, we manage the complete product lifecycle.', 'digital-excellence.webp', 'A team planning a digital product together.'],
  ['Innovation Built to Scale', 'Our scalable solutions adapt to your needs, support growth, and integrate evolving technologies.', 'innovation-scale.webp', 'Modern server infrastructure built to scale.'],
  ['Your Long-Term Technology Partner', 'We provide ongoing support, maintenance, and improvements to keep your solutions performing at their best.', 'technology-partner.webp', 'A technology specialist providing ongoing support.'],
];

export default function WebDevelopment() {
  usePageScroll();
  const strengthsSection = useRef(null);
  const capabilitiesSection = useRef(null);
  const processTrackRef = useRef(null);
  const [processIndex, setProcessIndex] = useState(0);
  const processSwipe = useRef(null);
  const scrollProcess = direction => {
    if (matchMedia('(max-width:767px)').matches) {
      setProcessIndex(index => Math.max(0, Math.min(processSteps.length - 1, index + direction)));
      return;
    }
    const track = processTrackRef.current;
    if (!track?.firstElementChild) return;
    const step = track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({ left:direction * step, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  useEffect(() => {
    const el = processTrackRef.current;
    if (!el) return;
    let frame = 0;
    let target = el.scrollLeft;
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      target = el.scrollLeft;
    };
    const animate = () => {
      const distance = target - el.scrollLeft;
      if (Math.abs(distance) < 0.75) {
        el.scrollLeft = target;
        frame = 0;
        return;
      }
      el.scrollLeft += distance * 0.12;
      frame = requestAnimationFrame(animate);
    };
    const onWheel = e => {
      if (e.ctrlKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? el.clientWidth : 1;
      const delta = e.deltaY * unit * 0.45;
      const max = el.scrollWidth - el.clientWidth;
      const next = Math.max(0, Math.min(max, (frame ? target : el.scrollLeft) + delta));
      if (next === (frame ? target : el.scrollLeft)) return;
      e.preventDefault();
      target = next;
      if (!frame) frame = requestAnimationFrame(animate);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointerdown', stop);
    el.addEventListener('touchstart', stop, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', stop);
      el.removeEventListener('touchstart', stop);
    };
  }, []);
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
    const section = capabilitiesSection.current;
    if (!section || !window.IntersectionObserver) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const cards = section.querySelectorAll('[data-capability-card]');
    if (motion.matches) {
      cards.forEach(card => { card.dataset.capabilityVisible = 'true'; });
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.capabilityVisible = 'true';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const previous = document.title;
    document.title = 'Web Development | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main id="web-development-main">
      <section className={`${shared.hero} ${styles.hero}`} data-page-hero aria-labelledby="web-title">
        <a className={`${shared.specialist} ${styles.specialist}`} href="#contact">Connect with our Specialist <ArrowRight size={14} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>Web Development</span>
          <h1 id="web-title">Transforming Ideas In<br /><span><TypingHighlight>Digital Solutions</TypingHighlight></span></h1>
          <p>At Leadsgarage, we help organizations turn ideas into scalable digital products that improve efficiency, enhance customer experiences, and accelerate business growth.</p>
          <div className={styles.heroButtons}>
            <a className={styles.button} href="#contact">Start Your Project</a>
            <a className={styles.secondaryButton} href="#contact">Get Expert Guidance</a>
          </div>
        </div>
        <div data-hero-art className={styles.heroVisual}>
          <div className={styles.floorGrid} aria-hidden="true" />
          <div className={styles.visualInner}>
          <img className={styles.developmentArt} src={webAsset('Group 40244.png')} width="979" height="736" alt="A development team building modern web and mobile experiences." fetchPriority="high" />
            <div className={`${styles.heroBadge} ${styles.scalable}`}>
              <img src={webAsset('Frame3.png')} alt="" className={styles.badgeIcon} width="21" height="21" />
              <span>Scalable & Future-Ready</span>
            </div>
            <div className={`${styles.heroBadge} ${styles.security}`}>
              <img src={webAsset('Frame (1).png')} alt="" className={styles.badgeIcon} width="21" height="21" />
              <span>Secure & Reliable</span>
            </div>
            <div className={`${styles.heroBadge} ${styles.delivery}`}>
              <img src={webAsset('Frame.png')} alt="" className={styles.badgeIcon} width="21" height="21" />
              <span>On-Time Delivery</span>
            </div>
            <div className={`${styles.heroBadge} ${styles.technology}`}>
              <img src={webAsset('Frame3.png')} alt="" className={styles.badgeIcon} width="21" height="21" />
              <span>Modern Technology Stack</span>
            </div>
            <div className={`${styles.heroBadge} ${styles.conversion}`}>
              <img src={webAsset('Frame (2).png')} alt="" className={styles.badgeIcon} width="21" height="21" />
              <span>Conversion Focused UI/UX</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.curvedArea}>
        <section ref={strengthsSection} className={styles.strengths} aria-labelledby="strengths-title">
          <h2 id="strengths-title" data-strength-reveal>Our Core Strengths</h2>
          <p data-strength-reveal>Everything you need to fill your sales pipeline with ready-to-buy prospects.</p>
          <div className={styles.strengthList} role="region" data-native-scroll aria-label="Core strengths" tabIndex={0}>{strengths.map(([title, description, image, alt], index) => <article key={title} data-strength-reveal className={`${styles.strengthCard} ${styles[`strength${index}`]}`}>
            <div><h3>{title}</h3><p>{description}</p></div>
            <img src={webAsset(image)} width="410" height="302" alt={alt} loading="lazy" />
          </article>)}</div>
        </section>

        <section ref={capabilitiesSection} data-native-scroll tabIndex={0} className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.capabilityHeading}><h2 id="capabilities-title">What We <br />Can Develop</h2><p>Flexible solutions tailored to<br />your goals and KPIs.</p></div>
          {capabilities.map(([icon, title, color], i) => <article data-capability-card key={title} className={styles[`capability${i}`]}><span style={color ? { background: color } : undefined}>{typeof icon === 'string' ? <img src={webAsset(icon)} width="126" height="126" alt="" /> : React.createElement(icon, { size: 34, strokeWidth: 1.8, 'aria-hidden': true })}</span><h3>{title}</h3><p>High-impact strategies designed to deliver consistent results for your specific business goals.</p></article>)}
        </section>
      </div>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.processHeader}>
          <h2 id="process-title">Our Development Process</h2>
        </div>
        <div
          ref={processTrackRef}
          className={styles.processTrack}
          tabIndex={0}
          aria-label="Development process steps"
          data-native-scroll
          onPointerDown={event => { if (event.pointerType === 'touch') processSwipe.current = { x:event.clientX, y:event.clientY }; }}
          onPointerCancel={() => { processSwipe.current = null; }}
          onPointerUp={event => {
            const start = processSwipe.current;
            processSwipe.current = null;
            if (!start || !matchMedia('(max-width:767px)').matches) return;
            const dx = event.clientX - start.x, dy = event.clientY - start.y;
            if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) scrollProcess(dx < 0 ? 1 : -1);
          }}
        >
          {processSteps.map(([num, title, copy, image], index) => (
            <article key={title} className={styles.processCard} data-selected={index === processIndex}>
              <span className={styles.processStepNumber}>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <img
                className={styles.processStepArt}
                src={webAsset(image)}
                alt=""
                loading="lazy"
              />
            </article>
          ))}
        </div>
        <nav className={styles.processArrows} aria-label="Development process navigation">
          <button type="button" aria-label="Previous development step" disabled={processIndex === 0} onClick={() => scrollProcess(-1)}><ArrowLeft size={20} /></button>
          <span aria-live="polite">{String(processIndex + 1).padStart(2,'0')} / 06</span>
          <button type="button" aria-label="Next development step" disabled={processIndex === processSteps.length - 1} onClick={() => scrollProcess(1)}><ArrowRight size={20} /></button>
        </nav>
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
