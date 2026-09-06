import Image from "next/image";
import { athlete } from "@/content/athlete";
import { portrait, debuts, focusToPosition } from "@/content/photos";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { FactsBar } from "./ui/FactsBar";

export default function ProfileSection() {
  return (
    <section id="profil" className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <figure className="relative aspect-[3/4] overflow-hidden bg-bg-elev">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: focusToPosition(portrait.focus) }}
              />
            </figure>
            <figure className="grid grid-cols-[88px_1fr] items-center gap-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-elev">
                <Image
                  src={debuts.src}
                  alt={debuts.alt}
                  fill
                  sizes="88px"
                  className="object-cover"
                  style={{ objectPosition: focusToPosition(debuts.focus) }}
                />
              </div>
              <figcaption className="t-small text-fg-muted">
                {debuts.caption}
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-7">
            <SectionHeader eyebrow="Profil" title="Profil d’athlète" />
            <div className="flex max-w-2xl flex-col gap-4">
              {athlete.bio.map((paragraph) => (
                <p key={paragraph} className="t-lead text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="t-small text-fg-muted">{athlete.tags.join(" · ")}</p>
            <FactsBar items={athlete.profileFacts} columns={3} />
          </div>
        </div>
      </Container>
    </section>
  );
}
