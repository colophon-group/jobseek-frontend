"use client";

import Image from "next/image";
import { useContext } from "react";
import type { CSSProperties, ReactNode } from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { ThemeContext } from "@/components/ThemeProvider";
import { siteCopy } from "@/content/site";

type CropInsets = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type PublicDomainAsset = {
    href?: string;
    light?: string;
    dark?: string;
    alt: string;
    width: number;
    height: number;
    title?: string;
    author?: string;
    date?: string;
    link?: string;
    crop?: CropInsets;
};

type PublicDomainArtProps = {
    asset: PublicDomainAsset;
    focus?: {
        x?: number; // percentage 0-100
        y?: number; // percentage 0-100
    };
    crop?: CropInsets;
    credit?: boolean;
    sx?: SxProps<Theme>;
    children?: ReactNode;
};

/**
 * Displays a public-domain artwork with cover-cropping and optional attribution.
 */
export function PublicDomainArt({
    asset,
    focus,
    crop,
    credit = true,
    sx,
    children,
}: PublicDomainArtProps) {
    const { href, light, dark, alt, width, height, title, author, date, link, crop: assetCrop } = asset;
    const { mode } = useContext(ThemeContext);
    const resolvedSrc = mode === "dark"
        ? dark ?? light ?? href
        : light ?? dark ?? href;
    if (!resolvedSrc) {
        return null;
    }
    const objectPosition = `${focus?.x ?? 50}% ${focus?.y ?? 50}%`;

    const appliedCrop = crop ?? assetCrop;
    const imageCropStyle = (() => {
        if (!appliedCrop) {
            return {} as CSSProperties;
        }
        const { top = 0, right = 0, bottom = 0, left = 0 } = appliedCrop;
        const effectiveWidth = Math.max(1, width - left - right);
        const effectiveHeight = Math.max(1, height - top - bottom);
        const scaleX = width / effectiveWidth;
        const scaleY = height / effectiveHeight;
        const translateXPct = (left / width) * 100;
        const translateYPct = (top / height) * 100;

        if (
            scaleX === 1 &&
            scaleY === 1 &&
            translateXPct === 0 &&
            translateYPct === 0
        ) {
            return {} as CSSProperties;
        }

        return {
            transformOrigin: "top left",
            transform: `translate(${-translateXPct}%, ${-translateYPct}%) scale(${scaleX}, ${scaleY})`,
        } as CSSProperties;
    })();

    const imageStyle: CSSProperties = {
        objectFit: "cover",
        objectPosition,
        ...imageCropStyle,
    };
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                boxShadow: "0px 45px 120px rgba(15, 23, 42, 0.25)",
                minHeight: "100%",
                ...sx,
            }}
        >
            <Image
                src={resolvedSrc}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={imageStyle}
                priority={false}
            />
            {children}
            {credit && (title || author) && (
                <Box
                    component="a"
                    href={link ?? href ?? resolvedSrc}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        position: "absolute",
                        right: 16,
                        bottom: 16,
                        fontSize: "0.75rem",
                        letterSpacing: 0.2,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                        textDecoration: "none",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        borderRadius: 999,
                        px: 1.5,
                        py: 0.5,
                        backdropFilter: "blur(6px)",
                    }}
                >
                    {title ? `${title}` : siteCopy.ui.publicDomainCreditFallback}
                    {author ? ` · ${author}` : ""}
                    {date ? ` (${date})` : ""}
                </Box>
            )}
        </Box>
    );
}
