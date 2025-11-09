"use client";

import { useState } from "react";
import { siteCopy } from "@/content/site";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";
import { renderInlineCode } from "@/lib/renderInlineCode";

export function LicenseContent() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const content = siteCopy.license;
    const codeLink = `${siteCopy.repoUrl}/blob/main/LICENSE`;
    const dataLink = `${siteCopy.repoUrl}/blob/main/LICENSE-JOB-DATA`;
    const contactEmail = siteCopy.indexing.contactEmail;

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Header onOpenMobileAction={() => setMobileOpen(true)} />
            <MobileMenu open={mobileOpen} onCloseAction={() => setMobileOpen(false)} />

            <main className="section-pad">
                <div className="container-6xl stack-lg">
                    <header className="stack-md article-intro">
                        <p className="eyebrow">{content.hero.eyebrow}</p>
                        <h1>{content.hero.title}</h1>
                        <p>{renderInlineCode(content.hero.description)}</p>
                    </header>

                    <article className="md-article">
                        <section className="md-block">
                            <h2>{content.code.title}</h2>
                            <p>{content.code.summary}</p>
                            <ul>
                                {content.code.rights.map((item) => (
                                    <li key={item}>{renderInlineCode(item)}</li>
                                ))}
                            </ul>
                            <a
                                className="font-semibold text-[var(--foreground)] underline"
                                href={codeLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {content.code.linkLabel}
                            </a>
                        </section>

                        <section className="md-block">
                            <h2>{content.data.title}</h2>
                            <p>{content.data.summary}</p>
                            <ul>
                                {content.data.rights.map((item) => (
                                    <li key={item}>{renderInlineCode(item)}</li>
                                ))}
                            </ul>
                            <a
                                className="font-semibold text-[var(--foreground)] underline"
                                href={dataLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {content.data.linkLabel}
                            </a>
                        </section>

                        <section className="md-block">
                            <p>
                                {content.contactCta}{" "}
                                <a
                                    className="font-semibold text-[var(--foreground)] underline"
                                    href={`mailto:${contactEmail}`}
                                >
                                    {contactEmail}
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
