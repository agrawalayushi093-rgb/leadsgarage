import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AudienceSegments({ onOpenContact }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  const cardsData = {
    publisher: {
      id: 'publisher',
      pillLabel: "I'm a Publisher",
      tagline: 'Are you a',
      title: 'Publisher?',
      description1:
        'As a publisher with LeadsGarage, we help you maximize the value of your traffic and drive high-converting leads through verified, real-time channels.',
      description2:
        'Our team provides dedicated support, flexible payout structures, and access to top-tier campaign offers to scale your business.',
      buttonText: "Let's connect",
      image: '/image/Home/Frame 1000004723.png'
    },
    advertiser: {
      id: 'advertiser',
      pillLabel: "I'm an Advertiser",
      tagline: 'Are you a',
      title: 'Advertiser?',
      description1:
        'As an advertiser with LeadsGarage, we understand you need customers to succeed, and we have seen the results inbound calls can do to help grow a business.',
      description2:
        'Our support team will work with you to help distribute your offers, monitor traffic and transfers, and choose the best path that gets you the right buyer.',
      buttonText: "Let's connect",
      image: '/image/Home/Frame 1000004724.png'
    }
  };

  return (
    <section
      id="audience"
      className="py-16 sm:py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden w-full flex flex-col items-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Where Do you fit into this picture?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
            We combine technology, data, and expertise to deliver measurable growth for your business.
          </p>
        </div>

        {/* Outer Cards Container Centered */}
        <div
          onMouseLeave={() => setHoveredTab(null)}
          className="w-full max-w-[1340px] mx-auto min-h-[500px] flex justify-center"
        >
          <AnimatePresence mode="wait">
            {hoveredTab === null ? (
              /* DEFAULT STATE: 2 Equal Side-by-Side Cards Grid (Original Design) */
              <motion.div
                key="default-grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-[1340px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch justify-center"
              >
                {/* Publisher Card */}
                <div
                  onMouseEnter={() => setHoveredTab('publisher')}
                  className="bg-gradient-to-b from-[#2F5EEA] to-[#1E43D3] rounded-[2.5rem] p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl border border-blue-400/20 cursor-pointer transition-all duration-300 min-h-[460px]"
                >
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-blue-100 block tracking-tight">
                      Are you a
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                      Publisher?
                    </h3>
                  </div>

                  <div className="mt-8 flex justify-center items-end">
                    <img
                      src="/image/Home/Frame 1000004723.png"
                      alt="Publisher Illustration"
                      className="w-full max-w-md object-contain transform group-hover:scale-[1.03] transition-transform duration-300 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Advertiser Card */}
                <div
                  onMouseEnter={() => setHoveredTab('advertiser')}
                  className="bg-gradient-to-b from-[#2F5EEA] to-[#1E43D3] rounded-[2.5rem] p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl border border-blue-400/20 cursor-pointer transition-all duration-300 min-h-[460px]"
                >
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-blue-100 block tracking-tight">
                      Are you a
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                      Advertiser?
                    </h3>
                  </div>

                  <div className="mt-8 flex justify-center items-end">
                    <img
                      src="/image/Home/Frame 1000004724.png"
                      alt="Advertiser Illustration"
                      className="w-full max-w-md object-contain transform group-hover:scale-[1.03] transition-transform duration-300 pointer-events-none"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              /* HOVERED STATE: Screenshot Design (1 Expanded Card Panel + 1 Collapsed Vertical Pill Bar) */
              <motion.div
                key="hovered-panel"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[1340px] mx-auto flex flex-col md:flex-row gap-4 lg:gap-6 items-stretch justify-center min-h-[500px]"
              >
                {/* Left Component */}
                {hoveredTab === 'publisher' ? (
                  /* Expanded Publisher Panel */
                  <div className="flex-1 md:flex-[5] lg:flex-[6] bg-gradient-to-br from-[#1B5CFF] via-[#0B52F2] to-[#0444D0] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-blue-400/30 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="w-full lg:w-[55%] flex flex-col justify-between space-y-6 z-10">
                      <div>
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-blue-100 block tracking-tight">
                          {cardsData.publisher.tagline}
                        </span>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mt-1">
                          {cardsData.publisher.title}
                        </h3>
                      </div>

                      <div className="space-y-4 text-blue-50/90 text-sm sm:text-base leading-relaxed font-normal">
                        <p className="!text-blue-50/90">{cardsData.publisher.description1}</p>
                        <p className="!text-blue-50/90">{cardsData.publisher.description2}</p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenContact) onOpenContact();
                          }}
                          className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1853E6] hover:bg-[#1245C8] border border-blue-300/40 text-white font-semibold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                          <span>{cardsData.publisher.buttonText}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="w-full lg:w-[45%] flex items-end justify-center lg:justify-end h-full">
                      <img
                        src={cardsData.publisher.image}
                        alt="Publisher Illustration"
                        className="w-full max-w-md lg:max-w-lg object-contain block drop-shadow-2xl pointer-events-none"
                      />
                    </div>
                  </div>
                ) : (
                  /* Collapsed Publisher Pill Bar */
                  <div
                    onMouseEnter={() => setHoveredTab('publisher')}
                    className="flex-none w-full md:w-20 lg:w-24 bg-[#1B5CFF] hover:bg-[#1552EA] rounded-[2.5rem] p-4 flex md:flex-col items-center justify-between shadow-xl border border-blue-400/20 group cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <span className="hidden md:block -rotate-90 whitespace-nowrap text-white font-medium text-base lg:text-lg tracking-wide select-none group-hover:text-blue-100 transition-colors">
                        {cardsData.publisher.pillLabel}
                      </span>
                      <span className="block md:hidden text-white font-medium text-base">
                        {cardsData.publisher.pillLabel}
                      </span>
                    </div>

                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform shadow-md">
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                  </div>
                )}

                {/* Right Component */}
                {hoveredTab === 'advertiser' ? (
                  /* Expanded Advertiser Panel */
                  <div className="flex-1 md:flex-[5] lg:flex-[6] bg-gradient-to-br from-[#1B5CFF] via-[#0B52F2] to-[#0444D0] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-blue-400/30 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="w-full lg:w-[55%] flex flex-col justify-between space-y-6 z-10">
                      <div>
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-blue-100 block tracking-tight">
                          {cardsData.advertiser.tagline}
                        </span>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mt-1">
                          {cardsData.advertiser.title}
                        </h3>
                      </div>

                      <div className="space-y-4 text-blue-50/90 text-sm sm:text-base leading-relaxed font-normal">
                        <p className="!text-blue-50/90">{cardsData.advertiser.description1}</p>
                        <p className="!text-blue-50/90">{cardsData.advertiser.description2}</p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenContact) onOpenContact();
                          }}
                          className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1853E6] hover:bg-[#1245C8] border border-blue-300/40 text-white font-semibold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                          <span>{cardsData.advertiser.buttonText}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="w-full lg:w-[45%] flex items-end justify-center lg:justify-end h-full">
                      <img
                        src={cardsData.advertiser.image}
                        alt="Advertiser Illustration"
                        className="w-full max-w-md lg:max-w-lg object-contain block drop-shadow-2xl pointer-events-none"
                      />
                    </div>
                  </div>
                ) : (
                  /* Collapsed Advertiser Pill Bar */
                  <div
                    onMouseEnter={() => setHoveredTab('advertiser')}
                    className="flex-none w-full md:w-20 lg:w-24 bg-[#1B5CFF] hover:bg-[#1552EA] rounded-[2.5rem] p-4 flex md:flex-col items-center justify-between shadow-xl border border-blue-400/20 group cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <span className="hidden md:block -rotate-90 whitespace-nowrap text-white font-medium text-base lg:text-lg tracking-wide select-none group-hover:text-blue-100 transition-colors">
                        {cardsData.advertiser.pillLabel}
                      </span>
                      <span className="block md:hidden text-white font-medium text-base">
                        {cardsData.advertiser.pillLabel}
                      </span>
                    </div>

                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform shadow-md">
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
