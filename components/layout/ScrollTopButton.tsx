"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronUp } from "lucide-react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center transition-colors duration-200 shadow-sm"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ChevronUp className="w-4 h-4" strokeWidth={1.5} />
    </motion.button>
  );
}