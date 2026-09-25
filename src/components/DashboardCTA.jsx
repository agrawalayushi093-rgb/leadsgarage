import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, TrendingUp, Users, DollarSign, Globe, Sparkles, ArrowRight } from 'lucide-react';

export default function DashboardCTA({ onOpenContact }) {
  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Sky Gradient Container */}
        <div className="bg-gradient-to-b from-[#0A1C3E] via-[#1D4ED8] to-[#2563EB] rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-blue-400/30">
          
          {/* Background Ambient Glows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-cyan-200 border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Advanced Analytics Platform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Data That Drives Decisions
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-normal mt-3">
              Over <span className="font-extrabold text-white">8.5B+</span> customer impressions processed through our real-time performance engine.
            </p>
          </div>

          {/* Central Laptop Showcase with Floating Metrics matching Figma */}
          <div className="relative max-w-4xl mx-auto mt-8">
            
            {/* Laptop Shell */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 rounded-3xl p-4 sm:p-6 border-4 border-slate-700 shadow-2xl relative z-10"
            >
              {/* Screen Content */}
              <div className="bg-[#0B1936] rounded-2xl p-6 border border-white/10 text-white min-h-[300px] flex flex-col justify-between">
                
                {/* Screen Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-slate-400 ml-2">leadsgarage.com/analytics</span>
                  </div>
                  <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                    Live Stream Active
                  </span>
                </div>

                {/* Main Dashboard Stats inside Laptop */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Traffic Growth</span>
                    <h4 className="text-2xl font-black text-emerald-400 mt-1">+72%</h4>
                    <span className="text-[10px] text-slate-400">vs Previous Quarter</span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Total Customers</span>
                    <h4 className="text-2xl font-black text-cyan-300 mt-1">8.5B+</h4>
                    <span className="text-[10px] text-slate-400">Global Reach</span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Earned Revenue</span>
                    <h4 className="text-2xl font-black text-white mt-1">$12,480</h4>
                    <span className="text-[10px] text-slate-400">Daily Average</span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Opportunities</span>
                    <h4 className="text-2xl font-black text-purple-300 mt-1">170+</h4>
                    <span className="text-[10px] text-slate-400">Active Verticals</span>
                  </div>
                </div>

                {/* Bottom Screen Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>50K+ Active Publishers Connected</span>
                  </div>
                  <button 
                    onClick={onOpenContact}
                    className="text-white font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Open Live Dashboard <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Bottom Action Button */}
          <div className="text-center mt-12 relative z-10">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full font-bold text-sm text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Start Scaling Your Business Today
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
