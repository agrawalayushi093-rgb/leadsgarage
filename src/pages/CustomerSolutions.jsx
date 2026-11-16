import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Database, Zap, ChartNoAxesCombined, Settings, Mail, MessageCircle, Bell, ShoppingCart, Send, Heart, Target, Users, SlidersHorizontal, Compass, Layers, ShieldCheck } from 'lucide-react';
import usePageScroll from '../hooks/usePageScroll';
import TypingHighlight from '../components/TypingHighlight';
import Footer from '../components/Footer';
import { FloatingIcons, HowItWorks, SiteFooter } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import s from './CustomerSolutions.module.css';
const asset = file => publicAsset('/image/CRM/' + file);
function PageTitle({title}) { useEffect(()=>{const old=document.title;document.title=title+' | Leads Garage';return()=>{document.title=old;};},[title]);return null; }
function Hero({label,title,description,children,button='Let’s Connect'}) { return <section className={`${shared.hero} ${s.hero}`}><a className={`${shared.specialist} ${s.specialist}`} href="#contact">Connect with our Specialist <ArrowRight size={14}/></a><div><span className={shared.eyebrow}>{label}</span><h1>{title}</h1><p>{description}</p><div className={s.heroButtons}><a className={s.button} href="#contact">{button}</a><a className={s.secondaryButton} href="#contact">Get Expert Guidance</a></div></div><div className={s.heroArt}>{children}</div></section>; }
function Closing({crm=false}) { return <div className={`${shared.footerShell} ${s.closing}`}><section className={s.cta}><FloatingIcons assetFolder={crm ? "CRM" : "Home"}/><h2>{crm ? <>Let’s Build a CRM<br/>That Works for You</> : <>Ready to Start Buying<br/>Quality Leads?</>}</h2><p>Let’s discuss how we can help your business reach new heights</p><a href="#contact" className={s.button}>Let’s connect <ArrowRight size={17}/></a></section><Footer page={crm?'crmConsultation':'emailSms'}/></div>; }
export function CRMConsultation(){usePageScroll(); const services=[['CRM Implementation','Icon Container (1).png','High-impact strategies designed to deliver consistent results for your specific business goals.'],['Data Migration','Icon Container (2).png','High-impact strategies designed to deliver consistent results for your specific business goals.'],['Automation','Icon Container (4).png','High-impact strategies designed to deliver consistent results for your specific business goals.'],['Analytics Setup','Icon Container (6).png','High-impact strategies designed to deliver consistent results for your specific business goals.']];
const stepsTrackRef = useRef(null);
const [activeStep, setActiveStep] = useState(0);
const programmaticUntil = useRef(0);

const scrollToStep = (index) => {
  const el = stepsTrackRef.current;
  if (!el) return;
  const next = Math.max(0, Math.min(steps.length - 1, index));
  const card = el.children[next];
  if (card) {
    programmaticUntil.current = performance.now() + 650;
    const left = card.offsetLeft - el.children[0].offsetLeft;
    el.scrollTo({ left, behavior: 'smooth' });
    setActiveStep(next);
  }
};

const syncStep = () => {
  if (performance.now() < programmaticUntil.current) return;
  const el = stepsTrackRef.current;
  if (!el) return;
  const maxScroll = el.scrollWidth - el.clientWidth;
  const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
  const nearest = Math.max(0, Math.min(steps.length - 1, Math.round(progress * (steps.length - 1))));
  setActiveStep(nearest);
};

useEffect(() => {
  const el = stepsTrackRef.current;
  if (!el) return;
  const onWheel = (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && e.deltaY > 0;
      if (!atStart && !atEnd) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: 'smooth' });
      }
    }
  };
  el.addEventListener('wheel', onWheel, { passive: false });
  return () => el.removeEventListener('wheel', onWheel);
}, []);
const steps=[
  ['Group 40304.png', 'Business-First Approach', 'We put your business goals first and create CRM strategies that support your growth.'],
  ['Group 40305.png', 'Tailored Solutions', 'No one-size-fits-all approach. We customize CRM solutions around your unique processes and needs.'],
  ['Group 40306.png', 'Industry Expertise', 'Our cross-industry experience helps us deliver proven strategies and practical solutions.'],
  ['Group 40315.png', 'End-to-End Support', 'From strategy and setup to automation and optimization, we support you at every stage.'],
  ['Group 40314.png', 'Data Security & Quality', 'We help keep your CRM data organized, reliable, and secure.'],
  ['Group 40313.png', 'Long-Term Partnership', 'We go beyond implementation, working with you to continuously improve your CRM.']
];return <div className={`${shared.page} ${s.page}`}><PageTitle title="CRM Consultation"/><main id="crm-main"><Hero label="CRM Consultation" title={<>Smarter{' '}<span><TypingHighlight preserveLineBreaks>{'Customer\nManagement'}</TypingHighlight></span>{' '}Starts Here</>} description="We help you choose and optimize the right CRM to build stronger customer relationships, streamline operations, and drive growth."><img src={asset('image 147.png')} alt="CRM tools and customer management team"/></Hero><div className={s.crmOverview}><section className={s.section}><h2 className={s.center}>Expert CRM Services</h2><p className={s.intro}>We help you master your customer data and streamline your operations for maximum efficiency.</p><div className={s.serviceGrid}>{services.map(([t,icon,desc])=><article key={t}><span className={s.icon}><img src={asset(icon)} alt={t} width="48" height="48"/></span><h3>{t}</h3><p>{desc}</p></article>)}</div></section><section className={`${s.section} ${s.split}`}>
  <div className={s.customerArt}>
    <img src={asset('image 144.png')} alt="Customers sharing a positive experience" />
    <div className={s.profileCard}>
      <div className={s.profileHeader}>
        <div className={s.profileUser}>
          <span className={s.profileAvatar}>AM</span>
          <div className={s.profileMeta}>
            <strong className={s.profileName}>Alex Morgan</strong>
            <span className={s.profileTagline}>Every interaction. One clear view.</span>
          </div>
        </div>
        <span className={s.profileBadge}>Relationship active</span>
      </div>

      <div className={s.profileNav}>
        <span className={`${s.profileTab} ${s.activeTab}`}>Activity timeline</span>
        <span className={s.profileTab}>Details</span>
        <span className={s.profileTab}>Notes</span>
      </div>

      <div className={s.activityList}>
        <div className={s.activityItem}>
          <img className={s.activityIcon} src={asset('Activity symbol.png')} alt="" width="35" height="35" />
          <div className={s.activityBody}>
            <strong className={s.activityTitle}>A new conversation begins</strong>
            <span className={s.activitySubtitle}>Initial enquiry captured</span>
          </div>
          <span className={s.activityStatus}>Connected</span>
        </div>

        <div className={s.activityItem}>
          <img className={s.activityIcon} src={asset('Activity symbol2.png')} alt="" width="35" height="35" />
          <div className={s.activityBody}>
            <strong className={s.activityTitle}>Keep the conversation moving</strong>
            <span className={s.activitySubtitle}>Follow-up email scheduled</span>
          </div>
          <span className={s.activityStatus}>Scheduled</span>
        </div>

        <div className={s.activityItem}>
          <img className={s.activityIcon} src={asset('Activity symbol (1).png')} alt="" width="35" height="35" />
          <div className={s.activityBody}>
            <strong className={s.activityTitle}>Make the next step personal</strong>
            <span className={s.activitySubtitle}>Discovery call with the team</span>
          </div>
          <span className={s.activityStatus}>Next up</span>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2>Turn Leads Into<br/>Long-Term Customers</h2>
    <p>Capture every lead, track interactions, and manage follow-ups at every stage of the customer journey. With a well-structured CRM, you can strengthen customer relationships, improve retention, and unlock more conversion opportunities.</p>
  </div>
