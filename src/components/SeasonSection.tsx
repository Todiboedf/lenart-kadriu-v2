import { athlete } from "@/content/athlete";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export default function SeasonSection() {
  const { objectives } = athlete;

  return (
    <section id="saison" className="section">
      <Container>
        <SectionHeader eyebrow={objectives.eyebrow} title={objectives.title} />
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {objectives.items.map((item) => (
            <li
              key={item.horizon}
              className="grid gap-2 py-6 md:grid-cols-12 md:gap-6"
            >
              <span className="t-num text-2xl text-fg md:col-span-3">
                {item.horizon}
              </span>
              <h3 className="t-h3 text-fg md:col-span-3">{item.title}</h3>
              <p className="t-body text-fg-muted md:col-span-6">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
