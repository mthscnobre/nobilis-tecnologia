"use client";

import { motion } from "motion/react";
import { Tilt } from "@/components/unlumen-ui/tilt";

export function ManualApplications() {
  return (
    <section id="aplicacoes" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">04</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Aplicações
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Cartão de visita */}
          <div>
            <p className="font-outfit text-[0.7rem] text-[var(--muted)] uppercase tracking-[0.1em] mb-3">Cartão de visita</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Tilt
                rotationFactor={8}
                springOptions={{ stiffness: 180, damping: 18 }}
                className="rounded-[16px] p-8 flex flex-col justify-between relative overflow-hidden"
                style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", minHeight: "220px" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0392B]" />
                <div>
                  <div className="font-cinzel font-semibold text-base text-[#F0EDED] tracking-[0.07em]">
                    Matheus Chaves Nobre
                  </div>
                  <div className="font-outfit text-[0.7rem] text-[#C0392B] tracking-[0.1em] uppercase mt-1">
                    Desenvolvedor &amp; Consultor de TI
                  </div>
                  <div className="font-outfit text-[0.7rem] text-[#777] mt-5 leading-[1.9]">
                    matheus@nobilis.com.br<br />
                    nobilistecnologia.com.br<br />
                    Brasília, DF
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <div>
                    <div className="font-cinzel font-bold text-xl text-[#F0EDED] tracking-[0.1em]">NOBILIS</div>
                    <div className="font-cinzel font-normal text-[0.45rem] text-[#C0392B] tracking-[0.22em] uppercase mt-1 text-right">
                      Tecnologia
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>

          {/* Assinatura de e-mail */}
          <div>
            <p className="font-outfit text-[0.7rem] text-[var(--muted)] uppercase tracking-[0.1em] mb-3">Assinatura de e-mail</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Tilt
                rotationFactor={8}
                springOptions={{ stiffness: 180, damping: 18 }}
                className="rounded-[16px] p-8 flex flex-col justify-between relative overflow-hidden border border-[var(--border)]"
                style={{ background: "var(--surface)", minHeight: "220px", borderLeft: "4px solid #C0392B" }}
              >
                <div>
                  <div className="font-cinzel font-bold text-lg text-[var(--foreground)] tracking-[0.06em]">
                    Matheus Chaves Nobre
                  </div>
                  <div className="font-outfit text-[0.7rem] text-[#C0392B] tracking-[0.1em] uppercase mt-1">
                    Desenvolvedor · Consultor de TI
                  </div>
                  <div className="border-t border-[var(--border)] my-4" />
                  <div className="font-cinzel text-[0.75rem] text-[var(--muted)] tracking-[0.1em]">
                    NOBILIS TECNOLOGIA
                  </div>
                  <div className="font-outfit text-[0.75rem] text-[var(--muted)] mt-2 leading-[1.9]">
                    matheus@nobilis.com.br<br />
                    nobilistecnologia.com.br<br />
                    Brasília, DF
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}