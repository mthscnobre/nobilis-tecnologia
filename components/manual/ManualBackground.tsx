"use client";

import { useEffect, useRef } from "react";

// Gradientes que "respiram" — duas manchas de cor pulsando lentamente
// Crimson muito diluído + obsidian quente — elegante e alinhado à marca
export function ManualBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;

      // Mancha 1 — crimson diluído, canto superior direito, pulsa lentamente
      const x1 = W * (0.75 + Math.sin(t * 0.7) * 0.08);
      const y1 = H * (0.20 + Math.cos(t * 0.5) * 0.06);
      const r1 = W * (0.45 + Math.sin(t * 0.3) * 0.05);
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
      g1.addColorStop(0, "rgba(192, 57, 43, 0.055)");
      g1.addColorStop(1, "rgba(192, 57, 43, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      // Mancha 2 — warm obsidian, canto inferior esquerdo, movimento oposto
      const x2 = W * (0.20 + Math.cos(t * 0.6) * 0.07);
      const y2 = H * (0.75 + Math.sin(t * 0.4) * 0.08);
      const r2 = W * (0.50 + Math.cos(t * 0.35) * 0.04);
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
      g2.addColorStop(0, "rgba(139, 26, 16, 0.04)");
      g2.addColorStop(1, "rgba(139, 26, 16, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      // Mancha 3 — muito sutil ao centro, respira com período mais longo
      const x3 = W * 0.5;
      const y3 = H * 0.5;
      const r3 = W * (0.55 + Math.sin(t * 0.2) * 0.06);
      const g3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, r3);
      g3.addColorStop(0, "rgba(192, 57, 43, 0.018)");
      g3.addColorStop(1, "rgba(192, 57, 43, 0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, W, H);

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
}