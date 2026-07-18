import { Button } from "@/components/ui/Button";

export function CTASection({ title, description, actionLabel = "Start a project", actionHref = "/contact" }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-blue-100/70 bg-gradient-to-br from-[#082A5E] via-[#0B5ED7] to-[#11C5A4] p-8 shadow-brand sm:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%)]" aria-hidden />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-light">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-relaxed text-blue-50/90">{description}</p> : null}
        </div>
        <Button href={actionHref} variant="cta" className="shrink-0">{actionLabel}</Button>
      </div>
    </div>
  );
}
