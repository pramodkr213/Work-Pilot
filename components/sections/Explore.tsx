"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Workflow, Tag, ArrowRight } from "lucide-react";

const CARDS = [
  {
    icon: Layers,
    eyebrow: "What it does",
    title: "See every feature",
    desc: "Checklists, delegation, FMS, attendance, chat, reports — the whole toolkit, with real screenshots.",
    href: "/features",
    cta: "Explore features",
  },
  {
    icon: Workflow,
    eyebrow: "How it fits in",
    title: "See how it works",
    desc: "The 3-step rollout, a day in the life of a WorkPilot team, and how it compares to WhatsApp + Excel.",
    href: "/how-it-works",
    cta: "See the process",
  },
  {
    icon: Tag,
    eyebrow: "What it costs",
    title: "Simple per-user pricing",
    desc: "₹399 / ₹299 / ₹199 per user — bigger teams pay less per person. 15-day free trial on every plan.",
    href: "/pricing",
    cta: "View pricing",
  },
];

export function Explore() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">Explore WorkPilot</span>
          <h2 className="wp-h2">Pick where you want to start</h2>
          <p className="wp-sub mt-5">
            Everything you&apos;d want to know, grouped so you don&apos;t have to scroll
            through the whole story to find the part you care about.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {CARDS.map((c) => (
            <motion.div
              key={c.href}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Link
                href={c.href}
                className="group block wp-card h-full flex-col transition-all"
              >
                <span className="h-11 w-11 rounded-xl wp-grad-bg grid place-items-center text-white mb-4">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="wp-eyebrow">{c.eyebrow}</div>
                <h3 className="mt-2 font-heading font-bold text-xl text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-muted-foreground leading-relaxed flex-1">
                  {c.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-1 group-hover:gap-2.5 transition-all">
                  {c.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
