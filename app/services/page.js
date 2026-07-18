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
  title: "Web Development & Software Services in Dharmapuri | AE DEVS",
  description:
    "Explore custom website development, ecommerce, LMS, ERP, CRM, mobile apps, SEO, digital marketing, and AI chatbot services for businesses in Dharmapuri and Tamil Nadu.",
  path: "/services",
  keywords: [
    "custom website development Dharmapuri",
    "ecommerce website development Dharmapuri",
    "LMS development company",
    "ERP software development",
    "CRM software development",
    "mobile app development company",
    "business website development",
  ],
});

export default function ServicesPage() {
  const breadcrumbs = [{ href: "/services", label: "Services" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero eyebrow="Services" title="High-performing software and websites for Dharmapuri businesses." description="We help local brands and growing companies launch premium websites, ecommerce experiences, management systems, mobile apps, and AI solutions that are built to rank, convert, and scale.">
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Book a discovery call</Button>
            <Button href="/portfolio" variant="secondary">See our work</Button>
          </div>
        </PageHero>

        <section className="container-main section-pad">
          <div className="card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="eyebrow">Local SEO service areas</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Website development and digital services for Dharmapuri, Salem, Krishnagiri, Hosur, Harur, Palacode, Pennagaram, Pappireddipatti, Namakkal, and Tirupattur.</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">Whether you need a polished business website, a conversion-focused ecommerce platform, a school or hospital portal, or a custom ERP/CRM workflow, AE DEVS combines strategy, design, and engineering to deliver solutions that feel premium and perform well in search.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Related pages</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li><a className="text-link" href="/portfolio">Explore our portfolio</a></li>
                  <li><a className="text-link" href="/technologies">See our technology stack</a></li>
                  <li><a className="text-link" href="/contact">Request a custom proposal</a></li>
                  <li><a className="text-link" href="/blog">Read our SEO and development guides</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <SectionHeading eyebrow="Capabilities" title="Specialized services for modern digital products" description="Every engagement is tailored to your audience, business goals, and the quality bar you want to maintain." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="card card-lift p-6 [animation-delay:calc(var(--delay)*0.05s)]">
                <ServiceIcon name={service.icon} />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-50/70">
          <div className="container-main section-pad">
            <SectionHeading eyebrow="How we work" title="Structured delivery, transparent communication" description="A proven process that keeps projects on track without unnecessary overhead." align="center" />
            <div className="mt-10"><Process /></div>
          </div>
        </section>

        <section className="container-main section-pad">
          <CTASection title="Need a premium build that feels right from day one?" description="We work closely with founders and teams to shape elegant products that launch well and scale gracefully." />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
