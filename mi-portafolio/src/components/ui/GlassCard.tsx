import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`rounded-2xl border p-6 backdrop-blur-md transition duration-300 hover:border-cyan-400/20 ${className}`}
      style={{
        background: "var(--card)",
        borderColor: "var(--card-border)",
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;