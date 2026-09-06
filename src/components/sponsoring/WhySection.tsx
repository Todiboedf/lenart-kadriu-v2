import Image from "next/image";
import { sponsoring } from "@/content/sponsoring";
import { stills, focusToPosition } from "@/content/photos";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

export default function WhySection() {
  const { why } = sponsoring;
  const photo = stills[0];

  return (
    <section className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-10 lg:col-span-7">
            <SectionHeader eyebrow={why.eyebrow} title={why.title} />
            <ol className="divide-y divide-line border-y border-line">
              {why.arguments.map((argument, index) => (
                <li
                  key={argument.title}
                  className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-4"
                >
                  <span className="t-num text-base text-fg-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="t-h3 text-fg">{argument.title}</h3>
                    <p className="t-body text-fg-muted">{argument.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden bg-bg-elev lg:col-span-5 lg:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={{ objectPosition: focusToPosition(photo.focus) }}
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
