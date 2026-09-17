import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Globe } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Boyd Contract Services | Facilities Support Inquiries" },
      {
        name: "description",
        content:
          "Contact Boyd Contract Services about facilities support, janitorial, grounds, building services, and government contracting or subcontracting opportunities.",
      },
      { property: "og:title", content: "Contact Boyd Contract Services" },
      {
        property: "og:description",
        content:
          "Send an inquiry about facilities support, contract-support services, or subcontracting opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "dexter.boyd@boydcontractservices.com";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company/Agency: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Opportunity/Project: ${data.get("opportunity")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Inquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Boyd Contract Services"
        description="Send details about your requirement, solicitation, or subcontracting opportunity and we will respond with a clear next step."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company / Agency" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <Field label="Opportunity / Project" name="opportunity" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-7">
              Submit Inquiry
            </Button>
            {sent && (
              <p className="mt-4 text-sm text-muted-foreground">
                Your email application should now be open with the inquiry ready to send. If it did
                not open, email{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                .
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="rounded-sm border border-border bg-surface p-8">
              <h2 className="text-lg font-bold tracking-tight">Direct Contact</h2>
              <div className="mt-5 space-y-4 text-sm">
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-accent" />
                  <a className="underline-offset-4 hover:underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </p>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <Globe className="mt-0.5 size-4 text-accent" />
                  boydcontractservices.com
                </p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Contracting inquiries may also be sent to contracts@boydcontractservices.com
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}
