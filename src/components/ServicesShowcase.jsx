import { publicAsset } from '../utils/publicAsset';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion, useMotionValueEvent, useMotionTemplate } from 'framer-motion';

import styles from './ServicesShowcase.module.css';

const services = [
  { id: 'affiliate', title: 'Affiliate Marketing', lead: 'Affiliate', rest: 'Marketing', icon: 'Paper_Plane.png', image: 'Group 40135.png', color: '#6ba5ff', description: 'Performance-driven affiliate programs that help you acquire quality customers and scale faster.' },
  { id: 'smm', title: 'Social Media Marketing', lead: 'Social', rest: 'Media Marketing', icon: 'Users_Group.png', image: 'Group 40042 (2).png', color: '#30a5ff', description: 'Build your presence and connect with customers through social campaigns that drive real engagement.' },
  { id: 'email-sms', title: 'Email & SMS', lead: 'Email', rest: '& SMS', icon: 'Mail_Open.png', image: 'Frame 1000004746.png', color: '#214ce0', description: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.' },
  { id: 'list-management', title: 'List Management', lead: 'List', rest: 'Management', icon: 'File_Document.png', image: 'Frame 1000004753.png', color: '#9964ff', description: 'Clean, verified, and well-managed lists that improve your reach and deliverability.' },
  { id: 'web-dev', title: 'Web Development', lead: 'Web', rest: 'Development', icon: 'Folder_Code.png', image: 'Frame 1000004754.png', color: '#00bf93', description: 'Responsive websites built around your customers, your brand, and your business goals.' },
  { id: 'crm', title: 'CRM Consultation', lead: 'CRM', rest: 'Consultation', icon: 'Chart_Bar_Vertical_01.png', image: 'Frame 1000004755.png', color: '#00b8cc', description: 'Connect your tools and fine-tune your CRM so every lead is tracked from click to close.' },
];

const backgroundStops = ['#e2f4ff', '#0089e8', '#1b42b9', '#7643db', '#009b7d', '#0098b7'];

export default function ServicesShowcase() {
  const trackRef = useRef(null);
  const menuRef = useRef(null);
  const scrollFrame = useRef(0);
  const animationTarget = useRef(null);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || !matchMedia('(max-width: 639px)').matches) return;
    const item = menu.children[activeIndex];
    menu.scrollTo({left:Math.max(0,item.offsetLeft - (menu.clientWidth - item.offsetWidth) / 2),behavior:'smooth'});
  }, [activeIndex]);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  const { scrollYProgress: entranceProgress } = useScroll({ target: trackRef, offset: ['start 0.9', 'start 0.45'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 170, damping: 30, mass: 0.4 });
  const phase = useTransform(reducedMotion ? scrollYProgress : smoothProgress, [0, 1], [0, 6]);
  useMotionValueEvent(phase, 'change', value => setActiveIndex(Math.max(0, Math.min(5, Math.floor(value)))));
  const colorRange = [0, 0.88, 1.12, 1.88, 2.12, 2.88, 3.12, 3.88, 4.12, 4.88, 5.12, 6];
  const backgroundColor = useTransform(phase, colorRange, backgroundStops.flatMap(color => [color, color]));
  const tint = useTransform(phase, colorRange, ['#e2f4ff', '#35a9fc', '#204acd', '#a47aff', '#19cda5', '#19c9dd'].flatMap(color => [color, color]));
  const background = useMotionTemplate`linear-gradient(145deg, ${tint}, ${backgroundColor})`;
  const textColor = useTransform(phase, [0.88, 1.12], ['#092052', '#ffffff']);

  const selectService = useCallback(index => {
    const track = trackRef.current;
    const top = window.scrollY + track.getBoundingClientRect().top;
    const distance = track.offsetHeight - window.innerHeight;
    const destination = top + distance * ((index + 0.8) / 6);
    cancelAnimationFrame(scrollFrame.current);
    animationTarget.current = index;
    if (reducedMotion) {
      window.scrollTo({ top: destination, behavior: 'instant' });
      animationTarget.current = null;
      return;
    }
    const start = window.scrollY;
    const started = performance.now();
    const animate = now => {
      const progress = Math.min(1, (now - started) / 460);
      const eased = progress * progress * (3 - 2 * progress);
      window.scrollTo({ top: start + (destination - start) * eased, behavior: 'instant' });
      if (progress < 1) scrollFrame.current = requestAnimationFrame(animate);
      else animationTarget.current = null;
    };
    scrollFrame.current = requestAnimationFrame(animate);
  }, [reducedMotion]);

  useEffect(() => {
    // Manual scrolling stays continuous; only menu clicks animate the page position.
    const interrupt = () => {
      cancelAnimationFrame(scrollFrame.current);
      animationTarget.current = null;
    };
    window.addEventListener('wheel', interrupt, { passive: true });
    window.addEventListener('touchstart', interrupt, { passive: true });
    return () => {
      interrupt();
      window.removeEventListener('wheel', interrupt);
      window.removeEventListener('touchstart', interrupt);
    };
  }, []);
  return (
    <section id="services" ref={trackRef} className={styles.section} aria-labelledby="services-heading">
      <div className={styles.frame}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Our Services</span>
          <h2 id="services-heading">What We Can Do For You?</h2>
          <p>One Partner. Multiple Solutions. Built Around Your Goals.</p>
        </div>
        <motion.div className={styles.card} style={{ background, color: textColor }}>
          <nav ref={menuRef} className={styles.menu} aria-label="Our services">
            {services.map((item, index) => (
              <ServiceMenuItem key={item.id} item={item} index={index} phase={phase} active={activeIndex === index} onSelect={selectService} />
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

function ServiceMenuItem({ item, index, phase, active, onSelect }) {
  const opacity = useTransform(phase, [index - 0.12, index + 0.12, index + 0.88, index + 1.12], index === 0 ? [1, 1, 1, 0] : index === 5 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  return (
    <button type="button" className={styles.menuItem} aria-current={active ? 'true' : undefined} aria-controls={`service-${item.id}`} onClick={() => onSelect(index)}>
      <motion.span className={styles.menuHighlight} style={{ opacity }} aria-hidden="true" />
      <span className={styles.icon}><img src={publicAsset(`/image/Home/section2/${item.icon}`)} alt="" /></span>
      <span>{item.title}</span>
    </button>
  );
}

function ServiceHeading({ service, index, phase, entranceProgress, reducedMotion }) {
  const reveal = useTransform(phase, [index + 0.14, index + 0.76], [0, 1]);
  const progress = reveal;
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
  // Menu highlight, artwork and background share the same transition window.
  const range = [index - 0.12, index + 0.12, index + 0.88, index + 1.12];
  const opacity = useTransform(phase, range, index === 0 ? [1, 1, 1, 0] : index === 5 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const contentY = useTransform(phase, range, [index === 0 ? 0 : 12, 0, 0, index === 5 ? 0 : -12]);
  const imageY = useTransform(phase, range, [index === 0 ? 0 : 18, 0, 0, index === 5 ? 0 : -18]);
  const imageScale = useTransform(phase, range, [index === 0 ? 1 : 0.985, 1, 1, index === 5 ? 1 : 1.015]);
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


