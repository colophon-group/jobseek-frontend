"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { siteCopy } from "@/content/site";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { ThemedImage } from "@/components/ThemedImage";

const CloseIcon = dynamic(() => import("@mui/icons-material/Close"), { ssr: false });

type MobileMenuProps = {
    open: boolean;
    onCloseAction: () => void;
};

export function MobileMenu({ open, onCloseAction }: MobileMenuProps) {
    if (!open) return null;

    return (
        <>
            {/* overlay */}
            <div
                className="fixed inset-0 z-50 bg-black/60 lg:hidden"
                onClick={onCloseAction}
            />

            {/* panel */}
            <div className="fixed inset-y-0 right-0 z-50 w-72 panel-raised px-4 py-6 lg:hidden">
                <div className="flex items-center justify-between gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <ThemedImage
                            darkSrc={siteCopy.logoWide.dark}
                            lightSrc={siteCopy.logoWide.light}
                            alt={siteCopy.logoWide.alt}
                            width={siteCopy.logoWide.width}
                            height={siteCopy.logoWide.height}
                        />
                    </Link>
                    <div className="flex items-center gap-1">
                        <ThemeToggleButton />
                        <button
                            type="button"
                            onClick={onCloseAction}
                            className="icon-btn"
                        >
                            <span className="sr-only">{siteCopy.mobileMenu.closeMenu}</span>
                            <CloseIcon fontSize="small" />
                        </button>
                    </div>
                </div>

                <div className="mt-6 space-y-2">
                    {Object.values(siteCopy.nav)
                        .filter((item) => !item.hide)
                        .map((item) => (
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
