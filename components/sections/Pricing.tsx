"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap, Briefcase, Building2, Crown, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    icon: Zap,
    price: SITE.prices.starter,
    unit: "per user per month",
    from: "From 5 users (₹1,995/month)",
    desc: "For small teams getting organised.",
    cta: "Start free trial",
    featured: false,
    features: [
      "Checklists, delegation and FMS",
      "Live attendance and mobile check-in",
      "Basic performance scores",
      "30 days of activity history",
      "Email reminders",
      "Export to Excel",
      "Email support",
    ],
  },
  {
    name: "Professional",
    icon: Briefcase,
    price: SITE.prices.professional,
    unit: "per user per month",
    from: "From 10 users (₹2,990/month)",
    desc: "For teams that want reminders on WhatsApp and reports for review meetings.",
    cta: "Start free trial",
    featured: true,
    features: [
      "Everything in Starter",
      "Automated WhatsApp reminders",
      "Advanced performance dashboards",
      "90 days of activity history",
      "Role-based access for managers and staff",
      "MIS reports and analytics",
      "Multiple departments",
      "Priority email support",
    ],
  },
  {
    name: "Business",
    icon: Building2,
    price: SITE.prices.business,
    unit: "per user per month",
    from: "From 20 users (₹3,980/month)",
    desc: "For growing businesses with shifts and layers of managers.",
    cta: "Start free trial",
    featured: false,
    features: [
      "Everything in Professional",
      "Unlimited activity history",
      "Custom roles and permissions",
      "Shift and schedule management",
      "API access",
      "A dedicated account manager",
      "Custom onboarding",
      "Phone and email support",
    ],
  },
];

export function Pricing() {
  return (
    <section className="wp-section" id="pricing">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">Pricing</span>
          <h2 className="wp-h2">
            Simple pricing. <span className="wp-grad-text">Bigger teams pay less per person.</span>
          </h2>
          <p className="wp-sub mt-5">
            Every plan starts with a {SITE.trialDays}-day free trial and includes setup
            help. No credit card, no commitment. Prices in INR, plus GST.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch"
        >
          {PLANS.map((p) => (
            <motion.div
              key={p.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              className={`relative wp-card flex flex-col ${p.featured ? "wp-card-featured lg:-translate-y-3" : ""}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full wp-grad-bg text-white text-[11px] font-bold tracking-wide shadow-md whitespace-nowrap">
                  ★ Most popular
                </span>
              )}

              <span className="h-10 w-10 rounded-lg bg-violet-100 text-violet-700 grid place-items-center mb-4">
                <p.icon className="h-5 w-5" />
              </span>

              <h3 className="font-heading font-bold text-xl text-foreground">{p.name}</h3>
              <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed min-h-[3rem]">
                {p.desc}
              </p>

              <div className="mt-5 mb-1 flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-4xl text-foreground">{p.price}</span>
                <span className="text-xs text-muted-foreground leading-tight">{p.unit}</span>
              </div>
              <div className="text-[12.5px] text-muted-foreground">{p.from}</div>

              <ul className="mt-6 mb-7 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[14px]">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href="/contact"
                  className={`w-full ${p.featured ? "wp-btn wp-btn-primary" : "wp-btn wp-btn-secondary"}`}
                >
                  {p.cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise row */}
        <div className="mt-6 rounded-2xl border border-border bg-violet-50/50 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <span className="h-11 w-11 rounded-lg bg-white border border-border grid place-items-center text-brand-1 shrink-0">
            <Crown className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <div className="font-heading font-bold text-lg">Enterprise — custom pricing</div>
            <p className="mt-1 text-[14.5px] text-muted-foreground">
              For larger teams or several locations that need workflows built around them.
            </p>
          </div>
          <Link href="/contact" className="wp-btn wp-btn-primary shrink-0">
            Talk to us
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Not sure which plan fits? Count the people who&apos;ll use WorkPilot: under 10,
          start with Starter; 10 to 19, Professional; 20 or more, Business. Or message us
          on WhatsApp and we&apos;ll tell you honestly.
        </p>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Questions?{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-1 font-semibold hover:underline">
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
