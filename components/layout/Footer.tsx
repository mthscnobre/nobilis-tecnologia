export function Footer() {
  return (
    <footer className="pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)",
          }}
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + origem do nome */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="font-cinzel font-bold text-[var(--foreground)] text-base tracking-[0.1em] uppercase"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              NOBILIS
            </span>
            <span
              className="font-cinzel font-normal text-[var(--primary)] text-[0.6rem] tracking-[0.26em] uppercase"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              TECNOLOGIA
            </span>
            <p className="font-outfit font-light text-[0.7rem] text-[var(--muted)] mt-2 max-w-[240px] text-center md:text-left leading-relaxed">
              Em latim, Nobilis. Em português, Nobre.
Uma homenagem ao sobrenome do fundador.
            </p>
            <a
              href="/manual"
              className="font-outfit font-light text-[0.65rem] tracking-[0.1em] uppercase text-[var(--muted-subtle)] hover:text-[var(--primary)] transition-colors duration-200 mt-1"
            >
              Manual de Identidade Visual ↗
            </a>
          </div>

          <p className="text-[var(--muted)] text-xs font-light tracking-wide">
            Brasília, DF — Brasil
          </p>

          <p className="text-[var(--muted)] text-xs font-light tracking-wide">
            © 2026 Nobilis Tecnologia
          </p>

        </div>
      </div>
    </footer>
  );
}