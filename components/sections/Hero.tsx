"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Bell } from "lucide-react";
import { SITE } from "@/lib/utils";
import { PhoneScreenshot, FloatingChip } from "../PhoneMockup";

export function Hero() {
  return (
    <section className="wp-hero-wrap pt-32 md:pt-36 pb-16 md:pb-20">
      <div className="wp-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="wp-badge mb-5">
              <span className="wp-badge-dot" /> WorkPilot by LRBC
            </span>

            <h1 className="font-heading font-extrabold text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.08] tracking-[-0.025em] text-foreground">
              Know what got done today,
              <br className="hidden md:block" />
              without a single <span className="wp-grad-text">follow-up call.</span>
            </h1>

            <p className="mt-5 text-[17px] md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              WorkPilot runs your daily checklists, delegated tasks and process flows in
              one place. It reminds your team for you, flags what&apos;s running late, and
              shows you who is delivering, on any phone.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="wp-btn wp-btn-primary">
                Start my {SITE.trialDays}-day free trial
              </Link>
              <Link href="/how-it-works" className="wp-btn wp-btn-secondary">
                See WorkPilot in action
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card. Set up in hours. Works in any phone browser, nothing to install.
            </p>
          </motion.div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative inline-block">
              {/* Floating chips — positioned to overlap phone edges without going off-screen */}
              <FloatingChip tone="green" className="top-6 left-0 -translate-x-1/3 z-10">
                <CheckCircle2 className="h-3.5 w-3.5" /> Task done
              </FloatingChip>
              <FloatingChip tone="violet" className="top-40 right-0 translate-x-1/3 z-10">
                <Bell className="h-3.5 w-3.5" /> Reminder sent
              </FloatingChip>

              <PhoneScreenshot
                src="/mobile/01-hero.jpg"
                alt="WorkPilot dashboard on a phone, showing the current weekly period, the signed-in user Ravi with Doer / Assigner / Admin roles, and a live performance summary."
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
