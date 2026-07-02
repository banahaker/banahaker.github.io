import type { ReactNode } from "react";

export default function TimelineItem({
  title,
  meta,
  description,
  contents,
  children,
}: {
  title: string;
  meta?: string;
  description?: string;
  contents?: string[];
  children?: ReactNode;
}) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute left-[calc(-1.5rem-0.5px)] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-[var(--color-page)]"
      />
      <h3 className="text-base font-semibold text-ink leading-snug">{title}</h3>
      {meta && <div className="ibm-plex-mono text-xs text-muted mt-1">{meta}</div>}
      {description && (
        <p className="mt-3 text-[0.95rem] font-normal text-ink/90 leading-relaxed">
          {description}
        </p>
      )}
      {contents && contents.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2 list-disc pl-5 text-[0.95rem] font-normal text-ink/90 leading-relaxed marker:text-muted">
          {contents.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      )}
      {children}
    </li>
  );
}
