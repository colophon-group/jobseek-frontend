import type { Metadata } from "next";
import { HowWeIndexContent } from "@/components/HowWeIndexContent";

export const metadata: Metadata = {
    title: "How we index jobs | Job Seek",
    description: "Learn how Job Seek discovers, fetches, and stores job postings while respecting publishers.",
};

export default function HowWeIndexPage() {
    return <HowWeIndexContent />;
}
