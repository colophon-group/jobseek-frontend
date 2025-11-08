"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/content/site";

function MobileMenu({
                        open,
                        onClose,
                    }: {
    open: boolean;
    onClose: () => void;
}) {
    if (!open) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-50 bg-black/60 lg:hidden"
                onClick={onClose}
            />
            <div className="fixed inset-y-0 right-0 z-50 w-72 bg-black px-4 py-6 shadow-lg ring-1 ring-white/10 lg:hidden">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/js_wide_logo_white.svg"
                            alt={siteCopy.logoAlt}
                            width={128}
                            height={32}
                        />
                    </Link>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md p-2 text-zinc-200"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 18 18 6M6 6l12 12"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mt-6 space-y-2">
                    {siteCopy.nav.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/5"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="mt-4 border-t border-white/5 pt-4">
                    <a
                        href="#"
                        className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/5"
                    >
                        {siteCopy.auth.login}
                    </a>
                </div>
            </div>
        </>
    );
}

function Header({
                    onOpenMobile,
                }: {
    onOpenMobile: () => void;
}) {
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/js_wide_logo_white.svg"
                            alt={siteCopy.logoAlt}
                            width={144}
                            height={36}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 lg:flex">
                    {siteCopy.nav.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium hover:text-zinc-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex">
                    <a href="#" className="text-sm font-semibold hover:text-zinc-200">
                        {siteCopy.auth.login} →
                    </a>
                </div>

                {/* Mobile button */}
                <button
                    type="button"
                    onClick={onOpenMobile}
                    className="inline-flex items-center justify-center rounded-md p-2 text-zinc-200 lg:hidden"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-6 w-6"
                        aria-hidden="true"
                    >
                        <path
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
}

function Hero() {
    return (
        <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 py-16 lg:px-6">
            <div className="max-w-2xl">
                <p className="text-sm font-medium text-zinc-400">
                    {siteCopy.hero.eyebrow}
                </p>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {siteCopy.hero.title}
                </h1>
                <p className="mt-6 text-pretty text-base text-zinc-400 sm:text-lg">
                    {siteCopy.hero.description}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                        href="#"
                        className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-zinc-100"
                    >
                        {siteCopy.hero.primaryCta}
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold text-white hover:text-zinc-200"
                    >
                        {siteCopy.hero.secondaryCta}
                    </a>
                </div>
            </div>
        </main>
    );
}

export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white">
            <Header onOpenMobile={() => setMobileOpen(true)} />
            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
            <Hero />
        </div>
    );
}
