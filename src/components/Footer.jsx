import { publicAsset } from '../utils/publicAsset';
import { navigationUrl } from '../utils/pageRoutes';
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { ArrowRight, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ChevronDown } from 'lucide-react';

export default function Footer({ page = 'home', compactQuery = page === 'home' ? '(max-width:639px)' : '(max-width:639px), (max-height:500px)' }) {
  const pageLink = href => navigationUrl(href, page);
  const [compact, setCompact] = useState(() => matchMedia(compactQuery).matches);
  useEffect(() => {
    const query = matchMedia(compactQuery);
    const update = () => setCompact(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [compactQuery]);
  const columns = [
    {
      title: 'Partnership',
      links: [
        { name: 'Advertisers', href: '/advertisers' },
        { name: 'Publishers', href: '#audience' },
        { name: 'Buyer', href: '/buyers' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Affiliate Marketing', href: '/affiliate-marketing' },
        { name: 'PPC', href: '#services' },
        { name: 'Email & SMS', href: '#services' },
        { name: 'List Management', href: '#services' },
        { name: 'CRM Consultation', href: '#services' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'SMM (Social Media Marketing)', href: '/social-media-marketing' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Insurance', href: '/insurance-solutions' },
        { name: 'Home Services', href: '#solutions' },
        { name: 'Finance', href: '#solutions' },
        { name: 'Health & Beauty', href: '#solutions' },
        { name: 'E-Commerce', href: '#solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Career', href: '#team' },
        { name: 'Terms & Condition', href: '#contact' },
        { name: 'Policy', href: '#contact' },
      ],
    },
  ];

  return <footer className={styles.footer}>
   <div className={styles.columns}>
    {columns.map(column=><nav key={column.title} aria-label={column.title}>
     <details open={!compact} className={styles.linkGroup}>
      <summary onClick={event => { if (!compact) event.preventDefault(); }}><span>{column.title}</span><ChevronDown size={18} /></summary>
      <ul>{column.links.map(link=><li key={link.name}><a href={pageLink(link.href)}>{link.name}</a></li>)}</ul>
     </details>
    </nav>)}
    <address id="contact" className={styles.contact}>
     <div><span className={styles.contactIcon}><MapPin size={19} /></span><p>123 Digital Ave, Tech City, TC 12345</p></div>
     <div><span className={styles.contactIcon}><Mail size={19} /></span><a href="mailto:Support@Leadsgarage">Support@Leadsgarage</a></div>
    </address>
   </div>
   <div className={styles.bottom}>
    <div className={styles.brand}>
     <a href={pageLink('#hero')}><img src={publicAsset('/image/Home/footer/Leads_Garage_Logo.svg')} alt="Leads Garage" /></a>
     <small>© 2026 Leads Garage. All rights reserved.</small>
    </div>
    <nav className={styles.socials} aria-label="Social media">
     {[{Icon:Facebook,label:'Facebook'},{Icon:Twitter,label:'Twitter'},{Icon:Linkedin,label:'LinkedIn'},{Icon:Instagram,label:'Instagram'}].map(({Icon,label})=><a key={label} href="#" aria-label={label}><Icon size={18} /></a>)}
    </nav>
    <a className={styles.contactButton} href={pageLink('#contact')}>Contact Us <span><ArrowRight size={18} /></span></a>
   </div>
  </footer>;
}
