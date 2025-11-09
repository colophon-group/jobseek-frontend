"use client";

import { useState } from "react";
import { siteCopy } from "@/content/site";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export function HowWeIndexContent() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const indexing = siteCopy.indexing;

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Header onOpenMobileAction={() => setMobileOpen(true)} />
            <MobileMenu open={mobileOpen} onCloseAction={() => setMobileOpen(false)} />

            <main className="section-pad">
                <div className="container-6xl stack-lg">
                    <header className="stack-md article-intro">
                        <p className="eyebrow">{indexing.hero.eyebrow}</p>
                        <h1>{indexing.hero.title}</h1>
                        <p>{indexing.hero.description}</p>
                    </header>

                    <article className="md-article">
                        <section className="md-block">
                            <h2>{indexing.assurances.title}</h2>
                            <ul>
                                {indexing.assurances.items.map((item) => (
                                    <li key={item.title}>
                                        <strong>{item.title}</strong> {item.body}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="md-block">
                            <h2>{indexing.ingestion.title}</h2>
                            <ol>
                                {indexing.ingestion.steps.map((step) => (
                                    <li key={step.title}>
                                        <strong>{step.title}</strong> {step.body}
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <section className="md-block">
                            <p className="text-info">
                                <InfoOutlinedIcon fontSize="small" className="inline-icon" aria-hidden="true" />
                                <span>
                                    {indexing.sitemapNote.prefix} <code>{indexing.sitemapNote.code}</code> {indexing.sitemapNote.suffix}
                                </span>
                            </p>
                        </section>

                        <section className="md-block">
                            <h2>{indexing.optOut.title}</h2>
                            <p>
                                {indexing.optOut.body}{" "}
                                <a className="font-semibold text-[var(--foreground)] underline" href={`mailto:${indexing.contactEmail}`}>
                                    {indexing.contactEmail}
                                </a>
                                .
                            </p>
                        </section>

                        <section className="md-block">
                            <h2>{indexing.automation.title}</h2>
                            <p>{indexing.automation.body}</p>
                        </section>

                        <section className="md-block">
                            <h2>{indexing.oss.title}</h2>
                            <p>
                                {indexing.oss.body} Browse the repository at{" "}
                                <a
                                    className="font-semibold text-[var(--foreground)] underline"
                                    href={indexing.ossRepoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {indexing.ossRepoUrl.replace("https://", "")}
                                </a>
                                .
                            </p>
                        </section>

                        <section className="md-block">
                            <h2>{indexing.outreach.title}</h2>
                            <p>
                                {indexing.outreach.body}{" "}
                                <a className="font-semibold text-[var(--foreground)] underline" href={`mailto:${indexing.contactEmail}`}>
                                    {indexing.contactEmail}
                                </a>
                                .
                            </p>
                        </section>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
