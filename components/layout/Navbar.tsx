"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "IA nas empresas", href: "#ia" },
  { label: "Serviços",   href: "#servicos"  },
  { label: "Abordagem",  href: "#abordagem" },
  { label: "Contato",    href: "#contato"   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 640px)");
    function onResize() { if (desktop.matches) setMenuOpen(false); }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

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
        onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
            className="font-bricolage font-light text-[0.75rem] tracking-[0.1em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <div
          ref={menuRef}
          className="sm:hidden"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenuOpen(false);
          }}
        >
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
          <nav
            id="mobile-navigation"
            aria-label="Navegação móvel"
            hidden={!menuOpen}
            className="absolute left-6 right-6 top-full mt-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-4 py-3 font-bricolage text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}