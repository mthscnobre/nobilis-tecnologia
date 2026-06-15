"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";

const typeTable = [
  { elem: "Logo NOBILIS",               font: "Cinzel", weight: "700", size: "variável",  spacing: "0.1em"  },
  { elem: "TECNOLOGIA (hero/capa)",     font: "Cinzel", weight: "400", size: "13px+",     spacing: "0.3em"  },
  { elem: "TECNOLOGIA (navbar/footer)", font: "Cinzel", weight: "400", size: "10px",      spacing: "0.26em" },
  { elem: "Títulos de seção",           font: "Cinzel", weight: "700", size: "24–36px",   spacing: "0.08em" },
  { elem: "Eyebrow / label",            font: "Outfit", weight: "500", size: "11px",      spacing: "0.22em" },
  { elem: "Corpo de texto",             font: "Outfit", weight: "300–400", size: "15–16px", spacing: "normal" },
  { elem: "Botões / UI",                font: "Outfit", weight: "500", size: "12–13px",   spacing: "0.1em"  },
];

// Kinetic text — letras animam individualmente ao entrar na viewport
function KineticText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -40 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: char === " " ? "inline" : "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

// Contador de peso de fonte — slider interativo
function WeightSlider() {
  const [weight, setWeight] = useState(400);

  return (
    <div className="p-6 rounded-[12px] bg-[var(--surface-2,#1E1E1E)] border border-[var(--border)] mt-4">
      <div className="flex items-center justify-between mb-3">
        <span className="font-outfit text-[0.65rem] text-[var(--muted)] uppercase tracking-[0.1em]">
          Peso da Fonte
        </span>
        <span className="font-mono text-[0.75rem] text-[var(--primary)]">{weight}</span>
      </div>
      <input
        type="range"
        min={300}
        max={900}
        step={100}
        value={weight}
        onChange={e => setWeight(Number(e.target.value))}
        className="w-full accent-[#C0392B] cursor-pointer"
      />
      <div
        className="mt-4 font-cinzel text-[2rem] text-[var(--foreground)] tracking-[0.08em] transition-all duration-300"
        style={{ fontWeight: weight, lineHeight: 1.1 }}
      >
        NOBILIS TECNOLOGIA
      </div>
      <p className="font-outfit font-light text-[0.75rem] text-[var(--muted)] mt-2 transition-all duration-300"
         style={{ fontWeight: weight }}>
        Outfit {weight} — corpo de texto, UI e comunicação
      </p>
    </div>
  );
}

export function ManualTypography() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section id="tipografia" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Cabeçalho */}
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

        {/* Card Cinzel — Kinetic text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden mb-4"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
          <div className="flex items-center justify-between mb-5">
            <span className="font-outfit text-[0.65rem] text-[var(--muted)] tracking-[0.12em] uppercase">
              Cinzel — Logotipo, títulos, destaques de marca
            </span>
            <div className="flex items-center gap-3">
              <a href="/Cinzel.zip" download className="font-outfit text-[0.65rem] text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                Download ↓
              </a>
              <a href="https://fonts.google.com/specimen/Cinzel?preview.script=Latn" target="_blank" rel="noopener"
                className="font-outfit text-[0.65rem] text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors flex items-center gap-1">
                Google Fonts <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Kinetic heading */}
          <KineticText
            text="NOBILIS TECNOLOGIA"
            className="font-cinzel font-bold text-[2.5rem] text-[var(--foreground)] tracking-[0.06em] leading-tight overflow-hidden"
          />
          <KineticText
            text="Soluções em Tecnologia"
            className="font-cinzel font-semibold text-[1.5rem] text-[var(--foreground)] tracking-[0.08em] mt-2 overflow-hidden"
          />
          <KineticText
            text="DESENVOLVIMENTO · CONSULTORIA · SISTEMAS"
            className="font-cinzel font-normal text-[0.8rem] text-[var(--muted)] tracking-[0.14em] uppercase mt-2 overflow-hidden"
          />

          <div className="text-[0.7rem] text-[var(--muted)] mt-5 pt-3 border-t border-[var(--border)] leading-[1.9] font-outfit">
            H1 · Peso 700 · Tamanho mínimo 24px · Sempre uppercase no logotipo<br />
            H2 · Peso 600 · Títulos de seção e cabeçalhos<br />
            H3 · Peso 400 · Labels, subtítulos, chamadas uppercase
          </div>
        </motion.div>

        {/* Card Outfit — Slider de peso interativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden mb-8"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
          <div className="flex items-center justify-between mb-5">
            <span className="font-outfit text-[0.65rem] text-[var(--muted)] tracking-[0.12em] uppercase">
              Outfit — Corpo de texto, interface, comunicação
            </span>
            <div className="flex items-center gap-3">
              <a href="/Outfit.zip" download className="font-outfit text-[0.65rem] text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                Download ↓
              </a>
              <a href="https://fonts.google.com/specimen/Outfit?preview.script=Latn" target="_blank" rel="noopener"
                className="font-outfit text-[0.65rem] text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors flex items-center gap-1">
                Google Fonts <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <p className="font-outfit font-normal text-[0.95rem] text-[var(--muted)] leading-[1.7]">
            A Nobilis Tecnologia desenvolve sistemas sob medida para empresas que buscam
            eficiência, controle e excelência em seus processos digitais.
          </p>
          <div className="font-outfit font-medium text-[0.8rem] text-[var(--foreground)] tracking-[0.04em] mt-3">
            Dashboard · Relatórios · Exportar · Configurações · Suporte
          </div>

          {/* Slider interativo de peso */}
          <WeightSlider />
        </motion.div>

        {/* Tabela com hover animado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-[var(--border)] rounded-[14px] overflow-hidden"
        >
          <div className="grid grid-cols-5 bg-[var(--surface)] px-4 py-2.5 border-b border-[var(--border)]">
            {["Elemento", "Fonte", "Peso", "Tamanho", "Tracking"].map(h => (
              <span key={h} className="font-outfit text-[0.65rem] uppercase tracking-[0.08em] text-[var(--muted)] font-semibold">{h}</span>
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
              <motion.span
                className="font-mono text-[0.75rem] text-[var(--primary)]"
                animate={{ x: activeRow === i ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {row.font}
              </motion.span>
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