import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wp-hero-wrap min-h-[70vh] grid place-items-center">
        <div className="wp-container text-center max-w-xl">
          <p className="font-mono text-sm tracking-[0.2em] text-brand-1">ERROR 404</p>
          <h1 className="mt-3 font-heading font-extrabold text-5xl md:text-6xl tracking-tight">
            Page not found.
          </h1>
          <p className="mt-5 text-muted-foreground">
            The page you&apos;re looking for has moved or never existed. Let&apos;s get you
            back on track.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/" className="wp-btn wp-btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="wp-btn wp-btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
