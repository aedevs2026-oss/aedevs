import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with AEDEVS to start your next website, app, ecommerce, CMS, LMS, or AI project.",
  path: "/contact",
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
        <PageHero
          eyebrow="Contact"
          title="Let's build your next project with clarity and calm."
          description="Share your goals, timeline, and ambitions — we'll respond within one business day."
        >
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Get in touch</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Prefer a direct line? Reach us through any channel below.
              </p>
              <div className="mt-8 space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Location" || item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={item.label === "Location" || item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="card card-lift flex items-center justify-between gap-4 p-4"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                    </div>
                    <span className="text-slate-300" aria-hidden>→</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 card p-6">
                <p className="text-sm font-semibold text-slate-900">Business hours</p>
                <p className="mt-2 text-sm text-slate-600">{siteConfig.hours}</p>
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and we'll get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
