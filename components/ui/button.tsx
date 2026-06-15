"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-outfit font-medium text-[0.8rem] tracking-[0.1em] uppercase rounded-btn transition-all duration-250 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Botão primário — fundo crimson
        primary:
          "bg-[#C0392B] text-[#FAF7F7] hover:bg-[#8B1A10] border-none",
        // Botão ghost — borda sutil
        ghost:
          "bg-transparent text-[#FAF7F7] border border-[#262626] hover:border-[#C0392B] hover:text-[#C0392B]",
        // Botão outline crimson
        outline:
          "bg-transparent text-[#C0392B] border border-[#C0392B] hover:bg-[#C0392B] hover:text-[#FAF7F7]",
        // Destrutivo
        destructive:
          "bg-[#8B1A10] text-[#FAF7F7] hover:bg-[#6B1009]",
        // Link
        link:
          "text-[#C0392B] underline-offset-4 hover:underline bg-transparent p-0 h-auto",
      },
      size: {
        sm:      "px-4 py-2 text-[0.72rem]",
        default: "px-[2.25rem] py-[0.85rem]",
        lg:      "px-10 py-4 text-[0.85rem]",
        icon:    "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
