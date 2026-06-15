"use client";

import { motion } from "motion/react";
import { ServiceCard } from "./ServiceCard";
import { Code2, Monitor, Server, Globe, Settings } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-full h-full" strokeWidth={1.5} />,
    title: "Desenvolvimento de Software & SaaS",
    description: "Sistemas web e aplicações sob encomenda, do MVP ao produto maduro. Desenvolvimento de plataformas SaaS com foco em escalabilidade, segurança e experiência de uso.",
    tag: "SaaS",
    delay: 0.05,
  },
  {
    icon: <Monitor className="w-full h-full" strokeWidth={1.5} />,
    title: "Consultoria em TI",
    description: "Diagnóstico, planejamento estratégico e gestão de TI como serviço — para empresas que precisam de visão técnica sem manter equipe interna.",
    tag: "B2B",
    delay: 0.1,
  },
  {
    icon: <Server className="w-full h-full" strokeWidth={1.5} />,
    title: "Infraestrutura & DevOps",
    description: "Implantação e gestão de ambientes em VPS, Docker e cloud. Aplicações no ar com monitoramento, alta disponibilidade e pipelines de entrega contínua.",
    tag: "DevOps",
    delay: 0.15,
  },
  {
    icon: <Globe className="w-full h-full" strokeWidth={1.5} />,
    title: "Infraestrutura de Redes",
    description: "Projeto, implantação e manutenção de redes corporativas cabeadas e wireless. Segmentação, segurança perimetral e conectividade confiável para ambientes de múltiplas filiais.",
    tag: "Redes",
    delay: 0.2,
  },
  {
    icon: <Settings className="w-full h-full" strokeWidth={1.5} />,
    title: "Suporte Técnico",
    description: "Manutenção preventiva, atendimento a incidentes e suporte contínuo para sistemas em produção. Resposta rápida, resolução definitiva.",
    tag: "Suporte",
    delay: 0.25,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-3">O que fazemos</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase">
            Serviços
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}