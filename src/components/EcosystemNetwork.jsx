import React from 'react';
import { motion } from 'framer-motion';

export default function EcosystemNetwork() {
  const nodes = [
    // Top Row (Outer Orbit)
    { src: '/image/Home/section6/Group 40067.png', pos: 'top-[12%] left-[18%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0 },
    { src: '/image/Home/section6/Group 40072.png', pos: 'top-[10%] left-[34%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.4 },
    { src: '/image/Home/section6/Ellipse 539.png', pos: 'top-[8%] left-[62%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.8 },
    { src: '/image/Home/section6/Group 40073.png', pos: 'top-[16%] right-[12%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 1.2 },

    // Mid-Upper Row
    { src: '/image/Home/section6/Group 40077.png', pos: 'top-[28%] left-[8%]', size: 'w-12 h-12 lg:w-15 lg:h-15', delay: 0.2 },
    { src: '/image/Home/section6/Group 40079.png', pos: 'top-[28%] left-[26%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.6 },
    { src: '/image/Home/section6/Group 40068.png', pos: 'top-[28%] right-[22%]', size: 'w-12 h-12 lg:w-15 lg:h-15', delay: 1.0 },
    { src: '/image/Home/section6/Group 40065.png', pos: 'top-[38%] right-[8%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 1.4 },

    // Middle Left & Right
    { src: '/image/Home/section6/Group 40066.png', pos: 'top-[52%] left-[5%]', size: 'w-16 h-16 lg:w-20 lg:h-20', delay: 0.5 },
    { src: '/image/Home/section6/Group 40071.png', pos: 'top-[58%] right-[8%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.9 },

    // Bottom Row
    { src: '/image/Home/section6/Group 40069.png', pos: 'top-[74%] left-[10%]', size: 'w-16 h-16 lg:w-20 lg:h-20', delay: 1.1 },
    { src: '/image/Home/section6/Group 40075.png', pos: 'top-[78%] left-[36%]', size: 'w-12 h-12 lg:w-15 lg:h-15', delay: 0.3 },
    { src: '/image/Home/section6/Group 40078.png', pos: 'top-[72%] right-[32%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 0.7 },
    { src: '/image/Home/section6/Group 40070.png', pos: 'top-[78%] right-[16%]', size: 'w-14 h-14 lg:w-18 lg:h-18', delay: 1.3 },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Shadow Overlay Mask (Rectangle 2341.png) */}
      <div className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply opacity-40">
        <img
          src="/image/Home/section6/Rectangle 2341.png"
          alt="Shadow Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Floating Canvas */}
        <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center justify-center">
          
          {/* Nodes Animating Upwards & Disappearing */}
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              className={`absolute hidden md:block ${node.pos} pointer-events-none z-10`}
            >
              <motion.img
                animate={{
                  y: [80, -120],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 6.5 + (idx % 3),
                  repeat: Infinity,
                  ease: 'linear',
                  delay: idx * 0.45,
                }}
                src={node.src}
                alt={`Ecosystem node ${idx}`}
                className={`${node.size} object-contain filter drop-shadow-md`}
              />
            </motion.div>
          ))}

          {/* Center Main Text Content */}
          <div className="text-center max-w-lg mx-auto relative z-30 space-y-4 px-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold tracking-widest uppercase border border-emerald-200 shadow-sm">
              GROW WITH US
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              More channels. <br />
              More customers. <br />
              More growth.
            </h2>
          </div>

        </div>

        {/* Mobile Node Animation */}
        <div className="md:hidden flex flex-wrap justify-center gap-4 mt-8 pt-4 relative z-30">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [15, -25], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: idx * 0.3 }}
              className="w-12 h-12"
            >
              <img src={node.src} alt={`Node ${idx}`} className="w-full h-full object-contain filter drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
