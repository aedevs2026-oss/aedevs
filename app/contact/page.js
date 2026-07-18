import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact AE DEVS | Web Development Company in Dharmapuri",
  description:
    "Contact AE DEVS for custom websites, ecommerce development, SEO services, mobile apps, LMS, ERP, CRM, and AI chatbot projects in Dharmapuri and nearby towns.",
  path: "/contact",
  keywords: [
    "website designer Dharmapuri",
    "software company in Dharmapuri",
    "local software company",
    "SEO services near me",
    "website development Tamil Nadu",
  ],
});

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    label: "WhatsApp",
    value: "Start a conversation",
    href: siteConfig.whatsapp,
  },
  {
    label: "Location",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=Chennai,India",
  },
];

export default function ContactPage() {
  const breadcrumbs = [{ href: "/contact", label: "Contact" }];

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero eyebrow="Contact" title="Let’s build your next project with clarity and calm." description="Share your goals, timeline, and ambitions — we'll respond within one business day.">
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          <div className="mt-4 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-sm">
            <iframe
              title="AE DEVS location in Dharmapuri"
              src="https://www.google.com/maps?q=Dharmapuri%2C%20Tamil%20Nadu%2C%20India&z=12&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="animate-[fade-up_0.5s_ease-out_both]">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">Start a conversation</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">Prefer a direct line? Reach us through any channel below.</p>
                <div className="mt-8 space-y-3">
                  {contactItems.map((item) => (
                    <a key={item.label} href={item.href} target={item.label === "Location" || item.label === "WhatsApp" ? "_blank" : undefined} rel={item.label === "Location" || item.label === "WhatsApp" ? "noopener noreferrer" : undefined} className="card card-lift flex items-center justify-between gap-4 p-4" aria-label={`${item.label}: ${item.value}`}>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                      </div>
                      <span className="text-slate-300" aria-hidden>→</span>
                    </a>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5">
                  <p className="text-sm font-semibold text-slate-900">Business hours</p>
                  <p className="mt-2 text-sm text-slate-600">{siteConfig.hours}</p>
                </div>
                <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-slate-900">Serving Dharmapuri and surrounding towns</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">We work with businesses in Dharmapuri, Harur, Palacode, Pennagaram, Pappireddipatti, Krishnagiri, Salem, Hosur, Namakkal, and Tirupattur.</p>
                </div>
              </div>
            </div>

            <div className="card animate-[fade-up_0.5s_ease-out_both] p-6 sm:p-8 [animation-delay:0.05s]">
              <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600">Fill out the form and we'll get back to you shortly.</p>
              <div className="mt-6"><ContactForm /></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
