import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DayTimeline } from "@/components/sections/DayTimeline";
import { ShopFloor } from "@/components/sections/ShopFloor";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How it works — up and running in 24 hours",
  description:
    "The 3-step rollout, a day in the life of a WorkPilot team, and why if your team has a phone, they can use WorkPilot.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="wp-hero-wrap pt-36 md:pt-40 pb-6">
          <div className="wp-container text-center max-w-3xl mx-auto">
            <span className="wp-badge mb-5">
              <span className="wp-badge-dot" /> How it works
            </span>
            <h1 className="font-heading font-extrabold text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.08] tracking-tight">
              From sign-up to live in
              <br />
              <span className="wp-grad-text">under 24 hours.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Three short steps to go live, a walkthrough of a WorkPilot day, and the
              setup help that comes with every plan.
            </p>
          </div>
        </section>

        <HowItWorks />
        <DayTimeline />
        <ShopFloor />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
