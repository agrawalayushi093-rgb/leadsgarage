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

  const manualSelection = useRef(null);
  const section = useRef(null);
  const viewport = useRef(null);
  const cards = useRef([]);
  const rail = useRef(null);
  const swipeStart = useRef(null);
  const transitioning = useRef(false);
  const previous = useRef(null);
  const trackPosition = useRef(0);
  const pendingScroll = useRef(null);
  const changeActive = useRef(() => {});
  changeActive.current = (index, source = 'navigation') => {
    if (transitioning.current) {
      if (source === 'scroll') pendingScroll.current = index;
      return false;
    }
    if (index === activeRef.current) return false;
    previous.current = cards.current.map(card => ({left:card.offsetLeft, width:card.offsetWidth}));
    transitioning.current = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    activeRef.current = index;
    setActive(index);
    return true;
  };
  useLayoutEffect(() => {
    const element = section.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, top = 100, distance = 1;
    let gestureDirection = 0, lastStep = -Infinity;
    const update = () => {
      frame = 0;
      if (preference.matches || manualSelection.current !== null) return;
      const progress = Math.max(0, Math.min(1, (top - element.getBoundingClientRect().top) / distance));
      const index = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      changeActive.current(index, 'scroll');
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
        changeActive.current(next);
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
      const crossing = direction * Math.min(Math.abs(delta), 240);
      const enteringDown = rect.top > top + 2 && direction > 0 && rect.top - crossing <= top + 2;
      const enteringUp = rect.bottom < innerHeight - 2 && direction < 0 && rect.bottom - crossing >= innerHeight - 2;
      if (!enteringDown && !enteringUp && (rect.top > top + 2 || rect.bottom < innerHeight - 2)) { releaseManual(); return; }
      event.preventDefault();
      if (transitioning.current) return;
      if (gestureDirection && gestureDirection !== direction) lastStep = -Infinity;
      gestureDirection = direction;
      if (enteringDown || enteringUp) {
          const index = enteringDown ? 0 : slides.length - 1;
        manualSelection.current = index; changeActive.current(index);
        lastStep = performance.now();
        const start = scrollY + rect.top - top;
        window.dispatchEvent(new CustomEvent('page-scroll-to',{detail:{top:start + distance * (index + .5) / slides.length}}));
        return;
      }
      // Pace sustained input by the actual card transition, without waiting for wheel silence.
      if (performance.now() - lastStep >= 560) move(direction);
    };
    const keyboard = event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) releaseManual(); };
    const observer = new ResizeObserver(layout);
    observer.observe(viewport.current);
    const nav = document.querySelector('.site-header nav');
    if (nav) observer.observe(nav);
    window.addEventListener('scroll', scroll, { passive:true });
    window.addEventListener('wheel', wheel, { passive:false, capture:true });
    window.addEventListener('resize', layout);
    const pointer = event => { if (!event.target.closest?.('#quality')) releaseManual(); };
    window.addEventListener('pointerdown', pointer, { passive:true });
    window.addEventListener('touchstart', releaseManual, { passive:true });
    window.addEventListener('keydown', keyboard);
    preference.addEventListener('change', layout);
    layout();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('wheel', wheel, true);
      window.removeEventListener('resize', layout);
      window.removeEventListener('pointerdown', pointer);
      window.removeEventListener('touchstart', releaseManual);
      window.removeEventListener('keydown', keyboard);
      preference.removeEventListener('change', layout);
    };
  }, []);
  useLayoutEffect(() => {
    const view = viewport.current;
    const track = rail.current;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let animations = [], disposed = false;
    const align = (animate = false) => {
      const current = cards.current.map(card => ({left:card.offsetLeft, width:card.offsetWidth}));
      const card = current[active];
      const width = view.clientWidth;
      const offset = width < 640 ? (width - card.width) / 2 : width * .18;
      const target = -Math.max(0, Math.min(track.scrollWidth - width, card.left - offset));
      const from = trackPosition.current;
      trackPosition.current = target;
      track.style.transform = `translate3d(${target}px,0,0)`;
      if (!animate || preference.matches || !previous.current) return;
      const options = {duration:560,easing:'cubic-bezier(.22,1,.36,1)'};
      track.style.willChange = 'transform';
      animations.push(track.animate([{transform:`translate3d(${from}px,0,0)`},{transform:`translate3d(${target}px,0,0)`}],options));
      cards.current.forEach((element,index) => {
        const old = previous.current[index], next = current[index];
        if (old.left === next.left && old.width === next.width) return;
        element.style.willChange = 'transform';
        animations.push(element.animate([
          {transform:`translate3d(${old.left-next.left}px,0,0) scaleX(${old.width/next.width})`},
          {transform:'translate3d(0,0,0) scaleX(1)'}
        ],options));
      });
    };
    const settle = () => {
      if (disposed) return;
      transitioning.current = false;
      previous.current = null;
      track.style.willChange = '';
      cards.current.forEach(card => { card.style.willChange = ''; });
      const next = pendingScroll.current;
      pendingScroll.current = null;
      if (next !== null) changeActive.current(next, 'scroll');
    };
    align(true);
    Promise.all(animations.map(animation => animation.finished.catch(() => {}))).then(settle);
    const resize = () => {
      animations.forEach(animation => animation.cancel()); animations = [];
      align(); settle();
    };
    const observer = new ResizeObserver(() => {
      // Only viewport resizing affects geometry; never measure on animation frames.
      if (view.clientWidth !== lastWidth) { lastWidth = view.clientWidth; resize(); }
    });
    let lastWidth = view.clientWidth;
    observer.observe(view);
    preference.addEventListener('change',resize);
    return () => {
      disposed = true; animations.forEach(animation => animation.cancel()); observer.disconnect();
      preference.removeEventListener('change',resize);
    };
  }, [active]);
  useLayoutEffect(() => {
    const view = viewport.current;
    let disposed = false;
    // Measure all expanded copies once per breakpoint/font resize, not while sliding.
    const measure = () => {
      const clone = rail.current.cloneNode(true);
      clone.removeAttribute('style');
      clone.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;height:auto;min-height:0;transform:none';
      clone.setAttribute('aria-hidden','true'); clone.inert = true;
      clone.querySelectorAll('article').forEach(card => {
        card.classList.add(styles.active);
        card.style.cssText = 'min-height:0;height:auto;transform:none';
        card.querySelectorAll('[hidden]').forEach(item => item.removeAttribute('hidden'));
      });
      view.appendChild(clone);
      const height = Math.ceil(clone.getBoundingClientRect().height);
      clone.remove();
      view.style.setProperty('--result-row-height', `${height}px`);
    };
    let frame = 0;
    const resize = () => { if (!disposed) { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); } };
    const observer = new ResizeObserver(resize); observer.observe(view);
    document.fonts?.ready.then(resize);
    measure();
    return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);
  const select = useCallback(index => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    if (!changeActive.current(next)) return;
    manualSelection.current = next;
    pendingScroll.current = null;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
      <div ref={viewport} className={styles.viewport} role="group" aria-roledescription="carousel" aria-label="Results cards"
        onPointerDown={event => { if (event.pointerType === 'touch') swipeStart.current = {x:event.clientX,y:event.clientY}; }}
        onPointerCancel={() => { swipeStart.current = null; }}
        onPointerUp={event => {
          const start = swipeStart.current; swipeStart.current = null;
          if (!start) return;
          const dx = event.clientX - start.x, dy = event.clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) select(activeRef.current + (dx < 0 ? 1 : -1));
        }} onKeyDown={event => {
          if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
          event.preventDefault();
          const next = Math.max(0, Math.min(slides.length - 1, activeRef.current + (event.key === 'ArrowRight' ? 1 : -1)));
          select(next);
          if (activeRef.current === next) cards.current[next].querySelector('button').focus({preventScroll:true});
        }}>
        <div ref={rail} className={styles.rail}>
          {slides.map((slide, index) => <article key={slide.title} ref={el => cards.current[index] = el} className={`${styles.card} ${index === active ? styles.active : ''}`} aria-current={index === active ? 'step' : undefined}>
            <img className={styles.phone} src={publicAsset(`/image/Home/${slide.image}`)} decoding="async" aria-hidden={index !== active} alt={index === active ? "Campaign verification and performance dashboard" : ""} />
            <button type="button" className={styles.cardCopy} tabIndex={index === active ? 0 : -1} onClick={() => select(index)} aria-label={`Show ${slide.title}`}>
              <span hidden={index !== active} className={styles.label}>{slide.label}</span>
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
