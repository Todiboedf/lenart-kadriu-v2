import Image from "next/image";
import type { Partner } from "@/content/partners";

/** Logos partenaires en blanc monochrome, hauteur uniforme, sur fond élevé. */
export function LogoStrip({ partners }: { partners: Partner[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-14 gap-y-8 bg-bg-elev px-6 py-10 sm:px-10">
      {partners.map((partner) => {
        const height = partner.logoHeight ?? 32;
        const width = Math.round(
          (height * partner.logoSize.width) / partner.logoSize.height,
        );
        return (
          <li key={partner.name}>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name}, ${partner.role}`}
              className="inline-flex items-center opacity-90 transition-opacity duration-200 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={width}
                height={height}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
