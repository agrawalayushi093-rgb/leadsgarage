import { publicAsset } from '../utils/publicAsset';
import React, { useLayoutEffect, useRef } from 'react';



import { ChartNoAxesColumn, Users } from 'lucide-react';

export default function EcosystemNetwork() {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const layer = section.querySelector('.network-bubble-layer');
    const copy = section.querySelector('.network-copy');
    const bubbles = [...layer.querySelectorAll('[data-network-bubble]')];
    const originals = bubbles.map(bubble => ({ left:bubble.style.left, top:bubble.style.top }));
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let animations = [], visible = false, size = '';
    const playback = () => animations.forEach(animation => visible && !document.hidden ? animation.play() : animation.pause());
    const clear = () => {
      animations.forEach(animation => animation.cancel());
      animations = [];
      bubbles.forEach((bubble, index) => Object.assign(bubble.style, originals[index]));
    };
    const layout = () => {
      const bounds = layer.getBoundingClientRect();
      const text = copy.getBoundingClientRect();
      const key = `${bounds.width}:${bounds.height}:${text.width}:${text.height}:${preference.matches}`;
      if (key === size) return;
      size = key;
      clear();
      if (preference.matches || !bounds.height) return;
      const radius = Math.max(...bubbles.map(bubble => bubble.offsetWidth)) / 2;
      const gap = bounds.width < 640 ? 14 : 26;
      const leftEdge = text.left - bounds.left - gap;
      const rightEdge = text.right - bounds.left + gap;
      const bandStart = radius + 6;
      const bandEnd = leftEdge - radius;
      const bandWidth = Math.max(0, bandEnd - bandStart);
      const outerLeft = bandStart + bandWidth * .25;
      const innerLeft = bandStart + bandWidth * .75;
      const innerRight = bounds.width - innerLeft;
      const outerRight = bounds.width - outerLeft;
      const wobble = bandWidth * .25;
      const centreWobble = Math.max(0, Math.min(bounds.width * .11, (text.width - radius * 2) / 2));
      const topEnd = text.top - bounds.top - gap - radius;
      const bottomStart = text.bottom - bounds.top + gap + radius;
      // Fixed, separated corridors guarantee clearance for the entire loop.
      // Phase spacing maintains a continuous supply instead of restarting a batch.
      const lanes = [
        { nodes:[6,10,12], x:outerLeft, from:bounds.height + radius, to:-radius, drift:wobble },
        { nodes:[2,7,1], x:innerLeft, from:bounds.height + radius, to:-radius, drift:wobble },
        { nodes:[5,11,15], x:innerRight, from:bounds.height + radius, to:-radius, drift:wobble },
        { nodes:[4,9,14], x:outerRight, from:bounds.height + radius, to:-radius, drift:wobble },
        { nodes:[0,3], x:bounds.width / 2, from:topEnd, to:-radius, drift:centreWobble },
        { nodes:[8,13], x:bounds.width / 2, from:bounds.height + radius, to:bottomStart, drift:centreWobble },
      ];
      lanes.forEach((lane, laneIndex) => {
        const duration = (lane.from - lane.to) / 19 * 1000;
        lane.nodes.forEach((node, index) => {
          const bubble = bubbles[node];
          bubble.style.left = '0px';
          bubble.style.top = '0px';
          const frames = Array.from({ length:9 }, (_, step) => {
            const progress = step / 8;
            const x = lane.x + Math.sin(progress * Math.PI * 2 + laneIndex) * lane.drift;
            const y = lane.from + (lane.to - lane.from) * progress;
            return { transform:`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`, opacity:step === 0 || step === 8 ? 0 : 1 };
          });
          const animation = bubble.animate(frames, { duration, iterations:Infinity, easing:'linear' });
          animation.currentTime = ((index / lane.nodes.length + laneIndex * .137) % 1) * duration;
          animations.push(animation);
        });
      });
      playback();
    };
    const resize = new ResizeObserver(layout);
    resize.observe(layer); resize.observe(copy);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; playback(); });
    observer.observe(section);
    preference.addEventListener('change', layout);
    document.addEventListener('visibilitychange', playback);
    layout();
    return () => { clear(); resize.disconnect(); observer.disconnect(); preference.removeEventListener('change', layout); document.removeEventListener('visibilitychange', playback); };
  }, []);
  const positions = [[18,14],[39,12],[64,8],[88,20],[10,34],[30,40],[74,35],[90,45],[7,58],[90,70],[11,85],[40,87],[66,76],[80,90]];
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
              style={{ left: `${positions[idx][0]}%`, top: `${positions[idx][1]}%`, width: 'clamp(28px, 6.8vw, 90px)' }}
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


