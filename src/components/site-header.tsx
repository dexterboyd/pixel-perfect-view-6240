import { Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/government-contracting", label: "Government Contracting" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-base font-bold uppercase tracking-[0.18em] text-foreground">
            Boyd Contract Services
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Facilities Support &amp; Contract Services
          </span>
        </Link>

        <nav className="flex items-center justify-end gap-4 md:gap-6 lg:gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground md:text-sm [&.active]:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="accent" size="sm">
            <a href="/capability-statement.pdf" download>
              <FileText />
              Capability Statement
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
