import { publicAsset } from '../utils/publicAsset';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './QualityControl.module.css';

const slides = [
  { id: 0, src: publicAsset("/image/Home/Group 39995.png"), alt: 'Propensity Score Phone Screen' },
  { id: 1, src: publicAsset("/image/Home/Group 39999.png"), alt: 'Verified 100% Clean Phone Screen' },
  { id: 2, src: publicAsset("/image/Home/Group 39996.png"), alt: 'Propensity Score Phone Screen Right' },
];

export default function QualityControl() {
  const trackRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;
      const top = parseFloat(getComputedStyle(track.firstElementChild).top) || 110;
      const distance = Math.max(0, top - track.getBoundingClientRect().top);
      const step = 220;
      setActiveSlide(Math.min(slides.length - 1, Math.floor(distance / step)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <section id="quality" className={`pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#FDFBF7] relative w-full ${styles.section}`}>
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Why We Deliver Better Results</h2>
        <div className={styles.copy}>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Quality Control</h3>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">Premium placements with every impression protected from bots, unsafe content, and domain-arbitrage traffic.</p>
        </div>
      </div>
      <div ref={trackRef} className={styles.track}>
      <div id="quality-slide-display" className={styles.deck} aria-label={`Card slide ${activeSlide + 1} of ${slides.length}`}>
        {slides.map((slide, index) => {
          const offset = index - activeSlide;
          const distance = Math.abs(offset);
          return <motion.div key={slide.id} className={styles.phone} initial={false}
            animate={{ x: `${offset * 72}%`, y: `${distance * 7}%`, scale: 1 - distance * .11,
              rotateY: offset === 0 ? 0 : -Math.sign(offset) * 12, rotateZ: offset * 5,
              opacity: offset === 0 ? 1 : Math.max(.25, .72 - distance * .13), filter: `blur(${distance * 1.2}px)` }}
            style={{ zIndex: 10 - distance }}
            transition={{ duration: reducedMotion ? 0 : .85, ease: [.22, 1, .36, 1] }}>
            <img src={slide.src} alt={slide.alt} draggable="false" />
          </motion.div>;
        })}
      </div>
      </div>
    </div>
  </section>;
}


