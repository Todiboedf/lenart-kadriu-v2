import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { Monogram } from "./ui/Monogram";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Monogram />
          <span className="t-small text-fg-muted">{site.footer.line}</span>
        </div>
        <div className="t-small flex flex-col gap-2 text-fg-muted sm:flex-row sm:items-center sm:gap-6">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-fg"
          >
            {site.email}
          </a>
          <span>
            {site.footer.managedBy}{" "}
            <a
              href={site.manager.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg transition-colors hover:text-fg-muted"
            >
              {site.manager.company}
            </a>
          </span>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="t-small py-5 text-fg-muted">
          © {year} {site.name}
        </Container>
      </div>
    </footer>
  );
}
