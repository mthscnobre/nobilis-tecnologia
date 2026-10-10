# Nobilis Tecnologia — Web

Site institucional da Nobilis Tecnologia, com foco em implementação de IA em empresas e desenvolvimento de soluções personalizadas, mantendo a apresentação dos demais serviços de tecnologia. Conta com landing page em `/` e manual interativo de identidade visual em `/manual`. Implementação em `app/page.tsx` e `app/manual/page.tsx`.

## Stack

Versões resolvidas em `package-lock.json`, conferidas em 2026-10-10:

- Next.js **16.2.9**, App Router; React e React DOM **19.2.7**.
- TypeScript **5.9.3**; Tailwind CSS **3.4.19**.
- motion e framer-motion **11.18.2**; next-themes **0.4.6**.
- Componentes locais shadcn em `components/ui/` e Unlumen em `components/unlumen-ui/`.
- Fontes Cinzel e Bricolage Grotesque via `next/font/google` em `lib/fonts.ts`.

`package.json` declara intervalos, incluindo Next `^16.2.7`. Usar **Node compatível com >=20.9.0**, requisito do Next instalado. A declaração `>=20.0.0` do projeto ainda precisa ser alinhada.

## Setup

```bash
npm ci
npm run dev
```

Para os logos do carrossel, configurar o identificador público em `.env.local`:

```dotenv
NEXT_PUBLIC_BRANDFETCH_CLIENT_ID=your_public_client_id
```

`components/sections/TechMarquee.tsx` usa esse valor em URLs Brandfetch, com fallback vazio; algumas URLs possuem identificador literal próprio. O funcionamento externo não foi verificado nesta documentação. Não colocar credenciais privadas nessa variável pública.

```bash
# Checagem de tipos sem gerar cache incremental
./node_modules/.bin/tsc --noEmit --incremental false

# Produção local
npm run build
npm run start
```

Verificações realizadas na atualização visual de 2026-10-10:

| Cenário | Verificação | Resultado |
|---|---|---|
| TypeScript | `./node_modules/.bin/tsc --noEmit --incremental false` | Aprovado |
| Build de produção | `npm run build -- --webpack` | Aprovado |
| Landing page, seção de IA e manual | Navegador em desktop e celular, servidor local de produção | Renderização conferida |
| Temas | Primeira visita e recarga após escolha | Claro inicial; preferência preservada |
| Download da fonte | HTTP e conteúdo do ZIP | Fonte e licença disponíveis |

O build com Webpack foi utilizado porque o ambiente local recorre ao SWC em WASM, sem suporte ao Turbopack. O modo de desenvolvimento apresentou erro de chunk, não reproduzido no servidor local de produção. `npm run lint` ainda executa `next lint`, comando indisponível na versão instalada; o script precisa ser atualizado. A rota de contato possui testes com o runner nativo do Node.js em `tests/contact-route.test.cjs`; não há workflow de CI versionado.

## Estado do contato

`app/api/contact/route.ts` valida o payload e envia uma mensagem de texto pelo SMTP autenticado do Mailu com Nodemailer, na porta 465 com TLS e validação do certificado. O remetente e destinatário são `contato@nobilistecnologia.com.br`; `Reply-To` usa o endereço do visitante. O formulário só confirma sucesso depois da aceitação pelo servidor SMTP; isso não garante entrega na caixa de entrada. As mensagens não são persistidas no site.

`components/sections/Contact.tsx` exibe erros de validação, indisponibilidade e rede, mantendo os campos para nova tentativa. O servidor não registra conteúdo das mensagens nem credenciais.

Configurar em **Vercel → Project → Settings → Environment Variables**, no ambiente de produção (e em preview, se desejar testar ali):

| Variável | Valor |
|---|---|
| `SMTP_HOST` | `mail.nobilistecnologia.com.br` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `contato@nobilistecnologia.com.br` |
| `SMTP_PASS` | Senha da conta, cadastrada diretamente na Vercel |
| `SMTP_FROM` | `contato@nobilistecnologia.com.br` |
| `SMTP_TO` | `contato@nobilistecnologia.com.br` |

As variáveis SMTP não usam prefixo `NEXT_PUBLIC_`. O arquivo `.env.example` contém apenas valores de referência e senha vazia; para uso local, copiar os valores para `.env.local`, ignorado pelo Git. Após configurar as variáveis na Vercel, fazer um novo deploy.

