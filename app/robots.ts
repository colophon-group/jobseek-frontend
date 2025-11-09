import type { MetadataRoute } from "next";
import { siteCopy } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
    const disallowPaths = siteCopy.seo?.disallow ?? [];

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: disallowPaths,
        },
        sitemap: `${siteCopy.url.replace(/\/$/, "")}/sitemap.xml`,
    };
}
