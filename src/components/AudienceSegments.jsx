import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { publicAsset } from '../utils/publicAsset';
import styles from './AudienceSegments.module.css';

const audiences = [
 { title:'Publisher?', description:"However you drive traffic, we’re here to help you grow. With valuable insight from our internal teams, as well as top publishers in every channel, we know how to make them work and scale.", compact:'Grow your traffic with valuable insights, top campaigns, and support built to help you scale.', image:'Frame 1000004723.png' },
 { title:'Advertiser?', description:'Get high-quality, intent-driven traffic that converts. Scale your customer acquisition and maximize ROI with LeadsGarage.', compact:'Reach high-intent customers, scale your acquisition, and maximize ROI with LeadsGarage.', image:'Frame 1000004724.png' },
];
export default function AudienceSegments({ onOpenContact }) {
 const section = useRef(null);
 const [active, setActive] = useState(null);
 const timer = useRef(null);
 useLayoutEffect(() => {
  const update = () => {
   const height = document.documentElement.clientHeight || innerHeight;
   const width = document.documentElement.clientWidth;
   const nav = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 92;
   const available = Math.max(180, height - nav - 20);
   const scale = Math.min(width / (width >= 1024 ? 1920 : 1400), available / 1000, 1);
   section.current.style.setProperty('--audience-height', `${available}px`);
   section.current.style.setProperty('--audience-unit', `${scale}px`);
   section.current.style.setProperty('--audience-top', `${nav + 10}px`);
  };
  const observer = new ResizeObserver(update);
  const navbar = document.querySelector('.site-header');
  if (navbar) observer.observe(navbar);
  window.addEventListener('resize', update); update();
  return () => { clearTimeout(timer.current); observer.disconnect(); window.removeEventListener('resize', update); };
 }, []);
 useLayoutEffect(() => {
  const cards = [...section.current.querySelectorAll('article')];
  const layout = () => cards.forEach(card => {
   const copy = card.firstElementChild;
   const inset = parseFloat(getComputedStyle(card.querySelector('img')).bottom) || 0;
   const available = Math.max(0, card.clientHeight - copy.offsetHeight - inset - 20);
   // The supplied artwork has transparent space at the top; keep its visible edge below the CTA.
   card.style.setProperty('--art-height', `${Math.min(card.clientHeight * .46, available / .86)}px`);
  });
  const observer = new ResizeObserver(layout);
  cards.forEach(card => { observer.observe(card); observer.observe(card.firstElementChild); });
  layout();
  return () => observer.disconnect();
 }, []);
 const enter = index => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  clearTimeout(timer.current); timer.current = setTimeout(() => setActive(index), 90);
 };
 const connect = () => { if (onOpenContact) onOpenContact(); else window.location.hash = 'team'; };
 return <section ref={section} id="audience" className={styles.section} aria-labelledby="audience-title">
  <div className={styles.curvesBack} aria-hidden="true"><span /><span /></div>
  <div className={styles.content}>
   <header className={styles.heading}>
    <h2 id="audience-title">Where Do you fit into this picture?</h2>
    <p>We combine technology, data, and expertise to deliver measurable growth for your business.</p>
   </header>
   <div className={styles.cards} onMouseLeave={() => { clearTimeout(timer.current); if (window.matchMedia('(hover: hover)').matches && !section.current.contains(document.activeElement)) setActive(null); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(null); }}>
    {audiences.map((card,index) => <article key={card.title} tabIndex={0} aria-label={`Explore ${card.title.replace('?','')}`} data-active={active === index} className={styles.card}
      onMouseEnter={() => enter(index)} onFocus={() => { clearTimeout(timer.current); setActive(index); }}
      onClick={event => { if (!event.target.closest('button')) setActive(index); }}
      onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActive(active === index ? null : index); } if(event.key === 'Escape') setActive(null); }}>
     <div className={styles.copy}>
      <span className={styles.intro}>Are you a</span><h3>{card.title}</h3>
      <p className={styles.fullDescription}>{card.description}</p><p className={styles.compactDescription}>{card.compact}</p>
      <button type="button" className={styles.connect} onClick={connect}>Let’s connect <ArrowRight size={19} aria-hidden="true" /></button>
     </div>
     <img className={`${styles.illustration} ${index === 1 ? styles.advertiserIllustration : ''}`} src={publicAsset(`/image/Home/${card.image}`)} alt="" decoding="async" />
    </article>)}
   </div>
  </div>
  <div className={styles.curveCutout} aria-hidden="true" />
  <div className={styles.curvesFront} aria-hidden="true"><span /><span /></div>
 </section>;
}
