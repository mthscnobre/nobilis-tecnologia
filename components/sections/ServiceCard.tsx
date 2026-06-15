"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { GlowingBadge } from "@/components/unlumen-ui/glowing-badge";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
  delay?: number;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  tag,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn("group", className)}
    >
      <Tilt
        rotationFactor={8}
        springOptions={{ stiffness: 200, damping: 20 }}
        className={cn(
          "service-card h-full",
          "hover:border-[var(--primary)]",
          "hover:shadow-[0_0_24px_rgba(192,57,43,0.10)]"
        )}
      >
        {/* Ícone + tag */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-9 h-9 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          {tag && (
            <GlowingBadge variant="error" pulse={false} dot={false}>
              {tag}
            </GlowingBadge>
          )}
        </div>

        {/* Título */}
        <div className="font-outfit font-medium text-[0.95rem] tracking-[0.02em] text-[var(--foreground)] mb-3 leading-snug">
          {title}
        </div>

        {/* Descrição — maior e justificada */}
        <p className="font-outfit font-light text-[0.9rem] text-[var(--muted)] leading-[1.7] text-justify">
          {description}
        </p>
      </Tilt>
    </motion.div>
  );
}
