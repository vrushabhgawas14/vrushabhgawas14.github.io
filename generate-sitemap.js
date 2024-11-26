const fs = require("fs");
const path = require("path");

const urls = ["https://vrushabhgawas14.github.io/"];

// current timestamp in ISO 8601 format
const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap, "utf8");
