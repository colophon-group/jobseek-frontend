import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { stackClientApp } from "@/stack/client";
import { cookies } from "next/headers";
import { JetBrains_Mono } from "next/font/google";
import { siteCopy } from "@/content/site";
import "./globals.css";

const jetbrainsSans = JetBrains_Mono({
    variable: "--font-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: siteCopy.name,
    description: siteCopy.hero.description,
    creator: siteCopy.creator,
    applicationName: siteCopy.name,
    authors: siteCopy.authors,
    referrer: "origin",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: siteCopy.url,
        title: siteCopy.name,
        description: siteCopy.hero.description,
        siteName: siteCopy.name,
        images: [
            {
                url: siteCopy.logoUrl,
                alt: siteCopy.logoAlt,
                width: siteCopy.logoWidth,
                height: siteCopy.logoHeight,
                type: "image/svg+xml",
            },
        ],
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const initialTheme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";
    return (
        <html lang="en" className={initialTheme === "dark" ? "dark" : ""} data-theme={initialTheme}>
        <body
            className={`${jetbrainsSans.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
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
