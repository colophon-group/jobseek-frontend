"use client";

import { siteCopy } from "@/content/site";
import { useUser } from "@stackframe/stack";

export function Hero() {
    const user = useUser();
    const isLoggedIn = Boolean(user);
    const primaryHref = isLoggedIn ? siteCopy.nav.dashboard.href : siteCopy.nav.login.href;
    const primaryLabel = isLoggedIn ? siteCopy.dashboard.actionGoTo : siteCopy.hero.primaryCta;

    return (
        <main className="container-6xl py-16 lg:py-16">
            <div className="max-w-2xl">
                <p className="eyebrow">{siteCopy.hero.eyebrow}</p>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
                    {siteCopy.hero.title}
                </h1>
                <p className="mt-6 body-muted sm:text-lg">
                    {siteCopy.hero.description}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a href={primaryHref} className="btn-primary">
                        {primaryLabel}
                    </a>
                    <a href={siteCopy.nav.features.href} className="btn-secondary">
                        {siteCopy.hero.secondaryCta}
                    </a>
                </div>
            </div>
        </main>
    );
}
