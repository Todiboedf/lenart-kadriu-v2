import { Mail, Phone } from "lucide-react";
import { sponsoring } from "@/content/sponsoring";
import { site } from "@/content/site";
import { mailto } from "@/lib/mailto";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export default function ContactSection() {
  const { contact } = sponsoring;

  return (
    <section id="contact" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow={contact.eyebrow} title={contact.title} />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-1">
              <p className="t-h3 text-fg">{site.manager.name}</p>
              <p className="t-body text-fg-muted">{site.manager.company}</p>
            </div>
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
            <p className="t-small text-fg-muted">{contact.responseTime}</p>
            <div>
              <Button href={mailto(contact.subject)}>
                {sponsoring.cta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
