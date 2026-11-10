import TypingHighlight from '../components/TypingHighlight';
import React, { useEffect, useState } from 'react';
import { ArrowRight, BadgeCheck, ChartNoAxesCombined, ChartNoAxesColumnIncreasing, Headphones, Heart, House, Landmark, Layers, Leaf, ShieldCheck, ShoppingCart, SlidersHorizontal, Target, Users, Zap } from 'lucide-react';
import { BenefitsCloud, HowItWorks, IndustriesSection, SiteFooter, RequirementsSection } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import styles from './Advertisers.module.css';

const goals = [
  [Target, 'High-Intent Traffic', 'We deliver quality traffic from users actively searching for products and services like yours.', '#5683ff'],
  [ChartNoAxesCombined, 'Performance Driven', 'Every campaign is built to achieve measurable results and maximise your return on ad spend.', '#9865ff'],
  [SlidersHorizontal, 'Flexible Campaigns', 'Scale traffic volume around your acquisition goals and campaign requirements.', '#22bee4'],
  [Zap, 'Fast Campaign Launch', 'Quick onboarding, smooth setup, and rapid campaign activation to get you results faster.', '#18c6a4'],
  [ChartNoAxesCombined, 'Transparent Reporting', 'Clear insights and detailed reporting so you always know how your campaigns are performing.', '#38a8ff'],
  [Headphones, 'Dedicated Support', 'Work directly with our team on requirements, performance, and optimisation opportunities.', '#53dbb9'],
];
const solutions = ['Lead Generation (CPL)', 'Email Marketing', 'Pay Per Call', 'Native & Display', 'Cost Per Acquisition', 'Mobile Marketing'];
const asset = name => `/image/Advertisers/${name}.png`;
const goalIcons = ['Icon bg', 'Icon bg (1)', 'Icon bg (2)', 'Icon bg (3)', 'Icon bg (4)', 'Icon bg (5)'].map(asset);
const solutionIcons = ['Check symbol (1)', 'Check symbol (2)', 'Check symbol', 'Check symbol (3)', 'Check symbol (1)', 'Check symbol (4)'].map(asset);
const processIcons = ['Group 40217', 'Group 40217 (1)', 'Group 40217 (2)', 'Group 40217 (3)'].map(asset);
const processCurves = ['Frame 1000004767', 'Frame 1000004767 (1)', 'Frame 1000004767 (2)', 'Frame 1000004767 (3)'].map(asset);
const industries = [
  [Landmark, 'Finance', 'Connect with prospects interested in financial products and services.', 'finance'],
  [ShieldCheck, 'Insurance', 'Reach customers exploring insurance products and coverage options.', 'insurance'],
  [House, 'Home Services', 'Reach homeowners looking for trusted home improvement services.', 'home-services'],
  [Heart, 'Dating', 'Connect with audiences seeking meaningful connections and relationship services.', 'dating'],
  [Leaf, 'Nutra', 'Reach health-conscious consumers actively seeking wellness and nutrition products.', 'nutra'],
  [ShoppingCart, 'E-Commerce', 'Drive high-intent shoppers to your store and increase conversions at scale.', 'e-commerce'],
];
const steps = [
  [Users, 'Understand Your Goals', 'We learn about your business, target audience, KPIs, and campaign objectives.'],
  [ChartNoAxesColumnIncreasing, 'Build Your Strategy', 'Our experts craft a customised strategy using the right traffic sources and channels.'],
  [Layers, 'Launch & Drive Traffic', 'We drive high-intent traffic from proven channels that convert.'],
  [BadgeCheck, 'Optimise & Scale', 'We monitor campaign performance and work with you to optimise results and scale sustainably.'],
];
const questions = [
  ['How quickly can I launch a campaign?', 'Launch timing depends on your requirements, targeting, creative assets, and integration needs. Our team will agree a launch plan with you during onboarding.'],
  ['What traffic sources do you use?', 'We build the channel mix around your goals. Solutions include lead generation, pay per call, email marketing, native and display advertising, and mobile marketing.'],
  ['How do you ensure traffic quality?', 'We use fraud prevention and quality checks, agree campaign criteria with you, and monitor traffic and campaign performance throughout delivery.'],
  ['What industries do you work with?', 'We work across finance, insurance, home services, dating, nutra, and e-commerce. Talk to our team about the requirements for your vertical.'],
  ['What reporting and tracking do you provide?', 'Reporting and tracking are agreed during campaign setup. We work with you to review campaign delivery, performance, and opportunities for optimisation.'],
  ['Can campaigns be tailored to my goals?', 'Yes. We discuss your audience, geography, acquisition goals, volume, and qualification requirements to shape the campaign around your business.'],
  ['How do I get started?', 'Use the contact details below to speak with our team. Share your goals and requirements so we can discuss the next steps together.'],
];

