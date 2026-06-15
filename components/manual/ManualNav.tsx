"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "logotipo",   label: "01 Logo"    },
  { id: "paleta",     label: "02 Paleta"  },
  { id: "tipografia", label: "03 Tipo"    },
  { id: "aplicacoes", label: "04 Aplic."  },
  { id: "regras",     label: "05 Regras"  },
  { id: "favicon",    label: "06 Favicon" },
];

export function ManualNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", v => setScrolled(v > 40)), [scrollY]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 transition-all duration-300",
        scrolled ? "navbar-blur" : "bg-transparent"
      )}
    >
      {/* Voltar ao site */}
      <Link
        href="/"
        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={1.5} />
        <span className="font-outfit text-[0.7rem] tracking-[0.1em] uppercase">Site</span>
      </Link>

      {/* Âncoras das seções */}
      <nav className="hidden md:flex items-center gap-1">
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              "px-3 py-1 rounded-full font-outfit text-[0.65rem] tracking-[0.08em] uppercase transition-all duration-200",
              active === s.id
                ? "bg-[var(--primary)] text-[var(--primary-fg)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            )}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <ThemeSwitcher />
    </motion.header>
  );
}