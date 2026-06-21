"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   Config
========================================================= */
const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // TODO: replace with AEDEVS' real WhatsApp number
const CONTACT_EMAIL = "contact@aedevs.in";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

const SERVICES = [
  {
    icon: "globe",
    title: "Business Websites",
    desc: "Fast, modern websites that present your brand clearly and convert visitors into customers.",
  },
  {
    icon: "cart",
    title: "eCommerce Development",
    desc: "Full-featured online stores with secure checkout, inventory, and a smooth shopping experience.",
  },
  {
    icon: "portfolio",
    title: "Portfolio Websites",
    desc: "Clean, expressive portfolios that put your work front and center for creators and professionals.",
  },
  {
    icon: "app",
    title: "Web Applications",
    desc: "Custom, scalable applications built on Next.js and React to power real business workflows.",
  },
  {
    icon: "dashboard",
    title: "Admin Dashboards",
    desc: "Purpose-built dashboards for managing data, orders, and operations with clarity and speed.",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp Business Tools",
    desc: "Automated replies, lead capture, and customer engagement tools built on WhatsApp Business.",
  },
  {
    icon: "cms",
    title: "CMS Development",
    desc: "Flexible content systems so your team can update pages, products, and posts without a developer.",
  },
  {
    icon: "seo",
    title: "SEO Optimization",
    desc: "Technical and on-page SEO that helps your site rank higher and reach the right audience.",
  },
];

const TEAM = [
  {
    name: "Shiyam Lawrence",
    role: "Senior Full Stack Developer",
    initials: "SL",
    skills: ["PHP", "Laravel", "React", "Next.js", "Magento 2", "WordPress", "WooCommerce", "MySQL"],
    desc: "Experienced full-stack developer specializing in scalable web applications, eCommerce platforms, and enterprise software solutions.",
  },
  {
    name: "Grace Kumar",
    role: "Junior Developer",
    initials: "GK",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    desc: "Passionate developer focused on creating modern, responsive, and user-friendly web experiences.",
  },
];

const PORTFOLIO = [
  {
    name: "Arulneri",
    client: "Deepan",
    location: "Tirunelveli",
    category: "Educational Platform",
    desc: "A modern educational and spiritual learning platform with responsive design and a user-friendly experience.",
    accent: "from-[#2e7df6] to-[#5ba8ff]",
    link: "https://arulneri.vercel.app",
    image: "/arul.png"
  },
  {
    name: "Universal Solar Power Solution",
    client: "Sabari",
    location: "Chennai",
    category: "Business Website",
    desc: "Professional solar energy company website showcasing products, services, and customer engagement features.",
    accent: "from-[#1ad8ae] to-[#0ea88a]",
    link: "https://universalsolarpowersolutions.com",
    image: "/univ.png"
  },
  {
    name: "ToolzBanana",
    client: "Vignesh",
    location: "Chennai",
    category: "Web Application",
    desc: "Modern utility and productivity platform built with scalable architecture and a responsive user experience.",
    accent: "from-[#f5c518] to-[#1ad8ae]",
    link: "https://toolzbanana.vercel.app",
    image: "/toolz.png"
  },
];

const PROCESS_STEPS = [
  { title: "Discovery", desc: "We learn your goals, audience, and what success looks like for your project." },
  { title: "Planning", desc: "We map scope, timeline, and tech approach into a clear project plan." },
  { title: "Design", desc: "We design interfaces that are on-brand, intuitive, and built for real users." },
  { title: "Development", desc: "We build with clean, scalable code using modern frameworks and best practices." },
  { title: "Testing", desc: "We test across devices and browsers to catch issues before they reach you." },
  { title: "Launch", desc: "We deploy your project and make sure everything runs smoothly on day one." },
  { title: "Support", desc: "We stay on after launch with updates, fixes, and ongoing improvements." },
];

