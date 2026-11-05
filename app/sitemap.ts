import type { MetadataRoute } from "next";

const BASE = "https://workpilot.lrbcloud.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/features", "/how-it-works", "/pricing", "/about", "/contact"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
