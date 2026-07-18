"use client";

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white/70">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-[-8%] top-[-10%] h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-3%] h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
      </div>
      <div className="container-main relative section-pad !pb-12">
        <div className="animate-[fade-up_0.5s_ease-out_both]">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">{title}</h1>
          {description ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p> : null}
          {children ? <div className="mt-8 flex flex-col gap-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
