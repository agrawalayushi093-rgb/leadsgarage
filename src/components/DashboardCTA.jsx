import React from 'react';
import { ArrowRight } from 'lucide-react';
import { publicAsset } from '../utils/publicAsset';
import styles from './DashboardCTA.module.css';

export default function DashboardCTA() {
 return <section id="showcase" className={styles.hero} aria-labelledby="footer-cta-title">
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
   <img className={styles.dashboardImage} src={publicAsset('/image/Home/Frame 1000004766.png')} alt="Quality traffic, real leads, customer insights, earnings and global opportunities" />
  </figure>
 </section>;
}

