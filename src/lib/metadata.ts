import type { Metadata } from "next";
import { siteCopy } from "@/content/site";

export const metadataBase = new URL(siteCopy.url);

type CreateMetadataOptions = {
    title?: string;
    description?: string;
    path?: string;
    robots?: Metadata["robots"];
};

export function createPageMetadata({
    title = siteCopy.name,
    description = siteCopy.hero.description,
    path = "/",
    robots,
}: CreateMetadataOptions = {}): Metadata {
    const absoluteUrl = new URL(path, siteCopy.url).toString();

    return {
        title,
        description,
        applicationName: siteCopy.name,
        creator: siteCopy.creator,
        authors: siteCopy.authors,
        referrer: "origin",
        metadataBase,
        alternates: {
            canonical: absoluteUrl,
        },
        openGraph: {
            type: "website",
            url: absoluteUrl,
            title,
            description,
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
        // twitter: { // TODO: enable when we have a nice large image
        //     card: "summary_large_image",
        //     title,
        //     description,
        //     images: [siteCopy.logoUrl],
        // },
        icons: {
            icon: [
                { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
                { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
                { url: "/favicon.ico" },
            ],
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
        robots: robots ?? {
            index: true,
            follow: true,
        },
    };
}
