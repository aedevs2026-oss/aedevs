import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio | Web Design & Software Projects | AE DEVS",
  description:
    "Explore AE DEVS projects for educational platforms, business websites, ecommerce stores, web applications, and local service brands built for growth.",
  path: "/portfolio",
  keywords: [
    "portfolio website",
    "business website development",
    "company website",
    "startup website",
    "educational LMS",
    "corporate website",
  ],
});

export default function PortfolioPage() {
  const breadcrumbs = [{ href: "/portfolio", label: "Portfolio" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero eyebrow="Portfolio" title="Selected work with polish, purpose, and thoughtful execution." description="Our portfolio includes premium business websites, ecommerce experiences, education platforms, and web applications built to help brands in Dharmapuri and beyond stand out online.">
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          <div className="animate-[fade-up_0.5s_ease-out_both]">
            <PortfolioGrid />
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection title="Looking for work that feels elevated and high-performing?" description="We'll help you turn your next release into something memorable and measurable." />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
