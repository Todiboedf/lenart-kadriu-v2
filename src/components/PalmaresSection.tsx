import { palmares, type PalmaresEntry } from "@/content/palmares";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const thClasses =
  "py-3 pr-4 text-left text-[11px] font-medium uppercase tracking-[0.18em] text-fg-muted";

function resultLabel(entry: PalmaresEntry): string {
  return entry.note ? `${entry.resultat}, ${entry.note}` : entry.resultat;
}

function placeLabel(entry: PalmaresEntry): string {
  return entry.lieu === entry.pays ? entry.pays : `${entry.lieu}, ${entry.pays}`;
}

function entryKey(entry: PalmaresEntry): string {
  return [entry.annee ?? "", entry.competition, entry.lieu, entry.format, entry.resultat].join("|");
}

export default function PalmaresSection() {
  return (
    <section id="palmares" className="section">
      <Container>
        <SectionHeader eyebrow={palmares.eyebrow} title={palmares.title} />

        <table className="mt-12 hidden w-full border-collapse text-left md:table">
          <thead>
            <tr className="border-b border-line-strong">
              <th scope="col" className={`${thClasses} w-20`}>Année</th>
              <th scope="col" className={thClasses}>Compétition</th>
              <th scope="col" className={`${thClasses} w-52`}>Lieu</th>
              <th scope="col" className={`${thClasses} w-24`}>Format</th>
              <th scope="col" className={`${thClasses} w-72 pr-0`}>Résultat</th>
            </tr>
          </thead>
          <tbody>
            {palmares.entries.map((entry) => (
              <tr key={entryKey(entry)} className="border-b border-line align-top">
                <td className="t-num py-4 pr-4 text-base text-fg-muted">
                  {entry.annee ?? ""}
                </td>
                <td className="t-body py-4 pr-4 text-fg">{entry.competition}</td>
                <td className="t-body py-4 pr-4 text-fg-muted">
                  {placeLabel(entry)}
                </td>
                <td className="t-body py-4 pr-4 text-fg-muted">{entry.format}</td>
                <td className="t-body py-4 font-medium text-fg">
                  {resultLabel(entry)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul className="mt-10 divide-y divide-line border-y border-line md:hidden">
          {palmares.entries.map((entry) => (
            <li key={entryKey(entry)} className="flex flex-col gap-1 py-4">
              <p className="t-body text-fg">
                <span className="font-medium">{entry.competition}</span>
                <span className="text-fg-muted">
                  {", "}
                  {placeLabel(entry)}
                </span>
              </p>
              <p className="t-small text-fg-muted">
                <span className="text-fg">{resultLabel(entry)}</span>
                {" · "}
                {entry.format}
                {entry.annee ? ` · ${entry.annee}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
