import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Explore } from "@/components/sections/Explore";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustBar />
        <Problem />
        <Explore />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
