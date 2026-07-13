import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Web development, app development, ecommerce, CMS, LMS, SEO, digital marketing, and AI chatbots by AEDEVS.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = [{ href: "/services", label: "Services" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Services"
          title="Built for brands that want a premium digital presence."
          description="We blend product thinking, engineering, and polished design to help your brand launch with confidence."
        >
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Book a discovery call</Button>
            <Button href="/portfolio" variant="secondary">
              See our work
            </Button>
          </div>
        </PageHero>

        <section className="container-main section-pad">
          <SectionHeading
            eyebrow="Capabilities"
            title="Specialized services for modern digital products"
            description="Every engagement is tailored to your audience, business goals, and the quality bar you want to maintain."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="card card-lift p-6">
                <ServiceIcon name={service.icon} />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-slate-50/50">
          <div className="container-main section-pad">
            <SectionHeading
              eyebrow="How we work"
              title="Structured delivery, transparent communication"
              description="A proven process that keeps projects on track without unnecessary overhead."
              align="center"
            />
            <div className="mt-10">
              <Process />
            </div>
          </div>
        </section>

        <section className="container-main section-pad">
          <CTASection
            title="Need a premium build that feels right from day one?"
            description="We work closely with founders and teams to shape elegant products that launch well and scale gracefully."
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
