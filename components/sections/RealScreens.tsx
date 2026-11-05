"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";

const TABS = [
  {
    label: "All tasks",
    src: "/screens/01-all-tasks.png",
    alt: "My Tasks view with the All Data tab active, showing delegation and checklist tasks side by side with type labels, deadlines and priority badges.",
    caption:
      "Checklists, delegated tasks and FMS missions side by side — with type labels, deadlines and quick filters like Today and Next 7 days.",
  },
  {
    label: "Checklists",
    src: "/screens/02-checklists.png",
    alt: "My Tasks view with the Checklist tab active, listing recurring tasks with Weekly and Monthly cycles.",
    caption:
      "Daily, weekly and monthly routines show up on their own with the cycle beside each, ready to submit in one tap.",
  },
  {
    label: "Delegated tasks",
    src: "/screens/03-delegated.png",
    alt: "My Tasks view with the Delegation tab active, each row showing who assigned it, deadline, priority, status and notes.",
    caption:
      "Every task you've been given, with who assigned it, the deadline, its priority and what to do next: complete, send back for revision or pass it on.",
  },
  {
    label: "Manage delegation",
    src: "/screens/04-manage.png",
    alt: "Manage Delegation screen listing tasks assigned to the team with Accepted and Completed status pills, followers and quick actions.",
    caption:
      "The assigner's view: every task you've handed out, who has it, when it's due and where it stands.",
  },
];

const CARDS = [
  {
    title: "Know where you stand, instantly",
    desc: "Late, not done, done on time and pending, for delegation, checklists and FMS, each with its own count and percentage.",
  },
  {
    title: "One hub for every kind of task",
    desc: "Checklists, delegated tasks and FMS missions side by side, with red badges for what's waiting and quick filters like Today and Next 7 days.",
  },
  {
    title: "Every task, owner and status",
    desc: "Who assigned it, when it's due, how urgent it is, and the buttons to complete it, send it back for revision or pass it on.",
  },
];

export function RealScreens() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const prev = () => setActive((a) => (a - 1 + TABS.length) % TABS.length);
  const next = () => setActive((a) => (a + 1) % TABS.length);

  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="wp-badge mb-5">The real product</span>
          <h2 className="wp-h2">This is what you&apos;ll actually see</h2>
          <p className="wp-sub mt-5">
            Real WorkPilot screens, not mock-ups. Tap through them, or open any one full size.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                i === active
                  ? "wp-grad-bg text-white border-transparent shadow-md"
                  : "bg-white text-foreground border-border hover:border-brand-2/60"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Screenshot */}
        <div className="mt-8 relative">
          <button
            onClick={prev}
            aria-label="Previous screen"
            className="hidden md:grid absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white border border-border shadow-md z-10 hover:border-brand-1 hover:text-brand-1"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next screen"
            className="hidden md:grid absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white border border-border shadow-md z-10 hover:border-brand-1 hover:text-brand-1"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="wp-frame">
                <div className="wp-frame-bar">
                  <span className="wp-frame-dot" style={{ background: "#ff5f57" }} />
                  <span className="wp-frame-dot" style={{ background: "#febc2e" }} />
                  <span className="wp-frame-dot" style={{ background: "#28c840" }} />
                  <span className="ml-auto text-[10px] font-mono text-white/50">
                    WorkPilot · {TABS[active].label}
                  </span>
                  <span className="w-9" />
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="block w-full group relative bg-white"
                  aria-label="Open screenshot full size"
                >
                  <Image
                    src={TABS[active].src}
                    alt={TABS[active].alt}
                    width={2732}
                    height={1706}
                    priority={active === 0}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="w-full h-auto block"
                  />
                  <span className="absolute inset-0 bg-brand-1/0 group-hover:bg-brand-1/5 transition-colors" />
                </button>
              </div>

              <button
                onClick={() => setLightbox(true)}
                className="mt-4 ml-auto flex items-center gap-1.5 text-xs font-semibold text-brand-1 hover:underline"
              >
                <Maximize2 className="h-3.5 w-3.5" /> View full size
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {TABS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 wp-grad-bg" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>

          <p className="mt-5 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            {TABS[active].caption}
          </p>
        </div>

        {/* 3 cards below */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CARDS.map((c) => (
            <article key={c.title} className="wp-card">
              <h3 className="font-heading font-bold text-base text-foreground">{c.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>

        {/* small stat pill */}
        <div className="mt-8 mx-auto max-w-md rounded-full border border-border bg-white shadow-sm px-5 py-3 flex items-center justify-around text-xs font-mono">
          <span className="text-brand-1 font-bold">
            67% <span className="text-muted-foreground">CHK</span>
          </span>
          <span className="text-brand-1 font-bold">
            57% <span className="text-muted-foreground">DEL</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-brand-1 font-bold">
            <span className="h-5 w-5 rounded-full wp-grad-bg grid place-items-center text-white text-[9px]">
              ★
            </span>
            0 <span className="text-muted-foreground">POINTS</span>
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm grid place-items-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setLightbox(false)}
              aria-label="Close"
              className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full"
            >
              <Image
                src={TABS[active].src}
                alt={TABS[active].alt}
                width={2732}
                height={1706}
                className="w-full h-auto rounded-lg shadow-2xl"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
