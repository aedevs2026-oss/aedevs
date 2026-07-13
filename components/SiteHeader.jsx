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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container-main flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="AEDEVS"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-contain"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">
            AEDEVS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActiveLink(link.href, pathname) ? "nav-link-active" : ""}`}
              aria-current={isActiveLink(link.href, pathname) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Start a project
          </Button>
        </div>

        <button
  type="button"
  className="menu-toggle block !md:hidden"
  onClick={() => setOpen((v) => !v)}
  aria-expanded={open}
  aria-controls="mobile-nav"
  aria-label={open ? "Close menu" : "Open menu"}
>
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

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-main flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-mobile ${isActiveLink(link.href, pathname) ? "nav-link-mobile-active" : ""}`}
                aria-current={isActiveLink(link.href, pathname) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-slate-100 pt-3">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Start a project
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
