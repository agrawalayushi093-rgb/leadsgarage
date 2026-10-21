import { publicAsset } from '../utils/publicAsset';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from 'framer-motion';

import styles from './ServicesShowcase.module.css';

const services = [
  { id: 'affiliate', title: 'Affiliate Marketing', lead: 'Affiliate', rest: 'Marketing', icon: 'Paper_Plane.png', image: 'Group 40135.png', color: '#6ba5ff', description: 'Performance-driven affiliate programs that help you acquire quality customers and scale faster.' },
  { id: 'smm', title: 'Social Media Marketing', lead: 'Social', rest: 'Media Marketing', icon: 'Users_Group.png', image: 'Group 40042 (2).png', color: '#30a5ff', description: 'Build your presence and connect with customers through social campaigns that drive real engagement.' },
  { id: 'email-sms', title: 'Email & SMS', lead: 'Email', rest: '& SMS', icon: 'Mail_Open.png', image: 'Frame 1000004746.png', color: '#214ce0', description: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.' },
  { id: 'list-management', title: 'List Management', lead: 'List', rest: 'Management', icon: 'File_Document.png', image: 'Frame 1000004753.png', color: '#9964ff', description: 'Clean, verified, and well-managed lists that improve your reach and deliverability.' },
  { id: 'web-dev', title: 'Web Development', lead: 'Web', rest: 'Development', icon: 'Folder_Code.png', image: 'Frame 1000004754.png', color: '#00bf93', description: 'Responsive websites built around your customers, your brand, and your business goals.' },
  { id: 'crm', title: 'CRM Consultation', lead: 'CRM', rest: 'Consultation', icon: 'Chart_Bar_Vertical_01.png', image: 'Frame 1000004755.png', color: '#00b8cc', description: 'Connect your tools and fine-tune your CRM so every lead is tracked from click to close.' },
];

function useServiceOpacity(index, phase) {
  return useTransform(phase, [index - .12, index + .12, index + .88, index + 1.12],
    index === 0 ? [1, 1, 1, 0] : index === 5 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
}

function ServiceBackground({index, phase, active, reducedMotion}) {
  const opacity = useServiceOpacity(index, phase);
  return <motion.div aria-hidden="true" className={`${styles.colorLayer} ${styles[services[index].id]}`} style={{
    opacity: reducedMotion ? (active ? 1 : 0) : opacity,
  }} />;
}

export default function ServicesShowcase() {
  const trackRef = useRef(null);
  const menuRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const activeRef = useRef(0);
  const revealed = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuTransition, setMenuTransition] = useState(false);
  const menuTimer = useRef(0);
  useEffect(() => () => clearTimeout(menuTimer.current), []);
  useEffect(() => {
    if (!menuTransition) return;
    const interrupt = () => { clearTimeout(menuTimer.current); setMenuTransition(false); };
    window.addEventListener('wheel', interrupt, {passive:true});
    window.addEventListener('touchstart', interrupt, {passive:true});
    const keyboard = event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) interrupt(); };
    window.addEventListener('keydown', keyboard);
    return () => { window.removeEventListener('wheel', interrupt); window.removeEventListener('touchstart', interrupt); window.removeEventListener('keydown', keyboard); };
  }, [menuTransition]);
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || !matchMedia('(max-width: 639px)').matches) return;
    const item = menu.children[activeIndex];
    menu.scrollTo({left:Math.max(0,item.offsetLeft - (menu.clientWidth - item.offsetWidth) / 2),behavior:reducedMotion ? 'instant' : 'smooth'});
  }, [activeIndex, reducedMotion]);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  // Native scroll position is the single clock for menu, fill, artwork and colour.
  const phase = useTransform(scrollYProgress, [0, 1], [0, 6]);
  useMotionValueEvent(phase, 'change', value => {
    const next = Math.max(0, Math.min(services.length - 1, Math.floor(value)));
    if (next !== activeRef.current) { activeRef.current = next; setActiveIndex(next); }
  });
  useEffect(() => {
    if (reducedMotion || revealed.current || typeof window.IntersectionObserver !== 'function') return;
    const track = trackRef.current;
    let animations = [];
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || revealed.current) return;
      revealed.current = true;
      // Base styles stay visible: a failed or disabled reveal cannot hide content.
      [track.querySelector(`.${styles.heading}`), menuRef.current, track.querySelector(`.${styles.stage}`)].forEach((element,index) => {
        if (!element?.animate) return;
        animations.push(element.animate([
          {opacity:.92,transform:'translate3d(0,10px,0)'},
          {opacity:1,transform:'translate3d(0,0,0)'},
        ],{duration:420 + index * 30,easing:'cubic-bezier(.22,1,.36,1)'}));
      });
      observer.disconnect();
    },{threshold:.01,rootMargin:'0px 0px -24px 0px'});
    observer.observe(track);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [reducedMotion]);

  const selectService = useCallback(index => {
    clearTimeout(menuTimer.current);
    setMenuTransition(true);
    menuTimer.current = setTimeout(() => setMenuTransition(false), 500);
    const track = trackRef.current;
    const top = window.scrollY + track.getBoundingClientRect().top;
    const distance = track.offsetHeight - window.innerHeight;
    const destination = top + distance * ((index + 0.8) / 6);
    // Explicit menu navigation moves directly within the pinned frame. Wheel/touch stay native.
    window.scrollTo({top:destination,behavior:'instant'});
  }, []);

  return (
    <section data-native-page-scroll id="services" ref={trackRef} className={styles.section} aria-labelledby="services-heading">
      <div className={styles.frame}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Our Services</span>
          <h2 id="services-heading">What We Can Do For You?</h2>
          <p>One Partner. Multiple Solutions. Built Around Your Goals.</p>
        </div>
        <div className={`${styles.card} ${menuTransition ? styles.menuTransition : ''}`}>
          {services.map((item,index) => <ServiceBackground key={item.id} index={index} phase={phase} active={activeIndex === index} reducedMotion={reducedMotion} />)}
          <nav ref={menuRef} className={styles.menu} aria-label="Our services">
            {services.map((item, index) => (
              <ServiceMenuItem key={item.id} item={item} index={index} phase={phase} active={activeIndex === index} onSelect={selectService} reducedMotion={reducedMotion} />
            ))}
          </nav>
          <div className={styles.stage}>
            {services.map((service, index) => <ServicePanel key={service.id} service={service} index={index} phase={phase} active={activeIndex === index} reducedMotion={reducedMotion} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceMenuItem({ item, index, phase, active, onSelect, reducedMotion }) {
  const opacity = useServiceOpacity(index, phase);
  return (
    <button type="button" className={styles.menuItem} aria-current={active ? 'true' : undefined} aria-controls={`service-${item.id}`} onClick={() => onSelect(index)}>
      <motion.span className={styles.menuHighlight} style={{ opacity:reducedMotion ? (active ? 1 : 0) : opacity }} aria-hidden="true" />
      <span className={styles.icon}><img src={publicAsset(`/image/Home/section2/${item.icon}`)} alt="" /></span>
      <span>{item.title}</span>
    </button>
  );
}

function ServiceHeading({ service, index, phase, reducedMotion }) {
  const reveal = useTransform(phase, [index + 0.14, index + 0.76], [0, 1]);

  const words = service.title.split(' ');
  return (
    <h3 id={`heading-${service.id}`} aria-label={service.title} style={{ '--heading-ink': index === 0 ? '#092052' : '#ffffff', '--heading-muted': index === 0 ? '#09205233' : '#ffffff33' }}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <HighlightWord word={word} index={wordIndex} count={words.length} progress={reveal} reducedMotion={reducedMotion} />
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

function ServicePanel({ service, index, phase, active, reducedMotion }) {
  // Menu highlight, artwork and background share the same transition window.
  const range = [index - 0.12, index + 0.12, index + 0.88, index + 1.12];
  const opacity = useServiceOpacity(index, phase);
  const contentY = useTransform(phase, range, [index === 0 ? 0 : 12, 0, 0, index === 5 ? 0 : -12]);
  const imageY = useTransform(phase, range, [index === 0 ? 0 : 18, 0, 0, index === 5 ? 0 : -18]);
  const imageScale = useTransform(phase, range, [index === 0 ? 1 : 0.985, 1, 1, index === 5 ? 1 : 1.015]);
  return (
    <motion.article id={`service-${service.id}`} className={styles.servicePanel} aria-labelledby={`heading-${service.id}`} aria-hidden={!active} inert={!active ? '' : undefined} style={{ color:index === 0 ? '#092052' : '#ffffff', opacity: reducedMotion ? (active ? 1 : 0) : opacity, pointerEvents: active ? 'auto' : 'none' }}>
      <motion.div className={styles.content} style={reducedMotion ? undefined : { y: contentY }}>
        <ServiceHeading service={service} index={index} phase={phase} reducedMotion={reducedMotion} />
        <p>{service.description}</p>
        <a className={styles.learnMore} href="#audience" aria-label={`Learn more about ${service.title}`} tabIndex={active ? 0 : -1}>Learn More</a>
      </motion.div>
      <motion.img decoding="async" className={styles.artwork} style={reducedMotion ? undefined : { y: imageY, scale: imageScale }} src={publicAsset(`/image/Home/section2/${service.image}`)} alt="" />
    </motion.article>
  );
}


