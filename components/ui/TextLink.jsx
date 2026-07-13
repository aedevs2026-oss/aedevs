import Link from "next/link";

export function TextLink({ href, children, external, className = "", ...props }) {
  const classes = `text-link ${className}`.trim();

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <span aria-hidden>→</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
