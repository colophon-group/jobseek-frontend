import { siteCopy } from "@/content/site";

export function Hero() {
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
                    <a href="#" className="btn-primary">
                        {siteCopy.hero.primaryCta}
                    </a>
                    <a href="#" className="btn-secondary">
                        {siteCopy.hero.secondaryCta}
                    </a>
                </div>
            </div>
        </main>
    );
}