function CampaignFAQ() {
  const [showMore, setShowMore] = useState(false);
  return <section className={styles.faq} aria-labelledby="advertisers-faq-title">
    <h2 id="advertisers-faq-title">Frequently Asked Questions</h2>
    <div className={styles.questions} id="campaign-questions">
      {questions.slice(0, showMore ? questions.length : 5).map(([question, answer]) => <details key={question}>
        <summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p>
      </details>)}
    </div>
    <div className={styles.faqActions}><a href="#contact">Talk to Our Team</a><button type="button" aria-expanded={showMore} aria-controls="campaign-questions" onClick={() => setShowMore(current => !current)}>{showMore ? 'See less' : 'See more'}</button></div>
  </section>;
}

export default function Advertisers() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Advertiser Partnerships | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main id="advertisers-main">
      <section className={`${shared.hero} ${styles.hero}`} data-page-hero aria-labelledby="advertisers-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>ADVERTISERS</span>
          <h1 id="advertisers-title">Performance That<br className={shared.desktopBreak} /> Delivers <span><TypingHighlight>Real Results.</TypingHighlight></span></h1>
          <p>High-quality, intent-driven traffic that converts. Scale your customer acquisition with Leadsgarage.</p>
          <div className={styles.heroActions}><a className={styles.mintButton} href="#contact">Let's Work Together</a><a className={styles.outlineButton} href="#contact">Start Your Campaign</a></div>
        </div>
        <div data-hero-art className={styles.heroVisual}>
          <img className={styles.macbook} src={publicAsset('/image/Advertisers/MacBook Air (15 inch).png')} width="1204" height="791" alt="MacBook displaying a performance overview with campaign metrics and growth charts." fetchPriority="high" />
          <img className={`${styles.benefitCard} ${styles.optimisation}`} src={publicAsset('/image/Advertisers/Benefit card.png')} width="330" height="123" alt="Continuous Optimisation. We test and optimise every element to lower costs." />
          <img className={`${styles.benefitCard} ${styles.intent}`} src={publicAsset('/image/Advertisers/Benefit card (1).png')} width="295" height="123" alt="High-Intent Traffic. Reach users actively seeking your product or service." />
          <img className={`${styles.benefitCard} ${styles.safety}`} src={publicAsset('/image/Advertisers/Benefit card (2).png')} width="300" height="122" alt="Brand Safety. Advanced fraud prevention and strict quality checks." />
        </div>
      </section>
      <RequirementsSection title="Built Around Your Campaign Goals" items={goals} iconAssets={goalIcons} />
      <BenefitsCloud title="Performance" emphasis="Marketing Solutions" subtitle="Flexible solutions tailored to your goals and KPIs." items={solutions} iconAssets={solutionIcons} assetFolder="Advertisers" />
      <IndustriesSection title="Industries We Serve" items={industries} folder="Advertisers" imageAssets={{ insurance: asset('Rectangle') }} />
      <div className={styles.process}><HowItWorks steps={steps} artworkAssets={processIcons} curveAssets={processCurves} /></div>
    </main>
    <div className={styles.closingArea}>
      <div className={styles.faqShell}><CampaignFAQ /></div>
      <SiteFooter page="advertisers" assetFolder="Advertisers" />
    </div>
    
  </div>;
}
