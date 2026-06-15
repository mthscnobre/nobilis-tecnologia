# Nobilis Tecnologia — Web

Site institucional da Nobilis Tecnologia.

## Stack

- **Next.js 16.2.7** (App Router, Turbopack padrão)
- **TypeScript**
- **Tailwind CSS** — tokens do Manual de Identidade Visual
- **shadcn/ui** — componentes base (Button, Input, Label)
- **Unlumen UI** — componentes visuais premium via shadcn CLI
- **Watermelon UI** — componentes e blocos premium via shadcn CLI
- **Framer Motion** — animações
- **next/font** — Cinzel + Outfit otimizadas (sem FOUT)

> **Node.js 20+ obrigatório** (requisito do Next.js 16)

## Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (Turbopack por padrão no Next.js 16)
npm run dev

# Build de produção
npm run build
```

## Adicionar componentes

### shadcn/ui
```bash
npx shadcn@latest add <componente>
# ex: npx shadcn@latest add dialog
```

### Unlumen UI
```bash
npx shadcn add https://ui.unlumen.com/r/<componente>.json
```

### Watermelon UI
```bash
npx shadcn add https://ui.watermelon.sh/r/<componente>.json
```

## Deploy na Vercel

1. Push para o GitHub
2. Importe na [Vercel](https://vercel.com) — Next.js 16 detectado automaticamente
3. Conecte `nobilis.com.br` e `www.nobilis.com.br` nas configurações de domínio

> A Vercel tem suporte completo ao Next.js 16 incluindo `proxy.ts` e Cache Components.

## Estrutura

```
app/
  layout.tsx          → Root layout com fontes e metadata
  page.tsx            → Página principal (composição das seções)
  globals.css         → Variáveis CSS da paleta + reset + utilitários

components/
  layout/
    Logo.tsx          → Wordmark reutilizável (4 variantes do manual)
    CrimsonBar.tsx    → Barra crimson
    Footer.tsx        → Rodapé
  sections/
    Hero.tsx          → Seção hero
    Services.tsx      → Grid de serviços
    ServiceCard.tsx   → Card individual de serviço
    Contact.tsx       → Formulário de contato
  ui/
    button.tsx        → Button com variantes Nobilis (primary, ghost, outline)
    input.tsx         → Input estilizado
    label.tsx         → Label

lib/
  fonts.ts            → next/font — Cinzel + Outfit
  utils.ts            → cn() helper
```

## Paleta (Manual de Identidade Visual v1.0 · 2026)

| Token         | Hex       | Uso                             |
|---------------|-----------|---------------------------------|
| crimson-400 ★ | #C0392B   | Cor primária — CTAs, destaques  |
| crimson-600   | #8B1A10   | Hover, ênfase secundária        |
| obsidian-800  | #0D0D0D   | Fundo principal dark            |
| obsidian-0    | #FAF7F7   | Fundo light, texto sobre dark   |
| obsidian-400  | #555555   | Texto secundário, ícones        |

## Tipografia

| Família | Uso                                      | Pesos       |
|---------|------------------------------------------|-------------|
| Cinzel  | Logotipo, títulos de seção, destaques    | 400 600 700 |
| Outfit  | Corpo de texto, UI, labels, botões       | 300 400 500 |

## Notas Next.js 16

- **Turbopack** é o bundler padrão — não adicionar configuração webpack
- **Caching explícito** — use `'use cache'` em componentes que precisam de cache
- **`proxy.ts`** substituiu o `middleware.ts` para lógica de rede (quando necessário)
- **Node.js 20+** obrigatório — verifique a versão antes de rodar
