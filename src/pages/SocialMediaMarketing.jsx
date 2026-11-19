import TypingHighlight from '../components/TypingHighlight';
import usePageScroll from '../hooks/usePageScroll';
import React, { useEffect } from 'react';
import { Megaphone, UsersRound, ShieldCheck, MessagesSquare, Sparkles, ScanFace, Compass, PenTool, CalendarDays, Target, Search, MousePointerClick, TrendingUp, ArrowUpRight, ArrowRight } from 'lucide-react';
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
  [Compass, 'Social Media Strategy', 'We create a customized strategy based on your brand, audience, goals, and growth.', '#1f64f8'],
  [PenTool, 'Content Creation', 'Engaging posts, graphics, videos, reels, and copy that capture attention and communicate your message.', '#854bf7'],
  [CalendarDays, 'Social Media Management', 'We manage your accounts, maintain consistency, schedule content, and keep your brand active.', '#9564ed'],
  [Target, 'Paid Social Campaigns', 'Targeted ad campaigns that reach the right audience and deliver measurable results.', '#00b48c'],
];
const journey = [
  [Search, 'Discover', 'People find your brand and get to know you.', '#1e5bf6'],
  [UsersRound, 'Engage', 'They interact with your content and build interest.', '#00a876'],
  [ShieldCheck, 'Trust', 'They trust your brand and see the value.', '#7045d9'],
  [MousePointerClick, 'Convert', 'They take action and become customers.', '#3b82f6'],
  [TrendingUp, 'Grow', 'You build lasting relationships and long-term growth.', '#38d39f'],
];
const socialAsset = file => publicAsset(`/image/SocialMediaMarketing/${file}`);
const benefitIcons = ['Capability symbol.png', ...Array.from({ length: 5 }, (_, i) => `Capability symbol (${i + 1}).png`)];
const serviceIcons = ['Capability symbol (9).png', 'Capability symbol (8).png', 'Capability symbol (7).png', 'Capability symbol (6).png'];
const stageIcons = ['Group 40217 (3).png', 'Group 40217 (2).png', 'Group 40217 (1).png', 'Group 40217.png'];
const stageCurves = ['Frame 1000004767.png', ...Array.from({ length: 3 }, (_, i) => `Frame 1000004767 (${i + 1}).png`)];
const journeyImages = [
  'Group 40307 (1).png',
  'Group 40308 (1).png',
  'Group 40309 (1).png',
  'Group 40310 (1).png',
  'Group 40311 (1).png',
];
const platformItems = [
  { name: 'Facebook', icon: 'image 116.png' },
  { name: 'Instagram', icon: 'Insta.png' },
  { name: 'LinkedIn', icon: 'Linkedin.png' },
  { name: 'YouTube', icon: 'utube.png' },
  { name: 'TikTok', icon: 'image 116 (1).png' },
  { name: 'X (Twitter)', icon: 'X (Twitter).png' },
  { name: 'Pinterest', icon: 'Pinterest.png' },
  { name: 'WhatsApp Business', icon: 'whatsapp.png' },
];

function ScreenFrames({ children }) {
  return <main id="social-media-main">{React.Children.map(children, child => <div className={`${screen.frame} ${child.props['aria-labelledby'] === 'social-title' ? screen.heroFrame : child.props['aria-labelledby'] === 'social-benefits-title' ? screen.benefitsFrame : child.props['aria-labelledby'] === 'social-partner-title' ? screen.partnerFrame : child.props['aria-labelledby'] === 'platforms-title' ? screen.platformFrame : child.props['aria-labelledby'] === 'social-services-title' ? screen.servicesFrame : ''}`} data-social-frame>{child}</div>)}</main>;
}

