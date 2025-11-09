"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Header onOpenMobileAction={() => setMobileOpen(true)} />
            <MobileMenu open={mobileOpen} onCloseAction={() => setMobileOpen(false)} />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
        </div>
    );
}
