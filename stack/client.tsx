import { StackClientApp } from "@stackframe/stack";
import { stackHandlerUrls } from "./urls";

export const stackClientApp = new StackClientApp({
    tokenStore: "nextjs-cookie",
    urls: stackHandlerUrls,
    baseUrl: process.env.NEXT_PUBLIC_STACK_BASE_URL,
    projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
    publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
});
