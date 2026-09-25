import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Smartphone, Lock, AlertTriangle, Cpu, Globe, Eye } from 'lucide-react';

export default function QualityControl() {
  const [activeTab, setActiveTab] = useState(2); // Center dot active

  const tabs = [
    { title: 'Bot Protection', desc: 'Real-time bot & fraud detection' },
    { title: 'Contextual Guard', desc: 'Brand safety and content filtering' },
    { title: 'Quality Control', desc: '100% Verified clean traffic' },
    { title: 'Geo Compliance', desc: 'Location and ISP verification' },
    { title: 'MFA Protection', desc: 'Domain arbitrage protection' },
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why We Deliver Better Results
          </h2>
          
          {/* 5-Dot Navigation Carousel Matching Figma */}
          <div className="flex items-center justify-center gap-2.5 mt-6 mb-8">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeTab === idx 
                    ? 'w-10 h-3 bg-emerald-500 shadow-md' 
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            {tabs[activeTab].title}
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            100% Clean Traffic Guarantee
          </h3>

          <p className="text-base text-slate-600 font-medium max-w-xl mx-auto mt-2">
            Premium placements with every impression protected from bots, unsafe content, and domain-arbitrage traffic.
          </p>
        </div>

        {/* 3 Mobile Phone Mockups Showcase matching Figma layout */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
          
          {/* Left Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="w-full max-w-xs bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[2.5rem] p-4 text-white shadow-xl border-4 border-slate-200 hidden md:block"
          >
            <div className="bg-slate-900/40 backdrop-blur-md rounded-[2rem] p-5 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold text-blue-200">Targeting Engine</span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                  +34% Propensity
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/10 text-xs">
                  <span className="block text-slate-300 font-medium text-[10px]">IVT Filtering</span>
                  <span className="font-bold text-emerald-400">100% Clean</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 text-xs">
                  <span className="block text-slate-300 font-medium text-[10px]">Contextual Guard</span>
                  <span className="font-bold text-blue-300">Active</span>
                </div>
              </div>
              <div className="mt-6 text-center text-[11px] font-bold text-blue-200 border-t border-white/10 pt-3">
                Leads <span className="text-white">Garage</span>
              </div>
            </div>
          </motion.div>

          {/* Center Main Elevated Phone (Verified 100% Clean) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            viewport={{ once: true }}
            className="w-full max-w-sm bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-800 rounded-[3rem] p-6 text-white shadow-2xl border-4 border-white ring-8 ring-blue-500/20 relative z-20"
          >
            <div className="bg-slate-900/60 backdrop-blur-md rounded-[2.2rem] p-6 border border-white/20">
              
              {/* Shield Icon Header */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-slate-900 shadow-lg mb-3">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-black text-white">Verified</h4>
                <span className="text-sm font-bold text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30 mt-1">
                  100% Clean
                </span>
              </div>

              {/* Status List Matching Figma Screen */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 text-xs border border-white/10">
                  <span className="font-bold text-blue-100">Brand Safety</span>
                  <span className="font-extrabold text-emerald-300 bg-emerald-500/30 px-2 py-0.5 rounded-md text-[10px]">SECURE</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 text-xs border border-white/10">
                  <span className="font-bold text-blue-100">IVT Filtering</span>
                  <span className="font-extrabold text-emerald-300 bg-emerald-500/30 px-2 py-0.5 rounded-md text-[10px]">100%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 text-xs border border-white/10">
                  <span className="font-bold text-blue-100">Contextual Guard</span>
                  <span className="font-extrabold text-emerald-300 bg-emerald-500/30 px-2 py-0.5 rounded-md text-[10px]">ACTIVE</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 text-xs border border-white/10">
                  <span className="font-bold text-blue-100">Geo Compliance</span>
                  <span className="font-extrabold text-emerald-300 bg-emerald-500/30 px-2 py-0.5 rounded-md text-[10px]">PASSED</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 text-xs border border-white/10">
                  <span className="font-bold text-blue-100">MFA Blocker</span>
                  <span className="font-extrabold text-emerald-300 bg-emerald-500/30 px-2 py-0.5 rounded-md text-[10px]">ACTIVE</span>
                </div>
              </div>

              <div className="mt-6 text-center text-xs font-black text-white border-t border-white/15 pt-4 tracking-wider">
                Leads <span className="text-cyan-400">Garage</span>
              </div>
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="w-full max-w-xs bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[2.5rem] p-4 text-white shadow-xl border-4 border-slate-200 hidden md:block"
          >
            <div className="bg-slate-900/40 backdrop-blur-md rounded-[2rem] p-5 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold text-blue-200">Conversion Engine</span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                  +34% Propensity
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/10 text-xs">
                  <span className="block text-slate-300 font-medium text-[10px]">MFA Blocker</span>
                  <span className="font-bold text-emerald-400">Protected</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 text-xs">
                  <span className="block text-slate-300 font-medium text-[10px]">Geo Compliance</span>
                  <span className="font-bold text-blue-300">Passed</span>
                </div>
              </div>
              <div className="mt-6 text-center text-[11px] font-bold text-blue-200 border-t border-white/10 pt-3">
                Leads <span className="text-white">Garage</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
