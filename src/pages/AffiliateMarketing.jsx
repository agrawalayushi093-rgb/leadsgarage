import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ChartNoAxesCombined, Expand, Gauge, Handshake, Headphones, Link, Mail, MessageSquare, PhoneCall, ShieldCheck, SlidersHorizontal, Target, UsersRound, Zap } from 'lucide-react';
import { RequirementsSection, SiteFooter } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import styles from './SolutionPages.module.css';

const paleBlue = '#e5ebff';
const benefits = [
  [Target, 'Access Better Opportunities', 'We connect partners with relevant campaigns and opportunities aligned with their audience.', paleBlue],
  [ChartNoAxesCombined, 'Scale Your Performance', 'As campaigns perform, partners can scale their traffic and explore new opportunities.', paleBlue],
  [SlidersHorizontal, 'Multiple Traffic Channels', 'We work across Email, SMS, PPC, affiliate partnerships, link-out traffic, and call transfers.', paleBlue],
  [Zap, 'Performance Insights', 'Access real-time reports and insights to understand what’s working and optimize performance.', paleBlue],
  [ChartNoAxesCombined, 'Fast & Reliable Support', 'Our team is here to help with campaign requirements, optimization, and support.', paleBlue],
  [Headphones, 'Long-Term Partnerships', 'We focus on building relationships that grow over time — not just one-off campaigns.', paleBlue],
];
const channels = [
  [Mail, 'Email Marketing', 'Reach targeted audiences with engaging emails that drive opens, engagement, and conversions.', 'Email'],
  [Handshake, 'Affiliate Partnerships', 'Connect with relevant campaigns and build performance partnerships around your audience and goals.', 'Affiliate'],
  [MessageSquare, 'SMS Marketing', 'Reach your audience with relevant messages that encourage timely engagement and action.', 'SMS'],
  [Target, 'PPC Advertising', 'Reach customers actively searching for your products and services through targeted advertising.', 'PPC'],
  [Link, 'Link-Out Traffic', 'Connect engaged audiences with relevant destinations and opportunities across the customer journey.', 'Link-Out'],
  [PhoneCall, 'Call Transfers', 'Connect qualified callers with the right business or solution expert through direct conversations.', 'Calls'],
];
const reasons = [
  [ShieldCheck, 'Quality Traffic', 'We deliver high-quality, verified traffic that drives real results.'],
  [Target, 'Relevant Campaigns', 'Access campaigns that match your audience and performance goals.'],
  [Gauge, 'Performance-First Approach', 'Everything we do is built around driving measurable outcomes and ROI.'],
  [ChartNoAxesCombined, 'Real-Time Insights', 'Track performance in real time and make smarter optimization decisions.'],
  [Expand, 'Scalable Opportunities', 'Grow with us as we continually add new campaigns and opportunities.'],
  [UsersRound, 'Dedicated Support', 'A dedicated team that’s with you every step of the way.'],
];

function ChannelShowcase() {
  const [active, setActive] = useState(0);
  const buttons = useRef([]);
  const onKeyDown = (event, index) => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % channels.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + channels.length - 1) % channels.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = channels.length - 1;
    if (next === undefined) return;
    event.preventDefault(); setActive(next); buttons.current[next]?.focus({ preventScroll: true });
  };
  return <section className={`${shared.container} ${styles.channels}`} aria-labelledby="channels-title">
    <div className={styles.channelCopy}>
      <h2 id="channels-title">Multiple Channels.<br />One Performance Goal.</h2>
      <p>Different audiences respond to different channels. Leadsgarage brings multiple performance channels together so you can reach the right audience, generate quality actions, and scale what works.</p>
      <div className={styles.channelTabs} role="tablist" aria-label="Performance channels">{channels.map(([, title, , label], index) => <button key={title} type="button" ref={element => { buttons.current[index] = element; }} role="tab" aria-selected={active === index} aria-controls={`channel-${index}`} id={`channel-tab-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => onKeyDown(event, index)}>{label}</button>)}</div>
      <div className={styles.channelControls}><button type="button" aria-label="Previous channel" disabled={active === 0} onClick={() => setActive(current => current - 1)}><ArrowLeft size={21} /></button><button type="button" aria-label="Next channel" disabled={active === channels.length - 1} onClick={() => setActive(current => current + 1)}><ArrowRight size={21} /></button></div>
    </div>
    <div className={styles.channelViewport}>
      <div className={styles.channelTrack} style={{ '--channel-index': active }}>{channels.map(([Icon, title, description], index) => <article key={title} className={`${styles.channelCard} ${styles[`channel${index}`]}`} role="tabpanel" id={`channel-${index}`} aria-labelledby={`channel-tab-${index}`} aria-hidden={active !== index}>
        <span><Icon size={34} strokeWidth={1.6} /></span><h3>{title}</h3><p>{description}</p>
      </article>)}</div>
    </div>
  </section>;
}

export default function AffiliateMarketing() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Affiliate Marketing | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main id="affiliate-marketing-main">
      <section className={`${shared.hero} ${styles.solutionHero} ${styles.affiliateHero}`} aria-labelledby="affiliate-marketing-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>Affiliate Marketing</span>
          <h1 id="affiliate-marketing-title">Performance<br />Partnerships.<br /><span>Meaningful Results.</span></h1>
          <p>Connect with customers who are actively looking for the products and services you offer.</p>
          <a className={shared.whiteButton} href="#contact">Let's Work Together <ArrowRight size={22} /></a>
        </div>
        <img className={styles.affiliateHeroArt} src={publicAsset('/image/AffiliateMarketing/hero-art.webp')} width="787" height="535" alt="Performance marketing partners collaborating across email, SMS, PPC, affiliate partnerships, link-out traffic and call transfers." fetchPriority="high" />
      </section>
      <RequirementsSection title="How Leadsgarage Helps Our Partners" items={benefits} iconColor="#1755f8" />
      <ChannelShowcase />
      <section className={`${shared.container} ${styles.whyPartner}`} aria-labelledby="why-partner-title">
        <h2 id="why-partner-title">Why Partner With Leadsgarage?</h2>
        <div>{reasons.map(([Icon, title, description]) => <article key={title}><Icon size={29} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>
    </main>
    <SiteFooter page="affiliateMarketing" />
  </div>;
}
