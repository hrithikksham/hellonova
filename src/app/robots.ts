import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://hudo.co.in/sitemap.xml",

    host: "https://hudo.co.in",
  };
}