const WHY_US = [
  { title: "Modern Technologies", desc: "Built on current frameworks like Next.js and React." },
  { title: "Fast Delivery", desc: "Streamlined process that respects your timeline." },
  { title: "Affordable Pricing", desc: "Transparent rates that fit freelance and small business budgets." },
  { title: "Mobile Responsive", desc: "Every build looks and works great on any screen." },
  { title: "SEO Friendly", desc: "Structured for visibility from the first deploy." },
  { title: "Ongoing Support", desc: "We don't disappear after launch day." },
  { title: "Secure Applications", desc: "Security considered at every layer of the build." },
  { title: "Custom Solutions", desc: "No templates pretending to be products — built around you." },
];

const TESTIMONIALS = [
  {
    name: "Deepan",
    company: "Arulneri",
    review:
      "AEDEVS understood exactly what our learning platform needed. The site is fast, clean, and our students find it easy to use.",
    rating: 5,
  },
  {
    name: "Sabari",
    company: "Universal Solar Power Solutions",
    review:
      "Professional from start to finish. Our new website finally reflects the quality of the work we do for our customers.",
    rating: 5,
  },
  {
    name: "Vignesh",
    company: "ToolzBanana",
    review:
      "The team shipped a complex web app on schedule and kept communication clear the whole way through. Highly recommend.",
    rating: 5,
  },
  {
    name: "Karthik R.",
    company: "Local Retail Business",
    review:
      "Affordable, responsive, and genuinely invested in getting our business online the right way. Support after launch has been great.",
    rating: 4,
  },
];

/* =========================================================
   Deterministic pseudo-random helper (SSR/CSR safe)
   Uses only Math.imul + integer bitwise ops, which the JS spec
   guarantees produce identical bits on every engine. Math.sin /
   Math.cos / Math.pow are NOT spec-guaranteed to be bit-identical
   across engines, so they must never be used to derive values
   that get rendered into server-rendered HTML — doing so causes
   hydration mismatches when the client recomputes them.
========================================================= */
function pseudoRandom(seed) {
  let x = Math.imul(seed ^ 0x9e3779b9, 0x85ebca6b);
  x ^= x >>> 13;
  x = Math.imul(x, 0xc2b2ae35);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}

/* =========================================================
   Icon set (inline SVG, no external dependency)
========================================================= */
function Icon({ name, className = "w-6 h-6" }) {
  const paths = {
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z" />
      </>
    ),
    cart: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2.5 3h2.4l2 12.2a2 2 0 0 0 2 1.7h8.4a2 2 0 0 0 2-1.6L21 8H6" />
      </>
    ),
    portfolio: (
      <>
        <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
        <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" />
      </>
    ),
    app: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M9 14l2.2-2.2L9 9.5M14 14h2.5" />
      </>
    ),
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </>
    ),
    whatsapp: (
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.6 12.7c-.2.6-1.2 1.2-1.7 1.3-.5.1-1 .1-1.7-.1a8.7 8.7 0 0 1-3.8-2.7 8.9 8.9 0 0 1-1.9-3 1.9 1.9 0 0 1 .5-2c.2-.2.5-.3.7-.3h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.2-.1.3 0 .5.3.6 1.6 1.9 2.2 2.2.2.1.3.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.6.8c.2.1.3.3.3.5.1.2.1.4 0 .5Z" />
    ),
    cms: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v16" />
      </>
    ),
    seo: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.6-4.6" />
      </>
    ),
    check: <path d="M4 12.5 9 18l11-12.5" />,
    star: (
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.5-5.9-3.3-5.9 3.3 1.2-6.5-4.8-4.6 6.6-.9Z" />
    ),
    arrowRight: <path d="M4 12h16M14 6l6 6-6 6" />,
    quote: (
      <path d="M7 9.5C7 7 9 5 11.5 5V7c-1.4 0-2.5 1.1-2.5 2.5V10h2.5v6H7V9.5ZM15.5 9.5c0-2.5 2-4.5 4.5-4.5V7c-1.4 0-2.5 1.1-2.5 2.5V10H20v6h-4.5V9.5Z" />
    ),
    mapPin: (
      <>
        <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 6.5 12 13l8-6.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    code: (
      <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7.5 10.5v6M7.5 7.7v.01M12 16.5v-3.7c0-1.2.9-2.1 2-2.1s2 .9 2 2.1v3.7" />
      </>
    ),
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.68.93.68 1.87v2.78c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}

