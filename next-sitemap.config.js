/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://banal972.github.io",
  generateRobotsTxt: true, // (optional)
  outDir: "./out",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/about"], // /about 페이지를 크롤링하지 않도록 설정
      },
    ],
  },
}
