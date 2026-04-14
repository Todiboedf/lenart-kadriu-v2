import { cn } from "@/lib/utils";

type GoldDividerProps = {
  className?: string;
  width?: "sm" | "md" | "lg" | "full";
  withDot?: boolean;
  align?: "left" | "center";
};

const widthMap: Record<NonNullable<GoldDividerProps["width"]>, string> = {
  sm: "w-16",
  md: "w-24",
  lg: "w-40",
  full: "w-full",
};

export function GoldDivider({
  className,
  width = "md",
  withDot = true,
  align = "center",
}: GoldDividerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "h-px bg-gradient-to-r from-transparent via-gold/60 to-gold/60",
          widthMap[width],
        )}
      />
      {withDot && <span className="block h-1 w-1 rotate-45 bg-gold" />}
      <span
        className={cn(
          "h-px bg-gradient-to-l from-transparent via-gold/60 to-gold/60",
          widthMap[width],
        )}
      />
    </div>
  );
}
