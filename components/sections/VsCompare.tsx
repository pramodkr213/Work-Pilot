"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ROWS = [
  { k: "Where instructions live", chaos: "Buried in the chat", clear: "On each person's list, with a deadline" },
  { k: "Who sends reminders", chaos: "You", clear: "WorkPilot, on its own" },
  { k: "Daily routines", chaos: "Re-sent every morning, or forgotten", clear: "Appear on their own; skipped ones are flagged" },
  { k: '"Where is that order?"', chaos: "Three phone calls", clear: "Every step, its owner and its time limit on one screen" },
  { k: "Attendance", chaos: "A register, totalled at month end", clear: "Live, every day" },
  { k: "Who did what", chaos: "Scroll back and hope", clear: "A time-stamped record" },
  { k: "The day you're away", chaos: "Follow-ups stop", clear: "The system keeps running" },
];

export function VsCompare() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">WorkPilot vs WhatsApp + Excel</span>
          <h2 className="wp-h2">
            WhatsApp is great for talking. <span className="wp-grad-text">It&apos;s terrible for tracking.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto rounded-3xl border border-border bg-white overflow-hidden"
        >
          {/* Chaos */}
          <div className="bg-rose-50/60 p-5 md:p-7">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-rose-700 mb-4">
              WhatsApp groups + Excel
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ROWS.map((r) => (
                <li
                  key={r.k}
                  className="flex items-start gap-2.5 rounded-lg bg-white border border-rose-200 px-3 py-2.5"
                >
                  <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" strokeWidth={3} />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {r.k}
                    </div>
                    <div className="text-[14px] font-medium text-foreground">{r.chaos}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* VS divider */}
          <div className="relative h-14 bg-gradient-to-b from-rose-50/60 to-violet-50/60">
            <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="h-10 w-10 rounded-full wp-grad-bg text-white grid place-items-center font-heading font-bold text-sm shadow-lg">
                VS
              </span>
            </div>
          </div>

          {/* Clear */}
          <div className="bg-violet-50/50 p-5 md:p-7">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-1 mb-4">
              WorkPilot
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ROWS.map((r) => (
                <li
                  key={r.k}
                  className="flex items-start gap-2.5 rounded-lg bg-white border border-violet-200 px-3 py-2.5"
                >
                  <Check className="h-4 w-4 text-brand-1 shrink-0 mt-0.5" strokeWidth={3} />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {r.k}
                    </div>
                    <div className="text-[14px] font-medium text-foreground">{r.clear}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
