import { Button } from "@/components/ui/Button";

export function CTASection({
  title,
  description,
  actionLabel = "Start a project",
  actionHref = "/contact",
}) {
  return (
    <div className="card overflow-hidden border-blue-100 bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-600 p-8 shadow-brand sm:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-light">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-relaxed text-blue-50/90">{description}</p>
          ) : null}
        </div>
        <Button href={actionHref} variant="cta" className="shrink-0">
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
