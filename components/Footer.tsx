import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/utils";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Support", href: `mailto:${SITE.email}` },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Admin portal", href: "https://admin.lrbcloud.ai/" },
      { label: "Request demo", href: `mailto:${SITE.email}` },
    ],
  },
];

const SOCIAL = [
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F] hover:border-[#E4405F]" },
  { Icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#1877F2] hover:border-[#1877F2]" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000] hover:border-[#FF0000]" },
];

export function Footer() {
  return (
    <footer className="wp-section pt-16 md:pt-20">
      <div className="wp-container">
        <div className="rounded-3xl border border-border bg-white shadow-sm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-4">
              <Logo />
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
                A complete business management platform built for Indian SMBs. Run your
                entire operation from one place.
              </p>
            </div>

            {/* Link columns */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {COLS.map((col) => (
                <div key={col.title}>
                  <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-1 mb-3 pb-2 border-b-2 border-brand-1 inline-block">
                    {col.title}
                  </h4>
                  <ul className="space-y-2.5 mt-1">
                    {col.links.map((l) => {
                      const external = l.href.startsWith("http");
                      return (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="text-[13.5px] text-foreground/80 hover:text-brand-1 transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WorkPilot by LRBC. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs font-mono text-muted-foreground">
              Made in India 🇮🇳 ·{" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-1">
                {SITE.email}
              </a>
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`h-9 w-9 grid place-items-center rounded-full border border-border bg-white text-muted-foreground transition-colors ${color}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
