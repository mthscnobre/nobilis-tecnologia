import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  variant?: "dark" | "light" | "red" | "accent";
}

// Tamanhos conforme Manual de Identidade Visual v1.0
// Capa: NOBILIS 56px / Tecnologia 13px tracking 0.3em
// Logos: NOBILIS 32px / Tecnologia 10px tracking 0.26em
const sizeMap = {
  sm:   { wordmark: "text-base",                                   sub: "text-[0.6rem]  mt-1"   },
  md:   { wordmark: "text-xl",                                     sub: "text-[0.65rem] mt-1.5" },
  lg:   { wordmark: "text-3xl",                                    sub: "text-[0.75rem] mt-2"   },
  hero: { wordmark: "text-[clamp(2.2rem,6vw,3.8rem)]",            sub: "text-[clamp(0.85rem,1.8vw,1.1rem)] mt-3" },
};

const variantMap = {
  dark:   { wordmark: "text-[var(--foreground)]",      sub: "text-[var(--primary)]"       },
  light:  { wordmark: "text-[#1A0A0A]",                sub: "text-[var(--primary)]"       },
  red:    { wordmark: "text-[#FAF7F7]",                sub: "text-[rgba(255,255,255,0.7)]"},
  accent: { wordmark: "text-[var(--primary)]",         sub: "text-[var(--primary-hover)]" },
};

export function Logo({ size = "md", variant = "dark", className }: LogoProps) {
  const s = sizeMap[size];
  const v = variantMap[variant];

  return (
    <div className={cn("flex flex-col items-center", className)} style={{ padding: "1.5em" }}>
      {/* NOBILIS — Cinzel 700, tracking 0.1em */}
      <span
        className={cn("font-cinzel font-bold tracking-[0.1em] uppercase leading-none", s.wordmark, v.wordmark)}
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        NOBILIS
      </span>
      {/* TECNOLOGIA — Cinzel 400, tracking 0.3em conforme manual */}
      <span
        className={cn("font-cinzel font-normal tracking-[0.3em] uppercase block text-center", s.sub, v.sub)}
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        TECNOLOGIA
      </span>
    </div>
  );
}