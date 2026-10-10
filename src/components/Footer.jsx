import { publicAsset } from '../utils/publicAsset';
import React from 'react';
import { ArrowRight, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Partnership',
      links: [
        { name: 'Brands', href: '#audience' },
        { name: 'Publisher', href: '#audience' },
        { name: 'Lead Buyer', href: '#audience' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Affiliate Marketing', href: '#services' },
        { name: 'Email & SMS', href: '#services' },
        { name: 'List management', href: '#services' },
        { name: 'CRM Consultation', href: '#services' },
        { name: 'Web Dev.', href: '#services' },
        { name: 'SMM', href: '#services' },
      ],
    },
    {
      title: 'Industry',
      links: [
        { name: 'Finance', href: '#solutions' },
        { name: 'Insurance', href: '#solutions' },
        { name: 'Dating', href: '#solutions' },
        { name: 'Home Service', href: '#solutions' },
        { name: 'Nutra', href: '#solutions' },
        { name: 'E-Comm', href: '#solutions' },
        { name: 'I-Game', href: '#solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#team' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Career', href: '#team' },
        { name: 'Term & Condition', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'CA Privacy Right', href: '#' },
      ],
    },
  ];

  return (
    <footer className="footer-section relative w-full overflow-hidden pt-12 sm:pt-16 pb-16 lg:pb-24 bg-[#FDFBF7]">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-multiply">
        <img
          src={publicAsset("/image/Home/footer/Rectangle 2344.png")}
          alt="Shadow Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating White Footer Card matching Reference 1:1 */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-8 sm:p-10 lg:p-14 shadow-2xl border border-slate-100">
          
          {/* 5 Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
            {columns.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="text-xs font-extrabold text-slate-900 tracking-wide uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name} className="flex items-start gap-1.5">
                      <span className="text-slate-400 text-xs font-bold select-none">•</span>
                      <a
                        href={link.href}
                        className="text-xs font-medium text-slate-600 hover:text-[#00E599] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Column 5: Address & Contact */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <div className="space-y-4 text-xs font-medium text-slate-600 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <span className="text-xs leading-relaxed text-slate-600 font-medium">
                    123 Digital Ave, Tech City, TC 12345
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <a
                    href="mailto:Support@Leadsgarage"
                    className="text-xs font-medium text-slate-600 hover:text-[#00E599] transition-colors"
                  >
                    Support@Leadsgarage
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-slate-100 my-6"></div>

          {/* Bottom Row */}
          <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: SVG Logo & Copyright */}
            <div className="flex flex-col gap-1.5 text-center md:text-left items-center md:items-start">
              <a href="#" className="inline-block">
                <img
                  src={publicAsset("/image/Home/footer/Leads_Garage_Logo.svg")}
                  alt="Leads Garage Logo"
                  className="h-7 w-auto object-contain"
                />
              </a>
              <span className="text-[11px] font-normal text-slate-400">
                &copy; 2026 Leads Garage. All rights reserved.
              </span>
            </div>

            {/* Center: Social Buttons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#00E599] hover:border-[#00E599] transition-all"
                    aria-label={item.label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>

            {/* Right: Contact Us Button */}
            <div>
              <a
                href="#hero"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-bold text-xs text-slate-900 bg-[#00E599] hover:bg-[#00D68F] shadow-md transition-all transform hover:scale-105 cursor-pointer"
              >
                <span>Contact Us</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
