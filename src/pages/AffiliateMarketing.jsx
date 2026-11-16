import TypingHighlight from '../components/TypingHighlight';
import heroStyles from './AffiliateHero.module.css';
import React, { useEffect } from 'react';
import usePageScroll from '../hooks/usePageScroll';
import { ArrowLeft, ArrowRight, ChartNoAxesCombined, Expand, Gauge, Handshake, Headphones, Link, Mail, MessageSquare, PhoneCall, ShieldCheck, SlidersHorizontal, Target, UsersRound, Zap } from 'lucide-react';
import { RequirementsSection } from '../components/PartnershipSections';
import DashboardCTA from '../components/DashboardCTA';
import Footer from '../components/Footer';
import footerStyles from './AffiliateFooter.module.css';
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
  [Handshake, 'Affiliate Partnerships', 'Leverage a network of performance partners who promote your offers and deliver measurable results.', 'Affiliate'],
  [MessageSquare, 'SMS Marketing', 'Connect instantly with your audience through direct, timely, and action-oriented SMS campaigns.', 'SMS'],
  [PhoneCall, 'Call Transfers', 'Connect high-intent prospects directly with your team through qualified call transfers.', 'Calls'],
  [Link, 'Link-Out Traffic', 'Drive relevant traffic to your landing pages and offers from trusted websites and publishers.', 'Link-Out'],
  [Target, 'PPC Advertising', 'Run high-intent paid campaigns across multiple platforms to drive targeted traffic and quality actions.', 'PPC'],
];
const reasons = [
  [ShieldCheck, 'Quality Traffic', 'We deliver high-quality, verified traffic that drives real results.'],
  [Target, 'Relevant Campaigns', 'Access campaigns that match your audience and performance goals.'],
  [Gauge, 'Performance-First Approach', 'Everything we do is built around driving measurable outcomes and ROI.'],
  [ChartNoAxesCombined, 'Real-Time Insights', 'Track performance in real time and make smarter optimization decisions.'],
  [Expand, 'Scalable Opportunities', 'Grow with us as we continually add new campaigns and opportunities.'],
  [UsersRound, 'Dedicated Support', 'A dedicated team that’s with you every step of the way.'],
];

const affiliateIcon = name => publicAsset(`/image/AffiliateMarketing/${name}`);
const benefitIcons = ['Icon bg.png', ...Array.from({ length: 5 }, (_, i) => `Icon bg (${i + 1}).png`)];
const channelIcons = ['Channel symbol.png', ...Array.from({ length: 5 }, (_, i) => `Channel symbol (${i + 1}).png`)];
const reasonIcons = ['shield-check.png', 'target.png', 'gauge.png', 'chart-line.png', 'expand.png', 'users.png'];

function ChannelShowcase() {
  return <section className={`${shared.container} ${styles.channels}`} aria-labelledby="channels-title">
    <div className={styles.channelCopy}>
      <h2 id="channels-title">Multiple Channels.<br />One Performance Goal.</h2>
      <p>Different audiences respond to different channels. Leadsgarage brings multiple performance channels together so you can reach the right audience, generate quality actions, and scale what works.</p>
    </div>
    <div className={styles.channelViewport} data-native-scroll tabIndex={0} role="region" aria-label="Performance channels, scroll to explore all six">
      <div className={styles.channelTrack}>{channels.map(([, title, description], index) => <article key={title} className={`${styles.channelCard} ${styles[`channel${index}`]}`}>
        <img className={styles.channelIcon} src={affiliateIcon(channelIcons[index])} width="72" height="72" alt="" /><h3>{title}</h3><p>{description}</p>
      </article>)}</div>
    </div>
  </section>;
}

export default function AffiliateMarketing() {
  usePageScroll();
  useEffect(() => {
    const previous = document.title;
    document.title = 'Affiliate Marketing | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main id="affiliate-marketing-main">
      <section className={`${shared.hero} ${styles.solutionHero} ${styles.affiliateHero} ${heroStyles.hero}`} data-page-hero aria-labelledby="affiliate-marketing-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>Affiliate Marketing</span>
          <h1 id="affiliate-marketing-title">Performance<br />Partnerships.<br /><span><TypingHighlight>Meaningful Results.</TypingHighlight></span></h1>
          <p>Connect with customers who are actively looking for the products and services you offer.</p>
          <div className={heroStyles.actions}><a className={heroStyles.primaryButton} href="#contact">Let’s Grow Together</a><a className={heroStyles.secondaryButton} href="#contact">Get Expert Guidance</a></div>
        </div>
        <div data-hero-art className={`${styles.affiliateHeroArt} ${heroStyles.visual}`}>
          <img className={heroStyles.team} src={affiliateIcon('Group 40229.png')} width="642" height="474" alt="Performance marketing partners collaborating to grow customer acquisition." fetchPriority="high" />
          {[
            ['sms', 'SMS', 'Marketing', 'Channel icon.png'],
            ['link', 'Link-Out', 'Traffic', 'Channel icon (1).png'],
            ['partners', 'Affiliate', 'Partnerships', 'Channel icon (2).png'],
            ['email', 'Email', 'Marketing', 'Channel icon (3).png'],
            ['ppc', 'PPC', 'Advertising', 'Channel icon (4).png'],
            ['calls', 'Call Transfers', '', 'Channel icon (5).png'],
          ].map(([position, first, second, icon]) => <div className={`${heroStyles.channel} ${heroStyles[position]}`} key={position}>
            <img src={affiliateIcon(icon)} alt="" width="32" height="32" />
            <span>{first}{second && <><br />{second}</>}</span>
          </div>)}

        </div>
      </section>
      <RequirementsSection title="How Leadsgarage Helps Our Partners" items={benefits} iconColor="#1755f8" iconAssets={benefitIcons.map(affiliateIcon)} />
      <ChannelShowcase />
      <section className={`${shared.container} ${styles.whyPartner}`} aria-labelledby="why-partner-title">
        <h2 id="why-partner-title">Why Partner With Leadsgarage?</h2>
        <div>{reasons.map(([Icon, title, description], index) => <article key={title}><img className={styles.reasonIcon} src={affiliateIcon(reasonIcons[index])} width="29" height="29" alt="" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>
    </main>
    <div className={`${shared.footerShell} ${footerStyles.shell}`}>
      <DashboardCTA contactHref="#contact" assetFolder="AffiliateMarketing" />
      <Footer page="affiliateMarketing" />
    </div>
    
  </div>;
}
