"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { GlowingBadge } from "@/components/unlumen-ui/glowing-badge";

const variants = [
  {
    bg: "#0D0D0D", border: "#1E1E1E",
    wordColor: "#F0EDED", subColor: "#C0392B",
    label: "Versão principal", caption: "Fundo escuro",
    badge: "Primária", badgeVariant: "success" as const,
  },
  {
    bg: "#FAF7F7", border: "#E0DDDA",
    wordColor: "#1A0A0A", subColor: "#8B1A10",
    label: "Versão light", caption: "Fundo claro",
    badge: "Light", badgeVariant: "info" as const,
  },
  {
    bg: "#C0392B", border: "transparent",
    wordColor: "#FAF7F7", subColor: "rgba(255,255,255,0.7)",
    label: "Versão crimson", caption: "Sobre vermelho",
    badge: "Crimson", badgeVariant: "error" as const,
  },
  {
    bg: "#F0EDED", border: "#D8D8D8",
    wordColor: "#C0392B", subColor: "#8B1A10",
    label: "Versão acento", caption: "Vermelho sobre claro",
    badge: "Acento", badgeVariant: "warning" as const,
  },
];

export function ManualLogo() {
  return (
    <section id="logotipo" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">01</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Logotipo
          </h2>
          <p className="font-outfit font-light text-sm text-[var(--muted)] mt-4 max-w-md mx-auto leading-relaxed">
            O wordmark NOBILIS é sempre em Cinzel 700. O subtítulo TECNOLOGIA em Cinzel 400.
            Quatro variantes conforme o contexto de aplicação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {variants.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tilt
                rotationFactor={6}
                springOptions={{ stiffness: 200, damping: 20 }}
                className="rounded-[14px] p-8 min-h-[160px] flex flex-col justify-between cursor-default"
                style={{ background: v.bg, border: `1px solid ${v.border}` }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div
                      className="font-cinzel font-bold text-2xl tracking-[0.1em] leading-none"
                      style={{ color: v.wordColor }}
                    >
                      NOBILIS
                    </div>
                    <div
                      className="font-cinzel font-normal text-[0.6rem] tracking-[0.26em] uppercase mt-2"
                      style={{ color: v.subColor }}
                    >
                      TECNOLOGIA
                    </div>
                  </div>
                  <GlowingBadge variant={v.badgeVariant} pulse={false} dot={false}>
                    {v.badge}
                  </GlowingBadge>
                </div>
                <div className="mt-4">
                  <div className="font-outfit font-medium text-xs" style={{ color: v.wordColor, opacity: 0.6 }}>
                    {v.label}
                  </div>
                  <div className="font-outfit font-light text-xs mt-0.5" style={{ color: v.wordColor, opacity: 0.4 }}>
                    {v.caption}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Regra tipográfica */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { label: "NOBILIS", spec: "Cinzel 700 · tracking 0.1em · uppercase" },
            { label: "TECNOLOGIA (hero)", spec: "Cinzel 400 · tracking 0.3em · uppercase" },
            { label: "TECNOLOGIA (navbar/footer)", spec: "Cinzel 400 · tracking 0.26em · uppercase" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="border border-[var(--border)] rounded-[10px] px-4 py-3 bg-[var(--surface)] shimmer-card animate"
            >
              <div className="font-cinzel font-bold text-xs tracking-wide text-[var(--foreground)] mb-1">
                {item.label}
              </div>
              <div className="font-mono font-light text-[0.7rem] text-[var(--muted)]">
                {item.spec}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}