// Layout específico do manual — substitui o layout raiz para /manual
// Não inclui o Navbar do site nem o ScrollTopButton
import type { Metadata } from "next";
import { cinzel, outfit } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollTopButton } from "@/components/layout/ScrollTopButton";
import "../globals.css";

export default function ManualLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cinzel.variable} ${outfit.variable}`}>
      <ThemeProvider>
        {children}
        <ScrollTopButton />
      </ThemeProvider>
    </div>
  );
}