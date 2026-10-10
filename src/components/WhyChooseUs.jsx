import { publicAsset } from '../utils/publicAsset';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyChooseUs.module.css';

gsap.registerPlugin(ScrollTrigger);

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

  // Natural scrolling supplies the full travel distance; sticky cards hold the final offsets.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference) and (min-height: 600px)', () => {
        const cardsList = cardRefs.current;
        // Measure permanent document-flow wrappers, never ScrollTrigger's generated spacers.
        const cardFlows = cardsList.map(card => card.parentElement);
        const stackTop = () => window.innerWidth < 640 ? 96 : 110;
        const strip = () => window.innerWidth < 640 ? 28 : 40;
        const coverTravel = () => (cardsList.length - 1) * strip();
        // Native sticky positioning stays on the browser's scroll thread. Each flow
        // extends to the common release point; negative margins preserve its natural gap.
        const layoutStickyFlows = () => {
          const gap = Math.min(96, Math.max(48, window.innerWidth * .06));
          gsap.set(cardsWrapperRef.current, { '--exit-space': '0px', marginBottom: -coverTravel() });
          cardFlows.forEach((flow, index) => gsap.set(flow, {
            height: 'auto', paddingBottom: index === cardsList.length - 1 ? 0 : gap,
            marginBottom: 0,
          }));
          const lastTop = cardFlows[cardFlows.length - 1].getBoundingClientRect().top;
          const distances = cardFlows.map((flow, index) => Math.max(0,
            lastTop - flow.getBoundingClientRect().top
              - (cardsList.length - 1 - index) * strip() + coverTravel()));
          cardFlows.forEach((flow, index) => {
            gsap.set(flow, {
              height: cardsList[index].offsetHeight + distances[index], paddingBottom: 0,
              marginBottom: index === cardsList.length - 1 ? 0 : gap - distances[index],
            });
            gsap.set(cardsList[index], {
              position: 'sticky', top: stackTop() + index * strip(), y: 0,
            });
          });
        };
        layoutStickyFlows();
        ScrollTrigger.addEventListener('refreshInit', layoutStickyFlows);
        cardsList.forEach(card => {
          gsap.set(card.querySelector('.solution-surface'), { transformOrigin: 'center top' });
        });
        // Earlier cards gradually recede while later cards climb into the deck.
        cardsList.slice(0, -1).forEach((card, index) => {
          // Scale only the artwork, preserving the fixed document spacing.
          gsap.fromTo(card.querySelector('.solution-surface'), { scale: 1 }, {
            scale: 1 - (cardsList.length - 1 - index) * 0.03,
            ease: 'none',
            scrollTrigger: {
              trigger: cardFlows[index + 1],
              start: 'top bottom',
              endTrigger: cardFlows[cardsList.length - 1],
              end: () => `top top+=${stackTop() + (cardsList.length - 1) * strip()}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
        // Close the visible strips before the shared sticky release point.
        // Every surface finishes at the same top edge, with the final card in front.
        cardsList.forEach((card, index) => {
          gsap.fromTo(card.querySelector('.solution-surface'), { y: 0 }, {
            y: () => -index * strip(),
            ease: 'none',
            scrollTrigger: {
              trigger: cardFlows[cardFlows.length - 1],
              start: () => `top top+=${stackTop() + coverTravel()}`,
              end: () => `top top+=${stackTop()}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
        return () => ScrollTrigger.removeEventListener('refreshInit', layoutStickyFlows);
      });
    }, sectionRef);
    // Images and fonts can change card heights after the first layout pass.
    let refreshFrame = 0;
    const refreshLayout = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const observer = new ResizeObserver(refreshLayout);
    cardRefs.current.forEach(card => observer.observe(card));
    refreshLayout();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, [cards.length]);

  return (
    <section id="solutions" ref={sectionRef} className="why-section relative w-full bg-transparent py-4 sm:py-8">
      <div className="why-rail w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className={styles.stage}>
        
        {/* Section Heading (Appears normally above cards stack) */}
        <div className="why-heading relative z-10 pt-2 pb-4 mb-6 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black text-[#222225] tracking-tight whitespace-nowrap">
            Why Leading Brands Choose LeadsGarage
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-[#55555C] font-normal mt-2 max-w-3xl mx-auto tracking-normal">
            Powerful solutions. Smarter strategies. Measurable growth for your business.
          </p>
        </div>

        {/* GSAP ScrollTrigger Pinned Stacking Cards Stage */}
        <div 
          ref={cardsWrapperRef} 
          className={`cards-stage ${styles.stack} w-full relative min-h-[520px] sm:min-h-[660px] md:min-h-[720px] flex justify-center items-start my-4`}
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
                    className="w-full h-auto object-contain block transform scale-[1.01] origin-top-left transition-transform duration-500 group-hover:scale-[1.025] select-none"
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


