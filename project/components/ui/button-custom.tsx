"use client";

import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ComponentProps, forwardRef } from "react";

// Menggunakan otherProps dan menghapus extends yang menyebabkan konflik
interface ButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  [key: string]: any; // Untuk mendukung properti lain dari ShadcnButton
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    // Map our custom variants to shadcn variants
    const variantMap = {
      primary: "default",
      secondary: "outline",
      ghost: "ghost",
      link: "link",
    };

    // Map our custom sizes to classes
    const sizeMap = {
      sm: "h-10 px-4 py-2 text-sm",
      md: "h-12 px-6 py-3",
      lg: "h-14 px-8 py-4 text-lg",
    };

    return (
      <ShadcnButton
        ref={ref}
        className={cn(
          "rounded-full font-medium transition-all duration-200",
          "min-w-[120px] flex items-center justify-center",
          "focus:ring-2 focus:ring-primary focus:ring-offset-2",
          sizeMap[size],
          variant === "primary" && "bg-primary hover:bg-primary/90 text-white",
          variant === "secondary" && "bg-amber hover:bg-amber/90 text-charcoal",
          className
        )}
        variant={variantMap[variant] as any}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };