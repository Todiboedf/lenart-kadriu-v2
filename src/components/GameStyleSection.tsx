import Image from "next/image";
import { athlete } from "@/content/athlete";
import { action, focusToPosition } from "@/content/photos";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export default function GameStyleSection() {
  const { gameStyle } = athlete;

  return (
    <section id="jeu" className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-10 lg:col-span-7">
            <SectionHeader eyebrow={gameStyle.eyebrow} title={gameStyle.title} />
            <div className="flex max-w-2xl flex-col gap-4">
              {gameStyle.paragraphs.map((paragraph) => (
                <p key={paragraph} className="t-lead text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {gameStyle.qualities.map((quality) => (
                <li
                  key={quality.title}
                  className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <h3 className="t-h3 text-fg">{quality.title}</h3>
                  <p className="t-body text-fg-muted">{quality.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden bg-bg-elev lg:col-span-5 lg:aspect-[4/5]">
            <Image
              src={action.src}
              alt={action.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={{ objectPosition: focusToPosition(action.focus) }}
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
