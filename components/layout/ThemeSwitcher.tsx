"use client";

import { ThemeSwitch } from "@/components/unlumen-ui/theme-switch";

export function ThemeSwitcher({ className }: { className?: string }) {
  return (
    <ThemeSwitch
      className={className}
      iconSize={16}
    />
  );
}