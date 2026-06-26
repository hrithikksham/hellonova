import type { Metadata } from "next";
import { jsonLd } from "../lib/jsonld";
import "./global.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://hudo.co.in"),

  title: {
    default: "helloNova | AI Phone Assistant",
    template: "%s | helloNova",
  },

  description:
    "Never miss an important call again. helloNova is your AI phone assistant that answers calls, filters spam, summarizes conversations, and lets you focus on what matters.",

  keywords: [
    "AI phone assistant",
    "AI call assistant",
    "Voice AI",
    "Call screening",
    "Spam call blocker",
    "Call summary",
    "AI receptionist",
    "Phone automation",
    "helloNova",
  ],

  authors: [
    {
      name: "HUDO",
      url: "https://hudo.co.in",
    },
  ],

  creator: "HUDO",

  publisher: "HUDO",

  applicationName: "helloNova",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hudo.co.in",
    title: "helloNova | AI Phone Assistant",
    description:
      "Your AI assistant that answers calls, filters spam, summarizes conversations and saves your time.",

    siteName: "helloNova",

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
    title: "helloNova",
    description:
      "AI phone assistant that answers your calls and summarizes conversations.",

    images: ["/image.png"],
  },

  icons: {
    icon: "/image.png",
    shortcut: "/favicon.ico",
    apple: "/image.png",
  },

  manifest: "/manifest.webmanifest",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd),
    }}
    />
    {children}
    </body>
    </html>
  );
}