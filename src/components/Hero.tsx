"use client";

import { siteCopy } from "@/content/site";
import { useUser } from "@stackframe/stack";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { PublicDomainArt } from "@/components/PublicDomainArt";

export function Hero() {
    const user = useUser();
    const isLoggedIn = Boolean(user);
    const primaryHref = isLoggedIn ? siteCopy.nav.dashboard.href : siteCopy.nav.login.href;
    const primaryLabel = isLoggedIn ? siteCopy.dashboard.actionGoTo : siteCopy.hero.primaryCta;

    const heroArtConfig = siteCopy.hero.art;
    const heroArtLibrary = siteCopy.publicdomain;
    const heroArtKey = heroArtConfig?.assetKey as keyof typeof heroArtLibrary | undefined;
    const heroArt = heroArtKey ? heroArtLibrary?.[heroArtKey] : undefined;
    const heroArtFocus = heroArtConfig?.focus;

    return (
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 6, md: 10 }}
                alignItems="stretch"
            >
                <Stack maxWidth={640} spacing={3}>
                    <Typography variant="overline" color="text.secondary" letterSpacing={1.5}>
                        {siteCopy.hero.eyebrow}
                    </Typography>
                    <Typography variant="h2" component="h1">
                        {siteCopy.hero.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {siteCopy.hero.description}
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
                        <Button href={primaryHref} variant="contained" size="large">
                            {primaryLabel}
                        </Button>
                        <Button href={siteCopy.nav.features.href} variant="outlined" size="large">
                            {siteCopy.hero.secondaryCta}
                        </Button>
                    </Stack>
                </Stack>

                {heroArt && (
                    <Box sx={{ flex: 1 }}>
                        <PublicDomainArt
                            asset={heroArt}
                            focus={heroArtFocus}
                            sx={{ minHeight: { xs: 240, sm: 300, lg: 380 }, width: "100%" }}
                        />
                    </Box>
                )}
            </Stack>
        </Container>
    );
}
