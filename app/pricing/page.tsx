import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing — simple per-user plans",
  description:
    "₹399, ₹299 or ₹199 per user per month. Bigger teams pay less per person. Every plan starts with a 15-day free trial and includes setup help.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="wp-hero-wrap pt-36 md:pt-40 pb-6">
          <div className="wp-container text-center max-w-3xl mx-auto">
            <span className="wp-badge mb-5">
              <span className="wp-badge-dot" /> Transparent pricing
            </span>
            <h1 className="font-heading font-extrabold text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.08] tracking-tight">
              Pay for the team you have —
              <br />
              <span className="wp-grad-text">less per person as you grow.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Every plan includes all core features and setup help. 15-day free trial, no
              credit card required.
            </p>
          </div>
        </section>

        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
