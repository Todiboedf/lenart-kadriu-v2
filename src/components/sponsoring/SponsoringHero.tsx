import { sponsoring } from "@/content/sponsoring";
import { mailto } from "@/lib/mailto";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

export default function SponsoringHero() {
  const { hero } = sponsoring;

  return (
    <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
      <Container>
        <div className="flex max-w-4xl flex-col gap-6">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="t-h2 text-fg">{hero.title}</h1>
          <p className="t-lead max-w-2xl text-fg-muted">{hero.paragraph}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={mailto(hero.primaryCta.subject)}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
