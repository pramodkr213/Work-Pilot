"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <div className="wp-container">
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-6 px-5 rounded-2xl border transition-all",
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-border/80 shadow-md"
              : "bg-white/70 backdrop-blur-md border-border/60"
          )}
        >
          <Logo />

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <Link key={item.label} href={item.href} className="wp-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href="/contact" className="wp-btn wp-btn-primary h-10 px-5 text-sm">
              Book a Demo
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          )}
        >
          <div className="rounded-2xl border border-border bg-white shadow-md p-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-border/40 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="wp-btn wp-btn-primary mt-4">
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
