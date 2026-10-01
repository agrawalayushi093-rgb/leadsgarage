import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 'call-transfers',
      title: 'Instant Call Transfers',
      description: 'Connect callers instantly with your agents and close more deals, faster.',
      image: '/image/Home/section3/Group 40062.png'
    },
    {
      id: 'lead-delivery',
      title: 'Real-Time Lead Delivery',
      description: 'Deliver high-intent, exclusive leads directly to your CRM with zero delay.',
      image: '/image/Home/section3/Group 39954.png'
    },
    {
      id: 'link-out',
      title: 'High-Intent Link-Out Traffic',
      description: 'Engage active consumers searching for your specific products and services with high-conversion traffic flows.',
      image: '/image/Home/section3/Group 40094.png'
    },
    {
      id: 'smart-list',
      title: 'Smart List Management',
      description: 'Optimize, segment, and monetize your data assets with total precision.',
      image: '/image/Home/section3/Group 40063.png'
    },
    {
      id: 'geo-targeted',
      title: 'Geo-Targeted Customer Acquisition',
      description: 'Target ideal customers with precision by zip code, state, or region.',
      image: '/image/Home/section3/Group 39956.png'
    }
  ];

  return (
    <section id="solutions" className="why-section relative w-full bg-transparent py-10 sm:py-14 lg:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Sticky Header - Pins to top while cards stack underneath */}
        <div className="why-heading sticky top-0 z-50 bg-transparent backdrop-blur-md pt-6 pb-6 mb-8 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black text-[#222225] tracking-tight whitespace-nowrap">
            Why Leading Brands Choose LeadsGarage
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-[#55555C] font-normal mt-3 max-w-3xl mx-auto tracking-normal">
            Powerful solutions. Smarter strategies. Measurable growth for your business.
          </p>
        </div>

        {/* Cards Stage with Sticky Stacking Scroll Effect */}
        <div className="cards-stage relative space-y-12 sm:space-y-16 pb-24 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`card card-${idx + 1} sticky w-full flex justify-center group`}
              style={{
                top: `calc(150px + ${idx * 28}px)`,
                zIndex: idx + 10
              }}
            >
              <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-none bg-transparent">
                <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain block transform scale-[1.035] origin-top-left transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



