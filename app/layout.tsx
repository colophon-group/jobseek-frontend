import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { StackProvider, StackTheme } from "@stackframe/stack";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { stackClientApp } from "@/stack/client";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
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
    title: "Job Seek",
    description: "Keep your hand on the job market pulse!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
        >
        <Analytics />
        <SpeedInsights />
        <StackProvider app={stackClientApp}>
            <StackTheme>{children}</StackTheme>
        </StackProvider>
        </body>
        </html>
    );
}
