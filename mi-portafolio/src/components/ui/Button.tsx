import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition",
        variant === "primary" &&
          "bg-linear-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90",
        className
      )}
      style={
        variant === "secondary"
          ? {
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              color: "var(--button-secondary-text)",
              backdropFilter: "blur(12px)",
            }
          : undefined
      }
    >
      {children}
    </a>
  );
};

export default Button;