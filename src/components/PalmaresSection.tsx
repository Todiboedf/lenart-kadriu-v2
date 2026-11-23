import { palmares } from "@/content/palmares";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export default function PalmaresSection() {
  return (
    <section id="palmares" className="section">
      <Container>
        <SectionHeader eyebrow={palmares.eyebrow} title={palmares.title} />
        <p className="t-lead mt-6 max-w-2xl text-fg-muted">{palmares.lead}</p>
        <ul className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {palmares.niveaux.map((niveau) => (
            <li key={niveau} className="border-b border-line py-6">
              <p className="t-h3 uppercase text-fg">{niveau}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
