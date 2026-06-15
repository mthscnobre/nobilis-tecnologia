"use client";

import { motion } from "motion/react";

const sizes = [
  { px: 512, display: 96, radius: 20, fontSize: 76 },
  { px: 192, display: 56, radius: 12, fontSize: 44 },
  { px: 180, display: 48, radius: 10, fontSize: 38 },
  { px: 32,  display: 28, radius: 6,  fontSize: 22 },
  { px: 16,  display: 18, radius: 4,  fontSize: 14 },
];

export function ManualFavicon() {
  return (
    <section id="favicon" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">06</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Favicon
          </h2>
          <p className="font-outfit font-light text-sm text-[var(--muted)] mt-4 max-w-md mx-auto">
            Letra N em Cinzel Bold, cor <code className="font-mono text-[var(--primary)] text-xs">#C0392B</code>,
            fundo transparente. Cinco tamanhos para diferentes contextos.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-end gap-6 justify-center">
          {sizes.map((s, i) => (
            <motion.div
              key={s.px}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] group-hover:border-[var(--primary)] transition-colors duration-200"
                style={{
                  width: s.display,
                  height: s.display,
                  borderRadius: s.radius,
                }}
              >
                <span
                  className="font-cinzel font-bold text-[var(--primary)] leading-none"
                  style={{ fontSize: s.fontSize * (s.display / s.px) * 1.15 }}
                >
                  N
                </span>
              </motion.div>
              <div className="text-center">
                <div className="font-mono text-[0.65rem] text-[var(--foreground)]">{s.px}px</div>
                <div className="font-outfit text-[0.6rem] text-[var(--muted)] mt-0.5">
                  {s.px === 180 ? "Apple Touch" : s.px === 192 || s.px === 512 ? "Android PWA" : "Browser"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 border border-[var(--border)] rounded-[14px] overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-[var(--surface)] px-4 py-2.5 border-b border-[var(--border)]">
            {["Arquivo", "Tamanho", "Destino"].map(h => (
              <span key={h} className="font-outfit text-[0.65rem] uppercase tracking-[0.08em] text-[var(--muted)] font-semibold">{h}</span>
            ))}
          </div>
          {[
            ["favicon-16.png", "16×16px", "Browser (aba)"],
            ["favicon-32.png", "32×32px", "Browser (alta resolução)"],
            ["apple-touch-icon.png", "180×180px", "iOS — Salvar na tela inicial"],
            ["icon-192.png", "192×192px", "Android PWA"],
            ["icon-512.png", "512×512px", "Android PWA splash"],
          ].map(([file, size, dest], i) => (
            <div
              key={file}
              className="grid grid-cols-3 px-4 py-3 border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface)] transition-colors"
            >
              <span className="font-mono text-[0.75rem] text-[var(--primary)]">{file}</span>
              <span className="font-mono text-[0.75rem] text-[var(--muted)]">{size}</span>
              <span className="font-outfit font-light text-[0.75rem] text-[var(--muted)]">{dest}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
