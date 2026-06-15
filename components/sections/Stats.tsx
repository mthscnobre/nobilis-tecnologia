"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 15, prefix: "+", suffix: " anos",    label: "de experiência"        },
  { value: 20, prefix: "+",                      label: "projetos entregues"    },
  { value: 10, prefix: "+",                      label: "organizações atendidas"},
  { value: 7,                                     label: "estados atendidos"     },
];

function CountUp({ value, prefix = "", suffix = "" }: StatItem) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-cinzel font-bold text-4xl md:text-5xl text-[var(--foreground)]">
      {prefix}{display}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <CountUp {...stat} />
              <span className="font-outfit font-light text-[0.8rem] tracking-wide text-[var(--muted)] uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}