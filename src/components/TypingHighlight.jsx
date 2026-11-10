import React, { useEffect, useRef } from 'react';
import styles from './TypingHighlight.module.css';

// Reserve the complete text layout; animate only character visibility.
export default function TypingHighlight({ children }) {
  const text = String(children);
  const root = useRef(null);
  useEffect(() => {
    const element = root.current;
    if (!element?.animate) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let animations = [];
    let observer;
    const stop = () => { observer?.disconnect(); animations.forEach(animation => animation.cancel()); animations = []; };
    const start = () => {
      stop();
      if (motion.matches) return;
      const letters = [...element.querySelectorAll('[data-typing-letter]')];
      const duration = 300 + letters.length * 75 + 1800 + letters.length * 45 + 650;
      animations = letters.map((letter, index) => {
        const enter = (300 + index * 75) / duration;
        const exit = (300 + letters.length * 75 + 1800 + (letters.length - 1 - index) * 45) / duration;
        return letter.animate([{ opacity: 0, offset: 0 }, { opacity: 0, offset: enter }, { opacity: 1, offset: enter + 0.00001 }, { opacity: 1, offset: exit }, { opacity: 0, offset: exit + 0.00001 }, { opacity: 0, offset: 1 }], { duration, iterations: Infinity, easing: 'linear' });
      });
      if (window.IntersectionObserver) {
        observer = new IntersectionObserver(([entry]) => animations.forEach(animation => entry.isIntersecting && !document.hidden ? animation.play() : animation.pause()));
        observer.observe(element);
      }
    };
    start();
    const visibility = () => {
      const rect = element.getBoundingClientRect();
      const visible = !document.hidden && rect.bottom > 0 && rect.top < innerHeight;
      animations.forEach(animation => visible ? animation.play() : animation.pause());
    };
    motion.addEventListener('change', start);
    document.addEventListener('visibilitychange', visibility);
    return () => { stop(); motion.removeEventListener('change', start); document.removeEventListener('visibilitychange', visibility); };
  }, [text]);
  return <span ref={root} className={styles.root}><span className={styles.accessible}>{text}</span><span aria-hidden="true">{text.split(/(\s+)/).map((word, index) => /\s/.test(word) ? word : <span className={styles.word} key={index}>{Array.from(word).map((letter, i) => <span key={i} data-typing-letter>{letter}</span>)}</span>)}</span></span>;
}
