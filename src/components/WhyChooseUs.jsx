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
      image: '/image/Home/section3/Group 40062.png'
    },
    {
      id: 'lead-delivery',
      title: 'Real-Time Lead Delivery',
      description: "We deliver leads the moment they're generated, so you never miss an opportunity.",
      image: '/image/Home/section3/Group 39954.png'
    },
    {
      id: 'link-out',
      title: 'High-Intent Link-Out Traffic',
      description: "Drive qualified, high-intent traffic that's ready to take action.",
      image: '/image/Home/section3/Group 40094.png'
    },
    {
      id: 'smart-list',
      title: 'Smart List Management',
      description: 'Clean, verified, and well-managed lists that improve reach and deliverability.',
      image: '/image/Home/section3/Group 40063.png'
    },
    {
      id: 'geo-targeted',
      title: 'Geo-Targeted Customer Acquisition',
      description: 'Reach the right audience in the right location for higher conversions and better ROI.',
      image: '/image/Home/section3/Group 39956.png'
    }
  ];

  // GSAP ScrollTrigger Stepped Pyramid Deck Stacking Animation (Compact Zero-Gap Bounds):
  useEffect(() => {
    const cardsWrapper = cardsWrapperRef.current;
    if (!cardsWrapper || cardRefs.current.length === 0) return;

    const ctx = gsap.context(() => {
      const cardsList = cardRefs.current;
      const totalCards = cardsList.length;

      // Set initial positions: Card 0 at yPercent 0, Cards 1..N-1 at yPercent 105 (below container boundary)
      cardsList.forEach((card, index) => {
        gsap.set(card, {
          transformOrigin: 'top center',
          scale: 1,
        });
        if (index === 0) {
          gsap.set(card, { yPercent: 0, y: 0 });
        } else {
          gsap.set(card, { yPercent: 105, y: 0 });
        }
      });

      const stackStep = window.innerWidth < 640 ? 24 : 40;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsWrapper,
          start: 'top top+=130',
          end: () => `+=${window.innerHeight * 0.5 * (totalCards - 1)}`,
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      for (let i = 1; i < totalCards; i++) {
        const card = cardsList[i];
        const targetY = i * stackStep;

        // Slide card i UP into position
        tl.to(card, {
          yPercent: 0,
          y: targetY,
          ease: 'power1.inOut',
          duration: 1,
        });

        // Scale down previous stacked cards for Stepped Pyramid Deck look (0.90 -> 0.925 -> 0.95 -> 0.975 -> 1.0)
        for (let j = 0; j < i; j++) {
          const prevCard = cardsList[j];
          const depth = i - j;
          const targetScale = Math.max(0.88, 1 - depth * 0.024);
          tl.to(prevCard, {
            scale: targetScale,
            ease: 'power1.inOut',
            duration: 1,
          }, '<');
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [cards.length]);

  return (
    <section id="solutions" ref={sectionRef} className="why-section relative w-full bg-transparent py-4 sm:py-8">
      <div className="why-rail w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className={styles.stage}>
        
        {/* Section Heading */}
        <div className="why-heading relative z-10 pt-2 pb-4 mb-6 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black text-[#222225] tracking-tight whitespace-nowrap">
            Why Leading Brands Choose LeadsGarage
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-[#55555C] font-normal mt-2 max-w-3xl mx-auto tracking-normal">
            Powerful solutions. Smarter strategies. Measurable growth for your business.
          </p>
        </div>

        {/* Compact Stepped Tiered Stacking Cards Stage */}
        <div 
          ref={cardsWrapperRef} 
          className={`cards-stage ${styles.stack} w-full relative my-2`}
        >
          {cards.map((card, idx) => (
            <div
              key={card.id}
              ref={addToCardRefs}
              className={`solution-card-wrapper card card-${idx + 1} ${styles.item} w-full flex justify-center p-0 m-0 bg-transparent border-0 shadow-none`}
              style={{
                zIndex: (idx + 1) * 10,
              }}
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
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
