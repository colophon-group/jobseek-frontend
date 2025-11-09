import type { MetadataRoute } from "next";
import { siteCopy } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteCopy.url.replace(/\/$/, "");
    const entries = siteCopy.seo?.sitemap ?? [];

    return entries.map((entry) => ({
        url: `${baseUrl}${entry.path === "/" ? "" : entry.path}`,
        lastModified: new Date(),
        changeFrequency: entry.changeFrequency ?? "weekly",
        priority: entry.priority ?? 0.5,
    }));
}
