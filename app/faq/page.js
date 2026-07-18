import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { faqs } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ | Website Development, SEO & AI Services | AE DEVS",
  description:
    "Answers to common questions about AE DEVS projects, timelines, pricing, support, SEO, and AI chatbot services for businesses in Dharmapuri and nearby areas.",
  path: "/faq",
  keywords: [
    "website development FAQ",
    "SEO services near me",
    "AI chatbot development",
    "business website development",
  ],
});

export default function FaqPage() {
  const breadcrumbs = [{ href: "/faq", label: "FAQ" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero eyebrow="FAQ" title="Answers to the questions we hear most often." description="From scope and timelines to support and AI capabilities — a clear overview of how we work.">
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad" aria-label="Frequently asked questions">
          <div className="mx-auto mb-8 max-w-3xl rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 text-center">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">From website design in Dharmapuri to ecommerce, SEO, and AI support, we help businesses choose the most effective path forward.</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((item, index) => (
              <details key={item.question} className="card group animate-[fade-up_0.35s_ease-out_both] p-6" style={{ animationDelay: `${index * 0.04}s` }}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900">
                  <span>{item.question}</span>
                  <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400" aria-hidden>+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                <span className="mt-3 inline-block chip">{item.category}</span>
              </details>
            ))}
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection title="Still have questions before we start?" description="We'll help you find the best path based on your goals, timeline, and the experience you want to launch." actionLabel="Contact us" />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
