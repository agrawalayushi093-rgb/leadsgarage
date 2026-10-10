import { publicAsset } from '../utils/publicAsset';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Menu, X, Globe, Send, Users, Target, BarChart3, Shield, DollarSign, House, Heart, ShoppingBag, Bookmark, PieChart, Calendar, FileText, CircleHelp, Mail, Smile, ArrowUpRight, Code, Database } from 'lucide-react';

const menus = {
  Partnerships: { title: 'Power in Partnership', description: 'Connect with the right people, programs, and opportunities to grow.', href: '#audience', items: [
    ['Publisher Network', 'Top offers and dedicated support for your audience.', Send],
    ['Advertiser Solutions', 'Acquire high-quality customers at scale.', Globe],
    ['Agency Partners', 'Build stronger campaigns with a trusted partner.', Users],
    ['Affiliate Programs', 'Performance partnerships built around your goals.', Target]
  ], feature: ['Explore our partnerships', 'Find your next growth opportunity.'] },
  Solutions: { title: 'Solutions for Growth', description: 'One partner. Multiple solutions. Built around your goals.', href: '#services', items: [
    ['Affiliate Marketing', 'Performance programs that help you acquire customers.', Users],
    ['Email & SMS', 'Reach your audience with targeted campaigns.', Mail],
    ['List Management', 'Clean, verified data for better reach.', Database],
    ['CRM Consultation', 'Connect your customer journey from lead to conversion.', Target],
    ['Web Development', 'Build digital experiences that drive growth.', Code],
    ['SMM', 'Connect with your audience across social channels.', BarChart3]
  ], feature: ['Discover our solutions', 'Smarter strategies. Measurable growth.'] },
  Industries: { title: 'Built for Your Industry', description: 'Performance strategies tailored to your audience and business.', href: '#solutions', items: [
    ['Insurance', 'Connect with customers looking for the right coverage.', Shield],
    ['Finance', 'Reach high-intent audiences across the funnel.', DollarSign],
    ['Home Services', 'Connect with homeowners ready to take action.', House],
    ['E-Commerce & Retail', 'Turn engaged shoppers into customers.', ShoppingBag],
    ['Health & Beauty', 'Grow your reach and build lasting loyalty.', Heart]
  ], feature: ['Why brands choose us', 'High-intent traffic. Real-time lead delivery.'] },
  Resources: { title: 'Resources', description: 'Explore how we deliver better results.', href: '#quality', items: [
    ['Articles & Insights', 'Explore our approach to performance and growth.', Bookmark],
    ['Case Studies', 'Discover the solutions behind better outcomes.', PieChart],
    ['Webinars & Events', 'Connect with our team to learn more.', Calendar],
    ['Press', 'Meet the people behind Leads Garage.', FileText],
    ['FAQ', 'Learn about our quality and verification process.', CircleHelp]
  ], feature: ['Quality comes first', 'Every impression deserves protection.'] },
  Company: { title: 'Meet Leads Garage', description: 'Get to know our story, our team, and how to connect.', href: '#team', items: [
    ['About Us', 'Meet the people behind our success.', Users],
    ['Careers', 'Connect with our team about opportunities.', Smile],
    ['Contact Us', 'Have a question or an idea? Let’s talk.', Mail, '#audience']
  ], feature: ['Get in Touch', 'Let’s build your next chapter of growth.'] }
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 220], [0, 1]);
  const easedProgress = useTransform(scrollProgress, p => p * p * (3 - 2 * p));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const headerRef = useRef(null);
  const triggerRefs = useRef({});
  useEffect(() => {
    const outside = e => { if (!headerRef.current?.contains(e.target)) { setActiveDropdown(null); setMobileMenuOpen(false); } };
    const escape = e => { if (e.key === 'Escape') { setActiveDropdown(null); setMobileMenuOpen(false); triggerRefs.current[activeDropdown]?.focus(); } };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [activeDropdown]);
  const close = () => { setActiveDropdown(null); setMobileMenuOpen(false); };
  const links = name => menus[name].items.map(([label, description, Icon, href]) => (
    <a key={label} href={href || menus[name].href} className={styles.megaLink} onClick={close}>
      <Icon aria-hidden="true" /><span><strong>{label}</strong><small>{description}</small></span>
    </a>
  ));
  const feature = name => <a href={name === 'Company' ? '#audience' : menus[name].href} className={styles.feature} onClick={close}>
    <span className={styles.featureIcon}><ArrowUpRight aria-hidden="true" /></span><small>{menus[name].feature[0]}</small>
    <h3>{menus[name].feature[1]}</h3><span className={styles.featureCta}>{name === 'Company' ? 'Contact Us' : 'Explore more'} <ArrowUpRight size={16} /></span>
  </a>;
  return <>
    <motion.header ref={headerRef} className={`site-header ${styles.header}`} style={{ '--nav-progress': easedProgress }}
      onMouseLeave={() => setActiveDropdown(null)} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setActiveDropdown(null); }}>
      <nav className="bg-transparent pt-6 sm:pt-7 pb-4">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <div className="flex items-center"><a href="#" className="flex items-center gap-2 group"><img src={publicAsset("/image/leads-garage.png")} alt="Leads Garage Logo" className="h-6 sm:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105" /></a></div>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div><a href="#hero" onMouseEnter={() => setActiveDropdown(null)} className="flex items-center text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1">Home</a></div>
            {Object.keys(menus).map(name => <div key={name} onMouseEnter={() => setActiveDropdown(name)}>
              <button ref={el => { triggerRefs.current[name] = el; }} type="button" className={`${styles.trigger} ${activeDropdown === name ? styles.active : ''}`}
                aria-expanded={activeDropdown === name} aria-controls={`mega-${name}`} onClick={() => setActiveDropdown(name)}
                onKeyDown={e => { if (e.key === 'ArrowDown') { e.preventDefault(); setActiveDropdown(name); requestAnimationFrame(() => headerRef.current?.querySelector(`#mega-${name} a`)?.focus()); } }}>
                {name}
              </button>
            </div>)}
          </div>
          <div className="nav-actions hidden lg:flex items-center gap-3">
            <a href="#services" className="bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-full px-5 py-2 font-bold text-xs transition-all shadow-sm cursor-pointer inline-block">Login</a>
            <a href="#audience" className="bg-[#0A1C3E] hover:bg-[#00102B] text-white rounded-full px-6 py-2.5 font-bold text-xs shadow-md transition-all cursor-pointer inline-block">Let’s Connect</a>
          </div>
          <div className="flex lg:hidden items-center gap-2"><button onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setActiveDropdown(null); }} className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button></div>
        </div>
      </nav>
      <AnimatePresence mode="wait">{activeDropdown && <motion.div key={activeDropdown} id={`mega-${activeDropdown}`} className={styles.megaPosition} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: .16 }}>
        <div className={`${styles.megaPanel} ${activeDropdown === 'Resources' ? styles.resources : ''}`}>
          <div className={styles.intro}><h2>{menus[activeDropdown].title}</h2><p>{menus[activeDropdown].description}</p></div>
          <div className={styles.linkGrid}>{activeDropdown === 'Resources' && <h2 className={styles.resourceTitle}>Resources</h2>}{links(activeDropdown)}</div>
          {activeDropdown === 'Resources' ? <div className={styles.resourceCards}>
            <a href="#services" onClick={close}><img src={publicAsset("/image/Home/herosection/image 95.png")} alt="Publisher growth" /><small>Explore our solutions</small><h3>Build your next stage of growth</h3></a>
            <a href="#quality" onClick={close}><img src={publicAsset("/image/Home/herosection/image 96.png")} alt="Customer acquisition" /><small>Our approach</small><h3>Quality traffic. Better outcomes.</h3></a>
          </div> : feature(activeDropdown)}
        </div>
      </motion.div>}</AnimatePresence>
      <AnimatePresence>{mobileMenuOpen && <motion.div id="mobile-navigation" className="lg:hidden bg-white px-4 pt-3 pb-6 shadow-xl overflow-hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
        <a href="#hero" onClick={close} className={styles.mobileTrigger}>Home</a>
        {Object.keys(menus).map(name => <div key={name}>
          <button type="button" className={styles.mobileTrigger} aria-expanded={mobileDropdown === name} aria-controls={`mobile-${name}`} onClick={() => setMobileDropdown(current => current === name ? null : name)}>{name}<ChevronDown size={18} style={{ transform: mobileDropdown === name ? 'rotate(180deg)' : undefined }} /></button>
          {mobileDropdown === name && <div id={`mobile-${name}`} className={styles.mobileLinks}>{links(name)}</div>}
        </div>)}
        <div className="pt-4 border-t border-slate-200 flex flex-col gap-3"><a href="#services" onClick={close} className="w-full text-center py-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-full">Login</a><a href="#audience" onClick={close} className="w-full text-center py-3 text-xs font-bold text-white bg-[#0A1C3E] rounded-full shadow-md">Let’s Connect</a></div>
      </motion.div>}</AnimatePresence>
    </motion.header><div className="site-header-spacer" aria-hidden="true" />
  </>;
}




