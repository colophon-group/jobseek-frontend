import type { Metadata } from "next";
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
    title: "Account | Job Seek",
    path: "/handler",
    robots: {
        index: false,
        follow: false,
    },
});

export default function Handler(props: unknown) {
    return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
