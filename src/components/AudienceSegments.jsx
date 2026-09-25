import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AudienceSegments({ onOpenContact }) {
  return (
    <section id="audience" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Where Do You fit into this picture?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
            We combine technology, data, and expertise to deliver measurable growth for your business.
          </p>
        </div>

        {/* 2 Persona Cards Matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Are you a Publisher? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A1C3E] rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-blue-900/50 group"
          >
            {/* Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
                <Users className="w-3.5 h-3.5" /> Publisher Portal
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Are you a <br />
                <span className="text-blue-400">Publisher?</span>
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 font-normal leading-relaxed">
                Monetize your digital assets with top-tier offers, real-time tracking, and guaranteed prompt payouts.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Highest EPC & Payout Rates</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Real-Time Analytics Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Affiliate Manager</span>
                </div>
              </div>
            </div>

            {/* Visual Card Artwork */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 to-blue-950 p-6 border border-white/10 group-hover:border-blue-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold">
                    NL
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">New Leads Stream</h5>
                    <span className="text-[10px] text-blue-300">1,240 Instant Conversions</span>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">
                  +$4,850.00
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={onOpenContact}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Join Publisher Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>

          {/* Card 2: Are you an Advertiser? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-blue-400/30 group"
          >
            {/* Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/20">
                <Target className="w-3.5 h-3.5" /> Advertiser Portal
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Are you an <br />
                <span className="text-cyan-200">Advertiser?</span>
              </h3>

              <p className="text-sm sm:text-base text-blue-50 font-normal leading-relaxed">
                Acquire high-intent customers at scale through verified lead delivery, call transfers, and targeted campaigns.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>100% IVT & Bot Protection</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Scalable Performance Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Omnichannel Campaign Delivery</span>
                </div>
              </div>
            </div>

            {/* Visual Card Artwork */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-md p-6 border border-white/20 group-hover:border-white/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400 text-slate-900 flex items-center justify-center font-extrabold">
                    QL
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Qualified Leads</h5>
                    <span className="text-[10px] text-cyan-300">More Customers. More Growth.</span>
                  </div>
                </div>
                <span className="text-xs font-black text-white bg-blue-500 px-2.5 py-1 rounded-full">
                  $12,480 / day
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={onOpenContact}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Launch Campaign</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
