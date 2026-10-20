import { useEffect } from 'react';

// One wheel animator for the page. Touch, keyboard, nested panels and reduced motion stay native.
export default function usePageScroll() {
 useEffect(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0, target = scrollY, position = scrollY, lastPosition = scrollY, previousTime = 0, damping = 95;
  const cancel = () => { cancelAnimationFrame(frame); frame = 0; previousTime = 0; };
  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - innerHeight);
  const clamp = value => Math.max(0, Math.min(maxScroll(), value));
  const animate = time => {
   frame = 0;
   const elapsed = Math.min(40, previousTime ? time - previousTime : 16.67);
   previousTime = time;
   target = clamp(target);
   const difference = target - position;
   position = Math.abs(difference) < .5 ? target : position + difference * (1 - Math.exp(-elapsed / damping));
   scrollTo({ top:position, behavior:'instant' });
   lastPosition = scrollY;
   if (position !== target) frame = requestAnimationFrame(animate);
   else previousTime = 0;
  };
  const hasNativePanel = (element, delta) => {
   for (let node = element; node instanceof Element && node !== document.body; node = node.parentElement) {
    if (node.matches('input,textarea,select,[role="dialog"],[data-native-scroll]')) return true;
    const style = getComputedStyle(node);
    if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 2) {
     if (delta < 0 && node.scrollTop > 0 || delta > 0 && node.scrollTop + node.clientHeight < node.scrollHeight - 1) return true;
    }
   }
   return false;
  };
  const wheel = event => {
   if (event.defaultPrevented) return;
   if (event.ctrlKey || event.metaKey || reduced.matches || !fine.matches || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
   if (getComputedStyle(document.body).overflow === 'hidden' || getComputedStyle(document.documentElement).overflow === 'hidden') { cancel(); return; }
   if (hasNativePanel(event.target, event.deltaY)) { cancel(); return; }
   damping = 95;
   const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
   if (!frame) { target = scrollY; position = scrollY; lastPosition = scrollY; }
   // Bound the unconsumed wheel distance, so momentum cannot queue whole sections.
   const direction = Math.sign(delta);
   if (Math.sign(target - position) !== direction) target = position;
   const step = Math.sign(delta) * Math.min(Math.abs(delta), 160);
   const pendingLimit = Math.min(240, innerHeight * .3);
   const destination = clamp(Math.max(position - pendingLimit, Math.min(position + pendingLimit, target + step)));
   if (destination === target && !frame) return;
   target = destination;
   event.preventDefault();
   if (!frame) frame = requestAnimationFrame(animate);
  };
  const goTo = event => {
   if (!Number.isFinite(event.detail?.top)) return;
   cancel(); target = clamp(event.detail.top); position = scrollY; lastPosition = scrollY; damping = 110;
   if (reduced.matches) scrollTo({top:target,behavior:'instant'});
   else frame = requestAnimationFrame(animate);
  };
  const scroll = () => { if (frame && Math.abs(scrollY - lastPosition) > 48) cancel(); };
  const key = event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) cancel(); };
  const header = document.querySelector('.site-header nav');
  const measure = () => {
   const bottom = header?.getBoundingClientRect().bottom || 80;
   document.documentElement.style.setProperty('--nav-offset', `${Math.ceil(bottom + 12)}px`);
  };
  const resize = () => { cancel(); measure(); };
  const observer = new ResizeObserver(measure);
  if (header) observer.observe(header);
  measure();
  window.addEventListener('wheel',wheel,{passive:false});
  window.addEventListener('page-scroll-to',goTo);
  window.addEventListener('scroll',scroll,{passive:true});
  window.addEventListener('pointerdown',cancel,{passive:true});
  window.addEventListener('touchstart',cancel,{passive:true});
  window.addEventListener('keydown',key);
  window.addEventListener('hashchange',cancel);
  window.addEventListener('resize',resize);
  reduced.addEventListener('change',cancel);
  return () => {
   cancel(); observer.disconnect();
   window.removeEventListener('wheel',wheel); window.removeEventListener('scroll',scroll);
   window.removeEventListener('page-scroll-to',goTo);
   window.removeEventListener('pointerdown',cancel); window.removeEventListener('touchstart',cancel);
   window.removeEventListener('keydown',key); window.removeEventListener('hashchange',cancel);
   window.removeEventListener('resize',resize); reduced.removeEventListener('change',cancel);
  };
 }, []);
}

