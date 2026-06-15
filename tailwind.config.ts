import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── PALETA NOBILIS (Manual de Identidade Visual v1.0) ──
      colors: {
        // Neutros — Obsidian
        obsidian: {
          900: "#060606",
          800: "#0D0D0D", // fundo principal dark
          700: "#1A1A1A",
          600: "#2A2A2A",
          500: "#3D3D3D",
          400: "#555555", // texto secundário, ícones
          300: "#707070",
          200: "#909090",
          150: "#B8B8B8",
          100: "#D8D8D8",
          50:  "#EEEEEE",
          0:   "#FAF7F7", // fundo principal light
        },
        // Primária — Crimson
        crimson: {
          900: "#2E0000",
          800: "#4A0A06",
          700: "#6B1009",
          600: "#8B1A10", // hover, ênfase secundária
          500: "#A52419",
          400: "#C0392B", // ★ cor primária — CTAs, destaques, links
          300: "#CC5247",
          250: "#D97060",
          200: "#E8695D",
          150: "#F09080",
          100: "#F7BFB5",
          50:  "#FDF0EE", // fundos de alerta
        },
        // Aliases semânticos
        background: "#0D0D0D",
        foreground: "#FAF7F7",
        surface:    "#141414",
        border:     "#262626",
        muted:      "#777777",
        primary: {
          DEFAULT: "#C0392B",
          hover:   "#8B1A10",
          light:   "#FDF0EE",
        },
      },
      // ── TIPOGRAFIA (Manual — Cinzel + Outfit) ──
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      // ── LETTERING ──
      letterSpacing: {
        "cinzel-logo":    "0.10em",
        "cinzel-sub":     "0.28em",
        "cinzel-h2":      "0.08em",
        "cinzel-label":   "0.14em",
        "outfit-ui":      "0.04em",
        "outfit-eyebrow": "0.22em",
        "outfit-btn":     "0.10em",
      },
      // ── BORDER RADIUS ──
      borderRadius: {
        card: "14px",
        btn:  "6px",
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
      },
      // ── ANIMAÇÕES ──
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bar-grow": {
          "0%":   { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.55s ease forwards",
        "fade-in":  "fade-in 0.4s ease forwards",
        "bar-grow": "bar-grow 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