Respostas da API: `400` para payload inválido; `503` para configuração ausente/inválida; `502` para falha de envio; `200` após aceitação pelo SMTP. A rota exige runtime Node.js. Em 2026-10-10, a conexão externa com `mail.nobilistecnologia.com.br:465` respondeu com saudação SMTP `220`, usando TLS 1.3 e certificado válido para o host. Isso não verifica o acesso a partir da Vercel. A autenticação e a entrega real ainda precisam ser verificadas com as credenciais no ambiente de deploy.

Testes da rota sem envio externo: `node --test tests/contact-route.test.cjs`.

## Estrutura

```text
app/                    → Páginas, layout, estilos, ícones e api/contact
components/layout/      → Navegação, logo, rodapé e retorno ao topo
components/sections/    → Seções institucionais e formulário
components/manual/      → Manual interativo de marca
components/ui/          → Primitivas de interface
components/unlumen-ui/  → Componentes visuais locais
lib/                    → Fontes e helper cn()
providers/              → Tema
public/                 → Imagens, fontes ZIP e manual HTML independente
middleware.ts           → Rate limiting e X-Request-ID
next.config.ts          → Headers, CSP e configuração de imagens
docs/                   → Documentação local ainda não versionada
```

`app/manual/manual_layout.tsx` é um arquivo auxiliar; a rota do manual é definida em `app/manual/page.tsx`.

## Adicionar componentes

Comandos de referência; a disponibilidade dos registries não foi testada nesta documentação:

```bash
# shadcn/ui
npx shadcn@latest add <component>

# Unlumen UI — registry também declarado em components.json
npx shadcn add https://ui.unlumen.com/r/<component>.json

# Watermelon UI — referência opcional, sem uso confirmado no inventário
npx shadcn add https://ui.watermelon.sh/r/<component>.json
```

Inspecionar o código gerado e adaptar aos componentes e tokens existentes.

## Identidade visual

Referências executáveis: `app/globals.css`, `tailwind.config.ts`, `lib/fonts.ts` e `components/layout/Logo.tsx`. Guia visual em `/manual`.

| Token | Hex | Uso |
|---|---|---|
| crimson-400 | #C0392B | Primária, CTAs e destaques |
| crimson-600 | #8B1A10 | Hover e ênfase secundária |
| obsidian-800 | #0D0D0D | Fundo escuro |
| obsidian-0 | #FAF7F7 | Fundo claro e texto sobre fundo escuro |
| obsidian-400 | #555555 | Cor neutra da paleta |

| Família | Uso | Pesos carregados |
|---|---|---|
| Cinzel | Logotipo e aplicações da marca | 400, 600, 700 |
| Bricolage Grotesque | Títulos, corpo e interface | Variável, 200–800; tamanho óptico automático |

`providers/theme-provider.tsx` usa `data-theme`, modo claro inicial, preferência do visitante preservada e seleção pelo sistema desabilitada. Os tokens semânticos variam por tema; classes de cor fixa em `tailwind.config.ts` precisam de verificação separada.

## Deploy

O site está publicado na **Vercel**, conforme confirmação do responsável em 2026-10-10, acompanhada de capturas da página inicial e da seção de IA em produção. A integração SMTP está implementada; ativação e entrega real dependem das variáveis de ambiente e de verificação após o deploy.

Configurar `NEXT_PUBLIC_BRANDFETCH_CLIENT_ID` no ambiente de deploy quando necessário para o carrossel. O projeto utiliza execução no servidor para API e middleware; não é apenas uma exportação estática. `next.config.ts` contém headers e CSP globais; o redirect de `www` para o domínio principal permanece comentado.

## Fluxo de alterações

Criar uma branch de trabalho a partir de `develop`, abrir PR para `develop` e, após revisão e validação, abrir PR de `develop` para `main`. A promoção para `main` depende da aprovação do responsável.

## Documentação

Os arquivos abaixo existem no ambiente de manutenção, mas ainda não estão versionados no repositório. Não fazem parte de uma clonagem do GitHub. `documentacao-nobilis.md` reúne stack, estrutura, integrações, segurança e estado do projeto.

| Documento | Conteúdo |
|---|---|
| `docs/ARCHITECTURE.md` | Componentes, fluxos e limites |
| `docs/API.md` | Rotas, payloads, respostas e cenários pendentes |
| `docs/DECISIONS.md` | ADRs e consequências das escolhas observadas |
| `docs/PROGRESS.md` | Histórico e pendências atuais |
| `docs/modules/00-foundation.md` | Fundação e landing page |
| `docs/modules/01-contact-security.md` | Contato e segurança |
| `docs/modules/02-brand-manual.md` | Identidade visual e manual |
| `CLAUDE.md` | Contexto curto para manutenção |
| `PROMPT_CLAUDE_CODE.md` | Orientações de desenvolvimento do projeto existente |
