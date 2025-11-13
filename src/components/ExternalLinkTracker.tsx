import { siteCopy } from "@/content/site";
"use client";

import { useEffect } from "react";

const UTM_PARAM = siteCopy.ui.externalLinkTracking.utmParam;
const UTM_VALUE = siteCopy.ui.externalLinkTracking.utmValue;

function shouldTrack(anchor: HTMLAnchorElement) {
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#")) {
        return false;
    }
    const protocol = anchor.protocol;
    if (!protocol.startsWith("http")) {
        return false;
    }
    if (anchor.hostname === window.location.hostname) {
        return false;
    }
    if (anchor.dataset.utmskip === "true") {
        return false;
    }
    return true;
}

function applyUtm(anchor: HTMLAnchorElement) {
    if (!shouldTrack(anchor)) {
        return;
    }
    try {
        const url = new URL(anchor.href);
        if (url.searchParams.get(UTM_PARAM) === UTM_VALUE) {
            return;
        }
        url.searchParams.set(UTM_PARAM, UTM_VALUE);
        anchor.href = url.toString();
    } catch (error) {
        // Ignore invalid URLs (mailto, etc.).
    }
}

export function ExternalLinkTracker() {
    useEffect(() => {
        const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"));
        anchors.forEach(applyUtm);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLAnchorElement) {
                        applyUtm(node);
                        return;
                    }
                    if (node instanceof HTMLElement) {
                        node.querySelectorAll<HTMLAnchorElement>("a[href]").forEach(applyUtm);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
