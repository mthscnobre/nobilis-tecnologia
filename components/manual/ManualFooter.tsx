"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function ManualFooter() {
  return (
    <footer className="pb-10 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div
          className="h-px mb-8"
          style={{
            background: "linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)",
          }}
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + origem */}
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
            <p className="font-outfit font-light text-[0.7rem] text-[var(--muted)] mt-2 max-w-[260px] text-center md:text-left leading-relaxed">
              Em latim, Nobilis. Em português, Nobre.<br />
              Uma homenagem ao sobrenome do fundador.
            </p>
          </div>

          {/* Centro — info do manual */}
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="font-cinzel font-semibold text-[0.7rem] tracking-[0.1em] text-[var(--foreground)] uppercase">
              Manual de Identidade Visual
            </span>
            <span className="font-outfit font-light text-[0.65rem] text-[var(--muted)]">
              Versão 1.0 · 2026 · Uso interno
            </span>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="/Cinzel.zip"
                download
                className="font-outfit text-[0.65rem] text-[var(--muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-1"
              >
                Cinzel ↓
              </a>
              <span className="text-[var(--border)]">·</span>
              <a
                href="/Outfit.zip"
                download
                className="font-outfit text-[0.65rem] text-[var(--muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-1"
              >
                Outfit ↓
              </a>
            </div>
          </div>

          {/* Direita — voltar ao site */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-[0.7rem] font-outfit tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-200 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.5} />
              Voltar ao site
            </Link>
            <span className="text-[var(--muted)] text-xs font-light tracking-wide">
              © 2026 Nobilis Tecnologia
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}