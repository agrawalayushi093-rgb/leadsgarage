import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs({ onOpenContact }) {
  const cards = [
    {
      id: 'call-transfers',
      title: 'Instant Call Transfers',
      image: '/image/Home/section3/Group 40062.png'
    },
    {
      id: 'lead-delivery',
      title: 'Real-Time Lead Delivery',
      image: '/image/Home/section3/Group 39954.png'
    },
    {
      id: 'link-out',
      title: 'High-Intent Link-Out Traffic',
      image: '/image/Home/section3/Group 40094.png'
    },
    {
      id: 'smart-list',
      title: 'Smart List Management',
      image: '/image/Home/section3/Group 40063.png'
    },
    {
      id: 'geo-targeted',
      title: 'Geo-Targeted Customer Acquisition',
      image: '/image/Home/section3/Group 39956.png'
    }
  ];

  return (
    <section id="solutions" className="pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 bg-[#FDFBF7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky Header: Remains 100% visible at the top while slides/cards stack underneath */}
        <div className="sticky top-16 sm:top-20 z-40 bg-[#FDFBF7]/95 backdrop-blur-md pt-4 pb-6 text-center max-w-5xl mx-auto transition-all">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-black text-slate-900 tracking-tight sm:whitespace-nowrap">
            Why Leading Brands Choose LeadsGarage
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium mt-2">
            Powerful solutions. Smarter strategies. Measurable growth for your business.
          </p>
        </div>

        {/* Stacking Cards Container: Cards stack cleanly below the sticky heading */}
        <div className="relative space-y-6 sm:space-y-8 pt-4 pb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="sticky w-full flex justify-center cursor-pointer group"
              style={{
                top: `calc(190px + ${idx * 20}px)`,
                zIndex: idx + 10
              }}
              onClick={onOpenContact}
            >
              <div className="w-full relative transition-transform duration-300 group-hover:scale-[1.01]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
