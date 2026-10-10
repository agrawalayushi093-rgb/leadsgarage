import { publicAsset } from '../utils/publicAsset';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { scatterBubbles } from '../utils/networkBubbles';

import { ChartNoAxesColumn, Users } from 'lucide-react';

export default function EcosystemNetwork() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = section.querySelector('.network-bubble-layer');
    const text = section.querySelector('.text-center');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let context;
    let previousSize = '';
    let visible = false;
    let loops = [];
    const updatePlayback = () => loops.forEach(loop => loop.paused(!visible || document.hidden));
    const layout = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const size = `${width}:${height}:${text.offsetWidth}:${motionPreference.matches}`;
      if (!width || !height || size === previousSize) return;
      previousSize = size;
      context?.revert();
      loops = [];
      context = gsap.context(() => {
        const bubbles = [...canvas.querySelectorAll('[data-network-bubble]')];
        const positions = scatterBubbles(width, height, text.offsetWidth, bubbles.length);
        bubbles.forEach((bubble, index) => {
          if (!positions[index]) {
            gsap.set(bubble, { display: 'none' });
            return;
          }
          const { left, diameter, phase, travel, maxSize, blur } = positions[index];
          gsap.set(bubble, { display: bubble.matches('.network-chart, .network-people') ? 'grid' : 'block', top: 0, left, width: diameter, height: diameter, x: 0, filter: `blur(${blur}px)` });
          gsap.set(bubble, { opacity: .85 });
          if (motionPreference.matches) {
            gsap.set(bubble, { y: height + maxSize - travel * phase });
            return;
          }
          // Scattered starting positions share one vertical speed, preserving their spacing.
          const loop = gsap.timeline({ repeat: -1 });
          loop.fromTo(bubble, { y: height + maxSize }, { y: -maxSize, duration: 22, ease: 'none' }, 0);
          loop.progress(phase);
          loops.push(loop);
        });
      }, section);
      updatePlayback();
    };
    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(canvas);
    observer.observe(text);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { rootMargin: '200px' });
    visibilityObserver.observe(section);
    document.addEventListener('visibilitychange', updatePlayback);
    motionPreference.addEventListener('change', layout);
    return () => {
      observer.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      motionPreference.removeEventListener('change', layout);
      context?.revert();
    };
  }, []);
  const nodes = [
    // Top Row
    { src: publicAsset("/image/Home/section6/Group 40067.png"), pos: 'top-[8%] left-[16%]', size: 'w-14 h-14 lg:w-20 lg:h-20', delay: 0 },
    { src: publicAsset("/image/Home/section6/Group 40072.png"), pos: 'top-[6%] left-[36%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.4 },
    { src: publicAsset("/image/Home/section6/Ellipse 539.png"), pos: 'top-[8%] right-[38%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.8 },
    { src: publicAsset("/image/Home/section6/Group 40073.png"), pos: 'top-[14%] right-[14%]', size: 'w-14 h-14 lg:w-20 lg:h-20', delay: 1.2 },

    // Mid-Upper Row
    { src: publicAsset("/image/Home/section6/Group 40077.png"), pos: 'top-[28%] left-[10%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.2 },
    { src: publicAsset("/image/Home/section6/Group 40079.png"), pos: 'top-[36%] left-[48%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.6 },
    { src: publicAsset("/image/Home/section6/Group 40068.png"), pos: 'top-[26%] right-[22%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 1.0 },
    { src: publicAsset("/image/Home/section6/Group 40065.png"), pos: 'top-[32%] right-[10%]', size: 'w-14 h-14 lg:w-20 lg:h-20', delay: 1.4 },

    // Middle Left & Right
    { src: publicAsset("/image/Home/section6/Group 40066.png"), pos: 'top-[52%] left-[6%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.5 },
    { src: publicAsset("/image/Home/section6/Group 40071.png"), pos: 'top-[54%] right-[8%]', size: 'w-16 h-16 lg:w-20 lg:h-20', delay: 0.9 },

    // Bottom Row
    { src: publicAsset("/image/Home/section6/Group 40069.png"), pos: 'top-[72%] left-[12%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 1.1 },
    { src: publicAsset("/image/Home/section6/Group 40075.png"), pos: 'top-[78%] left-[22%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.3 },
    { src: publicAsset("/image/Home/section6/Group 40078.png"), pos: 'top-[74%] right-[34%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 0.7 },
    { src: publicAsset("/image/Home/section6/Group 40070.png"), pos: 'top-[76%] right-[14%]', size: 'w-16 h-16 lg:w-22 lg:h-22', delay: 1.3 },
  ];

  return (
    <section ref={sectionRef} id="network" className="py-20 lg:py-28 bg-[#FDFBF7] relative w-full" style={{ overflow: 'clip' }}>
      
      {/* Subtle Background Overlay Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
        <img
          src={publicAsset("/image/Home/section6/Rectangle 2341.png")}
          alt="Shadow Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Floating Canvas */}
        <div className="network-canvas relative flex items-center justify-center">
          
          <div className="network-bubble-layer">
          <div data-network-bubble className="network-chart"><ChartNoAxesColumn aria-hidden="true" /></div><div data-network-bubble className="network-people"><Users aria-hidden="true" /></div>
          {/* Floating Nodes */}
          {[...nodes, ...nodes, ...nodes].map((node, idx) => (
            <div
              key={idx}
              data-network-bubble
              className="network-bubble"
              style={{ left: `${2 + ((idx * .618034) % 1) * 90}%`, width: `clamp(24px, ${[5, 7, 4, 6, 8][idx % 5]}vw, ${[65, 85, 50, 75, 95][idx % 5]}px)`, top: `${((idx * .381966) % 1) * 90}%` }}
            >
              <img
                src={node.src}
                alt={`Ecosystem node ${idx}`}
                className={`${node.size} object-contain filter drop-shadow-md`}
                style={{
                  transform: 'none',
                  filter: 'none',
                }}
              />
            </div>
          ))}

          </div>
          {/* Center Main Text Content matching Reference 1:1 */}
          <div className="text-center max-w-lg mx-auto relative z-30 space-y-4 px-4"
            style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
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


      </div>
    </section>
  );
}

