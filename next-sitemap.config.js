/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://devkins.dev', // Replace with your site’s URL
  generateRobotsTxt: true, // Generate `robots.txt` file
  sitemapSize: 100, // Split sitemaps if you have a lot of pages
  changefreq: 'weekly',
  priority: 0.7,
};
