import type { Metadata } from "next";
import { HowWeIndexContent } from "@/components/HowWeIndexContent";
import { createPageMetadata } from "@/lib/metadata";
import { siteCopy } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
    title: `${siteCopy.name} | How we index jobs`,
    description: siteCopy.indexing.hero.description,
    path: "/how-we-index",
});

export default function HowWeIndexPage() {
    return <HowWeIndexContent />;
}
