import Link from "next/link";

const variants = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  cta: "btn btn-cta",
};

const sizes = {
  default: "",
  sm: "btn-sm",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  disabled,
  loading = false,
  ...props
}) {
  const classes = `${variants[variant]} ${sizes[size]} ${loading ? "btn-loading" : ""} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
      {children}
    </button>
  );
}
