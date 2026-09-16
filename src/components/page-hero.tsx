import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
