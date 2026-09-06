import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "link";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent px-6 py-3.5 text-accent-fg hover:bg-accent-hover",
  secondary:
    "border border-line-strong px-6 py-3.5 text-fg hover:border-fg",
  link: "text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  className?: string,
): string {
  return cn(base, variants[variant], className);
}

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  external = false,
}: ButtonProps) {
  const classes = buttonClasses(variant, className);
  const isRoute = href.startsWith("/") && !href.startsWith("//");

  if (isRoute) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
