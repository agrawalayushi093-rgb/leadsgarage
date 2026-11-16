import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, TrendingUp, Check } from 'lucide-react';
import Footer from './Footer';
import TypingHighlight from './TypingHighlight';
import usePageScroll from '../hooks/usePageScroll';
import { publicAsset } from '../utils/publicAsset';

import styles from '../pages/IndustryPage.module.css';

const defaultIndustries = [
  { title: 'Finance', description: 'Connect with prospects interested in financial products and services.', image: '/image/Insurance/Rectangle (4).png' },
  { title: 'Insurance', description: 'Reach customers exploring insurance products and coverage options.', image: '/image/Insurance/Insurance.png' },
  {
    title: 'Home Services',
    description: 'Connect with homeowners looking for trusted home improvement services.',
    image: '/image/Insurance/Rectangle (2).png',
  },
  {
    title: 'Dating',
    description: 'Connect with audiences seeking meaningful connections and relationship services.',
    image: '/image/Insurance/Rectangle (1).png',
  },
  {
    title: 'E-Commerce',
    description: 'Drive high-intent shoppers to your store and increase conversions at scale.',
    image: '/image/Insurance/E-Commerce.png',
  },
  {
    title: 'Health & Beauty',
    description: 'Reach audiences exploring wellness, skincare, and beauty products.',
    image: '/image/Insurance/Frame 1000004803.png',
  },
  {
    title: 'I-Gaming',
    description: 'Connect with players exploring gaming platforms, products, and coverage options.',
    image: '/image/Insurance/Frame 1000004803 (1).png',
  },
  {
    title: 'Real Estate',
    description: 'Reach customers looking for home loans, property, and mortgage options.',
    image: '/image/Insurance/Frame 1000004803 (2).png',
  },
  { title: 'Warranty', description: 'Reach customers exploring warranty products and coverage options.', image: '/image/Insurance/Frame 1000004803 (3).png' },
  { title: 'Legal', description: 'Reach customers exploring legal services and relevant solutions.', image: '/image/Insurance/Frame 1000004803 (4).png' },
];

