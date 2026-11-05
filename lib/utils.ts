import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "WorkPilot",
  tagline: "by LRBC",
  product: "WorkPilot",
  email: "contact@lrbcloud.ai",
  whatsapp: "+919954953008",
  whatsappDisplay: "+91 99549 53008",
  parentCompany: "LRBC — Lean Resource Business Consulting Pvt. Ltd.",
  trialDays: 15,
  prices: { starter: "₹399", professional: "₹299", business: "₹199" },
};

export const NAV = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
