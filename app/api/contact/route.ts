import { NextRequest, NextResponse } from "next/server";

// ── VALIDAÇÃO ────────────────────────────────────────────────────────────────
interface ContactPayload {
  nome: string;
  email: string;
  empresa?: string;
  mensagem: string;
}

function validate(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  if (typeof b.nome     !== "string" || b.nome.trim().length < 2)    return false;
  if (typeof b.email    !== "string" || !b.email.includes("@"))       return false;
  if (typeof b.mensagem !== "string" || b.mensagem.trim().length < 5) return false;
  return true;
}

// ── SANITIZAÇÃO — remove tags HTML para evitar XSS nos e-mails ──────────────
function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 2000);
}

// ── HANDLER ──────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validate(body)) {
      return NextResponse.json(
        { error: "Dados inválidos. Verifique os campos e tente novamente." },
        { status: 400 }
      );
    }

    const payload = {
      nome:     sanitize(body.nome),
      email:    sanitize(body.email),
      empresa:  body.empresa ? sanitize(body.empresa) : undefined,
      mensagem: sanitize(body.mensagem),
    };

    // ── INTEGRAÇÃO COM SERVIDOR DE E-MAIL ────────────────────────────────────
    // Quando o servidor de e-mail estiver pronto, descomente e configure:
    //
    // Opção 1 — Resend:
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from:    "contato@nobilis.com.br",
    //   to:      "matheus@nobilis.com.br",
    //   subject: `Novo contato: ${payload.nome}`,
    //   html: `
    //     <p><strong>Nome:</strong> ${payload.nome}</p>
    //     <p><strong>E-mail:</strong> ${payload.email}</p>
    //     ${payload.empresa ? `<p><strong>Empresa:</strong> ${payload.empresa}</p>` : ""}
    //     <p><strong>Mensagem:</strong><br/>${payload.mensagem}</p>
    //   `,
    // });
    //
    // Opção 2 — Nodemailer com SMTP:
    // (configuração similar, usando process.env.SMTP_HOST, SMTP_USER, SMTP_PASS)
    // ─────────────────────────────────────────────────────────────────────────

    // Por ora, apenas loga no servidor (remover em produção)
    console.log("[contact] Nova mensagem:", payload);

    return NextResponse.json(
      { success: true, message: "Mensagem recebida com sucesso." },
      { status: 200 }
    );

  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

// Bloqueia outros métodos HTTP nessa rota
export async function GET() {
  return NextResponse.json({ error: "Método não permitido." }, { status: 405 });
}