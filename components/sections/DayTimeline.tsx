"use client";

import { motion } from "framer-motion";
import { UserCheck, Send, Hourglass, Bell, LineChart } from "lucide-react";

const EVENTS = [
  {
    time: "8:45 am",
    tag: "CHECKED IN",
    icon: UserCheck,
    text: "Your floor supervisor marks himself in on his phone. His shift-start checklist is already waiting.",
  },
  {
    time: "10:30 am",
    tag: "DELEGATED",
    icon: Send,
    text: "Between meetings, you hand a quotation follow-up to Sales, due by 4 pm. It takes ten seconds.",
  },
  {
    time: "1:00 pm",
    tag: "FLAGGED RED",
    icon: Hourglass,
    text: "An order has sat at packing for three hours past its limit. It turns red on your screen before the customer calls you.",
  },
  {
    time: "3:30 pm",
    tag: "REMINDER SENT",
    icon: Bell,
    text: "The quotation is still open. WorkPilot sends the reminder, so you don't have to.",
  },
  {
    time: "6:00 pm",
    tag: "DAY REVIEW",
    icon: LineChart,
    text: "One look: 42 of 45 checklists done, two tasks overdue, and you know exactly whom to talk to tomorrow.",
    bar: true,
  },
];

export function DayTimeline() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">A day with WorkPilot</span>
          <h2 className="wp-h2">What your day looks like when the system does the chasing</h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <ol className="relative space-y-4">
            <span
              className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-brand-1 via-brand-2 to-brand-3"
              aria-hidden
            />
            {EVENTS.map((e, i) => (
              <motion.li
                key={e.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16"
              >
                <span className="absolute left-0 top-0 h-10 w-10 rounded-full wp-grad-bg grid place-items-center text-white shadow-md">
                  <e.icon className="h-5 w-5" />
                </span>
                <div className="rounded-xl border border-border bg-white p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-semibold text-foreground">
                      {e.time}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-brand-1 bg-brand-1/8 px-1.5 py-0.5 rounded">
                      {e.tag}
                    </span>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{e.text}</p>
                  {e.bar && (
                    <div className="mt-3">
                      <div className="h-2 w-full rounded-full bg-violet-100 overflow-hidden">
                        <div className="h-full rounded-full wp-grad-bg" style={{ width: "93%" }} />
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                        <span>42 of 45 checklists</span>
                        <span>2 overdue</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            An example day. Your checklists and steps are set up around how your business
            already works.
          </p>
        </div>
      </div>
    </section>
  );
}
