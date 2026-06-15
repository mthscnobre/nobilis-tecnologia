"use client";

import { motion } from "motion/react";

const pillars = [
  {
    number: "01",
    title: "Expertise sem camadas",
    description:
      "Execução por especialistas. Cada projeto é conduzido com domínio técnico real — sem repassar para quem não conhece o problema.",
  },
  {
    number: "02",
    title: "Documentação real",
    description:
      "Cada entrega vem acompanhada de documentação que o cliente compreende. Você sabe exatamente o que foi feito e por quê.",
  },
  {
    number: "03",
    title: "Seu sistema, suas regras",
    description:
      "O que construímos é seu ativo. O código pertence ao cliente — sem lock-in, sem dependência de fornecedor.",
  },
];

export function Approach() {
  return (
    <section id="abordagem" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-3">Princípios</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Como trabalhamos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="pillar-card"
            >
              <span className="font-cinzel text-[var(--primary)] text-xs tracking-[0.2em] block mb-3">
                {pillar.number}
              </span>
              <h3 className="font-cinzel font-semibold text-[var(--foreground)] text-base tracking-[0.04em] mb-3 uppercase">
                {pillar.title}
              </h3>
              {/* Texto justificado conforme solicitado */}
              <p className="font-outfit font-light text-[0.875rem] text-[var(--muted)] leading-[1.7] text-justify">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}