import Image from "next/image";
import { Clients } from "@/components/Clients";
import { CTASection } from "@/components/CTASection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Process } from "@/components/Process";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsCounter } from "@/components/StatsCounter";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services, siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Premium software agency",
  description: siteConfig.description,
  path: "",
});

export default function HomePage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200/60">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden
          />
          <div className="container-main relative section-pad">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-fade-up">
                <p className="eyebrow">Dharmapuri-based digital agency</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Premium digital products built with{" "}
                  <span className="text-gradient">clarity and craft</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  We design and ship websites, apps, and AI-powered experiences for ambitious
                  brands — with the polish of a top-tier product studio.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Start your project</Button>
                  <Button href="/portfolio" variant="secondary">
                    View our work
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="card card-glass overflow-hidden p-2 shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                    <Image
                      src="/logo.png"
                      alt="AEDEVS — Premium software agency"
                      fill
                      className="object-contain p-8"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 card hidden p-4 sm:block">
                  <p className="font-display text-2xl font-bold text-gradient">5+</p>
                  <p className="text-xs text-slate-500">Projects delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="container-main section-pad">
          <SectionHeading
            eyebrow="Clients"
            title="Trusted by founders and businesses across India"
            description="From educational platforms to solar energy and interior design — we partner with teams who care about quality."
            align="center"
          />
          <div className="mt-10">
            <Clients />
          </div>
        </section>

        {/* Services */}
        <section className="border-y border-slate-200/80 bg-white">
          <div className="container-main section-pad">
            <SectionHeading
              eyebrow="Services"
              title="End-to-end capabilities for modern digital products"
              description="Strategy, design, and engineering — tailored to your audience and growth goals."
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
            <div className="mt-10 text-center">
              <Button href="/services" variant="secondary">
                Explore all services
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio preview */}
        <section className="container-main section-pad">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent work we're proud of"
            description="Real projects for real clients — built for performance, clarity, and lasting impact."
          />
          <div className="mt-10">
            <PortfolioGrid limit={3} />
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-slate-200/80 bg-slate-50/50">
          <div className="container-main section-pad">
            <SectionHeading
              eyebrow="Process"
              title="A clear path from idea to launch"
              description="Structured delivery without the bureaucracy — transparent communication at every step."
              align="center"
            />
            <div className="mt-10">
              <Process />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container-main section-pad">
          <StatsCounter />
        </section>

        {/* Testimonials */}
        <section className="border-t border-slate-200/80 bg-white">
          <div className="container-main section-pad">
            <SectionHeading
              eyebrow="Testimonials"
              title="What our clients say"
              description="Honest feedback from the teams we've partnered with."
              align="center"
            />
            <div className="mt-10">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-main section-pad">
          <CTASection
            title="Let's build something remarkable together."
            description="Tell us about your product, audience, and ambition. We'll shape a clear path forward."
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
