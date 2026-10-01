import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Allow time to read each slide; respect reduced-motion preferences.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      id: 0,
      bgImage: '/image/Home/herosection/blue.png',
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
      leftCardImage: '/image/Home/herosection/image 95.png',
      rightCardImage: '/image/Home/herosection/image 97.png',
      topLeftGraphic: null,
      topRightGraphic: '/image/Home/herosection/image 82.png',
      bottomLeftGraphic: '/image/Home/herosection/image 115.png',
      bottomRightGraphic: null,
      showTopBadge: true
    },
    {
      id: 1,
      bgImage: '/image/Home/herosection/purple.png',
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
      leftCardImage: '/image/Home/herosection/Group 40114.png',
      rightCardImage: '/image/Home/herosection/Group 40112.png',
      topLeftGraphic: '/image/Home/herosection/image 126.png',
      topRightGraphic: '/image/Home/herosection/image 118.png',
      bottomLeftGraphic: null,
      bottomRightGraphic: '/image/Home/herosection/image 127.png',
      showTopBadge: false
    },
    {
      id: 2,
      bgImage: '/image/Home/herosection/lblue.png',
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
      leftCardImage: '/image/Home/herosection/image 86.png',
      rightCardImage: '/image/Home/herosection/Group 40102.png',
      topLeftGraphic: '/image/Home/herosection/image 124.png',
      topRightGraphic: null,
      bottomLeftGraphic: '/image/Home/herosection/image 125.png',
      bottomRightGraphic: '/image/Home/herosection/image 120.png',
      showTopBadge: false
    },
    {
      id: 3,
      bgImage: '/image/Home/herosection/green.png',
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
      leftCardImage: '/image/Home/herosection/image 86.png',
      rightCardImage: '/image/Home/herosection/Group 40102.png',
      topLeftGraphic: '/image/Home/herosection/image 121.png',
      topRightGraphic: '/image/Home/herosection/image 122.png',
      bottomLeftGraphic: null,
      bottomRightGraphic: '/image/Home/herosection/image 123.png',
      showTopBadge: false
    },
  ];

  const activeSlide = slides[currentSlide];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.frame}>
        <div
          className={styles.panel}
          data-slide={currentSlide}
          style={{ backgroundImage: `url("${activeSlide.bgImage}")` }}
        >
          {activeSlide.showTopBadge && (
            <a href="#audience" className={styles.badge}>
              Connect with our Specialist <ArrowRight aria-hidden="true" />
            </a>
          )}

          <div className={styles.indicator} aria-label="Hero slides">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={styles.dot}
                aria-label={`Slide ${idx + 1}`}
                aria-pressed={currentSlide === idx}
              />
            ))}
          </div>

          {[
            ['topLeftGraphic', styles.topLeft],
            ['topRightGraphic', styles.topRight],
            ['bottomLeftGraphic', styles.bottomLeft],
            ['bottomRightGraphic', styles.bottomRight],
          ].map(([asset, position]) => activeSlide[asset] && (
            <img key={asset} src={activeSlide[asset]} alt=""
              className={`${styles.decoration} ${position}`} />
          ))}

          <img src={activeSlide.leftCardImage} alt="Left Showcase Card"
            className={`${styles.card} ${styles.leftCard}`} />
          <img src={activeSlide.rightCardImage} alt="Right Showcase Card"
            className={`${styles.card} ${styles.rightCard}`} />

          <div className={styles.content}>
            <h1 className={styles.title}>
              {activeSlide.titlePrefix}<br />
              <span className={styles.highlight}>{activeSlide.titleHighlight}</span>
            </h1>
            <p className={styles.subtitle}>{activeSlide.subtitle}</p>
          </div>

          <div className={styles.stats}>
            {activeSlide.stats.map((stat) => (
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

