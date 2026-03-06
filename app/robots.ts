import { MetadataRoute } from "next";

const APP_URL = "https://formreply-frontend-production.up.railway.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/success"],
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
