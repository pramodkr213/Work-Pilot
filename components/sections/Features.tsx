"use client";

import { motion } from "framer-motion";
import { Repeat, Send, GitBranch, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PhoneScreenshot } from "../PhoneMockup";

type Row = {
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  desc: string;
  img: string;
  alt: string;
};

const ROWS: Row[] = [
  {
    icon: Repeat,
    title: "Checklists",
    eyebrow: "For the work that repeats",
    desc:
      "Shift-start checks, machine cleaning, stock counts, daily reports, GST filing, employee salary, insurance renewals and more. Set them up once and WorkPilot puts them in front of the right person on the right day, then shows you which ones were skipped.",
    img: "/mobile/02-checklists.jpg",
    alt: "WorkPilot Manage Checklist screen on a phone with Download, Refresh, Bulk Upload and New Task buttons, a searchable list of recurring tasks assigned to team members.",
  },
  {
    icon: Send,
    title: "Delegation",
    eyebrow: "For the work you hand out",
    desc:
      "Assign a task to a person or a team with a deadline. They see it on their phone, update it as they go, and get a reminder before it's late. You stop being the reminder.",
    img: "/mobile/03-delegation.jpg",
    alt: "WorkPilot Manage Delegation screen on a phone showing a task card with deadline, assigner, assignee and an Accepted status pill, ready for quick action.",
  },
  {
    icon: GitBranch,
    title: "FMS",
    eyebrow: "For the work that moves step by step",
    desc:
      "Orders, dispatches, purchase requests: anything that passes from one desk (department) to another. Every step has an owner and a time limit, so you can see exactly where something is stuck, and with whom.",
    img: "/mobile/04-fms.jpg",
    alt: "WorkPilot FMS live orders view on a phone with 708 active orders, 708 delayed counters, Live Orders / Manage Flows / Global View tabs and a search + status filter.",
  },
];

export function Features() {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="wp-badge mb-5">What WorkPilot does</span>
          <h2 className="wp-h2">One place for every kind of work your team does</h2>
          <p className="wp-sub mt-5">
            Most work in a business is one of three kinds: work that repeats, work you
            hand out, and work that moves from desk (department) to desk (department).
            WorkPilot has a tool for each, plus attendance and leave management.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {ROWS.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className={`rounded-3xl border border-border bg-white p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                i % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <span className="h-11 w-11 rounded-xl wp-grad-bg grid place-items-center text-white mb-5">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground">
                  {r.title}
                </h3>
                <div className="wp-eyebrow mt-2">{r.eyebrow}</div>
                <p className="mt-5 text-[15.5px] text-muted-foreground leading-relaxed max-w-xl">
                  {r.desc}
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <PhoneScreenshot src={r.img} alt={r.alt} />
              </div>
            </motion.article>
          ))}

          {/* Attendance pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-white p-5 md:p-6 flex items-start gap-4"
          >
            <span className="h-11 w-11 rounded-xl wp-grad-bg grid place-items-center text-white shrink-0">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-heading font-bold text-lg">Attendance — included</h3>
              <p className="mt-1 text-muted-foreground text-[15px]">
                Who came in, who&apos;s late, who&apos;s absent, updated live. No register,
                no month-end tallying.
              </p>
            </div>
          </motion.div>

          <p className="mt-10 text-center max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
            Every person gets one list: what to do today. You get one screen: what&apos;s
            done, what&apos;s late, and who to talk to.
          </p>
        </div>
      </div>
    </section>
  );
}
