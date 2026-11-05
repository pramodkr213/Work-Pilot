"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/utils";

const STEPS = [
  {
    n: 1,
    title: "Tell us how your business runs",
    desc:
      "On a short call, we map your departments, your daily checklists and the steps your orders or requests pass through.",
  },
  {
    n: 2,
    title: "We set it up, you add your team",
    desc:
      "Import your people and give them roles. Your checklists and flows are ready from day one.",
  },
  {
    n: 3,
    title: "Your team ticks, you watch",
    desc:
      "Staff work from their phones. You check one screen each day and get a weekly report on who's excelling and where work gets stuck.",
  },
];

export function HowItWorks() {
  return (
    <section className="wp-section" id="how-it-works">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">How it works</span>
          <h2 className="wp-h2">Set up in hours, with our team beside you</h2>
          <p className="wp-sub mt-5">
            Most software hands you a login and wishes you luck. Every WorkPilot plan
            includes setup help from the people who build ERPs for factories.
          </p>
        </div>

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-[12%] right-[12%] top-5 h-px bg-gradient-to-r from-transparent via-brand-2/40 to-transparent"
          />
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          >
            {STEPS.map((s) => (
              <motion.li
                key={s.n}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="relative">
                  <div className="mx-auto h-10 w-10 rounded-full wp-grad-bg grid place-items-center text-white font-heading font-bold text-sm shadow-md relative z-10">
                    {s.n}
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-border bg-white p-5 text-center">
                  <div className="font-mono text-[11px] tracking-wider text-brand-1 uppercase">
                    Step {s.n}
                  </div>
                  <h3 className="mt-1 font-heading font-bold text-lg text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="wp-btn wp-btn-primary">
              Start my {SITE.trialDays}-day free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
