import { publicAsset } from '../utils/publicAsset';
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ enabled = true }) {
  const [isMacDesktop] = useState(() => {
    if (typeof navigator === 'undefined') return false;
    const platform = navigator.userAgentData?.platform || navigator.platform || '';
    // iPadOS also reports MacIntel; keep its existing touch layout.
    return /mac/i.test(platform) && navigator.maxTouchPoints <= 1;
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const heroRef = useRef(null);
  const progressRef = useRef(null);
  const elapsedRef = useRef(0);
  const progressSlideRef = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // One clock drives both the visible fill and the slide change, including pauses.
  useEffect(() => {
    if (progressSlideRef.current !== currentSlide) {
      elapsedRef.current = 0;
      progressSlideRef.current = currentSlide;
    }
    const paint = (progress) => {
      if (progressRef.current) progressRef.current.style.transform = `scaleY(${progress})`;
    };
    paint(reduceMotion ? 1 : elapsedRef.current / 4000);
    if (!enabled || reduceMotion || focused || !visible) return;
    let frame;
    let previous = performance.now();
    const resetClock = () => { previous = performance.now(); };
    document.addEventListener('visibilitychange', resetClock);
    const tick = (now) => {
      if (!document.hidden) elapsedRef.current += now - previous;
      previous = now;
      paint(Math.min(1, elapsedRef.current / 4000));
      if (elapsedRef.current >= 4000) {
        elapsedRef.current = 0;
        setCurrentSlide((prev) => (prev + 1) % 4);
      } else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('visibilitychange', resetClock);
    };
  }, [currentSlide, reduceMotion, focused, visible, enabled]);

  const slides = [
    {
      id: 0,
      bgImage: publicAsset("/image/Home/herosection/blue.png"),
      bgColor: 'bg-[#1D4ED8]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Grow Business',
      titleHighlightColor: 'text-[#9DFFB2]', // Mint Green
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
      ],
      leftCardImage: publicAsset("/image/Home/herosection/image 95.png"),
      rightCardImage: publicAsset("/image/Home/herosection/image 96.png"),
      topLeftGraphic: null,
      topRightGraphic: publicAsset("/image/Home/herosection/image 82.png"),
      bottomLeftGraphic: publicAsset("/image/Home/herosection/image 115.png"),
      bottomRightGraphic: null,
      showTopBadge: true
    },
    {
      id: 1,
      bgImage: publicAsset("/image/Home/herosection/purple.png"),
      bgColor: 'bg-[#7C3AED]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Scale with us',
      titleHighlightColor: 'text-[#FEF08A]', // Yellow
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
        { number: '95%', label: 'Client Satisfaction' },
      ],
      leftCardImage: publicAsset("/image/Home/herosection/Group 40127.png"),
      rightCardImage: publicAsset("/image/Home/herosection/Group 40128.png"),
      topLeftGraphic: publicAsset("/image/Home/herosection/image 126.png"),
      topRightGraphic: null,
      bottomLeftGraphic: publicAsset("/image/Home/herosection/image 118.png"),
      bottomRightGraphic: publicAsset("/image/Home/herosection/image 127.png"),
      showTopBadge: false
    },
    {
      id: 2,
      bgImage: publicAsset("/image/Home/herosection/lblue.png"),
      bgColor: 'bg-[#06B6D4]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Expand',
      titleHighlightColor: 'text-white',
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
        { number: '95%', label: 'Client Satisfaction' },
      ],
      leftCardImage: publicAsset("/image/Home/herosection/image 99.png"),
      rightCardImage: publicAsset("/image/Home/herosection/image 72.png"),
      topLeftGraphic: publicAsset("/image/Home/herosection/image 124.png"),
      topRightGraphic: null,
      bottomLeftGraphic: publicAsset("/image/Home/herosection/image 125.png"),
      bottomRightGraphic: publicAsset("/image/Home/herosection/image 120.png"),
      showTopBadge: false
    },
    {
      id: 3,
      bgImage: publicAsset("/image/Home/herosection/green.png"),
      bgColor: 'bg-[#10B981]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Monetize',
      titleHighlightColor: 'text-white',
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
        { number: '95%', label: 'Client Satisfaction' },
      ],
      leftCardImage: publicAsset("/image/Home/herosection/image 99.png"),
      rightCardImage: publicAsset("/image/Home/herosection/image 72.png"),
      topLeftGraphic: publicAsset("/image/Home/herosection/image 121.png"),
      topRightGraphic: publicAsset("/image/Home/herosection/image 122.png"),
      bottomLeftGraphic: null,
      bottomRightGraphic: publicAsset("/image/Home/herosection/image 123.png"),
      showTopBadge: false
    },
  ];

  const activeSlide = slides[currentSlide];
  const slideTransition = { duration: reduceMotion ? 0 : 0.55, ease: [0.4, 0, 0.2, 1] };

  useEffect(() => {
    const assets = slides.flatMap((slide) => [slide.bgImage, slide.leftCardImage, slide.rightCardImage,
      slide.topLeftGraphic, slide.topRightGraphic, slide.bottomLeftGraphic, slide.bottomRightGraphic]);
    [...new Set(assets.filter(Boolean))].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <section ref={heroRef} id="hero" className={styles.hero} data-mac-desktop={isMacDesktop ? 'true' : undefined}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className={styles.frame}>
        <div
          className={styles.panel}
          data-slide={currentSlide}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={styles.background} data-slide={slide.id}
              data-active={currentSlide === slide.id} aria-hidden="true"
              style={{ backgroundImage: `url("${slide.bgImage}")` }} />
          ))}
            <a href="#audience" className={styles.badge}>
              Connect with our Specialist <ArrowRight aria-hidden="true" />
            </a>

          <div className={styles.indicator} aria-label="Hero slides">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  elapsedRef.current = 0;
                  if (progressRef.current) progressRef.current.style.transform = 'scaleY(0)';
                  setCurrentSlide(idx);
                }}
                className={styles.dot}
                aria-label={`Slide ${idx + 1}`}
                aria-pressed={currentSlide === idx}
              >
                {currentSlide === idx && <span ref={progressRef} className={styles.progressFill}
                  aria-hidden="true" />}
              </button>
            ))}
          </div>

          <AnimatePresence initial={false}>
            <motion.div key={currentSlide} className={styles.scene} data-slide={currentSlide}
              initial={false} animate={{ opacity: 1 }} exit={{ opacity: 1 }}
              aria-hidden="true">
          {[
            ['topLeftGraphic', styles.topLeft, '-65%', '-65%'],
            ['topRightGraphic', styles.topRight, '65%', '-65%'],
            ['bottomLeftGraphic', styles.bottomLeft, '-65%', '65%'],
            ['bottomRightGraphic', styles.bottomRight, '65%', '65%'],
          ].map(([asset, position, x, y]) => activeSlide[asset] && (
            <motion.div key={asset} className={`${styles.decoration} ${position}`}
              initial={{ opacity: 0, x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y, filter: reduceMotion ? 'blur(0px)' : 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y, filter: reduceMotion ? 'blur(0px)' : 'blur(4px)' }}
              transition={slideTransition}>
              <img src={activeSlide[asset]} alt="" className={styles.floatArtwork} />
            </motion.div>
          ))}

            </motion.div>
          </AnimatePresence>

          {[['leftCardImage', styles.leftCard], ['rightCardImage', styles.rightCard]].map(([asset, position]) => (
            <div key={asset} className={`${styles.card} ${position}`} aria-hidden="true">
              <AnimatePresence initial={false}>
                <motion.div key={activeSlide[asset]} className={styles.cardImage}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={slideTransition}>
                  <img src={activeSlide[asset]} alt="" />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}

          <div className={styles.content}>
            <h1 className={styles.title}>
              {activeSlide.titlePrefix}<br />
              <span className={styles.highlightWindow}>
                <AnimatePresence initial={false} mode="wait">
                  <motion.span key={currentSlide} className={styles.highlight}
                    style={{ color: ['#9dffb2', '#ffe76a', '#083d68', '#fff1a3'][currentSlide] }}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : '35%', filter: reduceMotion ? 'blur(0px)' : 'blur(2px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : '-35%', filter: reduceMotion ? 'blur(0px)' : 'blur(2px)',
                      transition: { duration: reduceMotion ? 0 : 0.18, ease: 'easeIn' } }}
                    transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    {activeSlide.titleHighlight}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className={styles.subtitle}>{activeSlide.subtitle}</p>
          </div>

          <div className={styles.stats}>
            {slides[0].stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.number}>{stat.number}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <a href="#services" className={styles.start}>Get Started</a>
          <a href="#services" className={styles.explore}>
            Explore <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}




