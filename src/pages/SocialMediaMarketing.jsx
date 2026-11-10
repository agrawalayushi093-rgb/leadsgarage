import TypingHighlight from '../components/TypingHighlight';
import React, { useEffect } from 'react';
import { Megaphone, UsersRound, ShieldCheck, MessagesSquare, Sparkles, ScanFace, Compass, PenTool, CalendarDays, Target, Search, MousePointerClick, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import { publicAsset } from '../utils/publicAsset';
import styles from './GrowthPages.module.css';
import assets from './SocialMediaAssets.module.css';
import screen from './SocialMediaScreens.module.css';

const benefits = [
  [Megaphone, 'Build Brand Awareness', 'Put your business in front of the right people and create a recognizable presence.'],
  [UsersRound, 'Reach New Audiences', 'Discover and connect with potential customers beyond your existing audience.'],
  [ShieldCheck, 'Build Trust & Credibility', 'Consistent content helps people understand your brand and feel confident about you.'],
  [MessagesSquare, 'Increase Engagement', 'Encourage interactions, conversations, shares, and messages with meaningful content.'],
  [Sparkles, 'Generate Leads & Opportunities', 'Turn attention into action with campaigns designed to drive inquiries and conversions.'],
  [ScanFace, 'Understand Your Audience', 'Gain valuable insights into what your audience likes, needs, and responds to.'],
];
const services = [
  [Compass, 'Social Media Strategy', 'We create a customized strategy based on your brand, audience, goals, and growth.', '#3268ff'],
  [PenTool, 'Content Creation', 'Engaging posts, graphics, videos, reels, and copy that capture attention and communicate your message.', '#8851ff'],
  [CalendarDays, 'Social Media Management', 'We manage your accounts, maintain consistency, schedule content, and keep your brand active.', '#9564ed'],
  [Target, 'Paid Social Campaigns', 'Targeted ad campaigns that reach the right audience and deliver measurable results.', '#00b48c'],
];
const journey = [[Search, 'Discover', 'People find your brand and get to know you.'], [UsersRound, 'Engage', 'They interact with your content and build interest.'], [ShieldCheck, 'Trust', 'They trust your brand and see the value.'], [MousePointerClick, 'Convert', 'They take action and become customers.']];
const socialAsset = file => publicAsset(`/image/SocialMediaMarketing/${file}`);
const benefitIcons = ['Capability symbol.png', ...Array.from({ length: 5 }, (_, i) => `Capability symbol (${i + 1}).png`)];
const serviceIcons = ['Capability symbol (9).png', 'Capability symbol (8).png', 'Capability symbol (7).png', 'Capability symbol (6).png'];
const stageIcons = ['Group 40217 (3).png', 'Group 40217 (2).png', 'Group 40217 (1).png', 'Group 40217.png'];
const stageCurves = ['Frame 1000004767.png', ...Array.from({ length: 3 }, (_, i) => `Frame 1000004767 (${i + 1}).png`)];
const platforms = ['Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok', 'X (Twitter)', 'Pinterest', 'WhatsApp Business'];

function ScreenFrames({ children }) {
  return <main>{React.Children.map(children, child => <div className={`${screen.frame} ${child.props['aria-labelledby'] === 'social-partner-title' ? screen.partnerFrame : child.props['aria-labelledby'] === 'platforms-title' ? screen.platformFrame : ''}`} data-social-frame>{child}</div>)}</main>;
}

export default function SocialMediaMarketing() {
  useEffect(() => { const previous = document.title; document.title = 'Social Media Marketing | Leads Garage'; return () => { document.title = previous; }; }, []);
  return <div className={`${styles.page} ${assets.page} ${screen.page}`}>
    <ScreenFrames>
      <section className={`${styles.hero} ${styles.socialHero}`} aria-labelledby="social-title">
        <div><span className={styles.label}>Social Media Marketing</span><h1 id="social-title">Turn Social Media Into a <strong><TypingHighlight>Growth Channel</TypingHighlight></strong></h1><p>At LeadsGarage, we help businesses turn their social presence into a strategic growth channel through creative content, targeted campaigns, audience engagement, and performance-driven optimization.</p><div className={styles.actions}><a className={styles.primary} href="#contact">Grow Your Brand</a><a className={styles.secondary} href="#contact">Talk to Our Experts</a></div></div>
        <div className={`${styles.heroVisual} ${assets.heroVisual}`}>
          <img className={assets.photo} src={socialAsset('Industry photography.png')} width="577" height="624" alt="Two creators preparing social media content together." fetchPriority="high" />
          <img className={assets.people} src={socialAsset('Frame 1000004799.png')} width="480" height="468" alt="" />
          <img className={assets.megaphone} src={socialAsset('Frame 1000004798.png')} width="457" height="468" alt="" />
          <img className={assets.featured} src={socialAsset('Featured opportunity.png')} width="673" height="284" alt="Content. Community. Campaigns. Creative content, targeted campaigns, and meaningful connections for your brand." />
        </div>
      </section>
      <section className={`${styles.panel} ${styles.center} ${assets.benefits}`} aria-labelledby="social-benefits-title"><h2 id="social-benefits-title">What Can Social Media Do for Your Business?</h2><p className={styles.intro}>When used strategically, social media can create powerful opportunities for growth and long-term success.</p><div className={styles.cards} role="region" aria-label="Social media benefits" tabIndex={0}>{benefits.map(([, title, description], index) => <article className={styles.card} key={title}><img className={assets.benefitIcon} src={socialAsset(benefitIcons[index])} width="66" height="66" alt="" /><h3>{title}</h3><p>{description}</p></article>)}</div><p className={screen.railHint}>Swipe to explore the benefits</p></section>
      <section className={`${styles.container} ${styles.section} ${styles.orbit} ${screen.services}`} aria-labelledby="social-services-title"><div className={styles.orbitHeading}><h2 id="social-services-title"><span>Everything You Need to Build a</span> Strong Social Presence</h2><p>We manage your social media from strategy to execution and continuous growth.</p></div><div className={screen.serviceGrid} role="region" aria-label="Social media services" tabIndex={0}>{services.map(([Icon, title, description, color], index) => <article key={title} style={{ '--accent': color }}>{serviceIcons[index] ? <img className={assets.serviceIcon} src={socialAsset(serviceIcons[index])} width="57" height="57" alt="" /> : <span className={styles.icon}><Icon aria-hidden="true" /></span>}<h3>{title}</h3><p>{description}</p></article>)}</div><p className={screen.railHint}>Swipe to explore our services</p></section>
      <section className={`${styles.panel} ${styles.journey}`} aria-labelledby="social-journey-title"><h2 id="social-journey-title">From Attention to Action</h2><div className={styles.journeyGrid} role="region" aria-label="Social media journey" tabIndex={0}>{journey.map(([Icon, title, description], index) => <article key={title} className={styles.journeyCard}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p><img className={assets.stageCurve} src={socialAsset(stageCurves[index])} width="281" height="164" alt="" /><div className={assets.stageIcon}><img src={socialAsset(stageIcons[index])} width="163" height="164" alt="" /></div></article>)}</div></section>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="social-partner-title"><div className={styles.split}><h2 id="social-partner-title">Why Partner With<br />Leadsgarage?</h2><p className={styles.intro}>We combine creativity, strategy, and data to deliver social media marketing that creates real business impact. Our focus is on building meaningful connections and driving measurable growth for your brand.</p></div><div className={styles.metrics}>{[['200+', 'Successful Campaigns'], ['150+', 'Happy Clients'], ['50M+', 'People Reached'], ['250%', 'Average Growth in Engagement']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
      <section className={styles.panel} aria-labelledby="platforms-title"><span className={styles.label}>Meet your audience where they are</span><h2 id="platforms-title">Platforms We Help You Grow On</h2><div className={styles.platforms}>{platforms.map(name => <a key={name} href="#contact" aria-label={`Discuss ${name} marketing`}>{name}<ArrowUpRight aria-hidden="true" /></a>)}</div></section>

    </ScreenFrames>
    <div className={screen.footerFrame}><section className={styles.banner} aria-labelledby="social-cta-title"><span className={styles.label}>Your next chapter starts here</span><h2 id="social-cta-title">Your Audience Is Already on Social Media. Let's help you Reach Them.</h2><p>Build awareness. Start conversations. Earn trust. Generate opportunities. Leadsgarage creates social media strategies that deliver measurable business results.</p><div className={styles.actions}><a className={styles.primary} href="#contact">Start Your Social Media Journey</a><a className={styles.secondary} href="#contact">Schedule a Consultation</a></div></section><div className={styles.footer}><Footer page="socialMediaMarketing" compactQuery="(max-width:639px), (max-height:500px)" /></div></div>
  </div>;
}
