import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Rocket, BarChart3, Send, Users, Layers, Bell, Sparkles } from 'lucide-react';

export default function EcosystemNetwork() {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', position: 'top-4 left-12' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', position: 'top-10 right-16' },
    { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200', position: 'top-1/3 left-6' },
    { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200', position: 'top-1/2 right-8' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', position: 'bottom-12 left-16' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', position: 'bottom-8 right-24' },
    { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200', position: 'bottom-20 left-1/3' },
  ];

  const icons = [
    { icon: MessageSquare, color: 'bg-purple-500 text-white', position: 'top-16 left-1/4' },
    { icon: Rocket, color: 'bg-blue-500 text-white', position: 'top-8 left-1/2' },
    { icon: BarChart3, color: 'bg-teal-500 text-white', position: 'top-1/3 right-1/4' },
    { icon: Send, color: 'bg-sky-500 text-white', position: 'bottom-1/3 left-1/6' },
    { icon: Users, color: 'bg-cyan-500 text-white', position: 'bottom-16 left-1/2' },
    { icon: Layers, color: 'bg-indigo-500 text-white', position: 'bottom-24 right-1/3' },
    { icon: Bell, color: 'bg-purple-400 text-white', position: 'bottom-1/3 right-1/6' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Node Container */}
        <div className="relative min-h-[420px] sm:min-h-[480px] flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-md rounded-[3rem] border border-slate-200/80 shadow-card-soft">
          
          {/* Floating Avatars */}
          {avatars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`absolute hidden md:block ${item.position} group`}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-lg ring-4 ring-blue-500/10 group-hover:scale-110 transition-transform">
                <img src={item.src} alt="Network User" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}

          {/* Floating Spherical Icons */}
          {icons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`absolute hidden md:flex ${item.position}`}
              >
                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              </motion.div>
            );
          })}

          {/* Center Main Text */}
          <div className="max-w-xl mx-auto relative z-20 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-widest uppercase border border-emerald-200 shadow-sm">
              GROW WITH US
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              More channels. <br />
              More customers. <br />
              <span className="text-blue-600">More growth.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Join thousands of connected partners delivering high-performing digital marketing outcomes worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
