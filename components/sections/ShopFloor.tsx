"use client";

import { motion } from "framer-motion";
import { Smartphone, Shield, BellRing, Network } from "lucide-react";

const CARDS = [
  {
    icon: Smartphone,
    title: "Nothing to install.",
    desc: "It opens in any phone browser. No app store, no storage space, no updates to chase.",
  },
  {
    icon: Shield,
    title: "Everyone sees only what&apos;s theirs.",
    desc: "Staff see their own list. Managers see their team. You see everything.",
    raw: true,
  },
  {
    icon: BellRing,
    title: "Reminders go out on their own.",
    desc: "By email on every plan, and on WhatsApp from the Professional plan.",
  },
  {
    icon: Network,
    title: "Fits your structure.",
    desc:
      "Departments like Production, Sales and Back-office are mapped as they are today. No reorganising to suit the software.",
  },
];

export function ShopFloor() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">Built for the shop floor</span>
          <h2 className="wp-h2">If your team has a phone, they can use WorkPilot</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {CARDS.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="wp-card flex items-start gap-4"
            >
              <span className="h-10 w-10 rounded-lg bg-violet-100 text-violet-700 grid place-items-center shrink-0">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <h3
                  className="font-heading font-bold text-base text-foreground"
                  dangerouslySetInnerHTML={{ __html: c.title }}
                />
                <p
                  className="mt-1.5 text-[14.5px] text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.desc }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
