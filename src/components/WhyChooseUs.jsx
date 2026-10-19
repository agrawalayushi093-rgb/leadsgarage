import { publicAsset } from '../utils/publicAsset';
import React, { useEffect, useRef } from 'react';


import styles from './WhyChooseUs.module.css';



export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const cards = [
    {
      id: 'call-transfers',
      title: 'Instant Call Transfers',
      description: 'Connect callers instantly with your agents and close more deals, faster.',
      image: publicAsset("/image/Home/section3/Group 40062.png")
    },
    {
      id: 'lead-delivery',
      title: 'Real-Time Lead Delivery',
      description: "We deliver leads the moment they're generated, so you never miss an opportunity.",
      image: publicAsset("/image/Home/section3/Group 39954.png")
    },
    {
      id: 'link-out',
      title: 'High-Intent Link-Out Traffic',
      description: "Drive qualified, high-intent traffic that's ready to take action.",
      image: publicAsset("/image/Home/section3/Group 40094.png")
    },
    {
      id: 'smart-list',
      title: 'Smart List Management',
      description: 'Clean, verified, and well-managed lists that improve reach and deliverability.',
      image: publicAsset("/image/Home/section3/Group 40063.png")
    },
    {
      id: 'geo-targeted',
      title: 'Geo-Targeted Customer Acquisition',
      description: 'Reach the right audience in the right location for higher conversions and better ROI.',
      image: publicAsset("/image/Home/section3/Group 39956.png")
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const deck = cardsWrapperRef.current;
    const cards = [...cardRefs.current];
    const flows = cards.map(card => card.parentElement);
    const surfaces = cards.map(card => card.querySelector('.solution-surface'));
    const copies = cards.map(card => card.querySelector('.solution-copy'));
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const transitions = cards.length - 1;
    const duration = transitions + .85;
    let frame = 0;
    let layoutFrame = 0;
    let current = 0;
    let target = 0;
    let previousTime = 0;
    let metrics = { nav: 90, strip: 24, travel: 1, incoming: 1000, deckHeight: 820 };
    let disposed = false;

    const paint = phase => {
      const closing = clamp((phase - transitions) / .5, 0, 1);
      flows.forEach((flow, index) => {
        const arrival = index === 0 ? 1 : clamp(phase - index + 1, 0, 1);
        const y = (1 - arrival) * metrics.incoming
          + index * metrics.strip * arrival * (1 - closing);
        flow.style.transform = `translate3d(0, ${y.toFixed(3)}px, 0)`;
        const scale = 1 - clamp(phase - index, 0, transitions - index) * .025;
        surfaces[index].style.transform = `scale(${scale.toFixed(5)})`;
        copies[index].style.removeProperty('transform');
      });
    };
    const animate = time => {
      frame = 0;
      if (disposed || preference.matches) return;
      const delta = Math.min(250, previousTime ? time - previousTime : 16.67);
      previousTime = time;
      // Time-based damping feels the same on 60Hz and high-refresh displays.
      current += (target - current) * (1 - Math.exp(-delta / 40));
      if (Math.abs(target - current) < .0005) current = target;
      paint(current);
      if (current !== target) frame = requestAnimationFrame(animate);
      else previousTime = 0;
    };
    const update = () => {
      if (preference.matches || disposed) return;
      target = clamp((metrics.nav - section.getBoundingClientRect().top) / metrics.travel, 0, 1) * duration;
      // Large scrollbar/touch jumps should catch up without a long animation tail.
      if (Math.abs(target - current) > 1.25) current = target - Math.sign(target - current) * .3;
      if (!frame) frame = requestAnimationFrame(animate);
    };
    const layout = () => {
      layoutFrame = 0;
      if (disposed) return;
      if (preference.matches) {
        flows.forEach(flow => flow.style.removeProperty('transform'));
        surfaces.forEach(surface => surface.style.removeProperty('transform'));
        copies.forEach(copy => copy.style.removeProperty('transform'));
        return;
      }
      const height = document.documentElement.clientHeight || innerHeight;
      const navbarBottom = document.querySelector('.site-header nav')?.getBoundingClientRect().bottom || 0;
      const nav = Math.min(height * .3, Math.max(clamp(innerWidth * .07, 68, 110), navbarBottom + 12));
      const strip = clamp(height * .028, 12, 30);
      const travel = Math.max(240, height * .62) * transitions + Math.max(160, height * .2);
      section.style.setProperty('--heading-top', `${nav}px`);
      section.style.setProperty('--frame-height', `${height}px`);
      section.style.setProperty('--stack-reserve', `${strip * transitions}px`);
      section.style.setProperty('--stack-travel', `${travel}px`);
      const availableHeight = Math.max(80, deck.clientHeight - strip * transitions);
      const cardWidth = innerWidth < 640 ? deck.clientWidth : Math.min(deck.clientWidth, availableHeight * (1471 / 583));
      const cardHeight = innerWidth < 640 ? availableHeight : cardWidth * (583 / 1471);
      section.style.setProperty('--brand-card-width', `${cardWidth}px`);
      section.style.setProperty('--brand-card-height', `${cardHeight}px`);
      // All layout reads happen on resize, never in the animation loop.
      metrics = {
        nav, strip,
        travel: section.offsetHeight - height + nav,
        incoming: deck.clientHeight + 180,
        deckHeight: deck.clientHeight,
      };
      target = clamp((nav - section.getBoundingClientRect().top) / metrics.travel, 0, 1) * duration;
      current = target;
      paint(current);
    };
    const requestLayout = () => {
      if (!layoutFrame && !disposed) layoutFrame = requestAnimationFrame(layout);
    };
    const onPreferenceChange = () => {
      cancelAnimationFrame(frame); frame = 0;
      requestLayout();
    };
    const observer = new ResizeObserver(requestLayout);
    observer.observe(section.querySelector('.why-heading'));
    observer.observe(deck);
    const navbar = document.querySelector('.site-header nav');
    if (navbar) observer.observe(navbar);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', requestLayout);
    preference.addEventListener('change', onPreferenceChange);
    const images = [...section.querySelectorAll('img')];
    images.forEach(image => image.addEventListener('load', requestLayout));
    document.fonts?.ready.then(requestLayout);
    layout();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(layoutFrame);
      observer.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', requestLayout);
      preference.removeEventListener('change', onPreferenceChange);
      images.forEach(image => image.removeEventListener('load', requestLayout));
      flows.forEach(flow => flow.style.removeProperty('transform'));
      surfaces.forEach(surface => surface.style.removeProperty('transform'));
      copies.forEach(copy => copy.style.removeProperty('transform'));
    };
  }, [cards.length]);  return (
    <section id="solutions" ref={sectionRef} className={`why-section ${styles.section}`}>
      <div className="why-rail w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className={styles.stage}>
        
        {/* The heading leaves together with the sticky card frame. */}
        <div className="why-heading relative z-10 pt-2 pb-4 mb-6 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black text-[#222225] tracking-tight whitespace-nowrap">
            Why Leading Brands Choose LeadsGarage
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-[#55555C] font-normal mt-2 max-w-3xl mx-auto tracking-normal">
            Powerful solutions. Smarter strategies. Measurable growth for your business.
          </p>
        </div>

        {/* Native sticky frame with transform-only card transitions. */}
        <div 
          ref={cardsWrapperRef} 
          className={`cards-stage ${styles.stack}`}
        >
          {cards.map((card, idx) => (
            <div key={card.id} className={styles.flow} style={{ '--stack-index': idx }}>
            <div
              ref={addToCardRefs}
              style={{ '--stack-index': idx }}
              className={`solution-card-wrapper card card-${idx + 1} ${styles.item} w-full flex justify-center p-0 m-0 bg-transparent border-0 shadow-none`}
            >
              <div className="solution-surface w-full relative bg-transparent border-0 shadow-none p-0 m-0 overflow-hidden flex justify-center items-center">
                <div className="solution-art w-full overflow-hidden rounded-2xl sm:rounded-3xl p-0 m-0 bg-transparent border-0 shadow-none">
                  <img
                    src={card.image}
                    alt={card.title}
                    decoding="async"
                    width="1540"
                    height="644"
                    className="w-full h-auto object-contain block select-none"
                  />
                </div>
                <div className="solution-copy">
                  <h3 className={`solution-title solution-title-${card.id}`}>
                    {card.id === 'call-transfers' ? <>Instant Call<span className="desktop-break"><br /></span> Transfers</> :
                      card.id === 'lead-delivery' ? <>Real-Time<span className="desktop-break"><br /></span> Lead Delivery</> :
                      card.id === 'link-out' ? <>High-Intent<span className="desktop-break"><br /></span> Link-Out Traffic</> :
                      card.id === 'smart-list' ? <>Smart List<span className="desktop-break"><br /></span> Management</> :
                      <>Geo-Targeted<span className="desktop-break"><br /></span> Customer Acquisition</>}
                  </h3>
                  <p className={`solution-description solution-description-${card.id}`}>
                    {card.id === 'call-transfers' ? <>Connect callers instantly with your agents<span className="desktop-break"><br /></span> and close more deals, faster.</> :
                      card.id === 'lead-delivery' ? <>We deliver leads the moment they're<span className="desktop-break"><br /></span> generated, so you never miss an opportunity.</> :
                      card.id === 'link-out' ? <>Drive qualified, high-intent traffic<span className="desktop-break"><br /></span> that's ready to take action.</> :
                      card.id === 'smart-list' ? <>Clean, verified, and well-managed lists<span className="desktop-break"><br /></span> that improve reach and deliverability.</> :
                      <>Reach the right audience in the right location<span className="desktop-break"><br /></span> for higher conversions and better ROI.</>}
                  </p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
