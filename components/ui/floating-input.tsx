import { cn } from "@/lib/utils";
import { useState } from "react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingInput({ label, className, ...props }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <input
        className={cn(
          "peer w-full px-4 py-3 border rounded-lg bg-transparent outline-none",
          "border-[var(--border)] focus:border-[var(--primary)] transition-colors",
          "font-bricolage text-[var(--foreground)]",
          className
        )}
        placeholder=" "
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <label
        htmlFor={props.id}
        className={cn(
          "absolute left-4 top-3 text-[var(--muted)] transition-all duration-200 pointer-events-none",
          "peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-[var(--surface)] peer-focus:px-1",
          "peer-focus:text-[var(--primary)]",
          (focused || hasValue) && "-top-2.5 left-3 text-xs bg-[var(--surface)] px-1"
        )}
      >
        {label}
      </label>
    </div>
  );
}