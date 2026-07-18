"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";

function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "pt-2" : "pt-0"}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${scrolled ? "pb-2" : "pb-0"}`}>
        <div className={`flex items-center justify-between rounded-full border border-white/70 px-3 py-3 backdrop-blur-xl transition-all ${scrolled ? "bg-white/85 shadow-lg" : "bg-white/80 shadow-sm"}`}>
          <Link href="/" className="flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="AE Devs" width={38} height={38} className="h-9 w-9 rounded-full object-contain" priority />
            <div>
              <p className="font-display text-[0.95rem] font-semibold tracking-tight text-slate-900">AE Devs</p>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-500">Code • Create • Elevate</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link ${isActiveLink(link.href, pathname) ? "nav-link-active" : ""}`} aria-current={isActiveLink(link.href, pathname) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button href="/contact" size="sm">Start a project</Button>
          </div>

          <button type="button" className="menu-toggle block md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="mx-4 mt-2 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link-mobile ${isActiveLink(link.href, pathname) ? "nav-link-mobile-active" : ""}`} aria-current={isActiveLink(link.href, pathname) ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>Start a project</Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
