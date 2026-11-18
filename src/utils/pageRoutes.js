// Add new pages here and register their components in App.jsx.
export const pageRoutes = {
  home: '',
  buyers: 'partnerships/buyers',
  advertisers: 'partnerships/advertisers',
  inboundCalls: 'solutions/ppc',
  affiliateMarketing: 'solutions/affiliate-marketing',
  listManagement: 'solutions/list-management',
  crmConsultation: 'solutions/crm-consultation',
  emailSms: 'solutions/email-sms',
  webDevelopment: 'solutions/web-development',
  socialMediaMarketing: 'solutions/social-media-marketing',
  insurance: 'industries/insurance-solutions',
  homeServices: 'industries/home-services',
  finance: 'industries/finance-solutions',
  healthAndBeauty: 'industries/health-and-beauty',
  about: 'company/about-us',
};

export function pageUrl(page) {
  return `${import.meta.env.BASE_URL}${pageRoutes[page]}`;
}

export function navigationUrl(href, page) {
  if (href === '/list-management' || href === '/listmanagement') return pageUrl('listManagement');
  if (href === '/crm-consultation') return pageUrl('crmConsultation');
  if (href === '/email-sms') return pageUrl('emailSms');
  if (href === '/home-services') return page === 'home' ? '#solutions' : pageUrl('homeServices');
  if (href === '/finance-solutions' || href === '/finance') return pageUrl('finance');
  if (href === '/health-and-beauty' || href === '/health-beauty') return pageUrl('healthAndBeauty');
  if (href === '/social-media-marketing') return pageUrl('socialMediaMarketing');
  if (href === '/insurance-solutions') return pageUrl('insurance');
  if (href === '/about-us') return pageUrl('about');
  if (href === '/buyers') return pageUrl('buyers');
  if (href === '/advertisers') return pageUrl('advertisers');
  if (href === '/ppc' || href === '/inbound-call-solutions') return pageUrl('inboundCalls');
  if (href === '/web-development') return pageUrl('webDevelopment');
  if (href === '/affiliate-marketing') return pageUrl('affiliateMarketing');
  if (href === '#hero' || href === '/') return pageUrl('home');
  if (page === 'home' || href === '#contact') return href;
  if (href === '#audience') return '#contact';
  return `${pageUrl('home')}${href}`;
}
