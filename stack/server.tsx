import "server-only";

import { StackServerApp } from "@stackframe/stack";
import { stackHandlerUrls } from "./urls";

export const stackServerApp = new StackServerApp({
    tokenStore: "nextjs-cookie",
    urls: stackHandlerUrls,
    baseUrl: process.env.NEXT_PUBLIC_STACK_BASE_URL,
    projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
    publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
    secretServerKey: process.env.STACK_SECRET_SERVER_KEY,
});
