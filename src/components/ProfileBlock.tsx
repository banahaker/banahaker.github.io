import logo_bana from "../assets/logo_bana.png";

export default function ProfileBlock() {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={logo_bana}
        alt="Lazp's avatar"
        className="rounded-full w-24 h-24 border border-line"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-ink leading-tight">
          Lazp Yeh{" "}
          <span className="text-lg font-normal text-muted">(Pochen Yeh)</span>
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Student · Co-founder &amp; COO, Lazco
        </p>
      </div>
      <div className="flex flex-col gap-1.5 ibm-plex-mono text-sm">
        <a href="mailto:lazpytb@gmail.com">lazpytb@gmail.com</a>
        <span className="text-muted">Discord: lazp.tw</span>
        <a href="/Resume.pdf" target="_blank" rel="noreferrer">
          Resume (PDF) ↧
        </a>
      </div>
    </div>
  );
}
