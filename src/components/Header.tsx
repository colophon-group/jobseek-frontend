"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { siteCopy } from "@/content/site";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { ThemedImage } from "@/components/ThemedImage";

const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"), { ssr: false });
const LoginIcon = dynamic(() => import("@mui/icons-material/Login"), { ssr: false });

type HeaderProps = {
    onOpenMobileAction: () => void;
};

export function Header({ onOpenMobileAction }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 surface-header">
            <nav className="container-6xl flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <ThemedImage
                            lightSrc={siteCopy.logoWide.light}
                            darkSrc={siteCopy.logoWide.dark}
                            alt={siteCopy.logoWide.alt}
                            width={siteCopy.logoWide.width}
                            height={siteCopy.logoWide.height}
                            className="h-9 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 lg:flex">
                    {Object.values(siteCopy.nav)
                        .filter((item) => !item.hide)
                        .map((item) => (
                            <a key={item.label} href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        ))}
                </div>

                {/* Right side */}
                <div className="hidden items-center gap-3 lg:flex">
                    <ThemeToggleButton />
                    <a href={siteCopy.nav.login.href} className="inline-flex items-center gap-2 nav-link">
                        <LoginIcon fontSize="small" />
                        {siteCopy.auth.login}
                    </a>
                </div>

                {/* Mobile button */}
                <button
                    type="button"
                    onClick={onOpenMobileAction}
                    className="icon-btn lg:hidden inline-flex items-center justify-center"
                >
                    <span className="sr-only">{siteCopy.header.menuAction}</span>
                    <MenuIcon fontSize="small" />
                </button>
            </nav>
        </header>
    );
}
