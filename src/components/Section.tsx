import type { ReactNode } from "react";

export default function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="ibm-plex-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
        {label}
      </h2>
      <ol className="relative flex flex-col gap-8 border-l border-line pl-6">
        {children}
      </ol>
    </section>
  );
}
