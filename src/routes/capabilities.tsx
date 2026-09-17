import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities | Facilities, Janitorial & Grounds Services" },
      {
        name: "description",
        content:
          "Capabilities of Boyd Contract Services: facilities support, janitorial and custodial, building and exterior services, landscaping and grounds, contract and project support.",
      },
      { property: "og:title", content: "Capabilities | Boyd Contract Services" },
      {
        property: "og:description",
        content:
          "Facilities support, janitorial, building and exterior services, grounds maintenance, and contract-support services.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

const sections = [
  {
    title: "Facilities Support",
    items: [
      "Facilities support",
      "Building-support services",
      "Routine maintenance coordination",
      "On-site service coordination",
      "Contract support",
    ],
  },
  {
    title: "Janitorial & Custodial",
    items: [
      "General janitorial services",
      "Custodial support",
      "Interior cleaning",
      "Recurring cleaning services",
    ],
  },
  {
    title: "Building & Exterior Services",
    items: [
      "Professional power washing",
      "Window cleaning",
      "Exterior building cleaning",
      "Building-support services",
      "Exterior maintenance coordination",
    ],
  },
  {
    title: "Landscaping & Grounds",
    items: [
      "Grounds maintenance",
      "Landscaping support",
      "Lawn services",
      "Seasonal grounds services",
    ],
  },
  {
    title: "Contract & Project Support",
    items: [
      "Contract coordination",
      "Project scheduling",
      "Procurement coordination",
      "Qualified service-provider coordination",
      "Subcontractor coordination when permitted",
      "Delivery and service coordination",
    ],
  },
];

const naics = [
  { code: "561790", label: "Other Services to Buildings and Dwellings" },
  { code: "561720", label: "Janitorial Services" },
  { code: "561210", label: "Facilities Support Services" },
  { code: "561730", label: "Landscaping Services" },
  { code: "561990", label: "All Other Support Services" },
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Capabilities"
        description="Service areas Boyd Contract Services supports for government and commercial customers, performed directly or through coordinated qualified service providers when permitted by contract requirements."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-sm border border-border bg-card p-7">
              <h2 className="font-display text-lg font-bold tracking-tight">{section.title}</h2>
              <div className="mt-4 h-px w-10 bg-accent" />
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">NAICS Codes</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            NAICS codes describe the service areas Boyd Contract Services works within. A listed
            code does not mean the company possesses every possible capability associated with that
            code.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {naics.map((item) => (
              <div
                key={item.code}
                className="flex items-baseline gap-4 rounded-sm border border-border bg-card px-6 py-5"
              >
                <span className="font-display text-xl font-bold tabular-nums">{item.code}</span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
