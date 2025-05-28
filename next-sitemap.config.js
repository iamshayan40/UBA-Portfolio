/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://usamabinamirglobal.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    generateIndexSitemap: true,
    exclude: ['/404', '/500', '/server-sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://usamabinamirglobal.com/server-sitemap.xml',
      ],
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api', '/admin', '/_next', '/static'],
        },
        {
          userAgent: 'GPTBot',
          allow: ['/blog', '/services', '/about'],
          disallow: ['/*'],
        },
      ],
    },
    transform: async (config, path) => {
      // Custom priority for important pages
      const priorities = {
        '/': 1.0,
        '/services': 0.9,
        '/reviews/client-reviews': 0.8,
        '/reviews/meta-results': 0.8,
        '/reviews/sales-proofs': 0.8,
        '/team': 0.7,
        '/contact': 0.6
      };
      
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: priorities[path] || config.priority,
        lastmod: new Date().toISOString(),
      };
    },
  }
  