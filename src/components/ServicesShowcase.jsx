import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

import { Megaphone, Mail, Users, ListChecks, CodeXml, ChartNoAxesCombined } from 'lucide-react';

import styles from './ServicesShowcase.module.css';





const services = [
  { id: 'affiliate', title: 'Affiliate Marketing', icon: Megaphone, image: 'am1.png', description: 'Performance-driven affiliate programs that help you acquire quality customers and scale faster.', features: [['Quality partnerships', 'Connect with partners who understand your audience.'], ['Performance driven', 'Focus on qualified customers and measurable results.'], ['Scalable growth', 'Expand your reach with a managed affiliate program.']] },
  { id: 'email-sms', title: 'Email & SMS', icon: Mail, image: 'email.png', description: 'Reach your audience with targeted email and SMS campaigns that drive real engagement.', features: [['Targeted delivery', 'Reach the right inboxes and phones.'], ['Timed campaigns', 'Connect with customers at the right moment.'], ['Automated follow-ups', 'Keep your audience engaged across campaigns.']] },
  { id: 'smm', title: 'Social Media Marketing', icon: Users, image: 'smm1.png', description: 'Build your presence and connect with customers across your social channels.', features: [['Audience engagement', 'Build meaningful connections with your audience.'], ['Content strategy', 'Create campaigns that fit your brand.'], ['Campaign insights', 'Understand what resonates with your audience.']] },
  { id: 'list-management', title: 'List Management', icon: ListChecks, image: 'list management.png', description: 'Clean, verified, and well-managed lists that improve reach and deliverability.', features: [['Clean data', 'Keep your customer lists accurate and organized.'], ['Audience segments', 'Build campaigns around relevant customer groups.'], ['Better reach', 'Improve delivery with verified contact information.']] },
  { id: 'web-dev', title: 'Web Development', icon: CodeXml, image: 'webdevelopment.png', description: 'Build a responsive website designed around your customers and business goals.', features: [['Responsive websites', 'A consistent experience across devices.'], ['Conversion focused', 'Help visitors take the next step.'], ['Reliable foundations', 'Build a website that supports your growth.']] },
  { id: 'crm', title: 'CRM Consultation', icon: ChartNoAxesCombined, image: 'crm1.png', description: 'Set up and tune your CRM so every lead is tracked from click to close.', features: [['Pipeline design', 'Clear stages from lead to sale.'], ['Integrations', 'Connect the tools you already use.'], ['Reporting', 'See what drives results.']] },
];

