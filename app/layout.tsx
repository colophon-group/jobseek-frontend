import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { stackClientApp } from "@/stack/client";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { siteCopy } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
        <body
            className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
        >
        <Analytics />
        <SpeedInsights />
        <StackProvider app={stackClientApp}>
            <StackTheme>
                <ThemeProvider>{children}</ThemeProvider>
            </StackTheme>
        </StackProvider>
        </body>
        </html>
    );
}
