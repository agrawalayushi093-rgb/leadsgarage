import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QualityControl() {
  const slides = [
    { id: 0, src: '/image/Home/Group 39995.png', alt: 'Propensity Score Phone Screen' },
    { id: 1, src: '/image/Home/Group 39999.png', alt: 'Verified 100% Clean Phone Screen' },
    { id: 2, src: '/image/Home/Group 39996.png', alt: 'Propensity Score Phone Screen Right' },
  ];

  const [activeSlide, setActiveSlide] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay timer: Automatically cycles cards every 3.5 seconds (Pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const leftSlideIndex = (activeSlide + slides.length - 1) % slides.length;
  const centerSlideIndex = activeSlide;
  const rightSlideIndex = (activeSlide + 1) % slides.length;

  const leftSlide = slides[leftSlideIndex];
  const centerSlide = slides[centerSlideIndex];
  const rightSlide = slides[rightSlideIndex];

  return (
    <section id="quality" className="py-16 sm:py-20 lg:py-28 bg-transparent relative overflow-hidden w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why We Deliver Better Results
          </h2>

          {/* Horizontal Dashed Line with 3 Center Dots Matching 3 Cards 1:1 */}
          <div className="relative flex items-center justify-center my-6 sm:my-8">
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <div className="w-full border-t border-dashed border-slate-300"></div>
            </div>

            <div className="relative z-10 bg-[#FDFBF7] px-6 flex items-center gap-4">
              {slides.map((_, idx) => {
                const isActive = activeSlide === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                      isActive
                        ? 'w-4 h-4 bg-[#00E599] ring-4 ring-emerald-100 shadow-md scale-110'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to card slide ${idx + 1}`}
                    aria-current={isActive ? 'step' : undefined}
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

        {/* 3 Blue Phone Screens Visual Display with Autoplay & Motion Animation */}
        <div
          id="quality-slide-display"
          aria-label={`Card slide ${activeSlide + 1} of ${slides.length}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="quality-phones relative w-full max-w-[1100px] mx-auto flex justify-center items-center py-6 sm:py-10 px-2 min-h-[380px] sm:min-h-[500px]"
        >
          <AnimatePresence mode="popLayout">
            {/* Left Phone Screen */}
            <motion.div
              key={`left-${leftSlide.id}`}
              initial={{ opacity: 0, x: -50, scale: 0.85 }}
              animate={{ opacity: 0.6, x: 0, scale: 0.95 }}
              exit={{ opacity: 0, x: -30, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute left-[4%] sm:left-[10%] md:left-[18%] lg:left-[22%] z-10 w-[180px] sm:w-[240px] md:w-[270px] transform -translate-x-1/2 hover:opacity-100 transition-opacity duration-300"
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
              key={`center-${centerSlide.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
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
              key={`right-${rightSlide.id}`}
              initial={{ opacity: 0, x: 50, scale: 0.85 }}
              animate={{ opacity: 0.6, x: 0, scale: 0.95 }}
              exit={{ opacity: 0, x: 30, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute right-[4%] sm:right-[10%] md:right-[18%] lg:right-[22%] z-10 w-[180px] sm:w-[240px] md:w-[270px] transform translate-x-1/2 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={rightSlide.src}
                alt={rightSlide.alt}
                style={{ aspectRatio: '369 / 649' }}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
