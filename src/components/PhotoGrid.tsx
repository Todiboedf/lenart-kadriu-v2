import Image from "next/image";
import { focusToPosition, type Photo } from "@/content/photos";
import { cn } from "@/lib/utils";

type PhotoGridProps = {
  photos: Photo[];
  className?: string;
};

/** Grille de photos : deux colonnes, quatre à partir de 1024 px, les photos "tall" occupent deux rangées. */
export function PhotoGrid({ photos, className }: PhotoGridProps) {
  return (
    <ul
      className={cn(
        "grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:auto-rows-[280px] lg:grid-cols-4",
        className,
      )}
    >
      {photos.map((photo) => (
        <li
          key={photo.src}
          className={cn(
            "relative overflow-hidden bg-bg-elev",
            photo.tall && "row-span-2",
          )}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
            style={{ objectPosition: focusToPosition(photo.focus) }}
          />
        </li>
      ))}
    </ul>
  );
}
