"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const correct = [
  "Use NOBILIS em caixa alta com a fonte Cinzel",
  "Use o vermelho #C0392B como cor de acento principal",
  "Mantenha espaço mínimo ao redor do logotipo equivalente à altura da letra B",
  "Use Outfit para todo corpo de texto e interfaces",
  "Aplique sempre o logotipo nas quatro versões previstas",
];

const wrong = [
  "Não use Cinzel em corpo de texto corrido",
  "Não aplique o logotipo sobre fundos com baixo contraste",
  "Não distorça, rotacione ou altere as proporções do logotipo",
  "Não substitua o crimson por tonalidades fora da paleta",
  "Não use o logotipo sobre fundos fotográficos sem overlay",
];

export function ManualRules() {
  return (
    <section id="regras" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">05</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Regras de Uso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Correto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[14px] border border-[var(--border)] border-l-[4px] border-l-[#2ecc71] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#2ecc71]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#2ecc71]" strokeWidth={2.5} />
              </div>
              <span className="font-outfit font-semibold text-[0.7rem] tracking-[0.1em] uppercase text-[#2ecc71]">
                Correto
              </span>
            </div>
            <div className="flex flex-col gap-0">
              {correct.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-2.5 py-2.5 border-b border-[var(--border)] last:border-0"
                >
                  <Check className="w-3.5 h-3.5 text-[#2ecc71] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="font-outfit font-light text-[0.8rem] text-[var(--muted)] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Incorreto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[14px] border border-[var(--border)] border-l-[4px] border-l-[var(--primary)] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                <X className="w-3 h-3 text-[var(--primary)]" strokeWidth={2.5} />
              </div>
              <span className="font-outfit font-semibold text-[0.7rem] tracking-[0.1em] uppercase text-[var(--primary)]">
                Incorreto
              </span>
            </div>
            <div className="flex flex-col gap-0">
              {wrong.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-2.5 py-2.5 border-b border-[var(--border)] last:border-0"
                >
                  <X className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="font-outfit font-light text-[0.8rem] text-[var(--muted)] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
