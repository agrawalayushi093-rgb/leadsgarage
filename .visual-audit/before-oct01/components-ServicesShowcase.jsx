import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesShowcase() {
  const services = [
    {
      id: 'affiliate',
      title: 'Affiliate Marketing',
      subtitle: 'Performance-driven affiliate programs that help you acquire quality customers and scale faster.',
      bgImage: '/image/Home/section2/am1.png',
      activeDotIndex: 0,
    },
    {
      id: 'email-sms',
      title: 'Email & SMS',
      subtitle: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.',
      bgImage: '/image/Home/section2/email.png',
      activeDotIndex: 1,
    },
    {
      id: 'list-management',
      title: 'List Management',
      subtitle: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.',
      bgImage: '/image/Home/section2/list management.png',
      activeDotIndex: 2,
    },
    {
      id: 'crm',
      title: 'CRM Consultation',
      subtitle: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.',
      bgImage: '/image/Home/section2/crm1.png',
      activeDotIndex: 3,
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      subtitle: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.',
      bgImage: '/image/Home/section2/webdevelopment.png',
      activeDotIndex: 4,
    },
    {
      id: 'smm',
      title: 'SMM',
      subtitle: 'Reach your audience instantly with targeted email and SMS campaigns that drive real engagement.',
      bgImage: '/image/Home/section2/smm1.png',
      activeDotIndex: 5,
    },
  ];

  return (
    <section 
      id="services" 
      className="relative bg-[#FDFBF7] py-16 sm:py-20 lg:py-24 bg-repeat bg-center w-full overflow-hidden"
      style={{ 
        backgroundImage: "url('/image/Home/section2/background.png')",
        backgroundSize: '600px auto'
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="service-card w-full bg-[#FFFDF9] rounded-[2.5rem] lg:rounded-[3rem] px-6 sm:px-10 lg:px-14 py-8 sm:py-12 lg:py-14 border border-slate-100 shadow-xl relative overflow-hidden transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Artwork Image + Overlaid White Service Card */}
              <div className="lg:col-span-6 relative flex justify-center items-center py-2 sm:py-4">
                <div className="service-art relative flex items-center justify-center w-full max-w-[480px]">
                  {/* 1. Large Artwork Image */}
                  <div className="relative w-full aspect-square sm:w-[420px] sm:h-[420px] rounded-[2.2rem] overflow-hidden shadow-2xl transform -rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="w-full h-full object-cover select-none"
                    />
                  </div>

                  {/* 2. White Card Overlaid Exactly Like Reference */}
                  <div className="service-caption absolute bottom-2 sm:bottom-4 left-4 sm:left-6 z-20 w-[85%] sm:w-[80%] max-w-[340px] bg-white rounded-[1.8rem] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Column: Delicate Vertical Dashed Line Divider with 6 Node Dots */}
              <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative py-6 min-h-[320px]">
                {/* Vertical Dashed Line */}
                <div className="absolute top-4 bottom-4 w-[2px] border-l-2 border-dashed border-slate-300" />

                {/* 6 Circular Node Dots matching reference 1:1 */}
                <div className="relative z-10 flex flex-col items-center justify-between space-y-6">
                  {[0, 1, 2, 3, 4, 5].map((dotIdx) => {
                    const isActive = dotIdx === service.activeDotIndex;

                    return (
                      <div
                        key={dotIdx}
                        className="flex items-center justify-center"
                      >
                        {isActive ? (
                          <div className="w-4 h-4 rounded-full bg-[#10B981] ring-4 ring-emerald-100 shadow-md" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-white border-2 border-slate-300" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Heading & Subtitle matching reference 1:1 */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 pl-0 lg:pl-6 text-center lg:text-left">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1C3E] tracking-tight leading-[1.12]">
                  What We Can <br className="hidden sm:inline" />
                  Do For You?
                </h2>

                {/* Supporting Subtitle Text */}
                <div className="space-y-1 text-slate-600 font-normal text-sm sm:text-base lg:text-lg leading-relaxed">
                  <p>One Partner. Multiple Solutions.</p>
                  <p>Built Around Your Goals.</p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
