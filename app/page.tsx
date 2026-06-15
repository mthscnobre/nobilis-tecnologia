import { CrimsonBar } from "@/components/layout/CrimsonBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CrimsonBar />

      <Hero />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--border)] opacity-40" />
      </div>

      <Stats />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--border)] opacity-40" />
      </div>

      <Services />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--border)] opacity-40" />
      </div>

      <Approach />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--border)] opacity-40" />
      </div>

      <TechMarquee />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[var(--border)] opacity-40" />
      </div>

      <Contact />

      <Footer />

      <CrimsonBar />
    </>
  );
}
