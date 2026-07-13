import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { technologyGroups } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Technologies",
  description:
    "AEDEVS works with Next.js, React, Tailwind CSS, PHP, PostgreSQL, MySQL, WordPress, Magento, and React Native.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  const breadcrumbs = [{ href: "/technologies", label: "Technologies" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Technologies"
          title="A modern stack for fast, flexible, and reliable products."
          description="We choose technologies that balance speed, maintainability, and long-term growth for each product."
        >
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          <div className="space-y-16">
            {technologyGroups.map((group) => (
              <div key={group.title}>
                <SectionHeading
                  eyebrow="Stack"
                  title={group.title}
                  description="Reliable tools for building with clarity and confidence."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {group.items.map((item) => (
                    <article key={item.name} className="card card-lift p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-display text-sm font-bold text-blue-600">
                        {item.logo}
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">{item.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection
            title="Need guidance selecting the right stack?"
            description="We can help you choose the best-fit setup for performance, scalability, and delivery speed."
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
