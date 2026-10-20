import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCheck, SlidersHorizontal, ChartLine, Blocks, ChartPie } from 'lucide-react';
import { publicAsset } from '../utils/publicAsset';
import styles from './QualityControl.module.css';

const slides = [
  { title: 'Quality Control', label: 'Protected impressions', description: 'Premium placements with every impression protected from bots, unsafe content, and domain-arbitrage traffic.', icon: CheckCheck, image: 'Group 39999.png' },
  { title: 'Real-Time Optimisation', label: 'Always improving', description: 'We continuously fine-tune targeting and campaigns to reach the right customers and improve every conversion.', icon: SlidersHorizontal, image: 'Group 39999.png' },
  { title: 'Data-Driven Insights', label: 'Clearer decisions', description: 'Turn campaign data into actionable insights, understand your audience, and discover new opportunities for growth.', icon: ChartLine, image: 'Group 39995.png' },
  { title: 'Omnichannel Acquisition', label: 'Connected channels', description: 'Connect with customers across the channels they use, with a consistent strategy built around your business.', icon: Blocks, image: 'Group 39996.png' },
  { title: 'Measurable Growth', label: 'Results that matter', description: 'Track performance from the first interaction to conversion, with clear reporting focused on your business goals.', icon: ChartPie, image: 'Group 39995.png' },
];

