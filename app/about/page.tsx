import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TrustBar } from "@/components/sections/TrustBar";

export const metadata: Metadata = {
  title: "About — WorkPilot is built by LRBC",
  description:
    "WorkPilot is built by LRBC — the team that builds custom ERPs for manufacturers in plastics, woven sacks, kitchenware and wire mesh.",
};

const VALUES = [
  {
    title: "Built with operators",
    desc: "Every feature started as a problem on a factory floor, a sales desk or a dispatch bay — not in a boardroom.",
  },
  {
    title: "Simple on the surface",
    desc: "Your team shouldn't need training manuals. If it isn't obvious in 30 seconds, we redesign it.",
  },
  {
    title: "Honest pricing",
    desc: "Flat per-user. No feature paywalls, no gotcha add-ons, no usage billing surprises at the end of the month.",
  },
  {
    title: "Indian context first",
    desc: "WhatsApp, Google Sheets, UPI, GST — the tools your business actually uses are first-class citizens here.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="wp-hero-wrap pt-36 md:pt-40 pb-10">
          <div className="wp-container text-center max-w-3xl mx-auto">
            <span className="wp-badge mb-5">
              <span className="wp-badge-dot" /> About LRBC
            </span>
            <h1 className="font-heading font-extrabold text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.08] tracking-tight">
              Built by operators,
              <br />
              <span className="wp-grad-text">for operators.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              WorkPilot is built by{" "}
              <span className="font-semibold text-foreground">
                LRBC — Lean Resource Business Consulting
              </span>
              , a team that has spent a decade building custom ERPs for Indian
              manufacturers across plastics, woven sacks, kitchenware and wire mesh. We
              built WorkPilot because every client was asking us for the same thing: a
              single place to run their business, without a six-month software project.
            </p>
          </div>
        </section>

        <section className="wp-section">
          <div className="wp-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="wp-badge mb-5">What we stand for</span>
              <h2 className="wp-h2">Four principles</h2>
              <p className="wp-sub mt-5">
                These aren&apos;t slogans. They&apos;re the filters every WorkPilot
                decision has to pass through before it ships.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {VALUES.map((v, i) => (
                <article key={v.title} className="wp-card">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 h-10 w-10 rounded-full wp-grad-bg grid place-items-center text-white font-heading font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{v.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
