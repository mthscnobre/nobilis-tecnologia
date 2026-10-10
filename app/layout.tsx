import type { Metadata } from "next";
import { cinzel, bricolage } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollTopButton } from "@/components/layout/ScrollTopButton";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nobilis Tecnologia",
  description: "Implementação de IA e soluções personalizadas, desenvolvimento de software, consultoria e infraestrutura para empresas.",
  keywords: ["inteligência artificial", "implementação de IA", "soluções personalizadas com IA", "desenvolvimento de software", "consultoria em TI", "infraestrutura", "DevOps", "SaaS", "Brasília"],
  authors: [{ name: "Nobilis Tecnologia" }],
  openGraph: {
    title: "Nobilis Tecnologia",
    description: "Implementação de IA e soluções personalizadas, desenvolvimento de software, consultoria e infraestrutura para empresas.",
    url: "https://nobilis.com.br",
    siteName: "Nobilis Tecnologia",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <body className="font-bricolage antialiased overflow-x-hidden">
        <ThemeProvider>
          <div className="relative z-10">
            <NavbarWrapper />
            {children}
          </div>
          <ScrollTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}