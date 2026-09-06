import { galerie } from "@/content/photos";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { PhotoGrid } from "./PhotoGrid";

export default function GallerySection() {
  return (
    <section id="galerie" className="section">
      <Container>
        <SectionHeader eyebrow="Galerie" title="En images" />
        <PhotoGrid photos={galerie} className="mt-12" />
      </Container>
    </section>
  );
}
