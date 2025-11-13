import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { stackClientApp } from "@/stack/client";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

const jetbrainsSans = localFont({
    src: [
        { path: "../public/fonts/JetBrainsMono-Regular.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-Italic.woff2", weight: "400", style: "italic" },
        { path: "../public/fonts/JetBrainsMono-Medium.woff2", weight: "500", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-MediumItalic.woff2", weight: "500", style: "italic" },
        { path: "../public/fonts/JetBrainsMono-SemiBold.woff2", weight: "600", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-SemiBoldItalic.woff2", weight: "600", style: "italic" },
        { path: "../public/fonts/JetBrainsMono-Bold.woff2", weight: "700", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-BoldItalic.woff2", weight: "700", style: "italic" },
    ],
    variable: "--font-sans",
    display: "swap",
});

const jetbrainsMono = localFont({
    src: [
        { path: "../public/fonts/JetBrainsMono-Regular.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-Italic.woff2", weight: "400", style: "italic" },
        { path: "../public/fonts/JetBrainsMono-Medium.woff2", weight: "500", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-MediumItalic.woff2", weight: "500", style: "italic" },
        { path: "../public/fonts/JetBrainsMono-SemiBold.woff2", weight: "600", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-SemiBoldItalic.woff2", weight: "600", style: "italic" },
        { path: "../public/fonts/JetBrainsMono-Bold.woff2", weight: "700", style: "normal" },
        { path: "../public/fonts/JetBrainsMono-BoldItalic.woff2", weight: "700", style: "italic" },
    ],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const initialTheme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";
    return (
        <html lang="en" className={initialTheme === "dark" ? "dark" : ""} data-theme={initialTheme}>
        <body
            className={`${jetbrainsSans.variable} ${jetbrainsMono.variable} antialiased`}
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
        <Analytics />
        <SpeedInsights />
        <StackProvider app={stackClientApp}>
            <StackTheme>
                <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
            </StackTheme>
        </StackProvider>
        </body>
        </html>
    );
}
