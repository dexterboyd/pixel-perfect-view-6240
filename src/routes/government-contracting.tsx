import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/government-contracting")({
  head: () => ({
    meta: [
      { title: "Government Contracting | Federal Small Business Contractor" },
      {
        name: "description",
        content:
          "Boyd Contract Services is a SAM.gov-registered small business pursuing federal facilities support, janitorial, grounds, and building service opportunities as prime or subcontractor.",
      },
      { property: "og:title", content: "Government Contracting | Boyd Contract Services" },
      {
        property: "og:description",
        content:
          "Small business positioned to pursue federal facilities support opportunities as a prime contractor or subcontractor.",
      },
    ],
  }),
  component: GovernmentContractingPage,
});

const businessInfo = [
  ["Business Name", "Boyd Contract Services"],
  ["Business Type", "Small Business"],
  ["SAM.gov Registration", "Registered"],
  ["UEI", "FSHUESZVPG29"],
  ["CAGE Code", "[ADD CAGE]"],
  ["Primary Email", "dexter.boyd@boydcontractservices.com"],
  ["Website", "boydcontractservices.com"],
];

const primeInterests = [
  "Facilities support",
  "Janitorial services",
  "Landscaping and grounds maintenance",
  "Building and exterior services",
  "Pressure washing",
  "Window cleaning",
  "General contract-support requirements",
  "Other appropriately matched small-business opportunities",
];

function GovernmentContractingPage() {
  return (
    <>
      <PageHero
        title="Government Contracting"
        description="Boyd Contract Services is positioned to pursue government contracting opportunities as a small business, evaluating each solicitation individually against its capabilities and contract obligations."
      >
        <div className="mt-8">
          <Button asChild variant="accent" size="lg">
            <a href="/capability-statement.pdf" download>
              <FileText />
              Download Federal Capability Statement
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Business Information</h2>
            <dl className="mt-8 divide-y divide-border rounded-sm border border-border bg-card">
              {businessInfo.map(([label, value]) => (
                <div key={label} className="flex flex-wrap justify-between gap-2 px-6 py-4">
                  <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
                  <dd className="text-sm font-semibold break-all">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">Prime Contracting</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Boyd Contract Services is focused on opportunities involving:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {primeInterests.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="/capability-statement.pdf" download>
                  <FileText />
                  Download Capability Statement
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