</section></div><section className={`${s.section} ${s.cloud}`}><FloatingIcons assetFolder="CRM"/><h2>Performance<br/><strong>Marketing Solutions</strong></h2><p>Flexible solutions tailored to your goals and KPIs.</p>{[['24/7','Monitoring'],['2.5M+','Leads Generated'],['289%','Average ROI'],['85%','Conversion Rate']].map(([v,l],i)=><div className={`${s.stat} ${s['stat'+i]}`} key={l}><strong style={{color:'#ffffff'}}>{v}</strong><small style={{color:'#ffffff'}}>{l}</small></div>)}</section><section className={`${s.section} ${s.split} ${s.insights}`}><div><h2>Make Better Decisions<br/>With Real-Time Insights</h2><p>Unlock the full potential of your CRM with custom dashboards and reports. Gain real-time visibility into sales performance, pipeline health, team productivity, and customer behavior to make smarter, data-driven decisions.</p></div><div className={s.insightsArt}><img className={s.laptop} src={asset('MacBook Air (15 inch) 1.png')} alt="CRM reporting dashboard on a laptop"/><img className={s.insightsFade} src={asset('Rectangle 2425.png')} alt="" aria-hidden="true"/></div></section><section className={`${s.section} ${s.partner}`}><div className={s.partnerIntro}><h2>Why LeadsGarage<br/>Is the Right CRM<br/>Consulting Partner</h2><div className={s.partnerSymbols}><span><Compass/></span><span><Users/></span></div></div><div ref={stepsTrackRef} className={s.crmSteps} tabIndex={0} aria-label="CRM consulting approach" data-native-scroll onScroll={syncStep}>{steps.map(([img,title,copy],i)=><article key={title} className={activeStep === i ? s.activeStep : ''} onClick={() => scrollToStep(i)}><span className={s.stepNumber}>0{i+1}</span><h3>{title}</h3><p>{copy}</p><img className={s.stepArt} src={asset(img)} alt=""/></article>)}</div></section></main><Closing crm/></div>;}
export { default as EmailSms } from './EmailSms';
