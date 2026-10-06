import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 150], [0, 1]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '#hero' },
    {
      name: 'Partnerships',
      href: '#audience',
      hasDropdown: true,
      dropdown: ['Publisher Network', 'Advertiser Solutions', 'Agency Partners', 'Affiliate Programs']
    },
    { name: 'Solutions', href: '#services' },
    { name: 'Industries', href: '#solutions' },
    { name: 'Resources', href: '#quality' },
    { name: 'Company', href: '#team' },
  ];

  return (
    <>
    <motion.header className={`site-header ${styles.header} bg-[#FDFBF7]`} style={{ '--nav-progress': scrollProgress }}>
      {/* Navigation Bar - Clean Background matching page */}
      <nav className="bg-transparent pt-6 sm:pt-7 pb-4">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">

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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-56 z-50"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href={item.href}
                              className="block px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 rounded-xl transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* GROUP 3 (RIGHT): Action Buttons (Login Pill + Let’s Connect Pill) */}
          <div className="nav-actions hidden lg:flex items-center gap-3">
            {/* White Pill Button: Login */}
            <a
              href="#services"
              className="bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-full px-5 py-2 font-bold text-xs transition-all shadow-sm cursor-pointer inline-block"
            >
              Login
            </a>

            {/* Dark Navy Pill Button: Let’s Connect */}
            <a
              href="#audience"
              className="bg-[#0A1C3E] hover:bg-[#00102B] text-white rounded-full px-6 py-2.5 font-bold text-xs shadow-md transition-all cursor-pointer inline-block"
            >
              Let’s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation" className="lg:hidden bg-white px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="py-1">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-slate-800 hover:text-blue-600 py-1"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-slate-200">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-slate-500 hover:text-blue-600 py-1"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-full"
                >
                  Login
                </a>
                <a
                  href="#"
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
