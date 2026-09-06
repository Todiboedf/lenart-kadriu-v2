import { Mail, Phone } from "lucide-react";
import { sponsoring } from "@/content/sponsoring";
import { site } from "@/content/site";
import { mailto } from "@/lib/mailto";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

export default function CTASection() {
  const { cta } = sponsoring;

  return (
    <section className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeader eyebrow={cta.eyebrow} title={cta.title} />
            <div className="flex max-w-2xl flex-col gap-4">
              {cta.lines.map((line) => (
                <p key={line} className="t-lead text-fg-muted">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end gap-8 lg:col-span-5">
            <ul className="t-body flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-fg transition-colors hover:text-fg-muted"
                >
                  <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 text-fg transition-colors hover:text-fg-muted"
                >
                  <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={cta.primaryCta.href}>{cta.primaryCta.label}</Button>
              <Button href={mailto(cta.secondaryCta.subject)} variant="secondary">
                {cta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
