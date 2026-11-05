"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="wp-section">
      <div className="wp-container text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="wp-h2">
            Tomorrow, find out what got done without picking up the phone.
          </h2>
          <p className="wp-sub mt-5">
            Start your {SITE.trialDays}-day free trial. We&apos;ll help you set up your
            first checklists and flows, and your team can be working from their phones by
            the end of the day.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="wp-btn wp-btn-primary">
              Start my {SITE.trialDays}-day free trial
            </Link>
            <Link href="/contact" className="wp-btn wp-btn-secondary">
              Book a walkthrough
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            No credit card · Setup help included · Questions? WhatsApp us on{" "}
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1 text-brand-1 font-semibold hover:underline"
            >
              <MessageCircle className="h-3.5 w-3.5" /> {SITE.whatsappDisplay}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
