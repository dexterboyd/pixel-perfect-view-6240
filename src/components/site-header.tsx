import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/government-contracting", label: "Government Contracting" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-base font-bold uppercase tracking-[0.18em] text-foreground">
            Boyd Contract Services
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Facilities Support &amp; Contract Services
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
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

        <button
          type="button"
          aria-label="Toggle navigation"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground [&.active]:text-foreground"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="accent" size="sm" className="mt-3 self-start">
              <a href="/capability-statement.pdf" download>
                <FileText />
                Capability Statement
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
