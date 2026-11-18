import React, { useEffect } from 'react';
import { ArrowRight, Check, Layers, RefreshCw } from 'lucide-react';
import Footer from '../components/Footer';
import TypingHighlight from '../components/TypingHighlight';
import { publicAsset } from '../utils/publicAsset';
import styles from './ListManagement.module.css';

const asset = (file) => publicAsset(`/image/List Management/${file}`);

const stepItems = [
  {
    icon: 'Step icon.png',
    title: '01 — Understand',
    description: 'We understand the audience and targeting requirements for your campaign.',
  },
  {
    icon: 'Step icon (1).png',
    title: '02 — Target',
    description: 'We identify the relevant audience segments based on those requirements.',
  },
  {
    icon: 'Step icon (2).png',
    title: '03 — Deliver',
    description: 'We provide structured, campaign-ready data aligned with your needs.',
  },
  {
    icon: 'Step icon (3).png',
    title: '04 — Scale',
    description: 'As your requirements grow, our data solutions can scale with your campaigns.',
  },
];

const performanceCards = [
  {
    icon: 'Icon tile.png',
    title: 'Open Rates',
    description: 'Reach more relevant audiences and create stronger opportunities for email engagement.',
  },
  {
    icon: 'Icon tile (1).png',
    title: 'Click-Through Rate',
    description: 'Connect your campaigns with audiences more likely to find your message relevant.',
  },
  {
    icon: 'Icon tile (2).png',
    title: 'Conversion Rate',
    description: 'Build campaigns around audiences that better match your objectives.',
  },
  {
    icon: 'Icon tile (4).png',
    title: 'Bounce Rate',
    description: 'Quality-focused data can help improve campaign efficiency and reduce avoidable delivery issues.',
  },
  {
    icon: 'Icon tile (3).png',
    title: 'Audience Relevance',
    description: 'Target people according to the requirements that matter to your campaign.',
  },
  {
    icon: null,
    title: 'Data Freshness',
    description: 'Work with data that is maintained and refreshed for ongoing campaign needs.',
  },
];

