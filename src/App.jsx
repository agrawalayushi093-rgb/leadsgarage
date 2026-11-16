import './pages/ReferencePages.css';
import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import { hasSeenIntro } from './utils/introSession';
import Home from './pages/Home';
import Buyers from './pages/Buyers';
import Advertisers from './pages/Advertisers';
import InboundCallSolutions from './pages/InboundCallSolutions';
import AffiliateMarketing from './pages/AffiliateMarketing';
import WebDevelopment from './pages/WebDevelopment';
import { CRMConsultation, EmailSms } from './pages/CustomerSolutions';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import InsuranceSolutions from './pages/InsuranceSolutions';
import HomeServices from './pages/HomeServices';
import FinanceSolutions from './pages/FinanceSolutions';
import HealthAndBeauty from './pages/HealthAndBeauty';
import AboutUs from './pages/AboutUs';
import InnerPageScreens from './pages/InnerPageScreens';
import Navbar from './components/Navbar';
import { pageRoutes, pageUrl } from './utils/pageRoutes';
import { MotionConfig } from 'framer-motion';

const pages = { crmConsultation: CRMConsultation, emailSms: EmailSms, home: Home, buyers: Buyers, advertisers: Advertisers, inboundCalls: InboundCallSolutions, affiliateMarketing: AffiliateMarketing, webDevelopment: WebDevelopment, socialMediaMarketing: SocialMediaMarketing, insurance: InsuranceSolutions, homeServices: HomeServices, finance: FinanceSolutions, healthAndBeauty: HealthAndBeauty, about: AboutUs };

export default function App() {
  const [introComplete, setIntroComplete] = useState(hasSeenIntro);
  const url = new URL(window.location.href);
  const legacyBuyers = url.searchParams.get('page') === 'buyers';
  const path = url.pathname.replace(/\/+$/, '').replace(/\/index\.html$/, '') || '/';
  const aliases = {
    [`${import.meta.env.BASE_URL}buyers`]: 'buyers',
    [`${import.meta.env.BASE_URL}advertisers`]: 'advertisers',
    [`${import.meta.env.BASE_URL}solutions/inbound-call-solutions`]: 'inboundCalls',
    [`${import.meta.env.BASE_URL}finance-solutions`]: 'finance',
    [`${import.meta.env.BASE_URL}health-and-beauty`]: 'healthAndBeauty',
    [`${import.meta.env.BASE_URL}insurance-solutions`]: 'insurance',
    [`${import.meta.env.BASE_URL}home-services`]: 'homeServices',
  };
  const page = legacyBuyers ? 'buyers' : aliases[path] || Object.keys(pageRoutes).find(key => (pageUrl(key).replace(/\/+$/, '') || '/') === path);
  const Page = pages[page];

  useEffect(() => {
    if (!page) return;
    const normalizeUrl = () => {
      const canonical = new URL(window.location.href);
      canonical.pathname = pageUrl(page);
      if (legacyBuyers) canonical.searchParams.delete('page');
      if (canonical.hash === '#hero') canonical.hash = '';
      if (canonical.href !== window.location.href) history.replaceState(history.state, '', canonical);
    };
    normalizeUrl();
    window.addEventListener('hashchange', normalizeUrl);
    return () => window.removeEventListener('hashchange', normalizeUrl);
  }, [page, legacyBuyers]);

  return <MotionConfig reducedMotion="user">
    {!introComplete && <Preloader onComplete={() => setIntroComplete(true)} />}
    <Navbar page={page || 'home'} />
    {Page ? (page === 'home' ? <Page introComplete={introComplete} /> : <InnerPageScreens page={page}><Page introComplete={introComplete} /></InnerPageScreens>) : <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <a className="rounded-full bg-blue-600 px-6 py-3 text-white" href={pageUrl('home')}>Back to Home</a>
    </main>}
  </MotionConfig>;
}
