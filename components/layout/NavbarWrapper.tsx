"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";

// Suprime o Navbar do site em rotas que têm navbar própria
const EXCLUDED = ["/manual"];

export function NavbarWrapper() {
  const pathname = usePathname();
  if (EXCLUDED.some(r => pathname.startsWith(r))) return null;
  return <Navbar />;
}