export default function ListManagement() {

  useEffect(() => {
    const previous = document.title;
    document.title = 'List Management | Leads Garage';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className={styles.page}>
      <main id="list-management-main">
        {/* =================================================================
            1. HERO SECTION
            ================================================================= */}
        <section className={styles.heroSection} aria-labelledby="hero-heading">
          <div className={styles.sectionContainer}>
            <div className={styles.heroCard}>
              <div className={styles.heroContent}>
                <span className={styles.pillBadge}>List Management</span>
                <h1 id="hero-heading" className={styles.heroTitle}>
                  Better Data. <br />
                  Better Audience. <br />
                  <span className={styles.greenText}><TypingHighlight>Better Campaigns.</TypingHighlight></span>
                </h1>
                <p className={styles.heroDescription}>
                  Leadsgarage provides targeted, structured, and campaign-ready data
                  designed around your audience requirements, helping businesses reach
                  relevant people and create better opportunities.
                </p>
                <div className={styles.heroActions}>
                  <a href="#contact" className={styles.primaryBtn}>
                    Request Data
                  </a>
                  <a href="#contact" className={styles.secondaryBtn}>
                    Talk to Our Team
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <img
                  src={asset('image 155.png')}
                  alt="List Management audience dashboards, metrics, and segmented data cards"
                  className={styles.heroImage}
                  width="930"
                  height="620"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. AUDIENCE SECTION (The Right Data Starts With the Right Audience)
            ================================================================= */}
        <section className={styles.audienceSection} aria-labelledby="audience-heading">
          <div className={styles.sectionContainer}>
            <div className={styles.audienceGrid}>
              <div className={styles.audienceCopy}>
                <h2 id="audience-heading" className={styles.sectionTitle}>
                  The Right Data Starts <br />
                  With the Right Audience
                </h2>
                <p className={styles.bodyText}>
                  Every campaign has a different goal. That’s why we help businesses
                  access data based on the audience they want to reach.
                </p>
                <p className={styles.bodyText}>
                  Whether your requirement is based on location, audience profile,
                  targeting criteria, or campaign volume, our data solutions are
                  designed to help you focus your efforts on the people who matter.
                </p>
              </div>

              <div className={styles.audienceVisual}>
                <div className={styles.audienceImageWrapper}>
                  {/* Orbit Dotted Ring */}
                  <img
                    src={asset('Group 40322.png')}
                    alt=""
                    aria-hidden="true"
                    className={styles.audienceOrbit}
                    width="721"
                    height="578"
                  />

                  {/* Cutout Photo */}
                  <img
                    src={asset('image 157.png')}
                    alt="A diverse group of audience individuals smiling"
                    className={styles.audiencePhoto}
                    width="697"
                    height="502"
                  />

                  {/* Floating Badges */}
                  <div className={`${styles.badgeItem} ${styles.badgeLocation}`}>
                    <img src={asset('map-pin.png')} alt="" className={styles.badgeIcon} width="22" height="22" />
                    <span>Location</span>
                  </div>

                  <div className={`${styles.badgeItem} ${styles.badgeProfile}`}>
                    <img src={asset('contact-round.png')} alt="" className={styles.badgeIcon} width="22" height="22" />
                    <span>Audience profile</span>
                  </div>

                  <div className={`${styles.badgeItem} ${styles.badgeCriteria}`}>
                    <img src={asset('scan-line.png')} alt="" className={styles.badgeIcon} width="22" height="22" />
                    <span>Targeting criteria</span>
                  </div>

                  <div className={`${styles.badgeItem} ${styles.badgeVolume}`}>
                    <Layers className={styles.badgeIcon} aria-hidden="true" color="#00b9b8" />
                    <span>Campaign volume</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. REQUIREMENTS SECTION (Built Around Your Campaign Requirements)
            ================================================================= */}
        <section className={styles.requirementsSection} aria-labelledby="requirements-heading">
          <div className={styles.sectionContainer}>
            <div className={styles.requirementsStage}>
              {/* Floating 3D Tiles */}
              <img
                src={asset('Group 40197.png')}
                alt=""
                aria-hidden="true"
                className={`${styles.tile3d} ${styles.tileLock}`}
                width="76"
                height="78"
              />
              <img
                src={asset('Group 40195.png')}
                alt=""
                aria-hidden="true"
                className={`${styles.tile3d} ${styles.tileMail}`}
                width="72"
                height="74"
              />
              <img
                src={asset('Group 40198.png')}
                alt=""
                aria-hidden="true"
                className={`${styles.tile3d} ${styles.tilePlane}`}
                width="72"
                height="74"
              />
              <img
                src={asset('Group 40196.png')}
                alt=""
                aria-hidden="true"
                className={`${styles.tile3d} ${styles.tileBell}`}
                width="72"
                height="74"
              />

              {/* Tilted Colored Badges */}
              <div className={`${styles.tiltedBadge} ${styles.badgeScalable}`}>
                <img src={asset('Check symbol.png')} alt="" className={styles.tiltedBadgeIcon} width="20" height="20" />
                <span>Scalable Data</span>
              </div>

              <div className={`${styles.tiltedBadge} ${styles.badgeSegmented}`}>
                <img src={asset('Check symbol (1).png')} alt="" className={styles.tiltedBadgeIcon} width="20" height="20" />
                <span>Segmented Audiences</span>
              </div>

              <h2 id="requirements-heading" className={styles.requirementsHeading}>
                Built Around Your <br />
                Campaign Requirements
              </h2>

              <div className={`${styles.tiltedBadge} ${styles.badgeGeo}`}>
                <img src={asset('Check symbol (2).png')} alt="" className={styles.tiltedBadgeIcon} width="20" height="20" />
                <span>Geo-Specific Reach</span>
              </div>

              <div className={`${styles.tiltedBadge} ${styles.badgeTargeted}`}>
                <img src={asset('Check symbol (3).png')} alt="" className={styles.tiltedBadgeIcon} width="20" height="20" />
                <span>Targeted Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. PROCESS SECTION (From Audience Requirements to Campaign-Ready Data)
            ================================================================= */}
        <section className={styles.processSection} aria-labelledby="process-heading">
          <div className={styles.sectionContainer}>
            <div className={styles.processContainer}>
              <h2 id="process-heading" className={styles.centerHeading}>
                From Audience Requirements to <br />
                Campaign-Ready Data
              </h2>

              <div className={styles.stepsGrid}>
                {stepItems.map((step) => (
                  <article key={step.title} className={styles.stepCard}>
                    <img
                      src={asset(step.icon)}
                      alt=""
                      className={styles.stepIcon}
                      width="60"
                      height="60"
                    />
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. PERFORMANCE GRID (Quality Data That Supports Better Campaign Performance)
            ================================================================= */}
        <section className={styles.performanceSection} aria-labelledby="performance-heading">
          <div className={styles.sectionContainer}>
            <h2 id="performance-heading" className={styles.centerHeading}>
              Quality Data That Supports Better <br />
              Campaign Performance
            </h2>

            <div className={styles.performanceGrid}>
              {performanceCards.map((card) => (
                <article key={card.title} className={styles.performanceCard}>
                  {card.icon ? <img src={asset(card.icon)} alt="" className={styles.perfIcon} width="44" height="44" /> : <span className={`${styles.perfIcon} ${styles.refreshIcon}`}><RefreshCw size={24} aria-hidden="true" /></span>}
                  <h3 className={styles.perfTitle}>{card.title}</h3>
                  <p className={styles.perfDescription}>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            6. REACH FURTHER SECTION (Data That Helps You Reach Further)
            ================================================================= */}
        <section className={styles.reachFurtherSection} aria-labelledby="reach-further-heading">
          <div className={styles.sectionContainer}>
            <div className={styles.reachFurtherGrid}>
              <div className={styles.reachFurtherCopy}>
                <h2 id="reach-further-heading" className={styles.sectionTitle}>
                  Data That Helps You <br />
                  Reach Further
                </h2>
                <p className={styles.bodyText}>
                  The goal isn't simply to have more data. It's to have data that is
                  relevant to what you're trying to achieve.
                </p>
                <p className={styles.bodyText}>
                  Leadsgarage combines audience targeting, segmentation, geographic
                  requirements, and scalable data solutions to help businesses build
                  more focused campaigns and discover new opportunities.
                </p>
              </div>

              <div className={styles.laptopVisual}>
                <img
                  src={asset('reach-further-photo.png')}
                  alt="Campaign analytics displayed on a laptop in an office"
                  className={styles.laptopImage}
                  width="980"
                  height="640"
                  loading="lazy"
                />
                {[
                  ['Relevant Audiences', 'Benefit symbol.png'],
                  ['More Opportunities', 'Benefit symbol (1).png'],
                  ['Stronger Results', 'Benefit symbol (3).png'],
                  ['Better Engagement', 'Benefit symbol (2).png'],
                ].map(([label, icon], index) => (
                  <div key={label} className={`${styles.reachBadge} ${styles[`reachBadge${index}`]}`}>
                    <img src={asset(icon)} width="32" height="32" alt="" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <div className={styles.closing}>
        {/* =================================================================
            7. PRE-FOOTER CTA BANNER SECTION
            ================================================================= */}
        <section className={styles.ctaBannerSection} aria-labelledby="cta-banner-heading">
          <div className={styles.sectionContainer}>
            <div className={styles.ctaCard}>
              {/* LeadsGarage Watermark Background */}
              <img
                src={asset('Group 40201.png')}
                alt=""
                aria-hidden="true"
                className={styles.watermark}
                width="1842"
                height="739"
              />

              <div className={styles.ctaContent}>
                <h2 id="cta-banner-heading" className={styles.ctaTitle}>
                  Ready to Grow Your <br />
                  Health &amp; Beauty Business?
                </h2>
                <p className={styles.ctaDescription}>
                  Tell us about your product, audience, and campaign requirements.
                  We'll help you build a customer acquisition solution around your goals.
                </p>
                <a href="#contact" className={styles.ctaButton}>
                  <span>Let’s connect</span>
                  <span className={styles.ctaButtonArrow}>
                    <ArrowRight size={15} />
                  </span>
                </a>
              </div>

              <div className={styles.ctaVisual}>
                <img
                  src={asset('image 114.png')}
                  alt="3D performance analytics bars and data spheres"
                  className={styles.ctaVisualImage}
                  width="946"
                  height="584"
                  loading="lazy"
                />

                {/* Floating Pills over CTA graphic */}
                <div className={`${styles.ctaPill} ${styles.pillQuality}`}>
                  <span className={styles.ctaPillIcon}>
                    <Check size={11} />
                  </span>
                  <span>Quality Traffic You Can Trust</span>
                </div>

                <div className={`${styles.ctaPill} ${styles.pillScalable}`}>
                  <span className={styles.ctaPillIcon}>
                    <Check size={11} />
                  </span>
                  <span>Scalable Solutions That Grow With You</span>
                </div>

                <div className={`${styles.ctaPill} ${styles.pillPerformance}`}>
                  <span className={styles.ctaPillIcon}>
                    <Check size={11} />
                  </span>
                  <span>Performance-Focused Approach</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* =================================================================
          8. FOOTER
          ================================================================= */}
      <Footer page="listManagement" />
      </div>
    </div>
  );
}
