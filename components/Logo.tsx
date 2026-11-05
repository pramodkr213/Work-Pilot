import Link from "next/link";
import { Zap } from "lucide-react";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="WorkPilot home">
      <span
        className="h-9 w-9 rounded-xl grid place-items-center wp-grad-bg shadow-md shadow-brand-1/30 transition-transform duration-300 group-hover:scale-105"
        aria-hidden
      >
        <Zap className="h-5 w-5 text-white" strokeWidth={2.5} fill="white" />
      </span>
      <span className={`font-heading font-extrabold text-xl tracking-tight ${textColor}`}>
        WorkPilot
      </span>
    </Link>
  );
}
