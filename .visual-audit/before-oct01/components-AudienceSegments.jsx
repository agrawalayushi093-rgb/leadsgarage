import React from 'react';
import { motion } from 'framer-motion';

export default function AudienceSegments() {
  return (
    <section
      id="audience"
      className="py-16 sm:py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden w-full"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Where Do you fit into this picture?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
            We combine technology, data, and expertise to deliver measurable growth for your business.
          </p>
        </div>

        {/* 2-Column Side-by-Side Blue Cards Grid matching Reference Screenshot 1:1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1320px] mx-auto">
          
          {/* Card 1: Publisher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-b from-[#2F5EEA] to-[#1E43D3] rounded-[2.5rem] p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl border border-blue-400/20"
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
                className="w-full max-w-md object-contain transform group-hover:scale-[1.02] transition-transform duration-300 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Card 2: Advertiser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-b from-[#2F5EEA] to-[#1E43D3] rounded-[2.5rem] p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl border border-blue-400/20"
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
                className="w-full max-w-md object-contain transform group-hover:scale-[1.02] transition-transform duration-300 pointer-events-none"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
