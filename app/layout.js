import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aedevs.vercel.app"), // Replace with your domain

  title: {
    default: "AEDEVS | Web Development, Mobile Apps & Digital Solutions",
    template: "%s | AEDEVS",
  },

  description:
    "AEDEVS is a professional web and mobile app development company specializing in business websites, e-commerce websites, school ERP systems, hospital websites, portfolio websites, custom web applications, WhatsApp Business automation, and mobile app development.",

  keywords: [
    "AEDEVS",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "Business Website",
    "School Website",
    "Hospital Website",
    "Ecommerce Website",
    "Custom Software Development",
    "WhatsApp Business Automation",
    "SEO Services",
    "UI UX Design",
    "React",
    "Next.js",
    "Tamil Nadu",
    "India",
  ],

  authors: [{ name: "AEDEVS" }],
  creator: "AEDEVS",
  publisher: "AEDEVS",

  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    url: "https://aedevs.vercel.app",
    siteName: "AEDEVS",
    title: "AEDEVS | Web Development, Mobile Apps & Digital Solutions",
    description:
      "Affordable and professional websites, mobile apps, e-commerce solutions, school ERP, hospital websites, WhatsApp automation, and custom software development.",
    images: [
      {
        url: "/logo.png", // Place in public folder
        width: 1200,
        height: 630,
        alt: "AEDEVS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AEDEVS | Web Development & Mobile App Development",
    description:
      "Professional websites, e-commerce, mobile apps, WhatsApp automation, and custom software solutions.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://aedevs.vercel.app",
  },

  category: "Technology",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
