"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { PublicDomainArt } from "@/components/PublicDomainArt";
import { siteCopy } from "@/content/site";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export function HomePage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const afterPricingArt = siteCopy.publicdomain?.the_miser;

    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <Header onOpenMobileAction={() => setMobileOpen(true)} />
            <MobileMenu open={mobileOpen} onCloseAction={() => setMobileOpen(false)} />
            <Hero />
            <Features />
            <Pricing />
            {afterPricingArt && (
                <Box component="section" sx={{ py: 10 }}>
                    <Container maxWidth="lg">
                        <Box sx={{ mx: "auto", width: "100%", maxWidth: 768 }}>
                            <PublicDomainArt
                                asset={afterPricingArt}
                                focus={{ x: 45, y: 40 }}
                                sx={{ minHeight: { xs: 360, sm: 460, lg: 560 } }}
                            />
                        </Box>
                    </Container>
                </Box>
            )}
            <Footer />
        </Box>
    );
}
