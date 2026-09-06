import type { Fact } from "@/content/athlete";
import { cn } from "@/lib/utils";

type FactsBarProps = {
  items: Fact[];
  columns?: 3 | 4;
  className?: string;
};

const columnClasses: Record<NonNullable<FactsBarProps["columns"]>, string> = {
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

/** Bande horizontale de faits, filets verticaux et horizontaux, texte seul. */
export function FactsBar({ items, columns = 4, className }: FactsBarProps) {
  return (
    <dl
      className={cn(
        "grid gap-px border-y border-line bg-line",
        columnClasses[columns],
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={`${item.value}-${item.label}`}
          className="flex flex-col gap-1.5 bg-bg px-4 py-5 first:pl-0 sm:px-6 lg:py-6"
        >
          <dd className="font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-fg">
            {item.value}
          </dd>
          <dt className="t-small text-fg-muted">{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}
