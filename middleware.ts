import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting simples em memória (Edge Runtime)
// Para produção com múltiplas instâncias, substituir por Redis (Upstash)
const rateLimit = new Map<string, { count: number; reset: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX    = 10;        // máximo de requisições por janela por IP

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW });
    return true; // permitido
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false; // bloqueado
  }

  entry.count++;
  return true; // permitido
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Aplicar rate limiting apenas em rotas de API
  if (pathname.startsWith("/api/")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!getRateLimit(ip)) {
      return new NextResponse(
        JSON.stringify({ error: "Muitas requisições. Tente novamente em breve." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
          },
        }
      );
    }
  }

  const response = NextResponse.next();

  // Header extra de segurança que o middleware pode adicionar
  response.headers.set("X-Request-ID", crypto.randomUUID());

  return response;
}

export const config = {
  matcher: [
    // Aplica a todas as rotas exceto estáticos e _next
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)",
  ],
};