"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy } from "lucide-react";

const obsidian = [
  { hex: "#060606", name: "900", light: false },
  { hex: "#0D0D0D", name: "800", light: false, star: true },
  { hex: "#1A1A1A", name: "700", light: false },
  { hex: "#2A2A2A", name: "600", light: false },
  { hex: "#3D3D3D", name: "500", light: false },
  { hex: "#555555", name: "400", light: false },
  { hex: "#707070", name: "300", light: true  },
  { hex: "#909090", name: "200", light: true  },
  { hex: "#D8D8D8", name: "100", light: true  },
  { hex: "#FAF7F7", name: "0",   light: true, star: true },
];

const crimson = [
  { hex: "#2E0000", name: "900", light: false },
  { hex: "#4A0A06", name: "800", light: false },
  { hex: "#6B1009", name: "700", light: false },
  { hex: "#8B1A10", name: "600", light: false },
  { hex: "#A52419", name: "500", light: false },
  { hex: "#C0392B", name: "400★", light: false, star: true },
  { hex: "#CC5247", name: "300", light: true  },
  { hex: "#E8695D", name: "200", light: true  },
  { hex: "#F7BFB5", name: "100", light: true  },
  { hex: "#FDF0EE", name: "50",  light: true  },
];

const tokens = [
  { token: "crimson-400 ★", hex: "#C0392B", uso: "Cor primária — CTAs, destaques, links" },
  { token: "crimson-600",   hex: "#8B1A10", uso: "Estados hover, ênfase secundária" },
  { token: "crimson-50",    hex: "#FDF0EE", uso: "Fundos de alerta, backgrounds suaves" },
  { token: "obsidian-800",  hex: "#0D0D0D", uso: "Fundo principal dark, logotipo" },
  { token: "obsidian-0",    hex: "#FAF7F7", uso: "Fundo principal light, textos sobre dark" },
  { token: "obsidian-400",  hex: "#555555", uso: "Texto secundário, ícones" },
];

type SwatchItem = { hex: string; name: string; light: boolean; star?: boolean };

function Swatch({ hex, name, light, star }: SwatchItem) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, [hex]);

  const fg = light ? "#111111" : "#FFFFFF";

  return (
    <motion.div
      title={`${hex} — clique para copiar`}
      onClick={copy}
      className="relative cursor-pointer"
      style={{ flex: 1, height: "56px" }}
      whileHover={{ scaleY: 1.2, scaleX: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {/* Cor de fundo */}
      <div
        className="absolute inset-0"
        style={{
          background: hex,
          outline: star ? `2px solid ${fg}` : "none",
          outlineOffset: "-3px",
        }}
      />

      {/* Check ao copiar */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: hex, zIndex: 2 }}
          >
            <Check strokeWidth={2.5} style={{ color: fg, width: 16, height: 16 }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nome no hover */}
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute bottom-1.5 left-0 right-0 text-center text-[9px] font-mono font-bold"
        style={{ color: fg, zIndex: 3 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

function SwatchRow({ swatches, label }: { swatches: SwatchItem[]; label: string }) {
  return (
    <div className="mb-8">
      <p className="font-outfit text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)] mb-3">
        {label}
      </p>
      <div className="flex w-full rounded-[10px] overflow-hidden" style={{ height: "56px" }}>
        {swatches.map(s => <Swatch key={s.hex} {...s} />)}
      </div>
    </div>
  );
}

export function ManualPalette() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section id="paleta" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">02</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Paleta de Cores
          </h2>
          <p className="font-outfit font-light text-sm text-[var(--muted)] mt-4">
            Passe o mouse para expandir · Clique para copiar o hex
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SwatchRow swatches={obsidian} label="Neutros — Obsidian" />
          <SwatchRow swatches={crimson}  label="Primária — Crimson" />
        </motion.div>

        {/* Tabela de tokens */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 border border-[var(--border)] rounded-[14px] overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-[var(--surface)] px-4 py-2.5 border-b border-[var(--border)]">
            {["Token", "Hex", "Uso principal"].map(h => (
              <span key={h} className="font-outfit text-[0.65rem] uppercase tracking-[0.08em] text-[var(--muted)] font-semibold">
                {h}
              </span>
            ))}
          </div>
          {tokens.map((t, i) => (
            <motion.div
              key={t.token}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="grid grid-cols-3 px-4 py-3 border-b border-[var(--border)] last:border-0 transition-colors cursor-default group"
              style={{ background: activeRow === i ? "var(--surface)" : "transparent" }}
            >
              <span className="font-mono text-[0.75rem] text-[var(--foreground)]">{t.token}</span>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-4 h-4 rounded-full flex-shrink-0 ring-1 ring-[var(--border)]"
                  style={{ background: t.hex }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <span className="font-mono text-[0.75rem] text-[var(--primary)]">{t.hex}</span>
                <button
                  onClick={() => navigator.clipboard?.writeText(t.hex)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  title={`Copiar ${t.hex}`}
                >
                  <Copy className="w-3 h-3 text-[var(--muted)]" strokeWidth={1.5} />
                </button>
              </div>
              <span className="font-outfit font-light text-[0.75rem] text-[var(--muted)]">{t.uso}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}