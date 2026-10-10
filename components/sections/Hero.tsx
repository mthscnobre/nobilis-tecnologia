"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="section-full flex flex-col items-center justify-center text-center px-6 relative"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <Logo size="hero" variant="dark" />
      </motion.div>

      {/* Tagline */}
      <div className="mt-8 max-w-2xl">
        <TextReveal
          text="Tecnologia que funciona. IA que faz parte da operação."
          as="h1"
          splitBy="words"
          staggerDelay={0.04}
          duration={0.5}
          once
          className="font-bricolage font-semibold text-2xl md:text-3xl leading-relaxed text-[var(--muted)]"
        />
        <p className="mt-5 font-bricolage font-normal text-base leading-relaxed text-[var(--muted)]">
          Implementação de IA e desenvolvimento de soluções personalizadas, com a experiência de quem também constrói sistemas e cuida da infraestrutura.
        </p>
      </div>

      {/* Seta para próxima seção */}
      <motion.a
        href="#stats"
        aria-label="Ver números"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}