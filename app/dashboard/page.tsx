import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack/server";

export default async function DashboardPage() {
    const session = await stackServerApp.getUser();
    if (!session) redirect("/handler/signup");
    return <main className="container-6xl py-8">…dashboard UI…</main>;
}