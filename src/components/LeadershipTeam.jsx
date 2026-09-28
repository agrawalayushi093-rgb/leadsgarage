import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: 'Kunal Shrivastava',
      role: 'Co-Founder & CEO',
      image: '/image/Home/kunal.png',
      linkedin: 'https://linkedin.com',
      email: 'mailto:kunal@leadsgarage.com',
    },
    {
      name: 'Harshit Shrivastava',
      role: 'Co-Founder & CEO',
      image: '/image/Home/Harshit.png',
      linkedin: 'https://linkedin.com',
      email: 'mailto:harshit@leadsgarage.com',
    },
  ];

  return (
    <section id="team" className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Light Grid Background matching Figma Group 40121.png 1:1 */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-start">
        <img
          src="/image/Home/Group 40121.png"
          alt="Grid Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            The Faces Behind Our Success
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
            Our leadership team brings a wealth of experience, innovation, and passion to Leads Garage.
          </p>
        </div>

        {/* 2 Leadership Cards - Both clean by default like Harshit card, revealing white card + social links on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto items-start">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-[2.5rem] p-6 text-center transition-all duration-500 border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
            >
              {/* Photo Box */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] bg-slate-900 mb-5 border border-slate-100/50 shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.02] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Leader Info */}
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                {leader.name}
              </h3>
              <p className="text-sm font-semibold text-slate-500 mt-1">
                {leader.role}
              </p>

              {/* Social Buttons - Reveals smoothly on hover like Kunal card */}
              <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-32 transition-all duration-500 overflow-hidden">
                <span className="text-[11px] font-bold text-slate-400">Let's Connect</span>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white flex items-center justify-center transition-colors shadow-md hover:scale-110"
                    aria-label={`${leader.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 fill-current" />
                  </a>

                  <a
                    href={leader.email}
                    className="w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white flex items-center justify-center transition-colors shadow-md hover:scale-110"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
