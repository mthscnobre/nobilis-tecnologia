"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
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

// Item com line-draw no separador
function RuleItem({
  text, icon, color, delay,
}: {
  text: string; icon: React.ReactNode; color: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, x: color === "#2ecc71" ? -12 : 12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-start gap-2.5 py-2.5"
      >
        <div className="mt-0.5 flex-shrink-0" style={{ color }}>
          {icon}
        </div>
        <span className="font-outfit font-light text-[0.8rem] text-[var(--muted)] leading-snug">
          {text}
        </span>
      </motion.div>

      {/* Separador que se desenha */}
      <div className="relative h-px overflow-hidden">
        <div className="absolute inset-0 bg-[var(--border)]" style={{ opacity: 0.5 }} />
        <motion.div
          className="absolute inset-0"
          style={{ background: color, opacity: 0.3 }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.15, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function RuleCard({
  items, label, icon, color, borderColor,
}: {
  items: string[];
  label: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 relative overflow-hidden"
      style={{ borderLeft: `4px solid ${borderColor}` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <span
          className="font-outfit font-semibold text-[0.7rem] tracking-[0.1em] uppercase"
          style={{ color }}
        >
          {label}
        </span>
      </div>

      {/* Itens */}
      <div>
        {items.map((item, i) => (
          <RuleItem
            key={item}
            text={item}
            icon={
              color === "#2ecc71"
                ? <Check className="w-3.5 h-3.5" strokeWidth={2} />
                : <X className="w-3.5 h-3.5" strokeWidth={2} />
            }
            color={color}
            delay={i * 0.07}
          />
        ))}
      </div>
    </motion.div>
  );
}

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
          <RuleCard
            items={correct}
            label="Correto"
            icon={<Check className="w-3 h-3" strokeWidth={2.5} />}
            color="#2ecc71"
            borderColor="#2ecc71"
          />
          <RuleCard
            items={wrong}
            label="Incorreto"
            icon={<X className="w-3 h-3" strokeWidth={2.5} />}
            color="#C0392B"
            borderColor="#C0392B"
          />
        </div>
      </div>
    </section>
  );
}