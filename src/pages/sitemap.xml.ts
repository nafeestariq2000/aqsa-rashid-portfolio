import type { APIRoute } from 'astro';

const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about/', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/', priority: '0.9', changefreq: 'weekly' },
  { path: 'services/figma-ui-ux-design/', priority: '0.8', changefreq: 'monthly' },
  { path: 'services/figma-to-webflow/', priority: '0.8', changefreq: 'monthly' },
  { path: 'services/social-media-design/', priority: '0.8', changefreq: 'monthly' },
  { path: 'work/saas-video-landing-page/', priority: '0.8', changefreq: 'monthly' },
  { path: 'work/solar-energy-website/', priority: '0.8', changefreq: 'monthly' },
  { path: 'work/fitness-social-media-branding/', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact/', priority: '0.9', changefreq: 'monthly' }
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ? site.href.replace(/\/$/, '') : 'https://nafeestariq2000.github.io';
  const basePrefix = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${baseUrl}${basePrefix}/${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
