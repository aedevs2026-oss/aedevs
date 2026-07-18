import { siteConfig } from "./content";

export function createPageMetadata({
  title,
  description,
  path = "",
  image = "/logo.png",
  type = "website",
  keywords,
  robots = {
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
}) {
  const url = `${siteConfig.domain}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type,
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    keywords: keywords || [
      "best web development company in Dharmapuri",
      "website development company in Dharmapuri",
      "software company in Dharmapuri",
      "custom website development Dharmapuri",
      "ecommerce website development Dharmapuri",
      "SEO company in Dharmapuri",
      "mobile app development company",
      "Next.js development company",
      "React development company",
      "WordPress development company",
      "AI chatbot development",
      "AE DEVS",
    ],
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dharmapuri",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dharmapuri",
      addressLocality: "Dharmapuri",
      addressRegion: "Tamil Nadu",
      postalCode: "635301",
      addressCountry: "IN",
    },
    areaServed: [
      "Dharmapuri",
      "Harur",
      "Palacode",
      "Pennagaram",
      "Pappireddipatti",
      "Krishnagiri",
      "Salem",
      "Hosur",
      "Namakkal",
      "Tirupattur",
      "Tamil Nadu",
    ],
    priceRange: "₹₹",
    sameAs: Object.values(siteConfig.social),
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development and Digital Transformation Services",
    serviceType: [
      "Custom Website Development",
      "Ecommerce Website Development",
      "LMS Development",
      "ERP Software Development",
      "CRM Software Development",
      "Mobile App Development",
      "SEO Services",
      "Digital Marketing",
      "AI Chatbot Development",
    ],
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    areaServed: [
      "Dharmapuri",
      "Harur",
      "Palacode",
      "Pennagaram",
      "Pappireddipatti",
      "Krishnagiri",
      "Salem",
      "Hosur",
      "Namakkal",
      "Tirupattur",
      "Tamil Nadu",
    ],
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.domain,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${siteConfig.domain}${item.href}`,
      })),
    ],
  };
}
