import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/sections/Features";
import { RealScreens } from "@/components/sections/RealScreens";
import { OwnerView } from "@/components/sections/OwnerView";
import { ShopFloor } from "@/components/sections/ShopFloor";
import { VsCompare } from "@/components/sections/VsCompare";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Features — everything WorkPilot does",
  description:
    "Checklists, delegation, FMS, attendance, chat, reports and the real app screens — the whole WorkPilot toolkit on one page.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="wp-hero-wrap pt-36 md:pt-40 pb-6">
          <div className="wp-container text-center max-w-3xl mx-auto">
            <span className="wp-badge mb-5">
              <span className="wp-badge-dot" /> What WorkPilot does
            </span>
            <h1 className="font-heading font-extrabold text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.08] tracking-tight">
              The whole system,
              <br />
              <span className="wp-grad-text">in one place.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Every tool your team needs to replace WhatsApp chaos — checklists,
              delegation, process flows, attendance and performance, together.
            </p>
          </div>
        </section>

        <Features />
        <RealScreens />
        <OwnerView />
        <ShopFloor />
        <VsCompare />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
