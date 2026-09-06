import { site } from "@/content/site";
import { hualien } from "@/content/hualien";
import { portrait } from "@/content/photos";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: site.name,
  givenName: "Lenart",
  familyName: "Kadriu",
  gender: "Male",
  birthPlace: {
    "@type": "Place",
    name: site.birthPlace,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.birthPlace,
      addressRegion: "Vaud",
      addressCountry: "CH",
    },
  },
  nationality: {
    "@type": "Country",
    name: "Switzerland",
  },
  jobTitle: "Joueur de tennis",
  knowsAbout: "Tennis",
  url: siteUrl,
  image: `${siteUrl}${portrait.src}`,
  memberOf: [
    {
      "@type": "SportsTeam",
      name: "Team Vaud",
      sport: "Tennis",
    },
    {
      "@type": "SportsOrganization",
      name: "Swiss Tennis",
      url: "https://www.swisstennis.ch/",
    },
    {
      "@type": "SportsOrganization",
      name: "Swiss Olympic",
      url: "https://www.swissolympic.ch/",
    },
  ],
  affiliation: {
    "@type": "SportsOrganization",
    name: site.club,
  },
};

const sportsEvent = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "@id": `${siteUrl}/#icg-hualien-2026`,
  name: "International Children's Games Hualien 2026",
  startDate: hualien.startDate,
  endDate: hualien.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  sport: "Tennis",
  location: {
    "@type": "Place",
    name: hualien.location.city,
    address: {
      "@type": "PostalAddress",
      addressLocality: hualien.location.city,
      addressCountry: hualien.location.countryCode,
    },
  },
  organizer: {
    "@type": "Organization",
    name: hualien.organizer.name,
    url: hualien.organizer.url,
  },
  competitor: {
    "@id": `${siteUrl}/#person`,
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEvent) }}
      />
    </>
  );
}
