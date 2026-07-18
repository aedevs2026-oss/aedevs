import Image from "next/image";
import Link from "next/link";
import { navLinks, quickLinks, siteConfig } from "@/lib/content";

const socialLabels = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
};

function SocialIcon({ name }) {
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5zM10.3 9.75h2.76v1.13h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.39V18H16.3v-7.64c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V18H10.3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.04c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.44-4.04-1.44-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-[#071b3d] text-slate-300">
      <div className="container-main footer-pad">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-full">
              <Image src="/logo.png" alt="AE Devs" width={40} height={40} className="h-10 w-10 rounded-full object-contain" />
              <div>
                <p className="font-display text-lg font-semibold text-white">AE Devs</p>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">Code • Create • Elevate</p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">{siteConfig.description}</p>
            <div className="mt-6 flex gap-3">
              {Object.entries(siteConfig.social).map(([key, href]) => (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300" aria-label={`Follow AE Devs on ${socialLabels[key] || key}`}>
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href={`mailto:${siteConfig.email}`} className="transition hover:text-cyan-300">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition hover:text-cyan-300">{siteConfig.phone}</a></li>
              <li>{siteConfig.address}</li>
              <li className="text-slate-500">{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="divider mt-10 mb-6" />
        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <nav aria-label="Quick links" className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">{link.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
