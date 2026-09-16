import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/government-contracting", label: "Government Contracting" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-[0.16em]">
            Boyd Contract Services
          </p>
          <p className="mt-2 text-sm text-primary-foreground/75">
            Facilities Support &amp; Contract Services
          </p>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/60">
            Reliable Service. Professional Coordination. Contract-Ready Solutions.
          </p>
        </div>

        <div className="space-y-2 text-sm text-primary-foreground/75">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
            Contact
          </p>
          <p>
            <a
              className="underline-offset-4 hover:underline"
              href="mailto:dexter.boyd@boydcontractservices.com"
            >
              dexter.boyd@boydcontractservices.com
            </a>
          </p>
          <p>boydcontractservices.com</p>
          <p className="pt-3">NAICS: 561790 | 561720 | 561210 | 561730 | 561990</p>
          <p>UEI: [ADD UEI]</p>
          <p>CAGE: [ADD CAGE]</p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">Navigation</p>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/55">
          &copy; {new Date().getFullYear()} Boyd Contract Services. Small business.
        </div>
      </div>
    </footer>
  );
}
