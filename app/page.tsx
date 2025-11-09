import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default function Page() {
    return <HomePage />;
}
