"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = [
  {
    q: "My staff aren't comfortable with technology. Will they actually use it?",
    a: "Yes. WorkPilot opens in any phone browser — nothing to install. Each person sees a short list of what they need to do today. Our setup team runs a 20-minute walkthrough on day one, and we stay available on WhatsApp for the first two weeks.",
  },
  {
    q: "Do they need to download an app?",
    a: "No. WorkPilot is a web app that works on any smartphone browser. One link, saved to the home screen, is all they need.",
  },
  {
    q: "What exactly is FMS?",
    a: "Flow Management System — our name for work that moves from one person or department to another. An order that goes Booking → Production → Packing → Dispatch is a flow. Every step has its own owner and time limit, so you can see where it's stuck and with whom.",
  },
  {
    q: "We already use an attendance app. Why switch?",
    a: "Attendance is included in WorkPilot at no extra cost. But more importantly, your attendance connects to tasks — so you see not just who showed up, but who delivered. Most teams drop the standalone app within a month.",
  },
  {
    q: "Will it fit the way we work, or do we have to change?",
    a: "WorkPilot adapts to your departments, your checklists and your flow steps. We map your existing structure on the first setup call. You don't restructure your business to suit the software.",
  },
  {
    q: "Who can see what?",
    a: "Staff see their own tasks and checklists. Managers see their team's board. Owners see everything. Role-based access is included from the Professional plan.",
  },
  {
    q: "What happens when the free trial ends?",
    a: "On day 15 we send you a summary and a plan recommendation based on actual team size. You choose a plan to continue, or we export your data and close the workspace. No automatic charges.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">FAQ</span>
          <h2 className="wp-h2">Questions owners ask us</h2>
        </div>

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl border bg-white transition-all ${
                  isOpen ? "border-brand-1/50 shadow-md" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                >
                  <span className="font-semibold text-foreground text-[15.5px]">{f.q}</span>
                  <span
                    className={`h-7 w-7 rounded-full grid place-items-center transition-colors shrink-0 ${
                      isOpen ? "wp-grad-bg text-white" : "bg-muted text-foreground"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-[14.5px] text-muted-foreground leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
