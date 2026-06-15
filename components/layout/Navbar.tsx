"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Serviços",   href: "#servicos"  },
  { label: "Abordagem",  href: "#abordagem" },
  { label: "Contato",    href: "#contato"   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "px-6 md:px-10 h-16",
        "transition-all duration-300",
        scrolled ? "navbar-blur" : "bg-transparent border-transparent"
      )}
    >
      {/* Logo compacta — âncora topo */}
      <Link
        href="#top"
        className="flex flex-col items-start leading-none group"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        <span
          className="font-cinzel font-bold text-sm tracking-[0.1em] text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-200 uppercase"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          NOBILIS
        </span>
        <span
          className="font-cinzel font-normal text-[0.48rem] tracking-[0.26em] text-[var(--primary)] uppercase"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          TECNOLOGIA
        </span>
      </Link>

      {/* Links centrais */}
      <nav className="hidden sm:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-outfit font-light text-[0.75rem] tracking-[0.1em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* ThemeSwitcher */}
      <ThemeSwitcher />
    </motion.header>
  );
}