/* =========================================================
   Hooks
========================================================= */
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function useCounter(target, inView, duration = 1600) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return value;
}

/* =========================================================
   Reusable: Reveal wrapper
========================================================= */
function Reveal({ children, className = "", delay = 0, as = "div", scale = false }) {
  const [ref, inView] = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`${scale ? "reveal-scale" : "reveal"} ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* =========================================================
   Signature: Pixel dissolve heading
========================================================= */
function PixelDissolve({ children, className = "", pixelCount = 16 }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const pixels = Array.from({ length: pixelCount }, (_, i) => {
    // Random-looking scatter built from pure integer hashing (no trig),
    // so the offsets are bit-identical on the server and the client.
    const ox = ((pseudoRandom(i * 3 + 1) - 0.5) * 2 * (90 + pseudoRandom(i * 3 + 2) * 60)).toFixed(2);
    const oy = ((pseudoRandom(i * 3 + 3) - 0.5) * 2 * (50 + pseudoRandom(i * 3 + 4) * 40)).toFixed(2);
    const px = `${(pseudoRandom(i + 50) * 100).toFixed(1)}%`;
    const py = `${(pseudoRandom(i + 120) * 100).toFixed(1)}%`;
    const delay = `${(pseudoRandom(i + 7) * 0.35).toFixed(2)}s`;
    return { ox, oy, px, py, delay, key: i };
  });

  return (
    <span ref={ref} className={`pixel-dissolve ${inView ? "is-visible" : ""} ${className}`}>
      <span className="pixel-dissolve-text">{children}</span>
      <span className="pixel-grid" aria-hidden="true">
        {pixels.map((p) => (
          <span
            key={p.key}
            style={{
              "--ox": `${p.ox}px`,
              "--oy": `${p.oy}px`,
              "--px": p.px,
              "--py": p.py,
              "--pd": p.delay,
            }}
          />
        ))}
      </span>
    </span>
  );
}

/* =========================================================
   Decorative: Mesh gradient background
========================================================= */
function MeshGradient({ variant = "hero" }) {
  const blobs =
    variant === "hero"
      ? [
          { bg: "var(--brand-blue)", w: 480, h: 480, t: "-10%", l: "-8%", delay: "0s" },
          { bg: "var(--brand-teal)", w: 420, h: 420, t: "30%", l: "70%", delay: "-7s" },
          { bg: "var(--navy-deep)", w: 520, h: 520, t: "60%", l: "20%", delay: "-14s" },
        ]
      : [
          { bg: "var(--brand-blue)", w: 360, h: 360, t: "10%", l: "75%", delay: "-3s" },
          { bg: "var(--brand-teal)", w: 320, h: 320, t: "60%", l: "5%", delay: "-10s" },
        ];
  return (
    <div className="mesh-bg">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="mesh-blob"
          style={{
            background: b.bg,
            width: b.w,
            height: b.h,
            top: b.t,
            left: b.l,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   Decorative: Particle field
========================================================= */
function ParticleField({ count = 22 }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const left = (pseudoRandom(i) * 100).toFixed(2);
    const size = (2 + pseudoRandom(i + 30) * 3).toFixed(2);
    const duration = (14 + pseudoRandom(i + 60) * 16).toFixed(2);
    const delay = (-pseudoRandom(i + 90) * 20).toFixed(2);
    return { left, size, duration, delay, key: i };
  });
  return (
    <div className="particle-field">
      {particles.map((p) => (
        <span
          key={p.key}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   Nav
========================================================= */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
<a href="#top" className="flex items-center gap-2.5 group">
  <div className="relative w-10 h-10">
    <Image
      src="/logo.png"
      alt="AEDEVS Logo"
      fill
      className="object-contain"
      priority
    />
  </div>

</a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--ink-300)] hover:text-[var(--ink-50)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="btn btn-primary text-sm">
            Start Your Project
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden btn-ghost-icon"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong border-t border-[var(--border-glass)] px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[var(--ink-200)]"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary justify-center mt-2">
            Start Your Project
          </a>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   Hero
========================================================= */
function Hero() {
  const shapesRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = shapesRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", `${x * 26}px`);
    el.style.setProperty("--my", `${y * 26}px`);
  }, []);

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <MeshGradient variant="hero" />
      <ParticleField count={26} />

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <Reveal>
            <span className="badge-pill glass">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundImage: "var(--gradient-brand)" }} />
              Dharmapuri Based Software Development Company
            </span>
          </Reveal>

          <h1 className="font-display font-bold text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] mt-6 text-[var(--ink-50)]">
            <PixelDissolve>We Build Modern</PixelDissolve>{" "}
            <PixelDissolve className="text-gradient-brand" pixelCount={20}>
              Websites &amp; Web Applications
            </PixelDissolve>
          </h1>

          <Reveal delay={120}>
            <p className="mt-6 text-base sm:text-lg text-[var(--ink-300)] max-w-xl leading-relaxed">
              Transforming business ideas into powerful digital experiences through innovative web development, custom software solutions, and modern technologies.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn btn-primary">
                Start Your Project
                <Icon name="arrowRight" className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Portfolio
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex items-center gap-6 text-[var(--ink-500)] text-sm">
              <span className="flex items-center gap-2">
                <Icon name="mapPin" className="w-4 h-4 text-[var(--brand-teal)]" />
                Dharmapuri, Tamil Nadu
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <Icon name="clock" className="w-4 h-4 text-[var(--brand-teal)]" />
                Replies within 24 hours
              </span>
            </div>
          </Reveal>
        </div>

        <div
          ref={shapesRef}
          className="relative h-[360px] sm:h-[440px] hidden md:block"
          style={{ perspective: "1000px" }}
        >
          <div
            className="shape-3d w-40 h-40 top-2 left-6"
            style={{
              "--rot": "-8deg",
              transform: "translate(var(--mx, 0), var(--my, 0)) rotate(-8deg)",
            }}
          />
          <div
            className="shape-3d w-28 h-28 top-44 left-44"
            style={{
              "--rot": "10deg",
              animationDelay: "-2s",
              transform: "translate(calc(var(--mx, 0) * -1.4), calc(var(--my, 0) * -1.4)) rotate(10deg)",
            }}
          />
          <div
            className="shape-3d w-20 h-20 top-8 left-72"
            style={{
              "--rot": "4deg",
              animationDelay: "-4s",
              transform: "translate(calc(var(--mx, 0) * 1.8), calc(var(--my, 0) * 1.8)) rotate(4deg)",
            }}
          />
          <div
            className="shape-3d w-52 h-52 bottom-0 right-0"
            style={{
              "--rot": "-4deg",
              animationDelay: "-6s",
              transform: "translate(calc(var(--mx, 0) * -1), calc(var(--my, 0) * -1)) rotate(-4deg)",
            }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="glass-strong rounded-2xl px-6 py-5 shadow-2xl" style={{ boxShadow: "var(--shadow-glow-blue)" }}>
              <Icon name="code" className="w-7 h-7 text-[var(--brand-teal)] mb-2" />
              <p className="font-display text-sm text-[var(--ink-50)] font-semibold">Code · Create</p>
              <p className="font-display text-sm text-gradient-brand font-semibold">Elevate</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--ink-500)] text-xs"
      >
        Scroll
        <span className="w-5 h-8 rounded-full border border-[var(--border-glass-strong)] flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-[var(--brand-teal)] animate-bounce" />
        </span>
      </a>
    </section>
  );
}

/* =========================================================
   About
========================================================= */
function StatCard({ stat, delay }) {
  const [ref, inView] = useInView();
  const count = useCounter(stat.value, inView);
  return (
    <div ref={ref} className={`reveal ${inView ? "is-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="glass rounded-2xl p-6 stat-card card-lift h-full">
        <p className="stat-number">
          {count}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm text-[var(--ink-300)] font-medium">{stat.label}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <p className="heading-eyebrow">About AEDEVS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4 leading-tight">
              Software, built with intent — from Dharmapuri to the rest of India.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[var(--ink-300)] leading-relaxed">
              AEDEVS is a modern software development company founded in Dharmapuri, specializing in custom websites, web applications, eCommerce solutions, portfolio websites, business automation tools, and digital transformation services.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 text-[var(--ink-300)] leading-relaxed">
              We help startups, local businesses, and enterprises establish a powerful online presence with scalable and high-performing solutions.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Services
========================================================= */
function ServiceCard({ service, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card-glow-edge card-lift glass rounded-2xl p-6 h-full flex flex-col">
        <div
          className="w-12 h-12 rounded-xl grid place-items-center mb-5"
          style={{ background: "var(--gradient-brand-soft)" }}
        >
          <Icon name={service.icon} className="w-6 h-6 text-[var(--brand-teal)]" />
        </div>
        <h3 className="font-display font-semibold text-lg text-[var(--ink-50)]">{service.title}</h3>
        <p className="mt-2.5 text-sm text-[var(--ink-300)] leading-relaxed flex-1">{service.desc}</p>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="absolute inset-0 -z-10 opacity-60">
        <MeshGradient variant="soft" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="heading-eyebrow">What We Do</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4">
              Services built around what your business actually needs
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={(i % 4) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Team
========================================================= */
function TeamCard({ member, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="glass rounded-2xl p-7 card-lift h-full">
        <div className="flex items-start gap-4">
          <div
            className="w-16 h-16 rounded-xl grid place-items-center font-display font-bold text-lg text-[#04101f] shrink-0"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            {member.initials}
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-[var(--ink-50)]">{member.name}</h3>
            <p className="text-sm text-[var(--brand-teal)] font-medium">{member.role}</p>
          </div>
        </div>

        <p className="mt-5 text-sm text-[var(--ink-300)] leading-relaxed">{member.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a href="#" aria-label={`${member.name} on LinkedIn`} className="btn-ghost-icon">
            <Icon name="linkedin" className="w-4 h-4" />
          </a>
          <a href="#" aria-label={`${member.name} on GitHub`} className="btn-ghost-icon">
            <Icon name="github" className="w-4 h-4" />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email about ${member.name}`} className="btn-ghost-icon">
            <Icon name="mail" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function Team() {
  return (
    <section id="team" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="heading-eyebrow">The Team</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4">
              A small team, fully invested in every project
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Portfolio
========================================================= */
function ProjectMock({ project }) {
  return (
    <div className={`browser-mock rounded-xl overflow-hidden card-lift`}>
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-[var(--border-glass)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink-700)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink-700)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink-700)]" />
      </div>
      <div className="h-48 sm:h-56 relative overflow-hidden">
  <Image
    src={project.image}
    alt={project.name}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Project Name */}
  <div className="absolute top-4 left-4 right-4 flex justify-between">
    <span className="font-display text-xs font-semibold text-white uppercase tracking-wider">
      {project.name}
    </span>
  </div>

  {/* Bottom Indicators */}
  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
    <span className="h-2 w-10 rounded-full bg-white/60" />
    <span className="h-2 w-16 rounded-full bg-white/40" />
    <span className="h-2 w-8 rounded-full bg-white/40" />
  </div>
</div>
    </div>
  );
}

function PortfolioCard({ project, delay, reverse }) {
  return (
    <Reveal delay={delay}>
      <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
        <div style={{ direction: "ltr" }}>
          <ProjectMock project={project} />
        </div>
        <div style={{ direction: "ltr" }}>
          <span className="chip">{project.category}</span>
          <h3 className="font-display font-bold text-2xl text-[var(--ink-50)] mt-4">{project.name}</h3>
          <p className="mt-3 text-[var(--ink-300)] leading-relaxed">{project.desc}</p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--ink-500)]">
            <span>
              Client: <span className="text-[var(--ink-200)]">{project.client}</span>
            </span>
            <span>
              Location: <span className="text-[var(--ink-200)]">{project.location}</span>
            </span>
          </div>
          <Link href={project.link} className="btn btn-secondary mt-6 text-sm" target="_blank" rel="noopener noreferrer">
            Visit Project
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="heading-eyebrow">Our Work</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4">
              Projects we&apos;ve shipped for real businesses
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-20">
          {PORTFOLIO.map((project, i) => (
            <PortfolioCard key={project.name} project={project} delay={0} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Process
========================================================= */
function ProcessStep({ step, index, total }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`timeline-dot w-11 h-11 rounded-full grid place-items-center font-display font-bold text-sm shrink-0 ${
            inView ? "text-[#04101f]" : "text-[var(--ink-300)]"
          }`}
          style={{
            backgroundImage: inView ? "var(--gradient-brand)" : "none",
            background: inView ? undefined : "var(--bg-panel-2)",
            border: inView ? "none" : "1px solid var(--border-glass-strong)",
            boxShadow: inView ? "var(--shadow-glow-teal)" : "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        {index < total - 1 && (
          <div className="w-px flex-1 mt-2 mb-2 bg-[var(--border-glass)] relative overflow-hidden" style={{ minHeight: "3rem" }}>
            <div className={`timeline-line absolute inset-0 ${inView ? "is-visible" : ""}`} />
          </div>
        )}
      </div>
      <div className={`pb-12 reveal ${inView ? "is-visible" : ""}`}>
        <h3 className="font-display font-semibold text-lg text-[var(--ink-50)]">{step.title}</h3>
        <p className="mt-1.5 text-sm text-[var(--ink-300)] leading-relaxed max-w-md">{step.desc}</p>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="heading-eyebrow">How We Work</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4">
              A clear process from first call to launch
            </h2>
          </Reveal>
        </div>

        <div className="mt-14">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} total={PROCESS_STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Why Choose Us
========================================================= */
function WhyChooseUs() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="heading-eyebrow">Why AEDEVS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4">
              Reasons businesses choose to build with us
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
              <div className="glass rounded-xl p-5 card-lift h-full">
                <div className="w-8 h-8 rounded-full grid place-items-center mb-3" style={{ background: "var(--gradient-brand-soft)" }}>
                  <Icon name="check" className="w-4 h-4 text-[var(--brand-teal)]" />
                </div>
                <h3 className="font-display font-semibold text-[var(--ink-50)] text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--ink-300)] leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Testimonials
========================================================= */
function Testimonials() {
  const trackRef = useRef(null);

  function scrollByCard(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const width = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  }

  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal>
              <p className="heading-eyebrow">Client Words</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-[var(--ink-50)] mt-4">
                What clients say after launch
              </h2>
            </Reveal>
          </div>
          <div className="hidden sm:flex gap-3">
            <button aria-label="Previous testimonial" onClick={() => scrollByCard(-1)} className="btn-ghost-icon">
              <Icon name="arrowRight" className="w-4 h-4 rotate-180" />
            </button>
            <button aria-label="Next testimonial" onClick={() => scrollByCard(1)} className="btn-ghost-icon">
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="snap-start shrink-0 w-[300px] sm:w-[360px]">
              <div data-card className="glass-strong rounded-2xl p-7 h-full flex flex-col">
                <Icon name="quote" className="w-7 h-7 text-[var(--brand-teal)] opacity-70" />
                <p className="mt-4 text-[var(--ink-200)] leading-relaxed flex-1">{t.review}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-[var(--ink-50)] text-sm">{t.name}</p>
                    <p className="text-xs text-[var(--ink-500)]">{t.company}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Icon
                        key={s}
                        name="star"
                        className={`w-3.5 h-3.5 ${s < t.rating ? "text-[var(--brand-teal)]" : "text-[var(--border-glass-strong)]"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Contact
========================================================= */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "Business Website", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is configured yet — wire this up to your form handler or API route.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <MeshGradient variant="soft" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
        <Reveal>
          <div className="glass-strong rounded-2xl p-8 h-full" style={{ boxShadow: "var(--shadow-glow-blue)" }}>
            <p className="heading-eyebrow">Get In Touch</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--ink-50)] mt-4">
              Let&apos;s build your next project
            </h2>
            <p className="mt-3 text-[var(--ink-300)] leading-relaxed">
              Tell us a bit about what you need, and we&apos;ll get back to you with next steps.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="btn-ghost-icon">
                  <Icon name="mapPin" className="w-4 h-4" />
                </span>
                <span className="text-sm text-[var(--ink-200)]">Dharmapuri, Tamil Nadu, India</span>
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 group">
                <span className="btn-ghost-icon">
                  <Icon name="mail" className="w-4 h-4" />
                </span>
                <span className="text-sm text-[var(--ink-200)] group-hover:text-[var(--brand-teal)] transition-colors">
                  {CONTACT_EMAIL}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="btn-ghost-icon">
                  <Icon name="clock" className="w-4 h-4" />
                </span>
                <span className="text-sm text-[var(--ink-200)]">Support available 24/7</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full justify-center mt-8"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
            {submitted ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full grid place-items-center mb-4" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  <Icon name="check" className="w-6 h-6 text-[#04101f]" />
                </div>
                <h3 className="font-display font-semibold text-xl text-[var(--ink-50)]">Message sent</h3>
                <p className="mt-2 text-[var(--ink-300)] max-w-sm">
                  Thanks, {form.name || "there"}. We&apos;ll be in touch at {form.email || "your email"} shortly.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn btn-secondary mt-6 text-sm">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="form-field">
                  <label htmlFor="name" className="text-xs font-medium text-[var(--ink-500)] mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="text-xs font-medium text-[var(--ink-500)] mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone" className="text-xs font-medium text-[var(--ink-500)] mb-1.5 block">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="projectType" className="text-xs font-medium text-[var(--ink-500)] mb-1.5 block">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option>Business Website</option>
                    <option>eCommerce Development</option>
                    <option>Web Application</option>
                    <option>Portfolio Website</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-medium text-[var(--ink-500)] mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn btn-primary w-full justify-center">
                    Send Message
                    <Icon name="arrowRight" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   Footer
========================================================= */
function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-glass)] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-lg grid place-items-center font-display font-bold text-[#04101f]"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                AE
              </span>
              <span className="font-display font-semibold text-lg text-[var(--ink-50)]">AEDEVS</span>
            </a>
            <p className="mt-4 text-sm text-[var(--ink-500)] leading-relaxed max-w-xs">
              Code. Create. Elevate. A software development studio based in Dharmapuri, Tamil Nadu.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-[var(--ink-50)] uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[var(--ink-500)] hover:text-[var(--brand-teal)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-[var(--ink-50)] uppercase tracking-wide">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-[var(--ink-500)] hover:text-[var(--brand-teal)] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-[var(--ink-50)] uppercase tracking-wide">
              Connect
            </h4>
            <p className="mt-4 text-sm text-[var(--ink-500)]">{CONTACT_EMAIL}</p>
            <p className="mt-1 text-sm text-[var(--ink-500)]">Dharmapuri, Tamil Nadu</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="AEDEVS on Instagram" className="btn-ghost-icon">
                <Icon name="instagram" className="w-4 h-4" />
              </a>
              <a href="#" aria-label="AEDEVS on LinkedIn" className="btn-ghost-icon">
                <Icon name="linkedin" className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="AEDEVS on WhatsApp" className="btn-ghost-icon">
                <Icon name="whatsapp" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gradient mt-12" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--ink-700)]">
          <p>© 2026 AEDEVS. All Rights Reserved.</p>
          <p>Designed &amp; built in Dharmapuri, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   Page
========================================================= */
export default function Home() {
  return (
    <main className="relative bg-[var(--bg-void)] bg-noise">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}