"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const CHAOS = [
  { ask: "Good morning 👋", reply: "Machine check ho gaya?" },
  { ask: "Almost ready sir", reply: "Dispatch ho gaya?" },
  { ask: "Forwarded many times", reply: "ho gaya??" },
];

const CLEAR = [
  { task: "Machine check", tag: "Done", tone: "done" as const },
  { task: "Dispatch plan", tag: "Done", tone: "done" as const },
  { task: "Packing — order step", tag: "Due 4 pm", tone: "due" as const },
  { task: "Quotation follow-up", tag: "Late", tone: "late" as const },
];

export function Problem() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <h2 className="wp-h2">
              How many times did you ask &ldquo;
              <span className="wp-grad-text">ho gaya?</span>&rdquo; today?
            </h2>
            <p className="wp-sub mt-6 max-w-md">
              You hand out the work in the morning. By evening you&apos;re on the phone
              finding out what actually happened. The machine check that was
              &ldquo;done&rdquo;. The dispatch that was &ldquo;almost ready&rdquo;. The
              follow-up nobody owned.
            </p>
            <p className="wp-sub mt-4 max-w-md">
              WhatsApp groups bury instructions under forwards and good-morning messages.
              Excel sheets are only as current as the last person who remembered to update
              them. And on the day you&apos;re away, the follow-ups stop too.
            </p>
            <p className="mt-6 font-heading font-semibold text-lg text-foreground max-w-md">
              The problem isn&apos;t your people. It&apos;s that the whole system lives in
              your head and your phone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Chaos */}
            <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-rose-700 mb-3">
                <AlertCircle className="h-4 w-4" />
                Today, without a system
              </div>
              <div className="space-y-2">
                {CHAOS.map((c, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="inline-block bg-white border border-rose-200 text-foreground text-sm px-3 py-1.5 rounded-2xl rounded-bl-sm">
                      {c.ask}
                    </div>
                    <div className="flex justify-end">
                      <div className="inline-block bg-rose-500 text-white text-sm px-3 py-1.5 rounded-2xl rounded-br-sm">
                        {c.reply}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear */}
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-emerald-700 mb-3">
                <CheckCircle2 className="h-4 w-4" />
                With WorkPilot
              </div>
              <div className="space-y-2">
                {CLEAR.map((c) => (
                  <div
                    key={c.task}
                    className="flex items-center justify-between gap-2 bg-white rounded-lg border border-emerald-200 px-3 py-2.5"
                  >
                    <span className="text-sm font-medium text-foreground">{c.task}</span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        c.tone === "done"
                          ? "bg-emerald-100 text-emerald-700"
                          : c.tone === "late"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
