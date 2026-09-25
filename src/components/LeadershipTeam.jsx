import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: 'Kunal Shrivastava',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      linkedin: 'https://linkedin.com',
      email: 'mailto:kunal@leadsgarage.com'
    },
    {
      name: 'Harshit Shrivastava',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      linkedin: 'https://linkedin.com',
      email: 'mailto:harshit@leadsgarage.com'
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            The Faces Behind Our Success
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
            Our leadership team brings a wealth of experience, innovation, and passion to Leads Garage.
          </p>
        </div>

        {/* 2 Leadership Cards Matching Figma Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card-soft hover:shadow-card-hover transition-all duration-300 text-center group"
            >
              {/* Photo Box */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                />
              </div>

              {/* Leader Info */}
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {leader.name}
              </h3>
              <p className="text-sm font-semibold text-slate-500 mt-1">
                {leader.role}
              </p>

              {/* Social Buttons matching Figma LinkedIn & Email icons */}
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={`${leader.name} LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={leader.email}
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={`Email ${leader.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
