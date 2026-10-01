import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function QualityControl() {
  const slides = [
    { src: '/image/Home/Group 39995.png', alt: 'Propensity Score Phone Screen' },
    { src: '/image/Home/Group 39999.png', alt: 'Verified 100% Clean Phone Screen' },
    { src: '/image/Home/Group 39996.png', alt: 'Propensity Score Phone Screen Right' },
  ];
  const [activeSlide, setActiveSlide] = useState(1);
  const leftSlide = slides[(activeSlide + slides.length - 1) % slides.length];
  const centerSlide = slides[activeSlide];
  const rightSlide = slides[(activeSlide + 1) % slides.length];

  return (
    <section id="quality" className="py-16 sm:py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why We Deliver Better Results
          </h2>

          {/* Horizontal Dashed Line with 5 Center Dots Matching Screenshot 1:1 */}
          <div className="relative flex items-center justify-center my-6 sm:my-8">
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <div className="w-full border-t border-dashed border-slate-300"></div>
            </div>

            <div className="relative z-10 bg-[#FDFBF7] px-6 flex items-center gap-3">
              {Array.from({ length: 5 }, (_, idx) => {
                const slideIndex = idx - 1;
                const isWorkingDot = slideIndex >= 0 && slideIndex < slides.length;
                return (
                <button
                  key={idx}
                  onClick={() => isWorkingDot && setActiveSlide(slideIndex)}
                  disabled={!isWorkingDot}
                  className={`transition-all duration-300 rounded-full cursor-pointer disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                    activeSlide === slideIndex
                      ? 'w-3.5 h-3.5 bg-[#00E599] ring-4 ring-emerald-100 shadow-sm scale-110'
                      : 'w-2.5 h-2.5 bg-slate-300 enabled:hover:bg-slate-400'
                  }`}
                  aria-label={isWorkingDot ? `Go to slide ${slideIndex + 1}` : `Slide ${idx + 1} unavailable`}
                  aria-controls="quality-slide-display"
                  aria-current={activeSlide === slideIndex ? 'step' : undefined}
                />
                );
              })}
            </div>
          </div>

          {/* Sub Title & Description */}
          <div className="space-y-3 mb-10 sm:mb-14">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Quality Control
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
              Premium placements with every impression protected from bots, unsafe content, and domain-arbitrage traffic.
            </p>
          </div>
        </div>

        {/* 3 Blue Phone Screens Visual Display matching reference 1:1 */}
        <div id="quality-slide-display"
          aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}
          className="quality-phones relative w-full max-w-[1100px] mx-auto flex justify-center items-center py-6 sm:py-10 px-2 min-h-[380px] sm:min-h-[500px]">

          {/* Left Phone Screen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-[4%] sm:left-[10%] md:left-[18%] lg:left-[22%] z-10 w-[180px] sm:w-[240px] md:w-[270px] transform -translate-x-1/2 scale-90 sm:scale-95 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={leftSlide.src}
              alt={leftSlide.alt}
              style={{ aspectRatio: '369 / 649' }}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Center Phone Screen (Main / Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-20 w-[210px] sm:w-[280px] md:w-[320px] transform hover:scale-[1.03] transition-all duration-300"
          >
            <img
              src={centerSlide.src}
              alt={centerSlide.alt}
              style={{ aspectRatio: '427 / 749' }}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Phone Screen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute right-[4%] sm:right-[10%] md:right-[18%] lg:right-[22%] z-10 w-[180px] sm:w-[240px] md:w-[270px] transform translate-x-1/2 scale-90 sm:scale-95 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={rightSlide.src}
              alt={rightSlide.alt}
              style={{ aspectRatio: '369 / 649' }}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
