import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/content";
import { localBusinessJsonLd, organizationJsonLd, serviceJsonLd, websiteJsonLd } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Premium software agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AE DEVS",
    "best web development company in Dharmapuri",
    "website development company in Dharmapuri",
    "software company in Dharmapuri",
    "web design company in Dharmapuri",
    "custom website development Dharmapuri",
    "ecommerce website development Dharmapuri",
    "Next.js development company",
    "React development company",
    "WordPress development company",
    "SEO company in Dharmapuri",
    "mobile app development company",
    "AI chatbot development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium software agency`,
    description: siteConfig.description,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium software agency`,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  icons: {
    icon: "/favicon.ico.png",
    shortcut: "/favicon.ico.png",
    apple: "/logo.png",
  },
  category: "Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={serviceJsonLd()} />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
