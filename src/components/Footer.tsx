"use client";

import { siteCopy } from "@/content/site";

export function Footer() {
    const year = new Date().getFullYear();
    const footer = siteCopy.footer;

    return (
        <footer className="footer">
            <div className="container-6xl footer-inner">
                <p className="footer-text">
                    © {year} {siteCopy.creator}. {footer.text}
                </p>
                <div className="footer-links">
                    {footer.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="footer-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
