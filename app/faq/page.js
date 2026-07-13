import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { faqs } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about AEDEVS projects, timelines, pricing, support, and AI services.",
  path: "/faq",
});

export default function FaqPage() {
  const breadcrumbs = [{ href: "/faq", label: "FAQ" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="FAQ"
          title="Answers to the questions we hear most often."
          description="From scope and timelines to support and AI capabilities — a clear overview of how we work."
        >
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad" aria-label="Frequently asked questions">
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="card group p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900">
                  <span>{item.question}</span>
                  <span
                    className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                <span className="mt-3 inline-block chip">{item.category}</span>
              </details>
            ))}
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection
            title="Still have questions before we start?"
            description="We'll help you find the best path based on your goals, timeline, and the experience you want to launch."
            actionLabel="Contact us"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
