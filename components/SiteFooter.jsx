import Image from "next/image";
import Link from "next/link";
import { navLinks, quickLinks, siteConfig } from "@/lib/content";

const socialLabels = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-main footer-pad">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg">
              <Image
                src="/logo.png"
                alt="AEDEVS"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="font-display text-lg font-bold text-slate-900">AEDEVS</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(siteConfig.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-xs font-semibold uppercase text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
                  aria-label={`Follow AEDEVS on ${socialLabels[key] || key}`}
                >
                  {key.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-blue-600">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition hover:text-blue-600">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.address}</li>
              <li className="text-slate-500">{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="divider mt-12 mb-6" />

        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <nav aria-label="Quick links" className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
