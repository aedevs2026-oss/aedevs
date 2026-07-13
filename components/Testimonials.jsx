import { testimonials } from "@/lib/content";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({ limit }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={`${item.name}-${item.role}`} className="card card-lift flex flex-col p-6">
          <StarRating rating={item.rating} />
          <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-7 text-slate-700">
            &ldquo;{item.quote}&rdquo;
          </blockquote>
          <footer className="mt-6 border-t border-slate-100 pt-4">
            <p className="font-display font-semibold text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-500">{item.role}</p>
          </footer>
        </article>
      ))}
    </div>
  );
}
