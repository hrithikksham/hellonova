import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hudo.co.in"),

  title: {
    default: "helloNova — Your AI Call Assistant",
    template: "%s | helloNova",
  },

  description:
    "helloNova is an AI Call Assistant that answers unknown calls, filters spam, and summarizes conversations so you never miss what matters.",

  applicationName: "helloNova",

  keywords: [
    "helloNova",
    "AI Call Assistant",
    "AI Phone Assistant",
    "Voice AI",
    "AI Receptionist",
    "Call Screening",
    "Spam Call Blocker",
    "Call Summary",
    "Voice Assistant",
    "Phone Automation",
    "Artificial Intelligence",
    "HUDO Technologies",
  ],

  authors: [
    {
      name: "HUDO",
      url: "https://hudo.co.in",
    },
  ],

  creator: "HUDO",
  publisher: "HUDO",

  category: "Technology",

  alternates: {
    canonical: "https://hudo.co.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hudo.co.in",
    siteName: "helloNova",
    title: "helloNova — Your AI Call Assistant",
    description:
      "Answer calls intelligently. Filter spam automatically. Never miss what matters.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "helloNova",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "helloNova — Your AI Call Assistant",
    description:
      "An AI Phone Assistant that answers calls, filters spam, and summarizes conversations.",
    images: ["/image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/image.png" },
      { url: "/favicon.ico", type: "image/png" },
    ],
    apple: "/image.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },

  other: {
    "theme-color": "#5DB7FF",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};