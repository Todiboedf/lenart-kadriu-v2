import { hualien } from "@/content/hualien";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { Eyebrow } from "./ui/Eyebrow";
import { PhotoGrid } from "./PhotoGrid";

export default function HualienSection() {
  return (
    <section id="hualien" className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeader eyebrow={hualien.eyebrow} title={hualien.title} />
            <div className="flex max-w-2xl flex-col gap-4">
              {hualien.description.map((paragraph) => (
                <p key={paragraph} className="t-lead text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <Eyebrow>{hualien.resultatsLabel}</Eyebrow>
            <ul className="mt-6 border-t border-line">
              {hualien.resultats.map((result) => (
                <li
                  key={result.epreuve}
                  className="flex flex-col gap-2 border-b border-line py-6"
                >
                  <span className="t-num text-4xl text-fg sm:text-5xl">
                    {result.medaille}
                  </span>
                  <span className="t-body text-fg-muted">
                    {result.epreuve}
                    {" : "}
                    {result.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {hualien.photos.length > 0 ? (
          <PhotoGrid photos={hualien.photos} className="mt-16" />
        ) : null}
      </Container>
    </section>
  );
}
