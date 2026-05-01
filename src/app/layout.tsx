import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/layout/SmoothScrollProvider";
import CookieConsent from "../components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

const SITE_URL = "https://x.svilenkovic.rs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VELDR Barber — Portfolio Demo | Premium Grooming Concept",
    template: "%s | VELDR Barber",
  },
  description: "Demonstracioni portfolio sajt: premium barber/grooming koncept sa 3D animacijama, GSAP scroll-om i PWA strukturom. Brend je fictional, sajt je showcase rad — Svilenkovic.com.",
  keywords: ["portfolio", "barber demo", "next.js 16", "react three fiber", "3d web", "gsap scroll", "VELDR"],
  manifest: "/manifest.json",
  authors: [{ name: "Svilenkovic", url: "https://svilenkovic.com" }],
  creator: "Svilenkovic",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: "VELDR Barber — Portfolio Demo",
    title: "VELDR Barber — Portfolio Demo",
    description: "Premium barber/grooming koncept — portfolio showcase sa 3D animacijom i scroll dinamikom.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELDR Barber — Portfolio Demo",
    description: "Premium barber/grooming koncept — portfolio showcase.",
  },
  robots: { index: true, follow: true },
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
