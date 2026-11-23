import Image from "next/image";
import { site } from "@/content/site";
import { heroPoster, focusToPosition } from "@/content/photos";
import { HeroVideo } from "./HeroVideo";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export default function Hero() {
  const line = site.hero.eyebrow;

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={heroPoster.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: focusToPosition(heroPoster.focus) }}
        />
        <HeroVideo
          mp4={site.hero.loopMp4}
          webm={site.hero.loopWebm}
          poster={heroPoster.src}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative z-10 pb-16 pt-32 lg:pb-24">
        <h1 className="t-display anim-rise text-fg">
          <span className="block">Lenart</span>
          <span className="block">Kadriu</span>
        </h1>
        <p className="anim-rise anim-delay-1 mt-8 flex max-w-2xl flex-col gap-3">
          <span className="t-eyebrow text-fg">{line}</span>
          <span className="t-lead text-fg">{site.hero.subtitle}</span>
        </p>
        <div className="anim-rise anim-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href={site.hero.primaryCta.href}>
            {site.hero.primaryCta.label}
          </Button>
          <Button href={site.hero.secondaryCta.href} variant="secondary">
            {site.hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
