import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesShowcase({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const services = [
    {
      id: 'affiliate',
      title: 'Affiliate Marketing',
      subtitle: 'Performance-driven affiliate programs that help you acquire quality customers and scale faster.',
      cardImage: '/image/Home/section2/affiliate_marketing.png',
    },
    {
      id: 'email-sms',
      title: 'Email & SMS',
      subtitle: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.',
      cardImage: '/image/Home/section2/email_sms.png',
    },
    {
      id: 'list-management',
      title: 'List Management',
      subtitle: 'Clean, verified, and well-managed lists that improve reach, Inbox deliverability, and ROI.',
      cardImage: '/image/Home/section2/list_management.png',
    },
    {
      id: 'crm',
      title: 'CRM Consultation',
      subtitle: 'Streamline customer journeys with tailored CRM strategies, platform setup, and workflow automation.',
      cardImage: '/image/Home/section2/crm.png',
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      subtitle: 'High-performing websites, landing pages, and web tools built to convert visitors and scale your business.',
      cardImage: '/image/Home/section2/web_development.png',
    },
    {
      id: 'smm',
      title: 'SMM',
      subtitle: 'Engage and grow your brand audience through targeted social media marketing and performance ad campaigns.',
      cardImage: '/image/Home/section2/smm.png',
    },
  ];

  // Scroll listener to step through dots as page scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 0.999);
      const step = Math.floor(progress * services.length);

      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  const currentService = services[activeStep];

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="relative bg-[#FDFBF7] h-[250vh] pt-12 pb-24 bg-repeat bg-center"
      style={{ 
        backgroundImage: "url('/image/Home/section2/background.png')",
        backgroundSize: '600px auto'
      }}
    >
      {/* Sticky Container */}
      <div className="sticky top-24 lg:top-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Box matching Figma 1:1 */}
        <div className="bg-[#FFFDF9] rounded-[2.5rem] lg:rounded-[3rem] px-6 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-10 border border-slate-100 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: 3D Image Graphic with Smooth Motion Transition */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start min-h-[280px] sm:min-h-[340px] items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative w-full max-w-md flex items-center justify-center"
                >
                  <img
                    src={currentService.cardImage}
                    alt={currentService.title}
                    className="w-full h-auto max-h-[300px] sm:max-h-[360px] object-contain object-center drop-shadow-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Middle Column: Vertical 6-Dot Step Timeline matching screenshots */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative py-6">
              
              {/* Vertical Dashed Line */}
              <div className="absolute top-4 bottom-4 w-[2px] border-l-2 border-dashed border-slate-300"></div>

              {/* 6 Circular Dots */}
              <div className="relative z-10 flex flex-col items-center justify-between space-y-6">
                {services.map((service, idx) => {
                  const isActive = idx === activeStep;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveStep(idx)}
                      className="group relative flex items-center justify-center focus:outline-none cursor-pointer"
                      aria-label={`Go to ${service.title}`}
                    >
                      {isActive ? (
                        /* Active Green Dot matching screenshot */
                        <motion.div
                          layoutId="activeGreenDot"
                          className="w-5 h-5 rounded-full bg-[#10B981] ring-4 ring-emerald-100 shadow-md flex items-center justify-center transition-all duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </motion.div>
                      ) : (
                        /* Hollow Grey Circle matching screenshot */
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-300 transition-all duration-300 hover:border-slate-400 hover:scale-110"></div>
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Title & Subtitle matching screenshots 1:1 */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 pl-0 lg:pl-6">
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1936] tracking-tight leading-[1.12]">
                What We Can <br />
                Do For You?
              </h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
                    {currentService.title}
                  </span>

                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                    {currentService.subtitle}
                  </p>

                  <button
                    onClick={onOpenContact}
                    className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span>Learn More About {currentService.title}</span>
                    <span>&rarr;</span>
                  </button>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

          {/* Mobile Step Dots Switcher */}
          <div className="flex lg:hidden items-center justify-center gap-2 pt-6 border-t border-slate-100 mt-6">
            {services.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`transition-all rounded-full ${
                  activeStep === idx 
                    ? 'w-8 h-2.5 bg-[#10B981]' 
                    : 'w-2.5 h-2.5 bg-slate-300'
                }`}
                aria-label={`Step ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

