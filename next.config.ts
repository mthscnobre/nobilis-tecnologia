import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 — Turbopack é o bundler padrão, webpack não é mais necessário
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },

};

export default nextConfig;
