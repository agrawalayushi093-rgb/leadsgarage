import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';

export default function AudienceSegments({ onOpenContact }) {
  // viewMode: 'both' | 'publisher' | 'advertiser'
  const [viewMode, setViewMode] = useState('both');

  const publisherData = {
    titlePrefix: 'Are you a',
    title: 'Publisher?',
    desc1: 'As a publisher with LeadsGarage, we understand you need reliable monetization to succeed, and we have seen the results premium offers can do to maximize revenue.',
    desc2: 'Our support team will work with you to help optimize your placements, monitor traffic performance, and choose the best path that gets you higher payouts.',
    image: '/image/Home/Frame 1000004723.png',
  };

  const advertiserData = {
    titlePrefix: 'Are you a',
    title: 'Advertiser?',
    desc1: 'As an advertiser with LeadsGarage, we understand you need customers to succeed, and we have seen the results inbound calls can do to help grow a business.',
    desc2: 'Our support team will work with you to help distribute your offers, monitor traffic and transfers, and choose the best path that gets you the right buyer.',
    image: '/image/Home/Frame 1000004724.png',
  };

  const activeExpanded = viewMode === 'publisher' ? publisherData : advertiserData;
  const activeTabName = viewMode === 'publisher' ? 'publisher' : 'advertiser';

  return (
    <section
      id="audience"
      className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Where Do you fit into this picture?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium mt-3 leading-relaxed">
            We combine technology, data, and expertise to deliver measurable growth for your business.
          </p>
        </div>

        {/* Interactive Container */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: BOTH CARDS SIDE-BY-SIDE (DEFAULT) */}
            {viewMode === 'both' && (
              <motion.div
                key="view-both"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              >
                {/* Card 1: Publisher */}
                <motion.div
                  whileHover={{ y: -6 }}
                  onClick={() => setViewMode('publisher')}
                  className="bg-gradient-to-b from-[#3C69EE] to-[#244AD5] rounded-[2rem] p-8 sm:p-10 pb-0 sm:pb-0 text-white shadow-xl relative overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-blue-100 block">
                      Are you a
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                      Publisher?
                    </h3>
                  </div>

                  <div className="mt-8 flex justify-center items-end">
                    <img
                      src="/image/Home/Frame 1000004723.png"
                      alt="Publisher Illustration"
                      className="w-full max-w-md object-contain transform group-hover:scale-[1.02] transition-transform duration-300 pointer-events-none"
                    />
                  </div>
                </motion.div>

                {/* Card 2: Advertiser */}
                <motion.div
                  whileHover={{ y: -6 }}
                  onClick={() => setViewMode('advertiser')}
                  className="bg-gradient-to-b from-[#3C69EE] to-[#244AD5] rounded-[2rem] p-8 sm:p-10 pb-0 sm:pb-0 text-white shadow-xl relative overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-blue-100 block">
                      Are you a
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                      Advertiser?
                    </h3>
                  </div>

                  <div className="mt-8 flex justify-center items-end">
                    <img
                      src="/image/Home/Frame 1000004724.png"
                      alt="Advertiser Illustration"
                      className="w-full max-w-md object-contain transform group-hover:scale-[1.02] transition-transform duration-300 pointer-events-none"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* VIEW 2: SINGLE EXPANDED CARD + COLLAPSED SIDE PILL */}
            {(viewMode === 'publisher' || viewMode === 'advertiser') && (
              <motion.div
                key="view-expanded"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Back to overview bar */}
                <div className="flex items-center justify-between px-2">
                  <button
                    onClick={() => setViewMode('both')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group py-1"
                  >
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    <span>Back to overview</span>
                  </button>

                  <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                    Click sidebar to switch persona
                  </span>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex gap-5 min-h-[480px] lg:min-h-[520px] items-stretch">
                  
                  {/* LEFT ITEM */}
                  {activeTabName === 'publisher' ? (
                    /* EXPANDED PUBLISHER CARD */
                    <div className="flex-1 bg-gradient-to-br from-[#0B5CFF] via-[#0051E8] to-[#0042C7] rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-blue-400/20">
                      <div className="w-full lg:w-[55%] space-y-6 z-10">
                        <div className="space-y-1">
                          <span className="text-2xl sm:text-3xl font-light text-blue-100 block">
                            {publisherData.titlePrefix}
                          </span>
                          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                            {publisherData.title}
                          </h3>
                        </div>

                        <div className="space-y-4 text-blue-100/90 text-sm lg:text-base leading-relaxed font-normal">
                          <p>{publisherData.desc1}</p>
                          <p>{publisherData.desc2}</p>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={onOpenContact}
                            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-base border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105 cursor-pointer"
                          >
                            <span>Let's connect</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="w-full lg:w-[45%] flex justify-center items-center z-10">
                        <img
                          src={publisherData.image}
                          alt="Publisher Illustration"
                          className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-xl pointer-events-none"
                        />
                      </div>
                    </div>
                  ) : (
                    /* COLLAPSED PUBLISHER PILL */
                    <button
                      onClick={() => setViewMode('publisher')}
                      className="w-20 lg:w-24 bg-gradient-to-b from-[#0B5CFF] to-[#0042C7] rounded-[2.5rem] py-8 px-2 text-white shadow-xl flex flex-col items-center justify-between cursor-pointer border border-blue-400/20 group relative overflow-hidden transition-transform hover:scale-105"
                    >
                      <div className="h-6" />
                      <span className="[writing-mode:vertical-rl] rotate-180 text-white font-semibold text-lg lg:text-xl tracking-wide select-none whitespace-nowrap">
                        I'm a Publisher
                      </span>
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md group-hover:bg-white group-hover:text-blue-600 transition-all">
                        <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors" />
                      </div>
                    </button>
                  )}

                  {/* RIGHT ITEM */}
                  {activeTabName === 'advertiser' ? (
                    /* EXPANDED ADVERTISER CARD */
                    <div className="flex-1 bg-gradient-to-br from-[#0B5CFF] via-[#0051E8] to-[#0042C7] rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-blue-400/20">
                      <div className="w-full lg:w-[55%] space-y-6 z-10">
                        <div className="space-y-1">
                          <span className="text-2xl sm:text-3xl font-light text-blue-100 block">
                            {advertiserData.titlePrefix}
                          </span>
                          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                            {advertiserData.title}
                          </h3>
                        </div>

                        <div className="space-y-4 text-blue-100/90 text-sm lg:text-base leading-relaxed font-normal">
                          <p>{advertiserData.desc1}</p>
                          <p>{advertiserData.desc2}</p>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={onOpenContact}
                            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-base border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105 cursor-pointer"
                          >
                            <span>Let's connect</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="w-full lg:w-[45%] flex justify-center items-center z-10">
                        <img
                          src={advertiserData.image}
                          alt="Advertiser Illustration"
                          className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-xl pointer-events-none"
                        />
                      </div>
                    </div>
                  ) : (
                    /* COLLAPSED ADVERTISER PILL */
                    <button
                      onClick={() => setViewMode('advertiser')}
                      className="w-20 lg:w-24 bg-gradient-to-b from-[#0B5CFF] to-[#0042C7] rounded-[2.5rem] py-8 px-2 text-white shadow-xl flex flex-col items-center justify-between cursor-pointer border border-blue-400/20 group relative overflow-hidden transition-transform hover:scale-105"
                    >
                      <div className="h-6" />
                      <span className="[writing-mode:vertical-rl] rotate-180 text-white font-semibold text-lg lg:text-xl tracking-wide select-none whitespace-nowrap">
                        I'm an Advertiser
                      </span>
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md group-hover:bg-white group-hover:text-blue-600 transition-all">
                        <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors" />
                      </div>
                    </button>
                  )}
                </div>

                {/* Mobile View inside Expanded */}
                <div className="block md:hidden space-y-6">
                  <div className="flex bg-blue-950/10 p-1.5 rounded-full border border-blue-200/50">
                    <button
                      onClick={() => setViewMode('publisher')}
                      className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${
                        activeTabName === 'publisher'
                          ? 'bg-[#0B5CFF] text-white shadow-md'
                          : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      I'm a Publisher
                    </button>
                    <button
                      onClick={() => setViewMode('advertiser')}
                      className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${
                        activeTabName === 'advertiser'
                          ? 'bg-[#0B5CFF] text-white shadow-md'
                          : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      I'm an Advertiser
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-[#0B5CFF] via-[#0051E8] to-[#0042C7] rounded-[2rem] p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden space-y-6">
                    <div className="space-y-1">
                      <span className="text-xl sm:text-2xl font-light text-blue-100 block">
                        {activeExpanded.titlePrefix}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                        {activeExpanded.title}
                      </h3>
                    </div>

                    <div className="space-y-3 text-blue-100/90 text-sm leading-relaxed">
                      <p>{activeExpanded.desc1}</p>
                      <p>{activeExpanded.desc2}</p>
                    </div>

                    <div>
                      <button
                        onClick={onOpenContact}
                        className="w-full flex items-center justify-center gap-3 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-sm border border-white/40 shadow-md transition-all"
                      >
                        <span>Let's connect</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="pt-2 flex justify-center">
                      <img
                        src={activeExpanded.image}
                        alt={activeExpanded.title}
                        className="w-full max-w-xs object-contain"
                      />
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
