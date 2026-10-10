"use client";

import { motion } from "motion/react";

export function AI() {
  return (
    <section id="ia" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">IA na prática</span>
          <h2 className="font-bricolage font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            IA sob medida para o seu negócio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[14px] border border-[var(--border)] border-l-2 border-l-[var(--primary)] bg-[var(--surface)] p-6 md:p-8"
        >
          <p className="font-bricolage font-normal text-base text-[var(--muted)] leading-relaxed">
            Implementamos o uso de inteligência artificial em empresas e desenvolvemos
            soluções personalizadas para os seus processos. Da identificação de
            oportunidades à integração com as ferramentas da operação.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-bricolage text-sm leading-relaxed text-[var(--foreground)]">
            <li>
              <h3 className="font-medium mb-2">Assistentes personalizados</h3>
              <p className="text-[var(--muted)]">Assistentes conectados ao conhecimento da empresa para apoiar o trabalho diário das equipes.</p>
            </li>
            <li>
              <h3 className="font-medium mb-2">Automação de processos</h3>
              <p className="text-[var(--muted)]">IA aplicada a tarefas repetitivas e à análise de documentos, com revisão humana onde necessário.</p>
            </li>
            <li>
              <h3 className="font-medium mb-2">Integração com sistemas</h3>
              <p className="text-[var(--muted)]">Funcionalidades de IA sob medida, integradas às ferramentas já utilizadas pela operação.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