export default function QualityControl() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;
  const manualSelection = useRef(null);
  const section = useRef(null);
  const viewport = useRef(null);
  const cards = useRef([]);
  useLayoutEffect(() => {
    const element = section.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, top = 100, distance = 1;
    let gestureUsed = false, gestureTimer, gestureDirection = 0, lastStep = 0;
    const update = () => {
      frame = 0;
      if (preference.matches || manualSelection.current !== null) return;
      const progress = Math.max(0, Math.min(1, (top - element.getBoundingClientRect().top) / distance));
      const index = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      setActive(index);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const layout = () => {
      const height = document.documentElement.clientHeight || innerHeight;
      const nav = document.querySelector('.site-header nav')?.getBoundingClientRect().bottom || 80;
      top = Math.max(68, nav + 12);
      element.style.setProperty('--quality-top', `${top}px`);
      const panelWidth = viewport.current.clientWidth;
      const referenceHeight = panelWidth >= 900 ? panelWidth * .575 : height - top - 20;
      element.style.setProperty('--quality-height', `${Math.max(220, Math.min(height - top - 20, referenceHeight))}px`);
      element.style.setProperty('--quality-travel', `${Math.max(160, height * .36) * (slides.length - 1)}px`);
      element.style.setProperty('--active-card-width', `${Math.min(panelWidth >= 900 ? panelWidth * .336 : 460, panelWidth - 32)}px`);
      distance = Math.max(1, element.offsetHeight - height + top);
      scroll();
    };
    const releaseManual = () => {
      manualSelection.current = null;
    };
    const move = direction => {
      lastStep = performance.now();
      const next = activeRef.current + direction;
      const start = scrollY + element.getBoundingClientRect().top - top;
      let destination;
      if (next < 0 || next >= slides.length) {
        releaseManual();
        destination = next < 0 ? start - 80 : start + distance + 80;
      } else {
        manualSelection.current = next;
        activeRef.current = next;
        setActive(next);
        destination = start + distance * (next + .5) / slides.length;
      }
      window.dispatchEvent(new CustomEvent('page-scroll-to',{detail:{top:destination}}));
    };
    const wheel = event => {
      if (preference.matches || !matchMedia('(hover: hover) and (pointer: fine)').matches || event.ctrlKey || event.metaKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.target instanceof Element && event.target.closest('.site-header,[role="dialog"],input,textarea,select,[data-native-scroll]')) return;
      const rect = element.getBoundingClientRect();
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
      const direction = Math.sign(delta);
      const enteringDown = rect.top > top + 2 && direction > 0 && rect.top - delta <= top + 2;
      const enteringUp = rect.bottom < innerHeight - 2 && direction < 0 && rect.bottom - delta >= innerHeight - 2;
      if (!enteringDown && !enteringUp && (rect.top > top + 2 || rect.bottom < innerHeight - 2)) { releaseManual(); return; }
      event.preventDefault();
      clearTimeout(gestureTimer);
      gestureTimer = setTimeout(() => { gestureUsed = false; }, 240);
      if (gestureUsed && gestureDirection === direction) return;
      if (gestureDirection && gestureDirection !== direction) lastStep = 0;
      gestureUsed = true;
      gestureDirection = direction;
      if (enteringDown || enteringUp) {
          const index = enteringDown ? 0 : slides.length - 1;
        manualSelection.current = index; activeRef.current = index; setActive(index);
        lastStep = performance.now();
        const start = scrollY + rect.top - top;
        window.dispatchEvent(new CustomEvent('page-scroll-to',{detail:{top:start + distance * (index + .5) / slides.length}}));
        return;
      }
      // Ignore momentum during transitions instead of replaying queued steps.
      if (performance.now() - lastStep >= 700) move(direction);
    };
    const keyboard = event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) releaseManual(); };
    const observer = new ResizeObserver(layout);
    observer.observe(viewport.current);
    const nav = document.querySelector('.site-header nav');
    if (nav) observer.observe(nav);
    window.addEventListener('scroll', scroll, { passive:true });
    window.addEventListener('wheel', wheel, { passive:false, capture:true });
    window.addEventListener('resize', layout);
    window.addEventListener('pointerdown', releaseManual, { passive:true });
    window.addEventListener('touchstart', releaseManual, { passive:true });
    window.addEventListener('keydown', keyboard);
    preference.addEventListener('change', layout);
    layout();
    return () => {
      cancelAnimationFrame(frame); clearTimeout(gestureTimer); observer.disconnect();
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('wheel', wheel, true);
      window.removeEventListener('resize', layout);
      window.removeEventListener('pointerdown', releaseManual);
      window.removeEventListener('touchstart', releaseManual);
      window.removeEventListener('keydown', keyboard);
      preference.removeEventListener('change', layout);
    };
  }, []);
  useLayoutEffect(() => {
    let frame = 0;
    let started = 0;
    let previous = 0;
    let position = null;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const align = time => {
      frame = 0;
      const view = viewport.current;
      const card = cards.current[active];
      if (!view || !card) return;
      if (!started) started = time;
      if (position === null) position = view.scrollLeft;
      const offset = view.clientWidth < 640 ? (view.clientWidth - card.offsetWidth) / 2 : view.clientWidth * .18;
      const target = Math.max(0, Math.min(view.scrollWidth - view.clientWidth, card.offsetLeft - offset));
      const elapsed = Math.min(250, previous ? time - previous : 16.67);
      previous = time;
      const difference = target - position;
      position = reduced || Math.abs(difference) < .5 ? target : position + difference * (1 - Math.exp(-elapsed / 70));
      view.scrollTo({left:position, behavior:'instant'});
      // Follow the card's changing width throughout its expansion, then settle.
      if (!reduced && (time - started < 650 || position !== target)) frame = requestAnimationFrame(align);
    };
    const restart = () => { cancelAnimationFrame(frame); started = 0; previous = 0; position = null; frame = requestAnimationFrame(align); };
    restart();
    const observer = new ResizeObserver(restart);
    observer.observe(viewport.current);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [active]);
  const select = useCallback(index => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    manualSelection.current = next;
    setActive(next);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setActive(next); return; }
    const element = section.current;
    const top = parseFloat(getComputedStyle(element).getPropertyValue('--quality-top')) || 100;
    const start = scrollY + element.getBoundingClientRect().top - top;
    const distance = element.offsetHeight - innerHeight + top;
    const progress = (next + .5) / slides.length;
    window.dispatchEvent(new CustomEvent('page-scroll-to', {detail:{top:start + distance * progress}}));
  }, []);
  return <section ref={section} id="quality" className={styles.section} aria-labelledby="quality-title">
    <div className={styles.panel}>
      <header className={styles.header}>
        <div><span className={styles.badge}>More Quality. More Conversions.</span>
          <h2 id="quality-title">Why We Deliver Better Results</h2></div>
        <div className={styles.controls}>
          <button type="button" aria-label="Previous result" disabled={active === 0} onClick={() => select(active - 1)}><ArrowLeft size={23} /></button>
          <button type="button" aria-label="Next result" disabled={active === slides.length - 1} onClick={() => select(active + 1)}><ArrowRight size={23} /></button>
        </div>
      </header>
      <div ref={viewport} className={styles.viewport} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); select(active + (event.key === 'ArrowRight' ? 1 : -1)); } }}>
        <div className={styles.rail}>
          {slides.map((slide, index) => <article key={slide.title} ref={el => cards.current[index] = el} className={`${styles.card} ${index === active ? styles.active : ''}`} aria-current={index === active ? 'step' : undefined}>
            {index === active && <img className={styles.phone} src={publicAsset(`/image/Home/${slide.image}`)} decoding="async" alt="Campaign verification and performance dashboard" />}
            <button type="button" className={styles.cardCopy} onClick={() => select(index)} aria-label={`Show ${slide.title}`}>
              {index === active && <span className={styles.label}>{slide.label}</span>}
              <h3>{slide.title}</h3><p>{slide.description}</p>
            </button>
          </article>)}
        </div>
      </div>
      <nav className={styles.progress} aria-label="Results slides" style={{ '--progress': `${active / (slides.length - 1) * 100}%` }}>
        {slides.map((slide, index) => { const Icon = slide.icon; return <button key={slide.title} type="button" aria-label={`Show ${slide.title}`} aria-current={active === index ? 'step' : undefined} className={index <= active ? styles.completed : ''} onClick={() => select(index)}><Icon size={23} /></button>; })}
      </nav>
    </div>
  </section>;
}
