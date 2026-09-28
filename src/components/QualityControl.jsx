import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QualityControl() {
  const [activeTab, setActiveTab] = useState(2); // Quality Control active by default (3rd dot)

  const tabs = [
    { 
      id: 'bot', 
      title: 'Bot Protection', 
      desc: 'Real-time bot & invalid traffic (IVT) detection filtering non-human impressions before delivery.',
      image: '/image/Home/section3/Group 39954.png'
    },
    { 
      id: 'contextual', 
      title: 'Contextual Guard', 
      desc: 'Smart placement verification ensuring your campaigns run on brand-safe and high-intent media.',
      image: '/image/Home/section3/Group 39956.png'
    },
    { 
      id: 'quality', 
      title: 'Quality Control', 
      desc: 'Premium placements with every impression protected from bots, unsafe content, and domain-arbitrage traffic.',
      image: '/image/Home/section3/Group 40062.png'
    },
    { 
      id: 'geo', 
      title: 'Geo Compliance', 
      desc: 'Strict IP, ISP, and geo-fencing compliance to ensure your leads originate from targeted geographic regions.',
      image: '/image/Home/section3/Group 40063.png'
    },
    { 
      id: 'mfa', 
      title: 'MFA Protection', 
      desc: 'Made-For-Arbitrage (MFA) site filter shielding budget from low-engagement automated content sites.',
      image: '/image/Home/section3/Group 40094.png'
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section id="quality" className="pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 bg-[#FDFBF7] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why We Deliver Better Results
          </h2>
          
          {/* Horizontal Dashed Line with 5 Center Dots Matching Screenshot 1:1 */}
          <div className="relative flex items-center justify-center my-8 sm:my-10">
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <div className="w-full border-t border-dashed border-slate-300"></div>
            </div>
            
            <div className="relative z-10 bg-[#FDFBF7] px-6 flex items-center gap-3">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                    activeTab === idx 
                      ? 'w-3.5 h-3.5 bg-[#00E599] ring-4 ring-emerald-100 shadow-sm scale-110' 
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to ${tab.title}`}
                />
              ))}
            </div>
          </div>

          {/* Sub Title & Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3 mb-8 sm:mb-12"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {currentTab.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
                {currentTab.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 1:1 Figma Artwork Image Display with Smooth Tab Transitions */}
        <div className="mt-4 sm:mt-6 relative max-w-6xl mx-auto flex justify-center items-center px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="w-full max-w-5xl h-auto object-contain drop-shadow-xl select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
