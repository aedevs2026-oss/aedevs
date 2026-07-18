export function SectionHeading({ eyebrow, title, description, align = "left", as: Tag = "h2", className = "" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</Tag>
      {description ? <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  );
}
