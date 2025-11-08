"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";

type ThemedImageProps = {
    lightSrc: string;
    darkSrc: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
};

export function ThemedImage({
                                lightSrc,
                                darkSrc,
                                alt,
                                width,
                                height,
                                className,
                            }: ThemedImageProps) {
    const { mode } = useContext(ThemeContext);
    const src = mode === "dark" ? darkSrc : lightSrc;
    return (
        <Image src={src} alt={alt} width={width} height={height} className={className} />
    );
}
