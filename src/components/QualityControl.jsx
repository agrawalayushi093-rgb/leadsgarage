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
  const [active, setActive] = useState(1);
  const activeRef = useRef(1);
  activeRef.current = active;
  const manualSelection = useRef(null);
  const section = useRef(null);
  const viewport = useRef(null);
  const cards = useRef([]);
  useLayoutEffect(() => {
    const element = section.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let wheelFrame = 0;
    let wheelTarget = 0;
    let previousTime = 0;
    let lastWheelY = 0;
    let top = 100;
    let distance = 1;
    let gestureUsed = false;
    let gestureTimer;
    let lockedUntil = 0;
    const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
    const cancel = () => { cancelAnimationFrame(wheelFrame); wheelFrame = 0; previousTime = 0; };
    const update = () => {
      frame = 0;
      if (preference.matches) return;
      if (wheelFrame && Math.abs(scrollY - lastWheelY) > 48) cancel();
      const progress = clamp((top - element.getBoundingClientRect().top) / distance, 0, 1);
      if (manualSelection.current === null) {
        setActive(Math.min(slides.length - 1, 1 + Math.floor(progress * (slides.length - 1))));
      }
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const layout = () => {
      const height = document.documentElement.clientHeight || innerHeight;
      const nav = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 80;
      top = Math.max(68, nav + 12);
      element.style.setProperty('--quality-top', `${top}px`);
      const panelWidth = viewport.current.clientWidth;
      const referenceHeight = panelWidth >= 900 ? panelWidth * .575 : height - top - 20;
      element.style.setProperty('--quality-height', `${Math.max(220, Math.min(height - top - 20, referenceHeight))}px`);
      element.style.setProperty('--quality-travel', `${Math.max(200, height * .55) * slides.length}px`);
      element.style.setProperty('--active-card-width', `${Math.min(panelWidth >= 900 ? panelWidth * .336 : 460, panelWidth - 32)}px`);
      distance = Math.max(1, element.offsetHeight - height + top);
      scroll();
    };
    const tick = time => {
      wheelFrame = 0;
      const delta = Math.min(250, previousTime ? time - previousTime : 16.67);
      previousTime = time;
      const difference = wheelTarget - scrollY;
      window.scrollTo({top: Math.abs(difference) < 1 ? wheelTarget : scrollY + difference * (1 - Math.exp(-delta / 65)), behavior:'instant'});
      lastWheelY = scrollY;
      if (Math.abs(wheelTarget - scrollY) >= 1) wheelFrame = requestAnimationFrame(tick);
      else {
        previousTime = 0;
        if (manualSelection.current !== 0) manualSelection.current = null;
        scroll();
      }
    };
    const wheel = event => {
      if (preference.matches || event.ctrlKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.target instanceof Element && event.target.closest('.site-header, [role="dialog"], input, textarea, select')) return;
      const rect = element.getBoundingClientRect();
      if (rect.top > top + 2 || rect.bottom < innerHeight - 2) { cancel(); return; }
      clearTimeout(gestureTimer);
      gestureTimer = setTimeout(() => { gestureUsed = false; }, 160);
      if (gestureUsed || performance.now() < lockedUntil) { event.preventDefault(); return; }
      gestureUsed = true;
      lockedUntil = performance.now() + 500;
      cancel();
      lastWheelY = scrollY;
      const start = scrollY + rect.top - top;
      const next = activeRef.current + Math.sign(event.deltaY);
      if (next < 0 || next >= slides.length) {
        manualSelection.current = null;
        wheelTarget = next < 0 ? start - 80 : start + distance + 80;
      } else {
        activeRef.current = next;
        manualSelection.current = next;
        setActive(next);
        wheelTarget = start + distance * (next === 0 ? .02 : (next - .5) / (slides.length - 1));
      }
      event.preventDefault();
      if (!wheelFrame) wheelFrame = requestAnimationFrame(tick);
    };
    const releaseManual = () => { manualSelection.current = null; cancel(); };
    const keyboard = event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) releaseManual(); };
    const observer = new ResizeObserver(layout);
    observer.observe(viewport.current);
    const nav = document.querySelector('.site-header');
    if (nav) observer.observe(nav);
    window.addEventListener('scroll', scroll, { passive:true });
    window.addEventListener('wheel', wheel, { passive:false });
    window.addEventListener('resize', layout);
    window.addEventListener('pointerdown', releaseManual, { passive:true });
    window.addEventListener('touchstart', releaseManual, { passive:true });
    window.addEventListener('keydown', keyboard);
    preference.addEventListener('change', layout);
    layout();
    return () => {
      cancel(); clearTimeout(gestureTimer); cancelAnimationFrame(frame); observer.disconnect();
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('wheel', wheel);
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
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const align = time => {
      frame = 0;
      const view = viewport.current;
      const card = cards.current[active];
      if (!view || !card) return;
      if (!started) started = time;
      const offset = view.clientWidth < 640 ? (view.clientWidth - card.offsetWidth) / 2 : view.clientWidth * .18;
      const target = Math.max(0, Math.min(view.scrollWidth - view.clientWidth, card.offsetLeft - offset));
      const elapsed = Math.min(250, previous ? time - previous : 16.67);
      previous = time;
      const difference = target - view.scrollLeft;
      view.scrollTo({left: reduced || Math.abs(difference) < .5 ? target : view.scrollLeft + difference * (1 - Math.exp(-elapsed / 70)), behavior:'instant'});
      // Follow the card's changing width throughout its expansion, then settle.
      if (!reduced && (time - started < 650 || Math.abs(target - view.scrollLeft) > 1)) frame = requestAnimationFrame(align);
    };
    const restart = () => { cancelAnimationFrame(frame); started = 0; previous = 0; frame = requestAnimationFrame(align); };
    restart();
    const observer = new ResizeObserver(restart);
    observer.observe(viewport.current);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [active]);
  const select = useCallback(index => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    manualSelection.current = next === 0 ? 0 : null;
    setActive(next);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setActive(next); return; }
    const element = section.current;
    const top = parseFloat(getComputedStyle(element).getPropertyValue('--quality-top')) || 100;
    const start = scrollY + element.getBoundingClientRect().top - top;
    const distance = element.offsetHeight - innerHeight + top;
    const progress = next === 0 ? .02 : (next - .5) / (slides.length - 1);
    window.scrollTo({top: start + distance * progress, behavior:'smooth'});
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
