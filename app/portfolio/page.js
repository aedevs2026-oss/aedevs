import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Explore AEDEVS client projects — educational platforms, business websites, web applications, and more.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const breadcrumbs = [{ href: "/portfolio", label: "Portfolio" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Portfolio"
          title="Selected work with polish, purpose, and thoughtful execution."
          description="Each project is designed to feel premium, perform beautifully, and support the goals behind it."
        >
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          <PortfolioGrid />
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection
            title="Looking for work that feels elevated and high-performing?"
            description="We'll help you turn your next release into something memorable and measurable."
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
