import { Check } from "lucide-react";
import { sponsoring } from "@/content/sponsoring";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const thClasses =
  "py-3 pr-4 text-[11px] font-medium uppercase tracking-[0.18em] text-fg-muted";

export default function SupportsSection() {
  const { supports, offers } = sponsoring;
  const tierNames = offers.tiers.map((tier) => tier.name);

  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow={supports.eyebrow}
          title={supports.title}
          intro={supports.intro}
        />
        <div className="mt-12 max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                <th scope="col" className={thClasses}>
                  Support
                </th>
                {tierNames.map((name) => (
                  <th
                    key={name}
                    scope="col"
                    className={`${thClasses} w-16 text-center sm:w-24`}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {supports.items.map((item) => (
                <tr key={item.label} className="border-b border-line">
                  <th
                    scope="row"
                    className="t-body py-4 pr-4 font-normal text-fg"
                  >
                    {item.label}
                  </th>
                  {tierNames.map((name) => {
                    const included = item.tiers.includes(name);
                    return (
                      <td key={name} className="py-4 text-center">
                        {included ? (
                          <Check
                            size={18}
                            strokeWidth={1.5}
                            aria-label="Inclus"
                            className="inline-block text-fg"
                          />
                        ) : (
                          <span className="sr-only">Non inclus</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
