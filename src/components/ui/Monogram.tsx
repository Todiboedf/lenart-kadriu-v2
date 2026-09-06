import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-display text-xl font-bold leading-none tracking-[-0.04em] text-fg",
        className,
      )}
    >
      {site.monogram}
    </span>
  );
}
