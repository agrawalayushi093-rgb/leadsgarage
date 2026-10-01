import React from 'react';
import { motion } from 'framer-motion';
import { ChartNoAxesColumn, Users } from 'lucide-react';

export default function EcosystemNetwork() {
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
    <section id="network" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden w-full">
      
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
          
          <div className="network-chart"><ChartNoAxesColumn aria-hidden="true" /></div><div className="network-people"><Users aria-hidden="true" /></div>
          {/* Floating Nodes */}
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              className={`absolute hidden md:block ${node.pos} pointer-events-none z-10`}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4 + (idx % 3),
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: node.delay,
              }}
            >
              <img
                src={node.src}
                alt={`Ecosystem node ${idx}`}
                className={`${node.size} object-contain filter drop-shadow-md`}
              />
            </motion.div>
          ))}

          {/* Center Main Text Content matching Reference 1:1 */}
          <div className="text-center max-w-lg mx-auto relative z-30 space-y-4 px-4">
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
