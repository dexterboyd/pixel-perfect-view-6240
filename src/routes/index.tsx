import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  SprayCan,
  Droplets,
  Trees,
  ArrowRight,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boyd Contract Services | Facilities Support & Contract Services" },
      {
        name: "description",
        content:
          "Boyd Contract Services is a small business providing facilities support, janitorial, grounds, building services, and contract support for government and commercial customers.",
      },
      {
        property: "og:title",
        content: "Boyd Contract Services | Facilities Support & Contract Services",
      },
      {
        property: "og:description",
        content:
          "Reliable Service. Contract-Ready Solutions. Facilities and building-support services for government and commercial customers.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Building2,
    title: "Facilities Support",
    text: "Facilities and building-support services designed around dependable service coordination, scheduling, and contract requirements.",
  },
  {
    icon: SprayCan,
    title: "Janitorial & Custodial",
    text: "General janitorial, custodial, cleaning, and recurring facility-support services.",
  },
  {
    icon: Droplets,
    title: "Building & Exterior Services",
    text: "Professional power washing, window cleaning, exterior building cleaning, and related building-support services.",
  },
  {
    icon: Trees,
    title: "Landscaping & Grounds",
    text: "Grounds maintenance, landscaping support, lawn services, and seasonal exterior-property services.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt="Modern institutional building exterior with maintained grounds at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Small Business · SAM.gov Registered
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
            Boyd Contract Services
          </h1>
          <p className="mt-5 font-display text-xl font-semibold text-primary-foreground/90 md:text-2xl">
            Facilities Support &amp; Contract Services
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-accent">
            Reliable Service. Contract-Ready Solutions.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            Supporting government and commercial customers with dependable facilities, building,
            grounds, and contract-support services.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="accent">
              <Link to="/government-contracting">
                Government Contracting
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="onDark">
              <Link to="/contact">Contact Boyd Contract Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-muted-foreground md:grid-cols-3">
          <p>
            <span className="font-semibold text-foreground">Business Type:</span> Small Business
          </p>
          <p>
            <span className="font-semibold text-foreground">UEI:</span> FSHUESZVPG29
            <span className="px-3">|</span>
            <span className="font-semibold text-foreground">CAGE:</span> [ADD CAGE]
          </p>
          <p>
            <span className="font-semibold text-foreground">NAICS:</span> 561790 · 561720 · 561210 ·
            561730 · 561990
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Services</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Contract-ready facilities and support services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Services are performed directly or through coordinated qualified service providers and
            subcontractors when permitted by contract requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-sm border border-border bg-card p-7 transition-colors hover:border-accent"
            >
              <Icon className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-sm border border-border bg-surface p-7">
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight">Full capabilities</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Review detailed service areas and NAICS codes.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-6 self-start">
              <Link to="/capabilities">
                View Capabilities
                <ArrowRight />
              </Link>
            </Button>
          </article>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Working with agencies and prime contractors
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/75">
              Boyd Contract Services evaluates each requirement individually and may pursue work as
              a prime contractor or support an established prime as a subcontractor.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <a href="/capability-statement.pdf" download>
                <FileText />
                Capability Statement
              </a>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
