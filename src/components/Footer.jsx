import { publicAsset } from '../utils/publicAsset';
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { ArrowRight, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ChevronDown } from 'lucide-react';

export default function Footer() {
  const [compact, setCompact] = useState(() => matchMedia('(max-width:639px)').matches);
  useEffect(() => {
    const query = matchMedia('(max-width:639px)');
    const update = () => setCompact(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
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

  return <footer className={styles.footer}>
   <div className={styles.columns}>
    {columns.map(column=><nav key={column.title} aria-label={column.title}>
     <details open={!compact} className={styles.linkGroup}>
      <summary onClick={event => { if (!compact) event.preventDefault(); }}><span>{column.title}</span><ChevronDown size={18} /></summary>
      <ul>{column.links.map(link=><li key={link.name}><a href={link.href}>{link.name}</a></li>)}</ul>
     </details>
    </nav>)}
    <address id="contact" className={styles.contact}>
     <div><span className={styles.contactIcon}><MapPin size={19} /></span><p>123 Digital Ave, Tech City, TC 12345</p></div>
     <div><span className={styles.contactIcon}><Mail size={19} /></span><a href="mailto:Support@Leadsgarage">Support@Leadsgarage</a></div>
    </address>
   </div>
   <div className={styles.bottom}>
    <div className={styles.brand}>
     <a href="#hero"><img src={publicAsset('/image/Home/footer/Leads_Garage_Logo.svg')} alt="Leads Garage" /></a>
     <small>© 2026 Leads Garage. All rights reserved.</small>
    </div>
    <nav className={styles.socials} aria-label="Social media">
     {[{Icon:Facebook,label:'Facebook'},{Icon:Twitter,label:'Twitter'},{Icon:Linkedin,label:'LinkedIn'},{Icon:Instagram,label:'Instagram'}].map(({Icon,label})=><a key={label} href="#" aria-label={label}><Icon size={18} /></a>)}
    </nav>
    <a className={styles.contactButton} href="#audience">Contact Us <span><ArrowRight size={18} /></span></a>
   </div>
  </footer>;
}