export default function SocialMediaMarketing() {
  usePageScroll();
  useEffect(() => { const previous = document.title; document.title = 'Social Media Marketing | Leads Garage'; return () => { document.title = previous; }; }, []);
  return <div className={`${styles.page} ${assets.page} ${screen.page}`}>
    <ScreenFrames>
      <section className={`${styles.hero} ${styles.socialHero} ${screen.socialHero}`} aria-labelledby="social-title">
        <div className={screen.heroContent}>
          <span className={screen.socialBadge}>Social Media Marketing</span>
          <h1 id="social-title">
            Turn Social Media Into a<br className={screen.titleBreak} />
            <strong className={screen.heroHighlight}>
              <TypingHighlight>Growth Channel</TypingHighlight>
            </strong>
          </h1>
          <p className={screen.heroDescription}>
            At LeadsGarage, we help businesses turn their social presence into a strategic growth channel through creative content, targeted campaigns, audience engagement, and performance-driven optimization.
          </p>
          <div className={screen.heroActions}>
            <a className={screen.btnPrimary} href="#contact">Grow Your Brand</a>
            <a className={screen.btnSecondary} href="#contact">Get Expert Guidance</a>
          </div>
        </div>
        <div className={screen.socialHeroVisual}>
          <img
            className={screen.socialHeroImg}
            src={socialAsset('Group 40301.png')}
            width="958"
            height="777"
            alt="Social Media Campaigns 3D dashboard illustration"
            fetchPriority="high"
          />
        </div>
      </section>
      <section className={`${styles.panel} ${styles.center} ${assets.benefits} ${screen.benefitSection}`} aria-labelledby="social-benefits-title">
        <h2 id="social-benefits-title">What Can Social Media Do for Your Business?</h2>
        <p className={`${styles.intro} ${screen.benefitSubtitle}`}>When used strategically, social media can create powerful opportunities for growth and long-term success.</p>
        <div className={`${styles.cards} ${screen.benefitGrid}`} role="region" aria-label="Social media benefits" tabIndex={0}>
          {benefits.map(([, title, description], index) => (
            <article className={`${styles.card} ${screen.benefitCard}`} key={title}>
              <img className={`${assets.benefitIcon} ${screen.benefitIcon}`} src={socialAsset(benefitIcons[index])} width="66" height="66" alt="" />
              <h3 className={screen.benefitTitle}>{title}</h3>
              <p className={screen.benefitDescription}>{description}</p>
            </article>
          ))}
        </div>
        <p className={screen.railHint}>Swipe to explore the benefits</p>
      </section>
      <section className={`${screen.servicesSection} ${screen.services}`} aria-labelledby="social-services-title">
        <div className={screen.orbitCenter}>
          <h2 id="social-services-title" className={screen.orbitHeading}>
            <span>Everything You Need to Build a</span>
            <strong>Strong Social Presence</strong>
          </h2>
          <p className={screen.orbitSubtitle}>
            We manage your social media from strategy to execution and continuous growth.
          </p>
        </div>
        <div className={screen.serviceGrid} role="region" aria-label="Social media services" tabIndex={0}>
          {services.map(([Icon, title, description, color], index) => (
            <article key={title} className={screen.serviceCard} style={{ '--accent': color }}>
              {serviceIcons[index] ? (
                <img className={screen.serviceIcon} src={socialAsset(serviceIcons[index])} width="57" height="57" alt="" />
              ) : (
                <span className={screen.serviceIconFallback}><Icon aria-hidden="true" /></span>
              )}
              <h3 className={screen.serviceTitle}>{title}</h3>
              <p className={screen.serviceDescription}>{description}</p>
            </article>
          ))}
        </div>
        <p className={screen.railHint}>Swipe to explore our services</p>
      </section>
      <section className={`${screen.journeySection} ${screen.journeyFrame}`} aria-labelledby="social-journey-title">
        <h2 id="social-journey-title" className={screen.journeyHeading}>From Attention to Action</h2>
        <div className={screen.journeyGrid} role="region" aria-label="Social media journey" tabIndex={0}>
          {journey.map(([, title, description], index) => (
            <article key={title} className={screen.journeyCard}>
              <div className={screen.journeyHeader}>
                <span className={screen.journeyNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={screen.journeyContent}>
                  <h3 className={screen.journeyTitle}>{title}</h3>
                  <p className={screen.journeyDesc}>{description}</p>
                </div>
              </div>
              <div className={screen.journeyVisualWrapper}>
                <img
                  className={screen.journeyIllustration}
                  src={socialAsset(journeyImages[index])}
                  width="292"
                  height="221"
                  alt={`${title} illustration`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
        <p className={screen.railHint}>Swipe to explore the journey</p>
      </section>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="social-partner-title"><div className={styles.split}><h2 id="social-partner-title">Why Partner With<br />Leadsgarage?</h2><p className={styles.intro}>We combine creativity, strategy, and data to deliver social media marketing that creates real business impact. Our focus is on building meaningful connections and driving measurable growth for your brand.</p></div><div className={styles.metrics}>{[['200+', 'Successful Campaigns'], ['150+', 'Happy Clients'], ['50M+', 'People Reached'], ['250%', 'Average Growth in Engagement']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
      <section className={`${styles.panel} ${screen.platformSection}`} aria-labelledby="platforms-title">
        <span className={screen.platformBadge}>MEET YOUR AUDIENCE WHERE THEY ARE</span>
        <h2 id="platforms-title" className={screen.platformHeading}>Platforms We Help You Grow On</h2>
        <div className={screen.platformGrid}>
          {platformItems.map(({ name, icon }) => (
            <a key={name} href="#contact" className={screen.platformCard} aria-label={`Discuss ${name} marketing`}>
              <div className={screen.platformInfo}>
                <img className={screen.platformIcon} src={socialAsset(icon)} alt="" width="44" height="42" loading="lazy" />
                <span className={screen.platformName}>{name}</span>
              </div>
              <ArrowUpRight className={screen.platformArrow} aria-hidden="true" size={20} />
            </a>
          ))}
        </div>
      </section>

    </ScreenFrames>
    <div className={screen.footerShell} data-social-frame>
      <img
        className={screen.footerGlow}
        src={socialAsset('Ellipse 568.png')}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <img
        className={screen.footerWatermark}
        src={socialAsset('Group 40201.png')}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <section className={screen.footerCta} aria-labelledby="social-cta-title">
        <h2 id="social-cta-title" className={screen.footerCtaTitle}>
          Grow Your Social Media<br />Customer Acquisition
        </h2>
        <p className={screen.footerCtaDesc}>
          Tell us about your campaign, target audience, and traffic requirements. We'll work with you to build a customer acquisition solution around your goals.
        </p>
        <a className={screen.connectButton} href="#contact">
          Let's connect <span className={screen.connectButtonArrow}><ArrowRight size={18} /></span>
        </a>
      </section>
      <Footer page="socialMediaMarketing" compactQuery="(max-width:639px), (max-height:500px)" />
    </div>
  </div>;
}
