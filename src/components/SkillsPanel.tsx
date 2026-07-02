function SkillGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="ibm-plex-mono text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted">
        {label}
      </div>
      <p className="text-sm font-light text-ink/90 leading-relaxed">{value}</p>
    </div>
  );
}

export default function SkillsPanel() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="ibm-plex-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Skills
      </h2>
      <SkillGroup label="Languages" value="Mandarin (native), English (TOEIC 840)" />
      <SkillGroup
        label="Programming"
        value="JavaScript, TypeScript, Python, C/C++, Go, HTML, CSS"
      />
      <SkillGroup
        label="Tech / Frameworks"
        value="React, Next.js, Tailwind CSS, Node.js, Express.js, FastAPI, PostgreSQL, Git, GitHub, Docker, GitHub Actions, Linux, Nginx, Prisma ORM, Cloudflare (R2, DNS, Workers)"
      />
    </div>
  );
}
