import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] md:w-[300px] rounded-[36px] bg-white p-2.5 border-[6px] border-brand-1/90 shadow-[0_30px_60px_-20px_rgba(82,39,255,0.35),0_12px_30px_-10px_rgba(82,39,255,0.25)]",
        className
      )}
    >
      <div className="h-6 flex items-center justify-center">
        <span className="h-1.5 w-16 rounded-full bg-slate-200" />
      </div>
      <div className="rounded-[26px] bg-white overflow-hidden min-h-[480px] flex flex-col">
        {children}
      </div>
      <div className="h-9 flex items-center justify-around text-slate-300 text-[11px]">
        <span className="h-5 w-5 rounded border border-slate-200" aria-hidden />
        <span className="h-5 w-5 rounded-full border border-slate-200" aria-hidden />
        <span className="h-5 w-5 rounded border border-slate-200" aria-hidden />
      </div>
    </div>
  );
}

/** Real mobile screenshot inside a phone frame. */
export function PhoneScreenshot({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] sm:w-[270px] rounded-[36px] bg-white p-2.5 border-[6px] border-brand-1/90 shadow-[0_30px_60px_-20px_rgba(82,39,255,0.35),0_12px_30px_-10px_rgba(82,39,255,0.25)]",
        className
      )}
    >
      <div className="h-6 flex items-center justify-center">
        <span className="h-1.5 w-16 rounded-full bg-slate-200" />
      </div>
      <div className="relative rounded-[26px] bg-white overflow-hidden" style={{ aspectRatio: "9 / 18" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 280px, 300px"
          priority={priority}
          className="object-cover object-top"
        />
      </div>
      <div className="h-9 flex items-center justify-around text-slate-300 text-[11px]">
        <span className="h-5 w-5 rounded border border-slate-200" aria-hidden />
        <span className="h-5 w-5 rounded-full border border-slate-200" aria-hidden />
        <span className="h-5 w-5 rounded border border-slate-200" aria-hidden />
      </div>
    </div>
  );
}

export function FloatingChip({
  children,
  tone = "green",
  className,
}: {
  children: React.ReactNode;
  tone?: "green" | "violet";
  className?: string;
}) {
  const toneCls =
    tone === "green"
      ? "bg-white border-emerald-200 text-emerald-700"
      : "bg-white border-violet-200 text-violet-700";
  return (
    <span
      className={cn(
        "absolute inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-semibold shadow-md whitespace-nowrap",
        toneCls,
        className
      )}
    >
      {children}
    </span>
  );
}
