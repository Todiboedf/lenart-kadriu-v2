import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="t-h2 max-w-4xl text-fg">{title}</h2>
      {intro ? <p className="t-lead max-w-2xl text-fg-muted">{intro}</p> : null}
    </div>
  );
}
