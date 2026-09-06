import { sponsoring } from "@/content/sponsoring";
import { mailto } from "@/lib/mailto";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export default function OffersSection() {
  const { offers } = sponsoring;

  return (
    <section id="offres" className="section">
      <Container>
        <SectionHeader
          eyebrow={offers.eyebrow}
          title={offers.title}
          intro={offers.intro}
        />
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {offers.tiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col gap-6 border-t border-line pt-6 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="t-h3 text-fg">{tier.name}</h3>
              <p className="t-num text-3xl text-fg">{tier.price}</p>
              <ul className="divide-y divide-line border-y border-line">
                {tier.includes.map((line) => (
                  <li key={line} className="t-small py-3 text-fg-muted">
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button
                  href={mailto(`${offers.subjectPrefix} ${tier.name}`)}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {offers.ctaLabel}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
