import { publicAsset } from '../utils/publicAsset';
import React, { useLayoutEffect, useRef } from 'react';



import { ChartNoAxesColumn, Users } from 'lucide-react';

export default function EcosystemNetwork() {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const layer = section.querySelector('.network-bubble-layer');
    const bubbles = [...layer.querySelectorAll('[data-network-bubble]')];
    const content = section.querySelector('.network-copy');
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const originalTop = bubbles.map(bubble => bubble.style.top);
    const originalLeft = bubbles.map(bubble => bubble.style.left);
    let animations = [], visible = false, size = '';
    const clear = () => {
      animations.forEach(animation => animation.cancel()); animations = [];
      bubbles.forEach((bubble,index) => { bubble.style.top = originalTop[index]; bubble.style.left = originalLeft[index]; });
    };
    const playback = () => animations.forEach(animation => visible && !document.hidden ? animation.play() : animation.pause());
    const layout = () => {
      const field = layer.getBoundingClientRect();
      const copy = content.getBoundingClientRect();
      const gap = 28;
      const left = Math.max(0, copy.left - field.left - gap);
      const right = Math.min(field.width, copy.right - field.left + gap);
      const nextSize = `${layer.clientWidth}:${layer.clientHeight}:${preference.matches}`;
      if (nextSize === size) return;
      size = nextSize; clear();
      // Place each entire vertical lane beside the text, rather than masking it.
      bubbles.forEach(bubble => {
        const style = getComputedStyle(bubble);
        const half = bubble.offsetWidth / 2;
        const original = parseFloat(style.left) || 0;
        if (original + half > left && original - half < right) {
          const lane = original < field.width / 2 ? left - half : right + half;
          bubble.style.left = `${Math.max(half, Math.min(field.width - half, lane))}px`;
        }
      });
      if (preference.matches || !layer.clientHeight) return;
      const height = layer.clientHeight, padding = 100, travel = height + padding * 2;
      const duration = travel / 24 * 1000;
      bubbles.forEach(bubble => {
        const start = parseFloat(getComputedStyle(bubble).top) || 0;
        bubble.style.top = '0px';
        const animation = bubble.animate([
          {transform:`translate3d(-50%,${height + padding}px,0) translateY(-50%)`},
          {transform:`translate3d(-50%,-${padding}px,0) translateY(-50%)`},
        ], {duration,iterations:Infinity,easing:'linear'});
        animation.currentTime = (height + padding - start) / travel * duration;
        animations.push(animation);
      });
      playback();
    };
    const observer = new ResizeObserver(layout); observer.observe(layer); observer.observe(content);
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; playback(); },{rootMargin:'100px'});
    visibility.observe(section);
    preference.addEventListener('change',layout);
    document.addEventListener('visibilitychange',playback);
    layout();
    return () => { clear(); observer.disconnect(); visibility.disconnect(); preference.removeEventListener('change',layout); document.removeEventListener('visibilitychange',playback); };
  }, []);
  const positions = [[22,16],[41,15],[63,10],[84,21],[15,34],[34,41],[70,37],[85,44],[11,56],[85,68],[15,84],[44,85],[64,75],[75,89]];
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
          {nodes.map((node, idx) => (
            <div
              key={idx}
              data-network-bubble
              className="network-bubble"
              style={{ left: `${6 + (positions[idx][0] - 11) / 74 * 88}%`, top: `${positions[idx][1]}%`, width: 'clamp(28px, 8vw, 90px)' }}
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
          <div className="network-copy text-center max-w-lg mx-auto relative z-30 space-y-4 px-4"
            style={{ position: 'absolute', top: '55%', transform: 'translateY(-50%)' }}>
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


