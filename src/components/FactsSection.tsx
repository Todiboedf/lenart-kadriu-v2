import { athlete } from "@/content/athlete";
import { Container } from "./ui/Container";
import { FactsBar } from "./ui/FactsBar";

export default function FactsSection() {
  return (
    <section aria-label="Faits clés" className="bg-bg">
      <Container>
        <FactsBar items={athlete.facts} columns={4} className="border-t-0" />
      </Container>
    </section>
  );
}
