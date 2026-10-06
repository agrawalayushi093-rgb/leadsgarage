import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChartNoAxesColumn, Users } from 'lucide-react';

export default function EcosystemNetwork() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const text = sectionRef.current.querySelector('.text-center');
        const textTravel = () => Math.max(0,
          sectionRef.current.offsetHeight - text.offsetHeight - text.offsetTop - 48);
        const visibleDrift = () => Math.min(110, window.innerHeight * 0.12, textTravel() * 0.35);
        const textStart = () => (window.innerHeight - text.offsetHeight) / 2
          - visibleDrift() / 2 - text.offsetTop;
        gsap.set(text, { y: 0 });
        const setTextY = gsap.quickSetter(text, 'y', 'px');
        let textFrame;
        const updateText = () => {
          textFrame = undefined;
          const travel = textTravel();
          const progress = gsap.utils.clamp(0, 1,
            (textStart() - sectionRef.current.getBoundingClientRect().top)
              / Math.max(1, travel - visibleDrift()));
          setTextY(travel * progress);
        };
        const scheduleText = () => {
          if (textFrame === undefined) textFrame = requestAnimationFrame(updateText);
        };
        window.addEventListener('scroll', scheduleText, { passive: true });
        window.addEventListener('resize', scheduleText);
        updateText();
        const bubbles = sectionRef.current.querySelectorAll('[data-network-bubble]');
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current, start: 'top bottom', end: 'bottom top',
            toggleActions: 'play pause resume pause', invalidateOnRefresh: true,
          },
        });
        bubbles.forEach((bubble, index) => {
          // Enter below the clipped canvas, then leave completely above it.
          const delay = index * 1.2;
          const laneOffset = () => {
            const width = sectionRef.current.offsetWidth;
            const center = bubble.offsetLeft + bubble.offsetWidth / 2;
            if (center > width * 0.34 && center < width * 0.66) {
              return width * (center < width * 0.5 ? 0.27 : 0.76) - center;
            }
            return 0;
          };
          timeline.fromTo(bubble, {
            x: laneOffset,
            y: () => sectionRef.current.offsetHeight - bubble.offsetTop + bubble.offsetHeight,
          }, {
            y: () => -bubble.offsetTop - bubble.offsetHeight - 12,
            x: laneOffset, duration: 10, ease: 'none',
            repeat: -1, repeatDelay: bubbles.length * 1.2 - 10,
            repeatRefresh: true,
          }, delay);
          timeline.fromTo(bubble, { opacity: 0 }, {
            keyframes: [
              { opacity: 1, duration: 1.2 },
              { opacity: 1, duration: 7.6 },
              { opacity: 0, duration: 1.2 },
            ],
            ease: 'none', repeat: -1,
            repeatDelay: bubbles.length * 1.2 - 10,
          }, delay);
        });
        return () => {
          cancelAnimationFrame(textFrame);
          window.removeEventListener('scroll', scheduleText);
          window.removeEventListener('resize', scheduleText);
        };
      });
    }, sectionRef);
    let frame;
    let active = true;
    const refresh = () => {
      if (active) frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener('load', refresh);
    document.fonts.ready.then(refresh);
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('load', refresh);
      context.revert();
    };
  }, []);

  const nodes = [
    // Top Row
    { src: '/image/Home/section6/Group 40067.png', pos: 'top-[8%] left-[16%]', size: 'w-14 h-14 lg:w-20 lg:h-20', delay: 0 },
    { src: '/image/Home/section6/Group 40072.png', pos: 'top-[6%] left-[36%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.4 },
    { src: '/image/Home/section6/Ellipse 539.png', pos: 'top-[8%] right-[38%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.8 },
    { src: '/image/Home/section6/Group 40073.png', pos: 'top-[14%] right-[14%]', size: 'w-14 h-14 lg:w-20 lg:h-20', delay: 1.2 },

    // Mid-Upper Row
    { src: '/image/Home/section6/Group 40077.png', pos: 'top-[28%] left-[10%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.2 },
    { src: '/image/Home/section6/Group 40079.png', pos: 'top-[36%] left-[48%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.6 },
    { src: '/image/Home/section6/Group 40068.png', pos: 'top-[26%] right-[22%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 1.0 },
    { src: '/image/Home/section6/Group 40065.png', pos: 'top-[32%] right-[10%]', size: 'w-14 h-14 lg:w-20 lg:h-20', delay: 1.4 },

    // Middle Left & Right
    { src: '/image/Home/section6/Group 40066.png', pos: 'top-[52%] left-[6%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.5 },
    { src: '/image/Home/section6/Group 40071.png', pos: 'top-[54%] right-[8%]', size: 'w-16 h-16 lg:w-20 lg:h-20', delay: 0.9 },

    // Bottom Row
    { src: '/image/Home/section6/Group 40069.png', pos: 'top-[72%] left-[12%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 1.1 },
    { src: '/image/Home/section6/Group 40075.png', pos: 'top-[78%] left-[22%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.3 },
    { src: '/image/Home/section6/Group 40078.png', pos: 'top-[74%] right-[34%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.7 },
    { src: '/image/Home/section6/Group 40070.png', pos: 'top-[76%] right-[14%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 1.3 },
  ];

  return (
    <section ref={sectionRef} id="network" className="py-20 lg:py-28 bg-[#FDFBF7] relative w-full" style={{ overflow: 'clip' }}>
      
      {/* Subtle Background Overlay Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
        <img
          src="/image/Home/section6/Rectangle 2341.png"
          alt="Shadow Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Floating Canvas */}
        <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center justify-center">
          
          <div data-network-bubble className="network-chart"><ChartNoAxesColumn aria-hidden="true" /></div><div data-network-bubble className="network-people"><Users aria-hidden="true" /></div>
          {/* Floating Nodes */}
          {nodes.map((node, idx) => (
            <div
              key={idx}
              data-network-bubble
              className={`absolute hidden md:block ${node.pos} pointer-events-none z-10`}
            >
              <img
                src={node.src}
                alt={`Ecosystem node ${idx}`}
                className={`${node.size} object-contain filter drop-shadow-md`}
                style={{
                  transform: `scale(${[1, 0.62, 0.8, 0.52, 0.9][idx % 5]})`,
                  filter: `blur(${[0, 2.5, 0, 3.5, 1][idx % 5]}px)`,
                }}
              />
            </div>
          ))}

          {/* Center Main Text Content matching Reference 1:1 */}
          <div className="text-center max-w-lg mx-auto relative z-30 space-y-4 px-4"
            style={{ position: 'absolute', top: '48px' }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black tracking-widest uppercase border border-emerald-200 shadow-sm">
              GROW WITH US
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              More channels. <br />
              More customers. <br />
              More growth.
            </h2>
          </div>

        </div>

        {/* Mobile Node Display */}
        <div className="md:hidden flex flex-wrap justify-center gap-4 mt-6 pt-4 relative z-30">
          {nodes.slice(0, 8).map((node, idx) => (
            <div key={idx} className="w-12 h-12">
              <img src={node.src} alt={`Node ${idx}`} className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
