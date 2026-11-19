import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './MobileCardCarousel.module.css';

export default function MobileCardCarousel({ children, className = '', ...props }) {
 const cards = React.Children.toArray(children);
 const [index, setIndex] = useState(0);
 const swipe = useRef(null);
 const move = direction => setIndex(current => Math.max(0, Math.min(cards.length - 1, current + direction)));
 return <>
  <div {...props} className={`${className} ${styles.rail}`} data-native-scroll
   onPointerDown={event => { if (event.pointerType === 'touch') swipe.current = { x:event.clientX, y:event.clientY }; }}
   onPointerCancel={() => { swipe.current = null; }}
   onPointerUp={event => {
    const start = swipe.current; swipe.current = null;
    if (!start || !matchMedia('(max-width:767px)').matches) return;
    const dx = event.clientX - start.x, dy = event.clientY - start.y;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
   }}>
   {cards.map((card, i) => React.cloneElement(card, { 'data-mobile-card':i === index ? 'active' : 'inactive' }))}
  </div>
  <nav className={styles.controls} aria-label={`${props['aria-label'] || 'Cards'} navigation`}>
   <button type="button" aria-label="Previous card" disabled={index === 0} onClick={() => move(-1)}><ArrowLeft size={20} /></button>
   <span aria-live="polite">{String(index + 1).padStart(2,'0')} / {String(cards.length).padStart(2,'0')}</span>
   <button type="button" aria-label="Next card" disabled={index === cards.length - 1} onClick={() => move(1)}><ArrowRight size={20} /></button>
  </nav>
 </>;
}
