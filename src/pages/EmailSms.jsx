import React, { useEffect } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import TypingHighlight from '../components/TypingHighlight';
import { SiteFooter } from '../components/PartnershipSections';
import usePageScroll from '../hooks/usePageScroll';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import s from './EmailSms.module.css';
const asset = name => publicAsset('/image/Email & SMS/' + name);
const uses = [
 ['Notification','Send timely updates and alerts to keep customers informed and engaged.'],
 ['Promote Offers','Share discounts, deals, and special offers that drive more sales.'],
 ['Nurture Leads','Send relevant content to nurture leads and move them down the sales funnel.'],
 ['Abandoned Cart','Recover lost sales by reminding customers about their abandoned carts.'],
 ['Send Updates','Keep your audience updated about orders, events, or important announcements.'],
 ['Build Loyalty','Strengthen relationships with personalized messages and loyalty programs.'],
 ['Drive Conversions','Use powerful calls-to-action to encourage clicks, replies, and purchases.'],
];
function AutomationArt(){return <div className={s.flow} aria-label="Customer behavior triggers personalized email and SMS messages">
 <svg className={s.connector} viewBox="0 0 500 300" aria-hidden="true"><path d="M130 70 H350 Q380 70 380 100 V160 Q380 190 350 190 H180 Q140 190 140 220 V250"/></svg>
 <div className={s.behavior}><img src={asset('Caller symbol.png')} alt=""/><span>Customer behavior</span><img className={s.cursor} src={asset('Group 40286.png')} alt=""/></div>
 <div className={s.trigger}><img src={asset('Caller symbol (1).png')} alt=""/><span>Personalized trigger</span><img className={s.person} src={asset('Group 40286 (1).png')} alt=""/></div>
 <div className={s.sendEmail}><img src={asset('Email icon.png')} alt=""/><span>Send email</span></div>
 <div className={s.sendSms}><img src={asset('message-circle.png')} alt=""/><span>Send SMS</span></div>
 </div>;}
export default function EmailSms(){
 usePageScroll();
 useEffect(()=>{const previous=document.title;document.title='Email & SMS Marketing | Leads Garage';return()=>{document.title=previous;};},[]);
 return <div className={`${shared.page} ${s.page}`}><main id="email-sms-main">
 <section className={s.hero} data-page-hero aria-labelledby="email-hero-title">
 <a className={s.specialist} href="#contact">Connect with our Specialist <ArrowRight size={15}/></a>
 <div className={s.heroCopy}><span className={s.eyebrow}>EMAIL & SMS MARKETING SOLUTIONS</span><h1 id="email-hero-title">Email & SMS That<br/>Engages Customers &<br/><span><TypingHighlight>Drives Conversions</TypingHighlight></span></h1><p>Connect with customers who are actively looking for the products and services you offer.</p><a className={s.button} href="#contact">Launch Your Campaign</a></div>
 <img className={s.heroArt} src={asset('Group 40265.png')} alt="Email and SMS campaign dashboard with performance metrics and messaging" fetchPriority="high"/>
 </section>
 <div className={s.explanations}>
 {[
 ['email-definition','What Is Email Marketing?','Email marketing is the practice of sending targeted emails to a group of people to inform, engage, and convert them into loyal customers. It helps you nurture leads, promote offers, share updates, and build long-term relationships.','Group 40298.png'],
 ['sms-definition','What Is SMS Marketing?',"SMS marketing is the process of sending short, personalized messages directly to customers on their mobile phones. It’s fast, direct, and highly effective for reaching customers instantly and driving quick actions.",'Group 40298 (1).png'],
 ].map(([id,title,copy,image])=><section className={`${s.screen} ${s.split}`} aria-labelledby={id} key={id}><img className={s.definitionArt} src={asset(image)} alt={`${title} Campaign dashboard and mobile message`} loading="lazy"/><div><h2 id={id}>{title}</h2><p>{copy}</p></div></section>)}
 </div>
 <section className={`${s.screen} ${s.useCases}`} aria-labelledby="email-uses"><h2 id="email-uses">How Businesses Use Email &<br/>SMS Marketing</h2><div className={s.cards}>{uses.map(([title,copy],i)=><article key={title}><img src={asset(i===0?'Use case icon.png':`Use case icon (${i}).png`)} alt="" loading="lazy"/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
 <section className={`${s.screen} ${s.automationScreen}`} aria-labelledby="email-automation"><div className={s.automation}><div><span className={s.tag}>THE RIGHT MESSAGE, ON TIME</span><h2 id="email-automation">Automation That Saves<br/>Time & Delivers</h2><p>Automate emails and SMS based on customer behavior and triggers. Save time, reduce manual work, and ensure the right message reaches the right person at the perfect time.</p></div><AutomationArt/></div></section>
 <section className={`${s.screen} ${s.split} ${s.personal}`} aria-labelledby="email-personal"><div className={s.portrait}><img src={asset('Customer portrait.png')} alt="A customer smiling while reading a message on her phone" loading="lazy"/><div className={s.notification}><span><img src={asset('Email icon.png')} alt=""/></span><div><strong>Hi Alex,</strong><small>Your application is almost complete.</small></div><Heart size={21}/></div></div><div><span className={s.tag}>MAKE IT PERSONAL</span><h2 id="email-personal">Personalized Messages. Real Connections.</h2><p>Create personalized email and SMS experiences that resonate with your audience. Build trust, boost engagement, and turn one-time buyers into lifelong customers.</p></div></section>
 </main><div className={s.closing}><SiteFooter page="emailSms"/></div></div>;
}
