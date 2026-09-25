import React from 'react';
import { ArrowRight, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const columns = [
    {
      title: 'Partnership',
      links: [
        { name: 'Brands', href: '#audience' },
        { name: 'Publisher', href: '#audience' },
        { name: 'Lead Buyer', href: '#audience' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Affiliate Marketing', href: '#services' },
        { name: 'Email & SMS', href: '#services' },
        { name: 'List Management', href: '#services' },
        { name: 'CRM Consultation', href: '#services' },
        { name: 'Web Dev', href: '#services' },
        { name: 'SMM', href: '#services' },
      ]
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
        { name: 'i-Game', href: '#solutions' },
      ]
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
      ]
    },
  ];

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-12 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5 Column Footer Grid Matching Figma */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-100">
          
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Contact Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase">
              Location & Contact
            </h4>
            <div className="space-y-3 text-xs font-semibold text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>123 Digital Ave, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:Support@Leadsgarage.com" className="hover:text-blue-600 transition-colors">
                  Support@Leadsgarage
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching Figma Logo, Copyright, Socials, and Green Contact Us Pill */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src="/image/leads-garage.png" 
                alt="Leads Garage" 
                className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>
            <span className="text-xs font-medium text-slate-400">
              © 2026 Leads Garage. All rights reserved.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Green Contact Us Pill Button matching Figma */}
          <div>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow-md transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
