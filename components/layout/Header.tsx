"use client";

import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4">
      {/*
        O header é intencional mínimo — só o ThemeSwitcher.
        Pode expandir futuramente com nav links, logo compacta, etc.
      */}
      <ThemeSwitcher />
    </header>
  );
}
