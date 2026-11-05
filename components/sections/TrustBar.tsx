"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  "CPP",
  "ARV Companies",
  "Work Digitally",
  "SANT Wires Ltd.",
  "Bhairavi Windows",
  "Navtech Industries",
  "Colorplas",
];

export function TrustBar() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <p className="text-center max-w-3xl mx-auto text-[15px] md:text-base text-muted-foreground leading-relaxed">
          Built by <span className="font-semibold text-foreground">LRBC</span>, the team
          that builds custom ERPs for manufacturers in plastics, woven sacks,
          kitchenware, wire mesh and more.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-5">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            Our Clients
          </span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
          >
            {CLIENTS.map((c) => (
              <motion.span
                key={c}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 0.65, y: 0, transition: { duration: 0.5 } },
                }}
                className="font-heading font-bold text-base md:text-lg text-foreground/70 tracking-tight whitespace-nowrap hover:opacity-100 transition-opacity"
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