function ChannelArtwork({ index, assetFolder }) {
  const asset = file => publicAsset(`/image/${assetFolder}/${file}`);
  if (assetFolder === 'Insurance') {
    if (index === 1) return <div className={styles.insuranceCallPanel}>
      <div><img src={asset('Caller symbol.png')} alt="" /><span><strong>Ready to talk</strong><small>Connect with insurance experts</small></span></div>
      <div className={styles.callControls}>{['Call control.png', 'Call control (1).png', 'Call control (2).png'].map(file => <img key={file} src={asset(file)} alt="" />)}</div>
    </div>;
    if (index === 2) return <div className={styles.insuranceMessages}><img src={asset('Email preview.png')} alt="" /><img src={asset('SMS preview.png')} alt="" /></div>;
  }
  if (index === 0) {
    return (
      <div className={styles.audiencePanel}>
        <div className={styles.panelHeading}>
          <strong>Audience match</strong>
          <img src={asset('sliders-horizontal.png')} alt="" width="16" height="16" />
        </div>
        {['Relevant audience', 'Campaign requirements'].map((label, i) => (
          <div className={styles.audienceRow} key={label}>
            <img
              src={asset(
                i
                  ? assetFolder === 'Insurance'
                    ? 'Audience focus.png'
                    : assetFolder === 'Finance'
                    ? 'focus.png'
                    : 'Target symbol.png'
                  : 'Criterion symbol.png'
              )}
              alt=""
              width="20"
              height="20"
            />
            <span>{label}</span>
            <img src={asset('Vector.png')} alt="" width="14" height="14" />
          </div>
        ))}
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className={styles.targetPanel}>
        <div className={styles.tags}>
          {['Location', 'Audience', 'Goals'].map(label => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className={styles.idealAudience}>
          <img src={asset('Target symbol.png')} alt="" width="36" height="36" />
          <div>
            <strong>Your ideal audience</strong>
            <span>Built around your campaign</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.messages}>
      <div className={styles.emailCard}>
        <strong>
          <img src={asset('mail.png')} alt="" width="15" height="15" /> Email
        </strong>
        <i />
        <i />
      </div>
      <div className={styles.smsCard}>
        <MessageCircle aria-hidden="true" size={18} />
        <span>
          <strong>SMS</strong>
          <small>Keep the conversation going</small>
        </span>
      </div>
    </div>
  );
}

export default function IndustryPageTemplate({
  page,
  documentTitle,
  eyebrow,
  titlePrefix,
  titleHighlight,
  subtitle,
  primaryButtonText = "Let's Work Together",
  secondaryButtonText = 'Talk to Our Team',
  heroPhoto,
  heroCardTitle,
  heroCardSubtitle,
  heroFloatingIcon,
  reachEyebrow = 'Relevant audiences. Real opportunities.',
  reachTitle,
  reachParagraphs = [],
  reachPhoto,
  reachBadge,
  reachCards,
  metrics,
  metricsPosition, // 'reach', 'quality', or 'standalone'
  cloudTitle,
  cloudSubtitle,
  cloudPills = [],
  cloudFolder,
  channels = [],
  qualityTitle = 'Quality You Can Count On',
  qualityCards = [],
  whyTitle,
  whyParagraphs = [],
  benefits = [],
  industryCards = defaultIndustries,
  ctaTitle,
  ctaBadges = [],
  ctaArt,
}) {
  usePageScroll();
  const industryTrack = useRef(null);
  useEffect(() => {
    const track = industryTrack.current;
    if (!track) return;
    let frame = 0, target = track.scrollLeft;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const cancel = () => { cancelAnimationFrame(frame); frame = 0; };
    const animate = () => {
      const difference = target - track.scrollLeft;
      track.scrollLeft += Math.abs(difference) < 1 ? difference : difference * .18;
      if (Math.abs(target - track.scrollLeft) > 1) frame = requestAnimationFrame(animate);
      else frame = 0;
    };
    const wheel = event => {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? track.clientWidth : 1);
      const maximum = track.scrollWidth - track.clientWidth;
      if (!delta || (delta < 0 && track.scrollLeft <= 1) || (delta > 0 && track.scrollLeft >= maximum - 1)) return;
      event.preventDefault();
      event.stopPropagation();
      if (!frame) target = track.scrollLeft;
      target = Math.max(0, Math.min(maximum, target + delta));
      if (reduced.matches) { cancel(); track.scrollLeft = target; }
      else if (!frame) frame = requestAnimationFrame(animate);
    };
    track.addEventListener('wheel', wheel, { passive: false });
    track.addEventListener('pointerdown', cancel);
    track.addEventListener('touchstart', cancel, { passive: true });
    return () => {
      cancel(); track.removeEventListener('wheel', wheel);
      track.removeEventListener('pointerdown', cancel); track.removeEventListener('touchstart', cancel);
    };
  }, [industryCards]);

  useEffect(() => {
    const previous = document.title;
    if (documentTitle) document.title = documentTitle;
    return () => {
      document.title = previous;
    };
  }, [documentTitle]);

  const resolvedMetricsPos = metricsPosition || (page === 'homeServices' ? 'quality' : page === 'insurance' ? 'reach' : 'standalone');

  const renderMetrics = () => {
    if (!metrics || metrics.length === 0) return null;
    return (
      <div className={styles.metricsBar} aria-label="Key Performance Metrics">
        {metrics.map(([value, label]) => (
          <div className={styles.metricItem} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`${styles.page} ${styles[page]}`}>
      <main id={`${page}-main`}>
        {/* Section 1: Hero */}
        <section className={styles.hero} data-page-hero aria-labelledby={`${page}-hero-title`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 id={`${page}-hero-title`}>
              {page === 'healthAndBeauty' ? (
                <>
                  Connect With<br />Customers Ready to<br />Live Better{' '}
                  <span className={styles.highlight}>
                    <TypingHighlight preserveLineBreaks>{'Real\nResults.'}</TypingHighlight>
                  </span>
                </>
              ) : page === 'insurance' ? (
                <>
                  Connect With Customers<br />
                  Looking for the Right<br />
                  <span className={styles.highlight}>
                    <TypingHighlight>{titleHighlight || 'Insurance Coverage'}</TypingHighlight>
                  </span>
                </>
              ) : (
                <>
                  {titlePrefix}{' '}
                  <span className={styles.highlight}>
                    <TypingHighlight>{titleHighlight}</TypingHighlight>
                  </span>
                </>
              )}
            </h1>
            <p>{subtitle}</p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.primary}>
                {primaryButtonText}
              </a>
              <a href="#contact" className={styles.secondary}>
                {secondaryButtonText}
              </a>
            </div>
          </div>
          <div className={styles.heroArt} data-hero-art>
            <img
              className={styles.heroPhoto}
              src={publicAsset(heroPhoto)}
              width="726"
              height="575"
              alt={`${eyebrow} preview`}
              fetchPriority="high"
            />
            {heroCardTitle && (
              <div className={styles.heroCaption}>
                <h2>{heroCardTitle}</h2>
                {heroCardSubtitle && <p>{heroCardSubtitle}</p>}
              </div>
            )}
            {page === 'insurance' && <>
              <img className={styles.insurancePeople} src={publicAsset('/image/Insurance/image 82.png')} alt="" aria-hidden="true" />
              <img className={styles.insuranceMegaphone} src={publicAsset('/image/Insurance/Frame 1000004798.png')} alt="" aria-hidden="true" />
            </>}
            {heroFloatingIcon && (
              <img
                className={styles.floatingHeroIcon}
                src={publicAsset(heroFloatingIcon)}
                alt=""
                width="220"
                height="220"
                aria-hidden="true"
              />
            )}
          </div>
        </section>

        {/* Section 2: Reach More Relevant Customers */}
        <section className={`${styles.container} ${styles.reach}`} aria-labelledby={`${page}-reach-title`}>
          <div className={styles.reachGrid}>
            <div>
              <span className={styles.label}>{reachEyebrow}</span>
              <h2 id={`${page}-reach-title`}>{reachTitle}</h2>
              {reachParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className={`${styles.reachArt} ${page === 'homeServices' ? styles.homeReachCollage : ''}`}>
              {reachCards ? (
                <div className={styles.reachGrid2}>
                  {reachCards.map(card => (
                    <div key={card.title} className={styles.reachCard}>
                      <img src={publicAsset(card.image)} alt={card.title} loading="lazy" />
                      {page !== 'finance' && <><h3>{card.title}</h3><p>{card.description}</p></>}
                    </div>
                  ))}
                  {page === 'finance' && (
                    <span className={styles.reachBadge}>
                      <img className={styles.reachBadgeIcon} src={publicAsset('/image/Finance/focus.png')} alt="" />
                      Relevant audiences. Smarter connections.
                    </span>
                  )}
                </div>
              ) : (
                reachPhoto && (
                  <>
                    <img
                      className={styles.reachPhoto}
                      src={publicAsset(reachPhoto)}
                      alt={`${eyebrow} customer connection`}
                      loading="lazy"
                    />
                    {reachBadge && (
                      <span className={styles.reachBadge}>
                        {page === 'insurance' ? (
                          <img className={styles.reachBadgeIcon} src={publicAsset('/image/Insurance/Frame 1000004807.png')} alt="" />
                        ) : page === 'homeServices' ? (
                          <img className={styles.reachBadgeIcon} src={publicAsset('/image/Home Services/focus.png')} alt="" />
                        ) : (
                          <Check size={18} color="#00ef83" />
                        )}
                        {reachBadge}
                      </span>
                    )}
                  </>
                )
              )}
              {page === 'homeServices' && <img className={styles.homeReachSide} src={publicAsset('/image/Home Services/Frame 1000004810.png')} alt="Home service consultation and professional tools" loading="lazy" />}
            </div>
          </div>
          {resolvedMetricsPos === 'reach' && renderMetrics()}
        </section>

        {/* Standalone Metrics Bar (if configured) */}
        {resolvedMetricsPos === 'standalone' && metrics && metrics.length > 0 && (
          <section className={`${styles.container} ${styles.metricsSection}`} aria-label="Key Performance Metrics">
            {renderMetrics()}
          </section>
        )}

        {/* Section 4: Solutions Cloud */}
        <section className={`${styles.container} ${styles.cloudSection}`} aria-labelledby={`${page}-cloud-title`}>
          <div className={styles.cloudCopy}>
            <h2 id={`${page}-cloud-title`}>{page === 'finance' ? <>Quality Data.<br /><strong>Better Opportunities.</strong></> : page === 'homeServices' ? <>Home Services<br />Solutions</> : page === 'insurance' ? <>Performance<br /><strong>Marketing Solutions</strong></> : <><strong>Performance</strong> That<br /><strong>Starts With Quality</strong></>}</h2>
            {cloudSubtitle && <p>{cloudSubtitle}</p>}
          </div>
          <ul className={styles.cloudPills}>
            {cloudPills.map((pill, index) => (
              <li key={index}>
                <span>
                  {page === 'insurance' ? <img src={publicAsset(`/image/Insurance/${['Check symbol.png', 'Check symbol (1).png', 'Check symbol (2).png', 'Check symbol (3).png'][index]}`)} alt="" /> : <Check size={18} strokeWidth={2.5} />}
                </span>
                {page === 'homeServices' ? <div><strong>{pill.split(' ')[0]}</strong><small>{pill.split(' ').slice(1).join(' ')}</small></div> : pill}
              </li>
            ))}
          </ul>
          <div className={styles.floatingCloudIcons} aria-hidden="true">
            {['Group 40198.png', 'Group 40195.png', 'Group 40197.png', 'Group 40196.png'].map(file => (
              <img
                key={file}
                src={publicAsset(`/image/${cloudFolder || 'About'}/${file}`)}
                alt=""
                width="140"
                height="140"
              />
            ))}
          </div>
        </section>

        {/* Section 5: Channels (More Ways to Reach Your Customers) */}
        {channels.length > 0 && (
          <section className={`${styles.container} ${styles.channelsSection}`} aria-labelledby={`${page}-channels-title`}>
            {page === 'insurance' && <span className={styles.label}>Connected acquisition</span>}
            <h2 id={`${page}-channels-title`}>More Ways to Reach Your Customers</h2>
            <div className={styles.channelGrid}>
              {channels.map(([title, description], index) => (
                <article key={title} className={styles.channelCard}>
                  <div className={`${styles.channelArt} ${styles[`channelArt${title === 'Email & SMS' ? 2 : title === 'Lead Generation' ? 0 : 1}`]}`} aria-hidden="true">
                    <ChannelArtwork index={title === 'Email & SMS' ? 2 : title === 'Lead Generation' ? 0 : 1} assetFolder={cloudFolder} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Quality You Can Count On */}
        {qualityCards.length > 0 && (
          <section className={`${styles.container} ${styles.qualitySection}`} aria-labelledby={`${page}-quality-title`}>
            {resolvedMetricsPos === 'quality' && renderMetrics()}
            <h2 id={`${page}-quality-title`}>{qualityTitle}</h2>
            <div className={styles.qualityGrid}>
              {qualityCards.map(([icon, title, description]) => (
                <article key={title} className={styles.qualityCard}>
                  <img src={publicAsset(`/image/${cloudFolder}/${icon}`)} width="66" height="66" alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 7: Why Leading Brands Choose Leadsgarage */}
        {whyParagraphs.length > 0 && (
          <section className={`${styles.container} ${styles.whySection}`} aria-labelledby={`${page}-why-title`}>
            <div>
              <h2 id={`${page}-why-title`}>{whyTitle}</h2>
              {whyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className={styles.benefitsList}>
              {benefits.map(([icon, title, description]) => (
                <article key={title} className={styles.benefitItem}>
                  <img src={publicAsset(`/image/${cloudFolder}/${icon}`)} width="44" height="44" alt="" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 8: Built for Your Industry. Designed for Growth */}
        {industryCards && industryCards.length > 0 && (
          <section className={`${styles.container} ${styles.industryRow}`} aria-labelledby={`${page}-industries-title`}>
            <h2 id={`${page}-industries-title`}>Built for Your Industry. Designed for Growth.</h2>
            <p className={styles.industrySubtitle}>
              Our solutions support multiple industries, helping businesses reach relevant audiences through quality traffic, lead generation, and targeted customer acquisition.
            </p>
            <div ref={industryTrack} id={`${page}-industry-track`} className={styles.industryGrid} tabIndex={0} role="region" aria-label="Industry cards" data-native-scroll>
              {industryCards.map(item => (
                <article className={styles.industryItem} key={item.title}>
                  <img src={publicAsset(item.image)} width="345" height="240" alt={item.title} loading="lazy" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Section 9: Footer Shell & CTA (Grouped as One Inner Screen) */}
      <div className={styles.footerShell} data-inner-section-group="">
        <section className={styles.ctaContainer} aria-labelledby={`${page}-cta-title`}>
          <div>
            <h2 id={`${page}-cta-title`}>{ctaTitle}</h2>
            {page !== 'homeServices' && <p className={styles.ctaDescription}>Tell us about your campaign, audience, and requirements. We'll help you build a customer acquisition solution around your goals.</p>}
            <a className={styles.connectButton} href="#contact">
              Let's connect <span><ArrowRight size={20} /></span>
            </a>
          </div>
          <div className={styles.growthArt}>
            <img
              src={publicAsset(ctaArt || `/image/${cloudFolder}/image 114.png`)}
              width="946"
              height="584"
              alt="Rising growth chart illustration"
              loading="lazy"
            />
            {ctaBadges.map((badge, i) => (
              <span key={badge.text} className={styles[`badge${i + 1}`]}>
                <TrendingUp size={18} aria-hidden="true" />
                {badge.text}
              </span>
            ))}
          </div>
        </section>
        <Footer page={page} />
      </div>
    </div>
  );
}
