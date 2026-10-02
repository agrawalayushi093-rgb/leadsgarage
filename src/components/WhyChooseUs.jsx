import React from 'react';
import styles from './WhyChooseUs.module.css';

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
      description: "We deliver leads the moment they're generated, so you never miss an opportunity.",
      image: '/image/Home/section3/Group 39954.png'
    },
    {
      id: 'link-out',
      title: 'High-Intent Link-Out Traffic',
      description: "Drive qualified, high-intent traffic that's ready to take action.",
      image: '/image/Home/section3/Group 40094.png'
    },
    {
      id: 'smart-list',
      title: 'Smart List Management',
      description: 'Clean, verified, and well-managed lists that improve reach and deliverability.',
      image: '/image/Home/section3/Group 40063.png'
    },
    {
      id: 'geo-targeted',
      title: 'Geo-Targeted Customer Acquisition',
      description: 'Reach the right audience in the right location for higher conversions and better ROI.',
      image: '/image/Home/section3/Group 39956.png'
    }
  ];

  return (
    <section id="solutions" className="why-section relative w-full bg-transparent py-10 sm:py-14 lg:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Heading and cards share one scroll pin and release together. */}
        <div className="why-heading z-50 bg-transparent backdrop-blur-md pt-6 pb-6 mb-8 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black text-[#222225] tracking-tight whitespace-nowrap">
            Why Leading Brands Choose LeadsGarage
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-[#55555C] font-normal mt-3 max-w-3xl mx-auto tracking-normal">
            Powerful solutions. Smarter strategies. Measurable growth for your business.
          </p>
        </div>

        <div className={`cards-stage ${styles.stack} w-full`}>
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className={`card card-${idx + 1} ${styles.item} w-full flex justify-center group`}
            >
              <div className="solution-surface w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-none bg-transparent">
                <div className="solution-art w-full overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain block transform scale-[1.035] origin-top-left transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="solution-copy">
                  <h3 className={`solution-title solution-title-${card.id}`}>
                    {card.id === 'call-transfers' ? <>Instant Call<span className="desktop-break"><br /></span> Transfers</> :
                      card.id === 'lead-delivery' ? <>Real-Time<span className="desktop-break"><br /></span> Lead Delivery</> :
                      card.id === 'link-out' ? <>High-Intent<span className="desktop-break"><br /></span> Link-Out Traffic</> :
                      card.id === 'smart-list' ? <>Smart List<span className="desktop-break"><br /></span> Management</> :
                      <>Geo-Targeted<span className="desktop-break"><br /></span> Customer Acquisition</>}
                  </h3>
                  <p className={`solution-description solution-description-${card.id}`}>
                    {card.id === 'call-transfers' ? <>Connect callers instantly with your agents<span className="desktop-break"><br /></span> and close more deals, faster.</> :
                      card.id === 'lead-delivery' ? <>We deliver leads the moment they're<span className="desktop-break"><br /></span> generated, so you never miss an opportunity.</> :
                      card.id === 'link-out' ? <>Drive qualified, high-intent traffic<span className="desktop-break"><br /></span> that's ready to take action.</> :
                      card.id === 'smart-list' ? <>Clean, verified, and well-managed lists<span className="desktop-break"><br /></span> that improve reach and deliverability.</> :
                      <>Reach the right audience in the right location<span className="desktop-break"><br /></span> for higher conversions and better ROI.</>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
