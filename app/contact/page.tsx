import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/utils";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact us — start with WorkPilot",
  description:
    "Talk to the WorkPilot team. Email us, WhatsApp us, or request a demo. Your workspace can be live within 24 hours.",
};

const CARDS = [
  {
    icon: Mail,
    title: "Email us",
    desc: "We respond within one business day — usually faster.",
    cta: `mailto:${SITE.email}`,
    label: SITE.email,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Fastest way to reach us. Chat with the founding team directly.",
    cta: `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
      "Hi WorkPilot — I'd like to learn more."
    )}`,
    label: "Chat on WhatsApp",
  },
  {
    icon: Phone,
    title: "Request a demo",
    desc: "30-minute walkthrough with your team. Zero obligation.",
    cta: `mailto:${SITE.email}?subject=Request%20a%20WorkPilot%20demo`,
    label: "Book a demo",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="wp-hero-wrap pt-32 md:pt-40 pb-10">
          <div className="wp-container text-center max-w-3xl mx-auto">
            <span className="wp-badge mb-5">
              <span className="wp-badge-dot" /> We&apos;re here to help
            </span>
            <h1 className="font-heading font-extrabold text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-tight">
              Let&apos;s get you <span className="wp-grad-text">live.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Pick the fastest way to reach us. Your WorkPilot workspace can be set up
              in hours, and your {SITE.trialDays}-day free trial starts the moment we onboard you.
            </p>
          </div>
        </section>

        <section className="wp-section">
          <div className="wp-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CARDS.map((c) => (
                <a
                  key={c.title}
                  href={c.cta}
                  target={c.cta.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="wp-card group flex flex-col"
                >
                  <div className="h-11 w-11 rounded-lg bg-violet-100 text-violet-700 grid place-items-center mb-4 group-hover:wp-grad-bg group-hover:text-white transition-all">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{c.title}</h3>
                  <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed flex-1">
                    {c.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-brand-1">
                    {c.label} →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-[#fbfaff] border border-border p-6 md:p-8 flex items-start gap-4">
              <Clock className="h-5 w-5 text-brand-1 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">
                  Operating hours: Mon–Sat · 10:00 to 19:00 IST
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Messages received outside hours are answered the next business morning.
                  Enterprise customers have 24×7 priority support.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl wp-grad-bg text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-xl">Prefer to talk to a human?</h3>
                <p className="mt-1 text-white/80 text-sm md:text-base">
                  Reach out directly — a founding team member will respond personally.
                </p>
              </div>
              <a href={`mailto:${SITE.email}`} className="wp-btn wp-btn-light shrink-0">
                {SITE.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
