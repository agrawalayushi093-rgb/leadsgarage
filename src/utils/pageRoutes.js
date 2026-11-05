// Add new pages here and register their components in App.jsx.
export const pageRoutes = { home: '', buyers: 'partnerships/buyers', advertisers: 'partnerships/advertisers' };

export function pageUrl(page) {
  return `${import.meta.env.BASE_URL}${pageRoutes[page]}`;
}

export function navigationUrl(href, page) {
  if (href === '/buyers') return pageUrl('buyers');
  if (href === '/advertisers') return pageUrl('advertisers');
  if (href === '#hero' || href === '/') return pageUrl('home');
  if (page === 'home' || href === '#contact') return href;
  if (href === '#audience') return '#contact';
  return `${pageUrl('home')}${href}`;
}
