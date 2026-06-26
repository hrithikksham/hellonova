export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",

  name: "helloNova",

  applicationCategory: "BusinessApplication",

  operatingSystem: "Android, iOS",

  url: "https://hellonova.ai",

  logo: "https://hellonova.ai/logo.png",

  image: "https://hellonova.ai/og-image.png",

  description:
    "helloNova is an AI phone assistant that answers calls, filters spam, summarizes conversations, and helps you focus on what matters.",

  publisher: {
    "@type": "Organization",
    name: "HUDO",
    url: "https://hellonova.ai",
  },

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },

  inLanguage: "en",

  potentialAction: {
    "@type": "JoinAction",
    target: "https://hellonova.ai",
  },
};