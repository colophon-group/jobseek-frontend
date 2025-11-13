import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack/server";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = createPageMetadata({
    title: "Dashboard | Job Seek",
    path: "/dashboard",
    robots: {
        index: false,
        follow: false,
    },
});

export default async function DashboardPage() {
    const session = await stackServerApp.getUser();
    if (!session) redirect("/handler/signup");
    return <DashboardShell />;
}
