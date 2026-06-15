"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { ExternalLink } from "lucide-react";

const typeTable = [
  { elem: "Logo NOBILIS",                  font: "Cinzel", weight: "700", size: "variável",  spacing: "0.1em"  },
  { elem: "TECNOLOGIA (hero/capa)",        font: "Cinzel", weight: "400", size: "13px+",    spacing: "0.3em"  },
  { elem: "TECNOLOGIA (navbar/footer)",    font: "Cinzel", weight: "400", size: "10px",     spacing: "0.26em" },
  { elem: "Títulos de seção",              font: "Cinzel", weight: "700", size: "24–36px",  spacing: "0.08em" },
  { elem: "Eyebrow / label",              font: "Outfit", weight: "500", size: "11px",     spacing: "0.22em" },
  { elem: "Corpo de texto",               font: "Outfit", weight: "300–400", size: "15–16px", spacing: "normal" },
  { elem: "Botões / UI",                  font: "Outfit", weight: "500", size: "12–13px",  spacing: "0.1em"  },
];

const samples = [
  {
    tag: "Cinzel — Logotipo, títulos, destaques de marca",
    font: "Google Fonts — Cinzel",
    url: "https://fonts.google.com/specimen/Cinzel?preview.script=Latn",
    download: "/Cinzel.zip",
    children: (
      <>
        <div className="font-cinzel font-bold text-[2.5rem] text-[var(--foreground)] tracking-[0.06em] leading-tight">
          NOBILIS TECNOLOGIA
        </div>
        <div className="font-cinzel font-semibold text-[1.5rem] text-[var(--foreground)] tracking-[0.08em] mt-2">
          Soluções em Tecnologia
        </div>
        <div className="font-cinzel font-normal text-[0.875rem] text-[var(--muted)] tracking-[0.14em] uppercase mt-2">
          Desenvolvimento · Consultoria · Sistemas
        </div>
        <div className="text-[0.7rem] text-[var(--subtle)] mt-4 pt-3 border-t border-[var(--border)] leading-[1.8]">
          H1 · Peso 700 · Tamanho mínimo 24px · Sempre uppercase no logotipo<br/>
          H2 · Peso 600 · Títulos de seção e cabeçalhos<br/>
          H3 · Peso 400 · Labels, subtítulos, chamadas uppercase
        </div>
      </>
    ),
  },
  {
    tag: "Outfit — Corpo de texto, interface, comunicação",
    font: "Google Fonts — Outfit",
    url: "https://fonts.google.com/specimen/Outfit?preview.script=Latn",
    download: "/Outfit.zip",
    children: (
      <>
        <TextReveal
          text="A Nobilis Tecnologia desenvolve sistemas sob medida para empresas que buscam eficiência, controle e excelência em seus processos digitais."
          as="p"
          splitBy="words"
          staggerDelay={0.025}
          duration={0.4}
          once
          className="font-outfit font-normal text-[0.95rem] text-[var(--muted)] leading-[1.7]"
        />
        <div className="font-outfit font-medium text-[0.8rem] text-[var(--foreground)] tracking-[0.04em] mt-3">
          Dashboard · Relatórios · Exportar · Configurações · Suporte
        </div>
        <div className="text-[0.7rem] text-[var(--subtle)] mt-4 pt-3 border-t border-[var(--border)] leading-[1.8]">
          Body · Peso 400 · 15–16px · Interline 1.6–1.7<br/>
          UI Labels · Peso 500 · 12–14px · Interline 1.4<br/>
          Legendas · Peso 300 · 11–12px
        </div>
      </>
    ),
  },
];

export function ManualTypography() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section id="tipografia" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">03</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Tipografia
          </h2>
        </motion.div>

        {/* Cards de amostra */}
        <div className="flex flex-col gap-4 mb-10">
          {samples.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-outfit text-[0.65rem] text-[var(--muted)] tracking-[0.12em] uppercase">
                  {s.tag}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={s.download}
                    download
                    className="font-outfit text-[0.65rem] text-[var(--muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-1"
                  >
                    Download
                  </a>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="font-outfit text-[0.65rem] text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors flex items-center gap-1"
                  >
                    {s.font} <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
              {s.children}
            </motion.div>
          ))}
        </div>

        {/* Tabela interativa */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-[var(--border)] rounded-[14px] overflow-hidden"
        >
          <div className="grid grid-cols-5 bg-[var(--surface)] px-4 py-2.5 border-b border-[var(--border)]">
            {["Elemento", "Fonte", "Peso", "Tamanho", "Tracking"].map(h => (
              <span key={h} className="font-outfit text-[0.65rem] uppercase tracking-[0.08em] text-[var(--muted)] font-semibold">
                {h}
              </span>
            ))}
          </div>
          {typeTable.map((row, i) => (
            <motion.div
              key={row.elem}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              className="grid grid-cols-5 px-4 py-3 border-b border-[var(--border)] last:border-0 transition-colors cursor-default"
              style={{ background: activeRow === i ? "var(--surface)" : "transparent" }}
            >
              <span className="font-outfit font-light text-[0.75rem] text-[var(--foreground)]">{row.elem}</span>
              <span className="font-mono text-[0.75rem] text-[var(--primary)]">{row.font}</span>
              <span className="font-mono text-[0.75rem] text-[var(--muted)]">{row.weight}</span>
              <span className="font-mono text-[0.75rem] text-[var(--muted)]">{row.size}</span>
              <span className="font-mono text-[0.75rem] text-[var(--muted)]">{row.spacing}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
