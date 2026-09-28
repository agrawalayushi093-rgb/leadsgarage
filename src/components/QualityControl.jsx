import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, TrendingUp, Check } from 'lucide-react';

export default function QualityControl() {
  const [activeTab, setActiveTab] = useState(2); // Center dot active default

  const tabs = [
    { 
      id: 'bot', 
      title: 'Bot Protection', 
      desc: 'Real-time bot & invalid traffic (IVT) detection filtering non-human impressions before delivery.'
    },
    { 
      id: 'contextual', 
      title: 'Contextual Guard', 
      desc: 'Smart placement verification ensuring your campaigns run on brand-safe and high-intent media.'
    },
    { 
      id: 'quality', 
      title: 'Quality Control', 
      desc: 'Premium placements with every impression protected from bots, unsafe content, and domain-arbitrage traffic.'
    },
    { 
      id: 'geo', 
      title: 'Geo Compliance', 
      desc: 'Strict IP, ISP, and geo-fencing compliance to ensure your leads originate from targeted geographic regions.'
    },
    { 
      id: 'mfa', 
      title: 'MFA Protection', 
      desc: 'Made-For-Arbitrage (MFA) site filter shielding budget from low-engagement automated content sites.'
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section id="quality" className="pt-4 sm:pt-6 lg:pt-8 pb-20 lg:pb-28 bg-[#FDFBF7] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why We Deliver Better Results
          </h2>
          
          {/* Horizontal Dashed Line with 5 Center Dots Matching Screenshot 1:1 */}
          <div className="relative flex items-center justify-center my-8">
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
                      ? 'w-4 h-4 bg-[#10B981] ring-4 ring-emerald-100 shadow-md scale-110' 
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
              className="space-y-2 mb-12"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {currentTab.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
                {currentTab.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5 Phone Cards Fan-Out Carousel Matching Screenshot 1:1 */}
        <div className="mt-8 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] overflow-hidden py-4">
          
          {/* Phone 1: Far Left Outer Outline (Faded Silhouette) */}
          <div className="hidden xl:block absolute left-[2%] top-1/2 -translate-y-1/2 w-64 h-[380px] rounded-[2.8rem] border-2 border-slate-200/60 bg-white/40 backdrop-blur-[2px] opacity-40 transform -rotate-6 scale-90 z-0 pointer-events-none"></div>

          {/* Phone 2: Mid Left Blue Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-[12%] lg:left-[16%] top-1/2 -translate-y-1/2 w-72 lg:w-80 bg-gradient-to-b from-[#0A62F0] to-[#004ACC] rounded-[2.5rem] p-5 text-white shadow-2xl border border-white/20 transform -translate-x-6 scale-95 z-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#10B981] flex items-center justify-center shadow-md">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-black text-white block">+34%</span>
                <span className="text-[10px] text-blue-100 font-medium block -mt-1">Propensity Score</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Inner Box 1 */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-white">Targeting Engine</span>
                  <span className="text-[9px] font-black text-white bg-[#10B981] px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-xs font-bold text-blue-100">Tech Seekers</span>
                </div>
              </div>

              {/* Inner Box 2 */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">Targeting Engine</span>
                  <span className="text-[9px] font-black text-white bg-[#10B981] px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                    <div>
                      <span className="font-bold text-white block text-[11px]">Tech Seekers</span>
                      <span className="text-[9px] text-blue-200 block -mt-0.5">LTV: High &bull; Match 98%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-white/10 pt-1.5">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=80" alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                    <div>
                      <span className="font-bold text-white block text-[11px]">Early Adopters</span>
                      <span className="text-[9px] text-blue-200 block -mt-0.5">LTV: Med &bull; Match 91%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center text-xs font-black tracking-wide text-white border-t border-white/15 pt-3">
              Leads <span className="text-[#00E599]">Garage</span>
            </div>
          </motion.div>

          {/* Phone 3: Center Elevated Main Card (1:1 Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            viewport={{ once: true }}
            className="relative z-30 w-full max-w-sm sm:w-80 lg:w-96 bg-gradient-to-b from-[#005AE6] via-[#0A62F0] to-[#0045BC] rounded-[3rem] p-6 lg:p-7 text-white shadow-[0_25px_60px_-15px_rgba(10,98,240,0.4)] border-4 border-white ring-8 ring-blue-500/10"
          >
            {/* Top Shield Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#10B981] flex items-center justify-center text-white shadow-lg mb-3">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-black text-white tracking-tight">Verified</h4>
              <span className="text-xs font-bold text-blue-100 mt-0.5">
                100% Clean
              </span>
            </div>

            {/* Inner Glass Box Matching Screenshot */}
            <div className="bg-white/15 backdrop-blur-xl rounded-[2rem] p-5 border border-white/20 shadow-inner">
              
              {/* Brand Safety Header Row */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                <span className="text-sm font-extrabold text-white">Brand Safety</span>
                <span className="text-[10px] font-black text-white bg-[#10B981] px-3 py-1 rounded-full uppercase tracking-wider">
                  SECURE
                </span>
              </div>

              {/* Verified Checklist Items 1:1 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-300">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-blue-100">IVT Filtering</span>
                  </div>
                  <span className="font-bold text-[#00E599]">100%</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-300">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-blue-100">Contextual Guard</span>
                  </div>
                  <span className="font-bold text-[#00E599]">Active</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-300">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-blue-100">Geo Compliance</span>
                  </div>
                  <span className="font-bold text-[#00E599]">Passed</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-300">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-blue-100">MFA Blocker</span>
                  </div>
                  <span className="font-bold text-[#00E599]">Active</span>
                </div>
              </div>

            </div>

            {/* Bottom Brand Logo */}
            <div className="mt-6 text-center text-sm font-black tracking-wide text-white border-t border-white/15 pt-4">
              Leads <span className="text-[#00E599]">Garage</span>
            </div>
          </motion.div>

          {/* Phone 4: Mid Right Blue Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block absolute right-[12%] lg:right-[16%] top-1/2 -translate-y-1/2 w-72 lg:w-80 bg-gradient-to-b from-[#0A62F0] to-[#004ACC] rounded-[2.5rem] p-5 text-white shadow-2xl border border-white/20 transform translate-x-6 scale-95 z-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#10B981] flex items-center justify-center shadow-md">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-black text-white block">+34%</span>
                <span className="text-[10px] text-blue-100 font-medium block -mt-1">Propensity Score</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Inner Box 1 */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-white">Targeting Engine</span>
                  <span className="text-[9px] font-black text-white bg-[#10B981] px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-xs font-bold text-blue-100">Tech Seekers</span>
                </div>
              </div>

              {/* Inner Box 2 */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">Targeting Engine</span>
                  <span className="text-[9px] font-black text-white bg-[#10B981] px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                    <div>
                      <span className="font-bold text-white block text-[11px]">Tech Seekers</span>
                      <span className="text-[9px] text-blue-200 block -mt-0.5">LTV: High &bull; Match 98%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-white/10 pt-1.5">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=80" alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                    <div>
                      <span className="font-bold text-white block text-[11px]">Early Adopters</span>
                      <span className="text-[9px] text-blue-200 block -mt-0.5">LTV: Med &bull; Match 91%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center text-xs font-black tracking-wide text-white border-t border-white/15 pt-3">
              Leads <span className="text-[#00E599]">Garage</span>
            </div>
          </motion.div>

          {/* Phone 5: Far Right Outer Outline (Faded Silhouette) */}
          <div className="hidden xl:block absolute right-[2%] top-1/2 -translate-y-1/2 w-64 h-[380px] rounded-[2.8rem] border-2 border-slate-200/60 bg-white/40 backdrop-blur-[2px] opacity-40 transform rotate-6 scale-90 z-0 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}


