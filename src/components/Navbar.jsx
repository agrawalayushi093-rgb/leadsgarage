import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  // Continuous scroll progress bounded between 0 and 1 over 0px -> 200px scroll range
  const scrollProgress = useTransform(scrollY, [0, 200], [0, 1]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Partnerships', href: '#audience' },
    { name: 'Solutions', href: '#services' },
    { name: 'Industries', href: '#solutions' },
    { name: 'Resources', href: '#quality' },
    { name: 'Company', href: '#team' },
  ];

  return (
    <>
      <motion.header
        className={`site-header ${styles.header}`}
        style={{ '--nav-progress': scrollProgress }}
      >
        {/* Navigation Bar Container */}
        <nav className="w-full h-full bg-transparent">
          <div className="w-full h-full flex items-center justify-between relative">

            {/* GROUP 1 (LEFT): Brand Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <img
                  src="/image/leads-garage.png"
                  alt="Leads Garage Logo"
                  className="h-6 sm:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </a>
            </div>

            {/* GROUP 2 (CENTER): Nav Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* GROUP 3 (RIGHT): Action Buttons (Login + Let's Connect) */}
            <div className="nav-actions hidden lg:flex items-center gap-3">
              <a
                href="#services"
                className="bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-full px-5 py-2 font-bold text-xs transition-all shadow-sm cursor-pointer inline-block"
              >
                Login
              </a>
              <a
                href="#audience"
                className="bg-[#0A1C3E] hover:bg-[#00102B] text-white rounded-full px-6 py-2.5 font-bold text-xs shadow-md transition-all cursor-pointer inline-block"
              >
                Let’s Connect
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </nav>

        {/* MOBILE SLIDE-OUT DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              id="mobile-navigation"
              className="lg:hidden bg-white px-4 pt-3 pb-6 shadow-xl overflow-hidden rounded-b-2xl border-t border-slate-100"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 last:border-b-0"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-full"
                  >
                    Login
                  </a>
                  <a
                    href="#audience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 text-xs font-bold text-white bg-[#0A1C3E] rounded-full shadow-md"
                  >
                    Let’s Connect
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  );
}
