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
import { services, siteConfig, teamMembers } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best Web Development Company in Dharmapuri | AE DEVS",
  description: "AE DEVS is a trusted web development company in Dharmapuri offering custom websites, ecommerce, LMS, ERP, CRM, SEO, mobile apps, and AI chatbot solutions.",
  path: "",
  keywords: [
    "best web development company in Dharmapuri",
    "website development company in Dharmapuri",
    "software company in Dharmapuri",
    "custom website development Dharmapuri",
    "ecommerce website development Dharmapuri",
    "SEO company in Dharmapuri",
    "AI chatbot development",
  ],
});

export default function HomePage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden border-b border-slate-200/70">
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
          <div className="absolute inset-0 opacity-80" aria-hidden>
            <div className="absolute left-[-8%] top-[-6%] h-52 w-52 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute bottom-[-12%] right-[-4%] h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
          </div>
          <div className="container-main relative section-pad">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="animate-[fade-up_0.6s_ease-out_both]">
                <p className="eyebrow">Best web development company in Dharmapuri</p>
                <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                  Custom websites and software that help businesses grow in Dharmapuri and beyond.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  AE DEVS builds premium websites, ecommerce stores, LMS and ERP systems, mobile apps, SEO campaigns, and AI-powered solutions for companies across Dharmapuri, Salem, Krishnagiri, Hosur, Harur, and Tamil Nadu.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Book a free consultation</Button>
                  <Button href="/portfolio" variant="secondary">Explore case studies</Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span className="chip">Next.js</span>
                  <span className="chip">React</span>
                  <span className="chip">AI solutions</span>
                  <span className="chip">SEO-ready builds</span>
                </div>
              </div>

              <div className="relative animate-[fade-up_0.7s_ease-out_both] [animation-delay:0.1s]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-transparent to-teal-400/10 blur-3xl" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-3 shadow-lg backdrop-blur">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-50">
                    <Image src="/logo.png" alt="AE Devs — premium software agency" fill className="object-contain p-8" priority sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-md sm:block">
                  <p className="font-display text-2xl font-bold text-gradient">5+</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Projects delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-main section-pad">
          <SectionHeading eyebrow="Trusted by teams" title="Built for businesses that value premium execution" description="From educational platforms to retail, manufacturing, and service companies — we create polished digital experiences with thoughtful strategy behind them." align="center" />
          <div className="mt-10"><Clients /></div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-50/70">
          <div className="container-main section-pad">
            <SectionHeading eyebrow="Team" title="Experienced hands across strategy, design, and delivery" description="We blend senior product thinking with hands-on execution to keep every launch thoughtful, polished, and sustainable." align="center" />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <article key={member.name} className="card card-lift overflow-hidden p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow">Core team</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">{member.name}</h3>
                    </div>
                    <span className="chip">{member.role}</span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{member.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.specialties.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/70">
          <div className="container-main section-pad">
            <SectionHeading eyebrow="Services" title="Strategy, design, engineering, and growth in one team" description="From launch-ready websites to AI-enabled systems, our services cover the full product lifecycle." />
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
            <div className="mt-10 text-center"><Button href="/services" variant="secondary">Explore all services</Button></div>
          </div>
        </section>

        <section className="container-main section-pad">
          <SectionHeading eyebrow="Featured work" title="Elegant experiences built for real-world impact" description="Every project is designed to feel premium, perform beautifully, and support the goals behind it." />
          <div className="mt-10"><PortfolioGrid limit={3} /></div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-50/70">
          <div className="container-main section-pad">
            <SectionHeading eyebrow="Our process" title="A clear path from idea to launch" description="Transparent delivery, thoughtful collaboration, and rigorous quality at every step." align="center" />
            <div className="mt-10"><Process /></div>
          </div>
        </section>

        <section className="container-main section-pad">
          <StatsCounter />
        </section>

        <section className="border-t border-slate-200/70 bg-white/70">
          <div className="container-main section-pad">
            <SectionHeading eyebrow="Client love" title="What partners say about working with us" description="Reliable delivery, calm communication, and a premium experience from day one." align="center" />
            <div className="mt-10"><Testimonials /></div>
          </div>
        </section>

        <section className="container-main section-pad">
          <CTASection title="Let’s build something remarkable together." description="Share your goals, audience, and timeline — we’ll shape a clear path to launch with confidence." />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
