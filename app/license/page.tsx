import type { Metadata } from "next";
import { LicenseContent } from "@/components/LicenseContent";
import { createPageMetadata } from "@/lib/metadata";
import { siteCopy } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
    title: `${siteCopy.name} | License`,
    description: siteCopy.license.hero.description,
    path: "/license",
});

export default function LicensePage() {
    return <LicenseContent />;
}
