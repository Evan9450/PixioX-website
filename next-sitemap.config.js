/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://pixiox.co', // 你的域名，记得改成生产环境地址
	generateRobotsTxt: true, // 自动生成 robots.txt
	sitemapSize: 5000, // 单个 sitemap 包含的最大 URL 数
	changefreq: 'weekly', // 告诉搜索引擎多久更新一次
	priority: 0.7, // 默认优先级
};
// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.SITE_URL || "https://yourdomain.com",
//   generateRobotsTxt: true,
//   sitemapSize: 5000,
//   changefreq: "weekly",
//   priority: 0.7,
// };
