import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Allow time to read each slide; respect reduced-motion preferences.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      id: 0,
      bgImage: '/image/Home/herosection/blue.png',
      bgColor: 'bg-[#1D4ED8]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Grow Business',
      titleHighlightColor: 'text-[#9DFFB2]', // Mint Green
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
      ],
      leftCardImage: '/image/Home/herosection/image 95.png',
      rightCardImage: '/image/Home/herosection/image 97.png',
      topLeftGraphic: null,
      topRightGraphic: '/image/Home/herosection/Frame 1000004732.png',
      bottomLeftGraphic: '/image/Home/herosection/image 74.png',
      bottomRightGraphic: null,
      showTopBadge: true
    },
    {
      id: 1,
      bgImage: '/image/Home/herosection/purple.png',
      bgColor: 'bg-[#7C3AED]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Scale with us',
      titleHighlightColor: 'text-[#FEF08A]', // Yellow
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
        { number: '95%', label: 'Client Satisfaction' },
      ],
      leftCardImage: '/image/Home/herosection/Group 40114.png',
      rightCardImage: '/image/Home/herosection/Group 40112.png',
      topLeftGraphic: '/image/Home/herosection/image 7.png',
      topRightGraphic: '/image/Home/herosection/email.png',
      bottomLeftGraphic: null,
      bottomRightGraphic: '/image/Home/herosection/image 98.png',
      showTopBadge: false
    },
    {
      id: 2,
      bgImage: '/image/Home/herosection/lblue.png',
      bgColor: 'bg-[#06B6D4]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Expand',
      titleHighlightColor: 'text-white',
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
        { number: '95%', label: 'Client Satisfaction' },
      ],
      leftCardImage: '/image/Home/herosection/image 95.png',
      rightCardImage: '/image/Home/herosection/Group 40102.png',
      topLeftGraphic: '/image/Home/herosection/image 85.png',
      topRightGraphic: null,
      bottomLeftGraphic: null,
      bottomRightGraphic: '/image/Home/herosection/Group 40100.png',
      showTopBadge: false
    },
    {
      id: 3,
      bgImage: '/image/Home/herosection/green.png',
      bgColor: 'bg-[#10B981]',
      titlePrefix: 'Get Ready to',
      titleHighlight: 'Monetize',
      titleHighlightColor: 'text-white',
      subtitle: 'Fuel your digital success with a team dedicated to delivering real results.',
      stats: [
        { number: '1.5M+', label: 'Leads Generated' },
        { number: '85%', label: 'Conversion Rate' },
        { number: '24/7', label: 'Monitoring' },
        { number: '95%', label: 'Client Satisfaction' },
      ],
      leftCardImage: '/image/Home/herosection/image 95.png',
      rightCardImage: '/image/Home/herosection/Group 40102.png',
      topLeftGraphic: '/image/Home/herosection/image 7.png',
      topRightGraphic: '/image/Home/herosection/Group 40101.png',
      bottomLeftGraphic: null,
      bottomRightGraphic: '/image/Home/herosection/email.png',
      showTopBadge: false
    },
  ];

  const activeSlide = slides[currentSlide];

  return (
    <section id="hero" className="relative pt-24 lg:pt-28 pb-12 lg:pb-20 px-2 sm:px-4 lg:px-6 overflow-hidden w-full">
      <div className="w-full max-w-[1440px] mx-auto relative">
        
        {/* Main Hero Card Container */}
        <div 
          className={`hero-panel rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 text-white relative shadow-2xl overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[82vh] flex flex-col justify-between ${activeSlide.bgColor} bg-cover bg-center bg-no-repeat transition-all duration-500`}
          style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
        >

          {/* Top Center Pill Badge (Slide 1) */}
          {activeSlide.showTopBadge && (
            <div className="hero-badge absolute top-0 left-1/2 -translate-x-1/2 z-30">
              <a 
                href="#audience"
                className="bg-[#0A1C3E] text-white px-6 py-1.5 rounded-b-2xl text-xs font-bold border-b border-x border-white/20 shadow-md flex items-center gap-1.5 cursor-pointer inline-flex"
              >
                <span>Connect with our Specialist</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
              </a>
            </div>
          )}

          {/* Left Side Vertical Dots Indicator - Auto-playing and manually selectable */}
          <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-2 h-8 bg-white shadow-lg' 
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Static 3D Graphics per Slide */}
          {activeSlide.topLeftGraphic && (
            <img
              src={activeSlide.topLeftGraphic}
              alt="Top Left 3D Graphic"
              className="absolute top-8 left-16 sm:left-24 w-24 sm:w-32 object-contain pointer-events-none z-10 hidden lg:block"
            />
          )}

          {activeSlide.topRightGraphic && (
            <img
              src={activeSlide.topRightGraphic}
              alt="Top Right 3D Graphic"
              className="hero-top-graphic absolute top-12 right-12 sm:right-16 w-28 sm:w-36 object-contain pointer-events-none z-10 hidden lg:block"
            />
          )}

          {activeSlide.bottomLeftGraphic && (
            <img
              src={activeSlide.bottomLeftGraphic}
              alt="Bottom Left 3D Graphic"
              className="hero-bottom-graphic absolute bottom-6 left-8 sm:left-12 w-28 sm:w-36 object-contain pointer-events-none z-20 hidden lg:block"
            />
          )}

          {activeSlide.bottomRightGraphic && (
            <img
              src={activeSlide.bottomRightGraphic}
              alt="Bottom Right 3D Graphic"
              className="absolute bottom-10 right-10 sm:right-16 w-28 sm:w-36 object-contain pointer-events-none z-10 hidden lg:block"
            />
          )}

          {/* Main Grid Content */}
          <div className="hero-grid relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 pl-4 sm:pl-8">
            
            {/* Left Card Image */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <img 
                src={activeSlide.leftCardImage} 
                alt="Left Showcase Card" 
                className="w-full h-auto object-contain max-w-[270px] drop-shadow-2xl"
              />
            </div>

            {/* Center Text & Stats */}
            <div className="lg:col-span-6 text-center flex flex-col items-center pt-4">

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-white">
                {activeSlide.titlePrefix} <br />
                <span className={`${activeSlide.titleHighlightColor}`}>
                  {activeSlide.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-blue-100 font-normal max-w-lg leading-relaxed mb-6">
                {activeSlide.subtitle}
              </p>

              {/* Stats Row */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-white/20 mb-4">
                {activeSlide.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.number}
                    </span>
                    <span className="text-[11px] text-blue-100/90 font-medium mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Card Image */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <img 
                src={activeSlide.rightCardImage} 
                alt="Right Showcase Card" 
                className="w-full h-auto object-contain max-w-[270px] drop-shadow-2xl"
              />
            </div>

          </div>

        </div>

        {/* Bottom Overlapping CTA Capsule */}
        <div className="hero-cta absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <div className="bg-white rounded-full p-2 shadow-2xl border border-slate-100 flex items-center gap-3">
            <a
              href="#services"
              className="px-8 py-3 rounded-full font-bold text-sm text-white bg-[#0B1936] hover:bg-blue-700 shadow-md transition-colors cursor-pointer inline-block"
            >
              Get Started
            </a>
            
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full font-bold text-sm text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
