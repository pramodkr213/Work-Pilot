"use client";

import { motion } from "framer-motion";
import { Gauge, History, FileBarChart2 } from "lucide-react";

const ITEMS = [
  {
    icon: Gauge,
    title: "A score for every person.",
    desc:
      "Built from attendance, tasks completed on time and daily activity. Spot your quiet top performers, and catch a slipping pattern before it becomes a problem.",
  },
  {
    icon: History,
    title: "A record of everything.",
    desc:
      "Every check-in, update and note is logged with a time. When someone says \"I did it\", you can check in seconds.",
  },
  {
    icon: FileBarChart2,
    title: "Reports for your review meeting.",
    desc:
      "Attendance, task completion and productivity summaries in one click, ready to share or export to Excel.",
  },
];

export function OwnerView() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">The owner&apos;s view</span>
          <h2 className="wp-h2">See who&apos;s delivering, not just who showed up</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="wp-card"
            >
              <span className="h-10 w-10 rounded-lg bg-violet-100 text-violet-700 grid place-items-center">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-base text-foreground">{it.title}</h3>
              <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