export default function ServicesShowcase() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const activeRef = useRef(0);
  const lockedUntil = useRef(0);

  const idleTimer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stacked, setStacked] = useState(true);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    services.forEach(service => {
      const image = new Image();
      image.src = `/image/Home/section2/${service.image}`;
    });
  }, []);
  const goToService = useCallback((index, manual = true) => {
    if (index < 0 || index >= services.length || index === activeRef.current) return;
    lockedUntil.current = performance.now() + 650;
    activeRef.current = index;
    setActiveIndex(index);
    setProgress(0);
    if (manual) {
      setInteracting(true);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setInteracting(false), 4500);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .3 });
    observer.observe(sectionRef.current);
    return () => { observer.disconnect(); clearTimeout(idleTimer.current); };
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const track = trackRef.current;
      track.style.setProperty('--service-height', `${section.offsetHeight}px`);
      const top = Math.min(90, window.innerHeight - section.offsetHeight - 12);
      section.style.setProperty('--service-sticky-top', `${top}px`);
      const heading = section.querySelector('h2').parentElement;
      const headingTop = section.getBoundingClientRect().top + heading.offsetTop;
      const navbar = document.querySelector('header');
      const navbarBottom = navbar?.getBoundingClientRect().bottom || 100;
      heading.style.visibility = headingTop < navbarBottom + 8 ? 'hidden' : 'visible';
      const distance = Math.max(0, top - track.getBoundingClientRect().top);
      goToService(Math.min(services.length - 1, Math.floor(distance / 220)), false);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(schedule);
    resize.observe(sectionRef.current);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [goToService]);

  useEffect(() => {
    let gestureUsed = false;
    let quietTimer;
    const wheel = event => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) return;
      const track = trackRef.current;
      const section = sectionRef.current;
      const top = parseFloat(getComputedStyle(section).top);
      const rect = track.getBoundingClientRect();
      if (rect.top > top + 2 || rect.bottom <= top + section.offsetHeight) return;
      const direction = Math.sign(event.deltaY);
      const next = activeRef.current + direction;
      if (!gestureUsed && (next < 0 || next >= services.length)) return;
      event.preventDefault();
      clearTimeout(quietTimer);
      quietTimer = setTimeout(() => { gestureUsed = false; }, 350);
      if (gestureUsed) return;
      gestureUsed = true;
      goToService(next, false);
      const start = window.scrollY + rect.top - top;
      // Move one stage per wheel/trackpad gesture; momentum cannot skip services.
      window.scrollTo({ top: start + next * 220 + 110, behavior: 'instant' });
    };
    window.addEventListener('wheel', wheel, { passive: false });
    return () => { clearTimeout(quietTimer); window.removeEventListener('wheel', wheel); };
  }, [goToService]);

  useEffect(() => {
    if (stacked || !visible || interacting || reducedMotion) return;
    const started = performance.now();
    const timer = setInterval(() => {
      if (document.hidden) return;
      const elapsed = performance.now() - started;
      setProgress(Math.min(100, elapsed / 4500 * 100));
      if (elapsed >= 4500) { clearInterval(timer); goToService((activeRef.current + 1) % services.length, false); }
    }, 80);
    return () => clearInterval(timer);
  }, [stacked, visible, interacting, reducedMotion, activeIndex, goToService]);

  const service = services[activeIndex];
  const transition = { duration: reducedMotion ? 0 : .45, ease: [.22, 1, .36, 1] };
  return <div ref={trackRef} className={styles.scrollTrack}><section id="services" ref={sectionRef} className={styles.section}>
    <div className={styles.frame}>
      <div className={styles.heading}><h2>What We Can Do For You?</h2><p>One Partner. Multiple Solutions. Built Around Your Goals.</p></div>
      <div className={styles.layout}>
        <div className={styles.menu} role="tablist" aria-label="Our services">
          {services.map((item, index) => <button key={item.id} type="button" role="tab" id={`service-tab-${item.id}`} aria-controls="service-panel" aria-selected={activeIndex === index} onClick={() => goToService(index)} className={styles.menuButton}>
            <span className={styles.menuIcon} aria-hidden="true"><item.icon size={22} strokeWidth={1.8} /></span><span>{item.title}</span>
            {activeIndex === index && <span className={styles.progress} style={{ transform: `scaleX(${progress / 100})` }} />}
          </button>)}
        </div>
        <div className={styles.artwork} aria-hidden="true"><AnimatePresence mode="wait" initial={false}>
          <motion.img key={service.id} src={`/image/Home/section2/${service.image}`} alt="" initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -12 }} transition={transition} />
        </AnimatePresence></div>
        <div id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${service.id}`} className={styles.panel}>
          <div className={styles.content}><AnimatePresence mode="wait" initial={false}><motion.div key={service.id} initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }} transition={transition}>
            <h3>{service.title}</h3><p className={styles.description}>{service.description}</p>
            <ul className={styles.features}>{service.features.map(([title, text], index) => <li key={title}><span className={styles.featureIcon} aria-hidden="true">{['↗', '◎', '✓'][index]}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ul>
          </motion.div></AnimatePresence></div>
          <div className={styles.actions}><a href="#audience">Explore {service.title} <span aria-hidden="true">→</span></a><a href="#solutions">View Case Study</a></div>
        </div>
      </div>
    </div>
  </section></div>;
}



