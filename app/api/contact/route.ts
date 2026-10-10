import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const maxDuration = 30;

interface ContactPayload {
  nome: string;
  email: string;
  empresa?: string;
  mensagem: string;
}

function validate(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.nome === "string" && b.nome.trim().length >= 2 && b.nome.length <= 200 &&
    typeof b.email === "string" && b.email.length <= 254 &&
    /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(b.email.trim()) &&
    (b.empresa === undefined || (typeof b.empresa === "string" && b.empresa.length <= 200)) &&
    typeof b.mensagem === "string" && b.mensagem.trim().length >= 5 && b.mensagem.length <= 2000 &&
    !/[\r\n]/.test(b.nome) &&
    (typeof b.empresa !== "string" || !/[\r\n]/.test(b.empresa))
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos. Verifique os campos e tente novamente." }, { status: 400 });
  }

  if (!validate(body)) {
    return NextResponse.json({ error: "Dados inválidos. Verifique os campos e tente novamente." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env;
  const port = Number(process.env.SMTP_PORT || "465");
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO || port !== 465) {
    console.error("[contact] SMTP indisponível ou configuração inválida.");
    return NextResponse.json(
      { error: "O formulário está temporariamente indisponível. Entre em contato pelo e-mail abaixo." },
      { status: 503 }
    );
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { minVersion: "TLSv1.2" },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    dnsTimeout: 5_000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const result = await transport.sendMail({
      from: { name: "Nobilis Tecnologia", address: SMTP_FROM },
      to: SMTP_TO,
      replyTo: { name: body.nome.trim(), address: body.email.trim() },
      subject: `Novo contato pelo site: ${body.nome.trim()}`,
      text: [
        `Nome: ${body.nome.trim()}`,
        `E-mail: ${body.email.trim()}`,
        `Empresa: ${body.empresa?.trim() || "Não informada"}`,
        "",
        "Mensagem:",
        body.mensagem.trim(),
      ].join("\n"),
    });
    if (!result.accepted?.length || result.rejected?.length) {
      throw new Error("SMTP rejected recipient");
    }
    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso." });
  } catch {
    // Não registrar conteúdo, credenciais ou resposta bruta do servidor SMTP.
    console.error("[contact] Falha no envio SMTP.");
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem. Tente novamente ou use o e-mail abaixo." },
      { status: 502 }
    );
  } finally {
    transport.close();
  }
}

export async function GET() {
  return NextResponse.json({ error: "Método não permitido." }, { status: 405 });
}
