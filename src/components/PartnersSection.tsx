import { partners, affiliations } from "@/content/partners";
import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { LogoStrip } from "./ui/LogoStrip";

type PartnersSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
};

export default function PartnersSection({
  id,
  eyebrow,
  title,
}: PartnersSectionProps) {
  const affiliationLine = `${affiliations.label} : ${[...affiliations.items, site.club].join(" · ")}`;

  return (
    <section id={id} className="section">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="mt-12">
          <LogoStrip partners={partners} />
        </div>
        <p className="t-small mt-6 text-fg-muted">{affiliationLine}</p>
      </Container>
    </section>
  );
}
