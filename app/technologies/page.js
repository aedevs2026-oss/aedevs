import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { technologyGroups } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Technology Stack for Modern Websites & Apps | AE DEVS",
  description:
    "AE DEVS builds with Next.js, React, Tailwind CSS, PHP, PostgreSQL, MySQL, WordPress, Magento, and React Native for scalable, SEO-ready products.",
  path: "/technologies",
  keywords: [
    "Next.js development company",
    "React development company",
    "WordPress development company",
    "business automation",
    "web application development",
  ],
});

export default function TechnologiesPage() {
  const breadcrumbs = [{ href: "/technologies", label: "Technologies" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero eyebrow="Technologies" title="A modern stack for fast, flexible, and reliable products." description="We choose technologies that balance speed, maintainability, and long-term growth for every website, app, and internal platform we build for clients in Dharmapuri and beyond.">
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Stack strategy</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">A premium toolkit for fast, flexible, and durable products.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">We select frameworks and platforms that balance speed, reliability, and long-term maintainability for each product.</p>
            </div>

            <div className="mt-8 space-y-5">
              {technologyGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
                  <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)] xl:items-start">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">{group.title}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{group.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">A dependable foundation for product teams building with clarity and confidence.</p>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      {group.items.map((item) => (
                        <div key={item.name} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                            <Image src={item.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" loading="lazy" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-slate-900">{item.name}</h4>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection title="Need guidance selecting the right stack?" description="We can help you choose the best-fit setup for performance, scalability, and delivery speed." />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
