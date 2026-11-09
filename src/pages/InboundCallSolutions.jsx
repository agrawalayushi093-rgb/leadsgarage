import React, { useEffect } from 'react';
import { ArrowLeftRight, ArrowRight, Check, ChartNoAxesColumn, Headphones, PhoneIncoming, Send, UsersRound } from 'lucide-react';
import { SiteFooter } from '../components/PartnershipSections';
import { publicAsset } from '../utils/publicAsset';
import shared from '../components/PartnershipPage.module.css';
import styles from './SolutionPages.module.css';

const models = [
  [PhoneIncoming, 'Inbound Calls', 'Connect businesses directly with customers who are actively looking for a solution or service.', 'Customer', 'Business'],
  [Headphones, 'Live Transfers', 'Connect qualified callers directly to the appropriate business or sales team in real time.', 'Qualified caller', 'Sales team'],
  [ArrowLeftRight, 'Blind Transfers', 'Connect the caller directly to the receiving business without a prior introduction.', 'Caller', 'Business'],
  [UsersRound, 'Warm Transfers', 'A caller is qualified and introduced before the call is connected, creating a smoother transition.', 'Introduction', 'Connection'],
];
const benefits = ['Reach high-intent audiences', 'Improve the customer journey', 'Scale call-based campaigns', 'Track call & campaign performance', 'Custom Qualification Criteria', 'Generate opportunities with real conversations'];
const inboundAsset = file => publicAsset(`/image/InboundCalls/${file}`);
const modelIcons = ['phone-incoming.png', 'headset (1).png', 'Model symbol.png', 'Model symbol (1).png'];
const avatar = file => publicAsset(`/image/Home/section6/${file}`);

function CallProcessArtwork({ step }) {
  if (step === 0) return <div className={styles.trafficArtwork} aria-hidden="true">
    <span><Send size={23} /></span>
    <img src={avatar('Group 40073.png')} alt="" width="64" height="64" />
    <img src={avatar('Group 40079.png')} alt="" width="64" height="64" />
    <img src={avatar('Group 40067.png')} alt="" width="80" height="80" />
    <span><ChartNoAxesColumn size={27} /></span>
  </div>;
  return <div className={styles.inboundProcessArtwork} aria-hidden="true"><img src={inboundAsset(step === 1 ? 'image 24.png' : 'Container.png')} width={step === 1 ? 283 : 272} height={step === 1 ? 116 : 282} alt="" /></div>;
}

export default function InboundCallSolutions() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Inbound Call Solutions | Leads Garage';
    return () => { document.title = previous; };
  }, []);
  return <div className={`${shared.page} ${styles.page}`}>
    <main id="inbound-calls-main">
      <section className={`${shared.hero} ${styles.solutionHero} ${styles.callHero}`} aria-labelledby="inbound-calls-title">
        <a className={shared.specialist} href="#contact">Connect with our Specialist <ArrowRight size={18} /></a>
        <div className={shared.heroCopy}>
          <span className={shared.eyebrow}>INBOUND CALL SOLUTIONS</span>
          <h1 id="inbound-calls-title">Turn Inbound Calls Into<br /><span>Real Opportunities.</span></h1>
          <p>Connect your business with high-intent customers through quality inbound calls and performance-driven call solutions.</p>
          <div className={styles.heroActions}><a className={styles.squareButton} href="#contact">Get Started <ArrowRight size={22} /></a><a className={styles.outlineButton} href="#contact">Talk to Our Team <ArrowRight size={22} /></a></div>
        </div>
        <img className={styles.callHeroArt} src={publicAsset('/image/InboundCalls/hero-art.webp')} width="635" height="590" alt="An inbound customer call with a blue telephone, live call status and audio waveform." fetchPriority="high" />
      </section>

      <div className={styles.curveArea}>
        <section className={`${shared.container} ${styles.payPerCall}`} aria-labelledby="pay-per-call-title">
          <div><h2 id="pay-per-call-title">What Is Pay Per Call?</h2>
            <p>Pay Per Call is a performance-based marketing model where advertisers pay for qualified phone calls generated through marketing campaigns.</p>
            <p>At Leadsgarage, we focus on generating quality inbound calls from relevant audiences and connecting those calls to the right solution experts.</p>
            <p>It connects businesses with potential customers through targeted calls, with payments based on predefined criteria such as call duration, location, and lead quality.</p>
            <ul className={styles.criteria}>{['Call duration', 'Lead quality', 'Location'].map(item => <li key={item}><span><Check size={23} /></span>{item}</li>)}</ul>
          </div>
          <figure className={styles.callFlow} aria-label="Customer to quality call to solution expert">
            <div><span><img className={styles.inboundFlowIcon} src={inboundAsset('Vector.png')} width="33" height="37" alt="" /></span><figcaption>Customer</figcaption></div><ArrowRight aria-hidden="true" />
            <div><span className={styles.inboundStage}><img src={inboundAsset('Stage icon.png')} width="112" height="112" alt="" /></span><p>Quality call</p></div><ArrowRight aria-hidden="true" />
            <div><span><img className={styles.inboundFlowIcon} src={inboundAsset('headset.png')} width="46" height="46" alt="" /></span><p>Solution expert</p></div>
          </figure>
        </section>

        <section className={`${shared.container} ${styles.models}`} aria-labelledby="models-title">
          <h2 id="models-title"><strong>Pay Per Call</strong><br />Models</h2>
          {models.map(([Icon, title, description, from, to], index) => <article className={`${styles.modelCard} ${styles[`model${index}`]}`} key={title}>
            <h3><span className={index > 1 ? styles.inboundModelSymbol : undefined}><img src={inboundAsset(modelIcons[index])} width={index > 1 ? 77 : 40} height={index > 1 ? 77 : 40} alt="" /></span>{title}</h3><p>{description}</p>
            <div className={styles.modelFlow}><strong>{from}</strong><i /><ArrowRight size={22} /><strong>{to}</strong></div>
          </article>)}
        </section>
      </div>

      <section className={`${shared.container} ${styles.callProcess}`} aria-labelledby="call-process-title">
        <h2 id="call-process-title">How It Works</h2>
        <div className={styles.callProcessGrid}>{[
          ['Quality Traffic', 'We target and attract high-intent customers.'],
          ['Connect', 'We connect callers with the right solution experts.'],
          ['Better Results', 'We connect callers with the right solution experts.'],
        ].map(([title, description], index) => <article key={title}><h3>{title}</h3><p>{description}</p><span className={styles.processNumber} aria-hidden="true">0{index + 1}</span><CallProcessArtwork step={index} /></article>)}</div>
      </section>

      <section className={`${shared.container} ${styles.conversations}`} aria-labelledby="conversations-title">
        <h2 id="conversations-title">Real Conversations. Real Intent.</h2>
        <p>A phone call provides something a simple click cannot—a direct conversation with a potential customer.</p>
        <div className={styles.conversationsGrid}>
          <ul>{benefits.map(benefit => <li key={benefit}><span><Check size={24} /></span>{benefit}</li>)}</ul>
          <img src={publicAsset('/image/InboundCalls/real-conversations.webp')} width="642" height="402" alt="A customer service specialist on a headset, with the message Real Conversations. Real Intent." loading="lazy" />
        </div>
      </section>
    </main>
    <SiteFooter page="inboundCalls" />
  </div>;
}
