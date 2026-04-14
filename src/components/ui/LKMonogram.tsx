import { cn } from "@/lib/utils";

type LKMonogramProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeMap = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
};

export function LKMonogram({
  className,
  size = "md",
  label = "Lenart Kadriu",
}: LKMonogramProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={label}
    >
      <span
        aria-hidden="true"
        className={cn(
          "font-display italic tracking-tight leading-none text-bone",
          sizeMap[size],
        )}
      >
        L<span className="text-gold">K</span>
      </span>
    </span>
  );
}
