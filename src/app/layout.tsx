import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/layout/SmoothScrollProvider";
import CookieConsent from "../components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

const SITE_URL = "https://x.svilenkovic.rs";
const OG_IMAGE = `${SITE_URL}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VELDR Barber — Portfolio Demo | Premium Grooming Concept",
    template: "%s | VELDR Barber",
  },
  description: "Portfolio demo: premium barber koncept sa 3D animacijama, GSAP scroll-om i PWA strukturom. Brend je fictional — showcase rad Svilenkovic.com.",
  keywords: ["portfolio", "barber demo", "next.js 16", "react three fiber", "3d web", "gsap scroll", "VELDR"],
  manifest: "/manifest.json",
  authors: [{ name: "Svilenkovic", url: "https://svilenkovic.com" }],
  creator: "Svilenkovic",
  icons: {
    icon: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: "VELDR Barber — Portfolio Demo",
    title: "VELDR Barber — Portfolio Demo",
    description: "Premium barber/grooming koncept — portfolio showcase sa 3D animacijom i scroll dinamikom.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "VELDR Barber — Portfolio Demo by svilenkovic.com" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELDR Barber — Portfolio Demo",
    description: "Premium barber/grooming koncept — portfolio showcase.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "VELDR Barber — Portfolio Demo",
      description: "Portfolio demo: premium barber koncept sa 3D animacijama i scroll dinamikom.",
      inLanguage: "sr-RS",
      publisher: { "@id": `${SITE_URL}/#author` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#author`,
      name: "D. Svilenković",
      url: "https://svilenkovic.com",
      jobTitle: "Web designer & developer",
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#work`,
      name: "VELDR Barber",
      url: SITE_URL,
      creator: { "@id": `${SITE_URL}/#author` },
      author: { "@id": `${SITE_URL}/#author` },
      inLanguage: "sr-RS",
      genre: "Web design portfolio",
      keywords: "portfolio, demo, barber concept, next.js, react three fiber, gsap, 3d web",
      isFamilyFriendly: true,
      isAccessibleForFree: true,
      copyrightYear: 2026,
      copyrightHolder: { "@id": `${SITE_URL}/#author` },
      image: OG_IMAGE,
      description: "Premium barber portfolio demo — fictional brand za prikaz tehničkih i dizajnerskih sposobnosti autora.",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "VELDR Barber — Portfolio Demo",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#work` },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
      inLanguage: "sr-RS",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body className="bg-bg-dark text-text-primary overflow-x-hidden min-h-screen">
        <a href="#top" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold-500 focus:text-bg-dark focus:px-4 focus:py-2 focus:rounded-md focus:font-bold focus:tracking-wider focus:uppercase focus:text-xs">
          Preskoči na glavni sadržaj
        </a>
        <div className="noise-overlay" aria-hidden="true"></div>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
