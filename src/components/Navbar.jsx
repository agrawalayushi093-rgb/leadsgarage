import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Navigation Bar - Matching page background #FDFBF7 without any lines/borders */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-3.5' 
          : 'bg-[#FDFBF7] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo using leads-garage.png */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/image/leads-garage.png" 
              alt="Leads Garage" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  )}
                </a>

                {/* Dropdown Menu - ONLY for Partnerships */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2 w-56 z-50"
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

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onOpenContact}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors cursor-pointer"
            >
              Login
            </button>

            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#0A1C3E] hover:bg-blue-700 shadow-md hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
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
            className="md:hidden bg-[#FDFBF7] px-4 pt-3 pb-6 shadow-xl overflow-hidden"
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
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="w-full text-center py-2.5 text-sm font-bold text-slate-700 border border-slate-200 rounded-xl"
                >
                  Login
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#0A1C3E] rounded-xl shadow-md"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
