import { publicAsset } from '../utils/publicAsset';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion, useMotionValueEvent, useMotionTemplate } from 'framer-motion';

import styles from './ServicesShowcase.module.css';

const services = [
  { id: 'affiliate', title: 'Affiliate Marketing', lead: 'Affiliate', rest: 'Marketing', icon: 'Paper_Plane.png', image: 'Group 40135.png', color: '#6ba5ff', description: 'Performance-driven affiliate programs that help you acquire quality customers and scale faster.' },
  { id: 'smm', title: 'Social Media Marketing', lead: 'Social', rest: 'Media Marketing', icon: 'Users_Group.png', image: 'Group 40042 (2).png', color: '#30a5ff', description: 'Build your presence and connect with customers through social campaigns that drive real engagement.' },
  { id: 'email-sms', title: 'Email & SMS', lead: 'Email', rest: '& SMS', icon: 'Mail_Open.png', image: 'Frame 1000004746.png', color: '#214ce0', description: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.' },
  { id: 'list-management', title: 'List Management', lead: 'List', rest: 'Management', icon: 'File_Document.png', image: 'Group 40162.png', color: '#9964ff', description: 'Clean, verified, and well-managed lists that improve your reach and deliverability.' },
  { id: 'web-dev', title: 'Web Development', lead: 'Web', rest: 'Development', icon: 'Folder_Code.png', image: 'Group 40161.png', color: '#00bf93', description: 'Responsive websites built around your customers, your brand, and your business goals.' },
  { id: 'crm', title: 'CRM Consultation', lead: 'CRM', rest: 'Consultation', icon: 'Chart_Bar_Vertical_01.png', image: 'Group 40163.png', color: '#00b8cc', description: 'Connect your tools and fine-tune your CRM so every lead is tracked from click to close.' },
];

const backgroundStops = ['#e2f4ff', '#0089e8', '#1b42b9', '#7643db', '#009b7d', '#0098b7'];

export default function ServicesShowcase() {
  const trackRef = useRef(null);
  const scrollFrame = useRef(0);
  const lockedUntil = useRef(0);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  const { scrollYProgress: entranceProgress } = useScroll({ target: trackRef, offset: ['start 0.9', 'start 0.45'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 170, damping: 30, mass: 0.4 });
  const phase = useTransform(reducedMotion ? scrollYProgress : smoothProgress, [0, 1], [0, 6]);
  useMotionValueEvent(phase, 'change', value => setActiveIndex(Math.max(0, Math.min(5, Math.floor(value)))));
  const colorRange = [0, 0.8, 1.2, 1.8, 2.2, 2.8, 3.2, 3.8, 4.2, 4.8, 5.2, 6];
  const backgroundColor = useTransform(phase, colorRange, backgroundStops.flatMap(color => [color, color]));
  const tint = useTransform(phase, colorRange, ['#e2f4ff', '#35a9fc', '#204acd', '#a47aff', '#19cda5', '#19c9dd'].flatMap(color => [color, color]));
  const background = useMotionTemplate`linear-gradient(145deg, ${tint}, ${backgroundColor})`;
  const textColor = useTransform(phase, [0.8, 1.2], ['#092052', '#ffffff']);

  const selectService = useCallback(index => {
    const track = trackRef.current;
    const top = window.scrollY + track.getBoundingClientRect().top;
    const distance = track.offsetHeight - window.innerHeight;
    const destination = top + distance * ((index + 0.5) / 6);
    cancelAnimationFrame(scrollFrame.current);
    if (reducedMotion) {
      window.scrollTo({ top: destination, behavior: 'instant' });
      return;
    }
    const start = window.scrollY;
    const started = performance.now();
    lockedUntil.current = started + 600;
    const animate = now => {
      const progress = Math.min(1, (now - started) / 520);
      const eased = progress * progress * (3 - 2 * progress);
      window.scrollTo({ top: start + (destination - start) * eased, behavior: 'instant' });
      if (progress < 1) scrollFrame.current = requestAnimationFrame(animate);
    };
    scrollFrame.current = requestAnimationFrame(animate);
  }, [reducedMotion]);

  useEffect(() => {
    let gestureUsed = false;
    let quietTimer;
    const wheel = event => {
      if (event.ctrlKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.target instanceof Element && event.target.closest('header, [role="dialog"], input, textarea, select')) return;
      const track = trackRef.current;
      const rect = track.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      const stickyTop = parseFloat(getComputedStyle(track.firstElementChild).top);
      if (rect.top > stickyTop + 2 || rect.bottom < window.innerHeight - 2) return;
      if (gestureUsed || performance.now() < lockedUntil.current) {
        event.preventDefault();
        clearTimeout(quietTimer);
        quietTimer = setTimeout(() => { gestureUsed = false; }, 180);
        return;
      }
      const current = Math.max(0, Math.min(5, Math.floor(scrollYProgress.get() * 6)));
      const next = current + Math.sign(event.deltaY);
      if (next < 0 || next >= services.length) return;
      event.preventDefault();
      gestureUsed = true;
      quietTimer = setTimeout(() => { gestureUsed = false; }, 180);
      selectService(next);
    };
    window.addEventListener('wheel', wheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', wheel);
      clearTimeout(quietTimer);
      cancelAnimationFrame(scrollFrame.current);
    };
  }, [scrollYProgress, selectService]);

  return (
    <section id="services" ref={trackRef} className={styles.section} aria-labelledby="services-heading">
      <div className={styles.frame}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Our Services</span>
          <h2 id="services-heading">What We Can Do For You?</h2>
          <p>One Partner. Multiple Solutions. Built Around Your Goals.</p>
        </div>
        <motion.div className={styles.card} style={{ background, color: textColor }}>
          <nav className={styles.menu} aria-label="Our services">
            {services.map((item, index) => (
              <button key={item.id} type="button" className={styles.menuItem} aria-current={activeIndex === index ? 'true' : undefined} aria-controls={`service-${item.id}`} onClick={() => selectService(index)}>
                <span className={styles.icon}><img src={publicAsset(`/image/Home/section2/${item.icon}`)} alt="" /></span>
                <span>{item.title}</span>
              </button>
            ))}
          </nav>
          <div className={styles.stage}>
            {services.map((service, index) => <ServicePanel key={service.id} service={service} index={index} phase={phase} entranceProgress={entranceProgress} active={activeIndex === index} reducedMotion={reducedMotion} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceHeading({ service, index, phase, entranceProgress, reducedMotion }) {
  const reveal = useTransform(phase, [index, index + 0.45], [0, 1]);
  const progress = index === 0 ? entranceProgress : reveal;
  const words = service.title.split(' ');
  return (
    <h3 id={`heading-${service.id}`} aria-label={service.title} style={{ '--heading-ink': index === 0 ? '#092052' : '#ffffff', '--heading-muted': index === 0 ? '#09205233' : '#ffffff33' }}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <HighlightWord word={word} index={wordIndex} count={words.length} progress={progress} reducedMotion={reducedMotion} />
          {wordIndex < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </h3>
  );
}
function HighlightWord({ word, index, count, progress, reducedMotion }) {
  const fill = useTransform(progress, [index / count, (index + 1) / count], ['0% 100%', '100% 100%']);
  return <motion.span aria-hidden="true" className={styles.highlightWord} style={{ backgroundSize: reducedMotion ? '100% 100%' : fill }}>{word}</motion.span>;
}

function ServicePanel({ service, index, phase, entranceProgress, active, reducedMotion }) {
  // Adjacent panels have separate visibility intervals, so their text never overlaps.
  const range = [index, index + 0.18, index + 0.82, index + 1];
  const opacity = useTransform(phase, range, index === 0 ? [1, 1, 1, 0] : index === 5 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const contentY = useTransform(phase, range, [index === 0 ? 0 : 26, 0, 0, index === 5 ? 0 : -26]);
  const imageY = useTransform(phase, range, [index === 0 ? 0 : 40, 0, 0, index === 5 ? 0 : -30]);
  const imageScale = useTransform(phase, range, [index === 0 ? 1 : 0.95, 1, 1, index === 5 ? 1 : 1.03]);
  return (
    <motion.article id={`service-${service.id}`} className={styles.servicePanel} aria-labelledby={`heading-${service.id}`} aria-hidden={!active} inert={!active ? '' : undefined} style={{ opacity: reducedMotion ? (active ? 1 : 0) : opacity, pointerEvents: active ? 'auto' : 'none' }}>
      <motion.div className={styles.content} style={reducedMotion ? undefined : { y: contentY }}>
        <ServiceHeading service={service} index={index} phase={phase} entranceProgress={entranceProgress} reducedMotion={reducedMotion} />
        <p>{service.description}</p>
        <a className={styles.learnMore} href="#audience" aria-label={`Learn more about ${service.title}`} tabIndex={active ? 0 : -1}>Learn More</a>
      </motion.div>
      <motion.img className={styles.artwork} style={reducedMotion ? undefined : { y: imageY, scale: imageScale }} src={publicAsset(`/image/Home/section2/${service.image}`)} alt="" />
    </motion.article>
  );
}
