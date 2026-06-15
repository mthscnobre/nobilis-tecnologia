"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FloatingInput } from "@/components/ui/floating-input";
import { MagneticButton } from "@/components/unlumen-ui/magnetic-button";
import { Send, CheckCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// ── FloatingTextarea — mesmo padrão do FloatingInput para o campo de mensagem
function FloatingTextarea({
  label,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <textarea
        className={cn(
          "peer w-full px-4 py-3 border rounded-lg bg-transparent outline-none resize-vertical",
          "border-border focus:border-primary transition-colors",
          "font-outfit font-light text-sm text-[var(--foreground)]",
          className
        )}
        placeholder=" "
        style={{ minHeight: "110px" }}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <label
        className={cn(
          "absolute left-4 top-3 text-muted-foreground transition-all duration-200 pointer-events-none text-sm",
          "peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-background peer-focus:px-1",
          "peer-focus:text-primary",
          (focused || hasValue) && "-top-2.5 left-3 text-xs bg-background px-1"
        )}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <section id="contato" className="py-20 px-6">
      <div className="max-w-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow mb-3">Entre em contato</span>
          <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-[var(--foreground)] tracking-[0.08em] uppercase mb-4">
            Vamos conversar?
          </h2>
          <p className="text-[var(--muted)] font-light text-sm leading-relaxed max-w-sm mx-auto">
            Conte o seu desafio. Uma conversa sem compromisso já costuma
            clarear muito o caminho.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-8 overflow-visible"
        >
          {/* Linha crimson decorativa no topo */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--primary)] rounded-t-[16px]" />

          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 pt-2"
              >
                {/* Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Nome"
                    id="nome"
                    type="text"
                    required
                  />
                  <FloatingInput
                    label="E-mail"
                    id="email"
                    type="email"
                    required
                  />
                </div>

                {/* Empresa */}
                <FloatingInput
                  label="Empresa (opcional)"
                  id="empresa"
                  type="text"
                />

                {/* Mensagem */}
                <FloatingTextarea
                  label="Mensagem"
                  id="mensagem"
                  required
                />

                <MagneticButton
                  type="submit"
                  disabled={sending}
                  variant="default"
                  size="lg"
                  radius={120}
                  strength={0.4}
                  springOptions={{ stiffness: 180, damping: 18, mass: 0.1 }}
                  className="w-full bg-[var(--primary)] text-[var(--primary-fg)] hover:bg-[var(--primary-hover)] font-outfit font-medium text-[0.8rem] tracking-[0.1em] uppercase rounded-[6px] disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensagem
                    </>
                  )}
                </MagneticButton>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-10 gap-4 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle className="w-14 h-14 text-[var(--primary)]" strokeWidth={1.5} />
                </motion.div>
                <p className="font-cinzel text-[var(--foreground)] text-lg font-semibold tracking-wide uppercase">
                  Mensagem enviada
                </p>
                <p className="text-[var(--muted)] text-sm font-light leading-relaxed max-w-xs">
                  Em breve entraremos em contato. Obrigado pelo interesse na Nobilis.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* E-mail direto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <Mail className="w-3.5 h-3.5 text-[var(--muted-subtle)]" strokeWidth={1.5} />
          <a
            href="mailto:contato@nobilistecnologia.com.br"
            className="text-[var(--muted)] text-xs font-outfit font-light tracking-wide hover:text-[var(--primary)] transition-colors duration-200"
          >
            contato@nobilistecnologia.com.br
          </a>
        </motion.div>

      </div>
    </section>
  );
}