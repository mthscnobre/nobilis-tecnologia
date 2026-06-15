"use client";

import { motion } from "motion/react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { ScrambleText } from "@/components/unlumen-ui/scramble-text";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface Section { id: string; label: string }

export function ManualHero({ sections }: { sections: Section[] }) {
  return (
    <section className="section-full flex flex-col items-center justify-center text-center px-6 relative">

      {/* Eyebrow com ScrambleText */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <ScrambleText
          text="IDENTIDADE VISUAL · V1.0 · 2026"
          autoStart
          delay={400}
          scrambleSpeed={35}
          scrambledLetterCount={3}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ·"
          className="text-[var(--primary)] font-cinzel text-[0.65rem] tracking-[0.3em]"
          scrambledClassName="text-[var(--muted-subtle)] font-cinzel text-[0.65rem] tracking-[0.3em]"
        />
      </motion.div>

      {/* Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        className="mt-6"
      >
        <div className="font-cinzel font-bold text-[clamp(3rem,10vw,7rem)] tracking-[0.1em] text-[var(--foreground)] leading-none">
          NOBILIS
        </div>
        <div className="font-cinzel font-normal text-[clamp(0.85rem,2vw,1.1rem)] tracking-[0.3em] text-[var(--primary)] uppercase mt-3">
          TECNOLOGIA
        </div>
      </motion.div>

      {/* Tagline */}
      <div className="mt-10 max-w-md">
        <TextReveal
          text="Manual de Identidade Visual — guia completo de uso da marca."
          as="p"
          splitBy="words"
          staggerDelay={0.04}
          duration={0.5}
          once
          className="font-outfit font-light text-sm md:text-base leading-relaxed text-[var(--muted)]"
        />
      </div>

      {/* Nav âncoras das seções */}
      <motion.nav
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-10 flex flex-wrap gap-3 justify-center"
      >
        {sections.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + i * 0.08 }}
          >
            <Link
              href={`#${s.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--border)] text-[0.65rem] font-outfit tracking-[0.1em] uppercase text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-200"
            >
              <span className="text-[var(--primary)] opacity-60">0{sections.indexOf(s) + 1}</span>
              {s.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Seta */}
      <motion.a
        href="#logotipo"
        aria-label="Ver conteúdo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
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
