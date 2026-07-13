import Link from "next/link";

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
      <Link href="/" className="transition hover:text-blue-600">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          <span aria-hidden className="text-slate-300">/</span>
          {index === items.length - 1 ? (
            <span className="font-medium text-slate-900" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
