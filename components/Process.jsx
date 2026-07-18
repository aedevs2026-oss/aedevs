import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {processSteps.map((step, index) => (
        <article key={step.step} className="card card-lift relative p-6">
          <span className="font-display text-4xl font-bold text-gradient opacity-80">
            {step.step}
          </span>
          <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
          {index < processSteps.length - 1 ? (
            <span
              className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-slate-200 xl:block"
              aria-hidden
            />
          ) : null}
        </article>
      ))}
    </div>
  );
}
