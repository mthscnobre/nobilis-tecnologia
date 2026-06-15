import { cn } from "@/lib/utils";

interface CrimsonBarProps {
  opacity?: number;
  className?: string;
}

export function CrimsonBar({ opacity = 1, className }: CrimsonBarProps) {
  return (
    <div
      className={cn("w-full h-0.5 bg-[#C0392B]", className)}
      style={{ opacity }}
    />
  );
}
