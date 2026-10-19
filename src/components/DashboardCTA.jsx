import React from 'react';
import { ArrowRight } from 'lucide-react';
import { publicAsset } from '../utils/publicAsset';
import styles from './DashboardCTA.module.css';

// Reuse the supplied dashboard composition, keeping only its seven foreground cards.
const pieces = [
 '10.45% 34.75%,18.9% 40%,18.9% 59.1%,10.45% 59.1%',
 '19.7% 39.8%,27.6% 42.8%,27.6% 60.3%,19.7% 59%',
 '28.5% 42.6%,37% 43.7%,37% 61.3%,28.5% 60.3%',
 '38.5% 42.6%,60% 42.6%,60% 61.3%,61.5% 61.3%,61.5% 62.7%,37% 62.7%,37% 61.3%,38.5% 61.3%',
 '60.9% 43.9%,69.5% 41.8%,69.5% 60.3%,60.9% 61.3%',
 '70.2% 40%,78.6% 38%,78.6% 59.5%,70.2% 60.3%',
 '79.8% 39.6%,88.5% 34.8%,88.5% 59.1%,79.8% 59.1%',
];
export default function DashboardCTA() {
 return <section id="showcase" className={styles.hero} aria-labelledby="footer-cta-title">
  <img className={styles.wordmark} src={publicAsset('/image/Home/Group 40201.png')} alt="" aria-hidden="true" />
  <img className={`${styles.icon} ${styles.lock}`} src={publicAsset('/image/Home/Group 40197.png')} alt="" />
  <img className={`${styles.icon} ${styles.mail}`} src={publicAsset('/image/Home/Group 40195.png')} alt="" />
  <img className={`${styles.icon} ${styles.plane}`} src={publicAsset('/image/Home/Group 40198.png')} alt="" />
  <img className={`${styles.icon} ${styles.bell}`} src={publicAsset('/image/Home/Group 40196.png')} alt="" />
  <div className={styles.copy}>
   <h2 id="footer-cta-title">Unlock the Power of<br />Quality Leads</h2>
   <p>Let's discuss how we can help your business reach new heights</p>
   <a href="#audience" className={styles.connect}>Let’s connect <span><ArrowRight size={18} /></span></a>
  </div>
  <figure className={styles.artwork} aria-label="Quality traffic, real leads, customer insights, earnings and global opportunities">
   {pieces.map((piece,index)=><img key={index} className={styles.artSlice} src={publicAsset('/image/Home/footer/Group 40027.png')} style={{clipPath:`polygon(${piece})`}} alt="" aria-hidden="true" />)}
  </figure>
 </section>;
}
