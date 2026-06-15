import type { Metadata } from "next";
import { cinzel, outfit } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollTopButton } from "@/components/layout/ScrollTopButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nobilis Tecnologia",
  description: "Sistemas, consultoria e infraestrutura para empresas que precisam de tecnologia que funciona.",
  keywords: ["desenvolvimento de software", "consultoria em TI", "infraestrutura", "DevOps", "SaaS", "Brasília"],
  authors: [{ name: "Nobilis Tecnologia" }],
  openGraph: {
    title: "Nobilis Tecnologia",
    description: "Sistemas, consultoria e infraestrutura para empresas que precisam de tecnologia que funciona.",
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
      className={`${cinzel.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="font-outfit antialiased overflow-x-hidden">
        <ThemeProvider>
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
          <ScrollTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}