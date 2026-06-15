import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  // Scripts — Next.js precisa de 'unsafe-inline' e 'unsafe-eval' em dev;
  // em produção o Next.js injeta nonces automaticamente se configurado
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Estilos inline usados pelo Tailwind e componentes de animação
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fontes — Google Fonts (Cinzel e Outfit)
  "font-src 'self' https://fonts.gstatic.com",
  // Imagens — Brandfetch CDN + domínios de logos externos
  [
    "img-src 'self' data: blob:",
    "https://cdn.brandfetch.io",
    "https://starlink.com",
    "https://mikrotik.com",
  ].join(" "),
  // Conexões — Brandfetch API
  "connect-src 'self' https://cdn.brandfetch.io https://api.anthropic.com",
  // Frames — nenhum permitido
  "frame-src 'none'",
  "frame-ancestors 'none'",
  // Outros
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Impede clickjacking — nenhum iframe externo pode embutir o site
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Impede MIME sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controla informações enviadas no Referer
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Desativa APIs sensíveis do browser que não são usadas
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()",
  },
  // Força HTTPS por 1 ano após o primeiro acesso (ativar só após deploy com HTTPS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: CSP,
  },
  // Remove o header X-Powered-By (já feito via poweredByHeader: false, redundância intencional)
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // Remove "X-Powered-By: Next.js" — não expõe stack para atacantes
  poweredByHeader: false,

  // Compressão gzip/brotli nas respostas
  compress: true,

  // Imagens — formatos modernos com melhor compressão
  images: {
    formats: ["image/avif", "image/webp"],
    // Domínios externos permitidos para next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
    ],
  },

  // Headers de segurança HTTP aplicados a todas as rotas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Redirects de segurança — força www → apex ou vice-versa (ajuste conforme domínio final)
  // Descomente após definir o domínio principal
  // async redirects() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       has: [{ type: "host", value: "www.nobilis.com.br" }],
  //       destination: "https://nobilis.com.br/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;