const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lenartkadriu.com";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Lenart Kadriu",
  givenName: "Lenart",
  familyName: "Kadriu",
  gender: "Male",
  birthDate: "2012-01-16",
  birthPlace: {
    "@type": "Place",
    name: "Vevey",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vevey",
      addressRegion: "Vaud",
      addressCountry: "CH",
    },
  },
  nationality: {
    "@type": "Country",
    name: "Switzerland",
  },
  jobTitle: "Tennisman",
  knowsAbout: "Tennis",
  url: SITE_URL,
  image: `${SITE_URL}/assets/photo_identite.jpg`,
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
    name: "Tennis Nestlé Club de Mont-Pèlerin",
  },
};

const sportsEvent = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "@id": `${SITE_URL}/#joj-hualien-2026`,
  name: "Jeux Olympiques de la Jeunesse : Hualien 2026",
  alternateName: "Youth Olympic Games Hualien 2026",
  startDate: "2026-07-29",
  endDate: "2026-08-08",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  sport: "Tennis",
  location: {
    "@type": "Place",
    name: "Hualien",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hualien",
      addressCountry: "TW",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "International Olympic Committee",
    url: "https://olympics.com/",
  },
  competitor: {
    "@id": `${SITE_URL}/#person`,
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEvent) }}
      />
    </>
  );
}
