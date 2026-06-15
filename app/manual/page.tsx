import type { Metadata } from "next";
import { ManualHero }         from "@/components/manual/ManualHero";
import { ManualLogo }         from "@/components/manual/ManualLogo";
import { ManualPalette }      from "@/components/manual/ManualPalette";
import { ManualTypography }   from "@/components/manual/ManualTypography";
import { ManualApplications } from "@/components/manual/ManualApplications";
import { ManualRules }        from "@/components/manual/ManualRules";
import { ManualFavicon }      from "@/components/manual/ManualFavicon";
import { CrimsonBar }         from "@/components/layout/CrimsonBar";
import { Footer }             from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Manual de Identidade Visual — Nobilis Tecnologia",
  description: "Guia completo de identidade visual da Nobilis Tecnologia: logotipo, paleta de cores, tipografia, aplicações e regras de uso.",
};

const sections = [
  { id: "logotipo",   label: "Logotipo"    },
  { id: "paleta",     label: "Paleta"      },
  { id: "tipografia", label: "Tipografia"  },
  { id: "aplicacoes", label: "Aplicações"  },
  { id: "regras",     label: "Regras"      },
  { id: "favicon",    label: "Favicon"     },
];

export default function ManualPage() {
  return (
    <>
      <CrimsonBar />
      <ManualHero sections={sections} />
      <main className="relative z-10">
        <ManualLogo />
        <div className="section-sep" />
        <ManualPalette />
        <div className="section-sep" />
        <ManualTypography />
        <div className="section-sep" />
        <ManualApplications />
        <div className="section-sep" />
        <ManualRules />
        <div className="section-sep" />
        <ManualFavicon />
      </main>
      <Footer />
      <CrimsonBar />
    </>
  );
}
