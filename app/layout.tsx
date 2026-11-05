import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workpilot.lrbcloud.ai"),
  title: {
    default: "WorkPilot — Run your business, not chaos.",
    template: "%s · WorkPilot",
  },
  description:
    "WorkPilot replaces scattered WhatsApp messages, Excel sheets and missed follow-ups with one structured platform your whole team actually uses. Built for Indian SMBs by LRBC.",
  keywords: [
    "WorkPilot",
    "LRBC",
    "business management",
    "task management",
    "flow management",
    "order forms",
    "WhatsApp notifications",
    "SMB software India",
  ],
  openGraph: {
    title: "WorkPilot — Run your business, not chaos.",
    description:
      "One structured platform for tasks, orders, chat and reports — built for Indian SMBs.",
    type: "website",
    locale: "en_IN",
    siteName: "WorkPilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkPilot — Run your business, not chaos.",
    description:
      "One structured platform for tasks, orders, chat and reports.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5227FF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
