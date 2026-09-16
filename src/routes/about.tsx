import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, MessageSquare, Users, CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import corridor from "@/assets/facility-corridor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Boyd Contract Services | Small Business Facilities Support" },
      {
        name: "description",
        content:
          "Boyd Contract Services is a small business providing facilities, janitorial, grounds, and contract-support services to government and commercial customers.",
      },
      { property: "og:title", content: "About Boyd Contract Services" },
      {
        property: "og:description",
        content:
          "A small business focused on dependable facilities and building-support services for government and commercial customers.",
      },
    ],
  }),
  component: AboutPage,
});

const approach = [
  { icon: ClipboardCheck, title: "Understand the requirement", text: "Review scope, specifications, and performance standards before committing." },
  { icon: Users, title: "Coordinate the resources", text: "Align the appropriate personnel and qualified service providers for the work." },
  { icon: MessageSquare, title: "Communicate clearly", text: "Keep contracting officers and prime contractors informed throughout performance." },
  { icon: CalendarCheck, title: "Deliver to schedule", text: "Perform according to the applicable contract requirements and timeline." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Boyd Contract Services"
        description="A small business focused on dependable facilities and building-support services for government and commercial customers."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Boyd Contract Services is a small business focused on dependable facilities and
              building-support services for government and commercial customers.
            </p>
            <p>
              The company takes a straightforward approach to contract performance: understand the
              requirement, coordinate the appropriate resources, communicate clearly, and deliver
              according to the applicable contract requirements and schedule.
            </p>
            <p>
              For specialized requirements, Boyd Contract Services can coordinate qualified service
              providers and subcontractors when permitted by the applicable contract.
            </p>
            <p>
              The company is building its contracting portfolio with an emphasis on reliability,
              professional communication, and responsible contract execution.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/capabilities">View Capabilities</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Boyd Contract Services</Link>
              </Button>
            </div>
          </div>

          <img
            src={corridor}
            alt="Clean, well-maintained corridor inside a commercial facility"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full rounded-sm border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">How we work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-sm border border-border bg-card p-6">
                <Icon className="size-5 text-accent" />
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
