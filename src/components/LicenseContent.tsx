"use client";

import { useState } from "react";
import { siteCopy } from "@/content/site";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { PublicDomainArt } from "@/components/PublicDomainArt";
import { renderInlineCode } from "@/lib/renderInlineCode";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

export function LicenseContent() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const license = siteCopy.license;
    const codeLink = `${siteCopy.repoUrl}/blob/main/LICENSE`;
    const dataLink = `${siteCopy.repoUrl}/blob/main/LICENSE-JOB-DATA`;
    const contactEmail = siteCopy.indexing.contactEmail;
    const sectionLayoutSx = {
        width: "100%",
        maxWidth: 840,
        scrollMarginTop: { xs: 96, md: 128 },
    };
    const contentsNav = license.contentsNav as Record<string, { label: string; anchor?: string }> | undefined;
    const navEntries = contentsNav ? Object.entries(contentsNav) : [];
    const anchorFor = (key: string) => contentsNav?.[key]?.anchor ?? `license-${key}`;
    const tocItems = navEntries.map(([key, entry]) => ({
        label: entry.label,
        href: `#${anchorFor(key)}`,
    }));

    const heroArtKey = license.hero.art?.assetKey as keyof typeof siteCopy.publicdomain | undefined;
    const heroArt = heroArtKey ? siteCopy.publicdomain?.[heroArtKey] : undefined;
    const heroArtFocus = license.hero.art?.focus;
    const heroArtMaxWidth = 300;
    const heroArtWidth = heroArt ? Math.min(heroArt.width, heroArtMaxWidth) : undefined;
    const heroArtAspect = heroArt ? heroArt.width / heroArt.height : 1;

    return (
        <Box minHeight="100vh" sx={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <Header onOpenMobileAction={() => setMobileOpen(true)} />
            <MobileMenu open={mobileOpen} onCloseAction={() => setMobileOpen(false)} />

            <Box component="main" py={{ xs: 6, md: 10 }}>
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", lg: "row" }}
                        spacing={{ xs: 6, lg: 10 }}
                        alignItems="flex-start"
                    >
                        <Stack spacing={{ xs: 6, md: 8 }} sx={{ flex: 1 }}>
                            <Box sx={sectionLayoutSx} id={anchorFor("overview")}>
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={{ xs: 4, md: 6 }}
                                    alignItems={{ xs: "stretch", md: "flex-start" }}
                                    justifyContent="center"
                                >
                                    <Stack spacing={2} sx={{ flex: 1 }}>
                                        <Typography variant="overline" color="text.secondary" letterSpacing={1.5}>
                                            {license.hero.eyebrow}
                                        </Typography>
                                        <Typography variant="h3" component="h1">
                                            {license.hero.title}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            {renderInlineCode(license.hero.description)}
                                        </Typography>
                                    </Stack>
                                    {heroArt && heroArtWidth && (
                                        <Box
                                            sx={{
                                                flexBasis: { md: heroArtWidth },
                                                flexShrink: 0,
                                                width: "100%",
                                                maxWidth: { xs: "100%", md: heroArtWidth },
                                                order: { xs: 2, md: 2 },
                                                display: "flex",
                                                justifyContent: "center",
                                                aspectRatio: heroArtAspect,
                                                minHeight: { xs: 240, md: "auto" },
                                                maxHeight: { xs: 320, md: "100%" },
                                                mx: "auto",
                                            }}
                                        >
                                            <PublicDomainArt
                                                asset={heroArt}
                                                focus={heroArtFocus}
                                                credit={true}
                                                sx={{ width: "100%", height: "100%" }}
                                            />
                                        </Box>
                                    )}
                                </Stack>
                            </Box>

                            <Paper variant="outlined" sx={{ ...sectionLayoutSx, p: { xs: 3, md: 4 } }} id={anchorFor("code")}>
                                <Typography variant="h5">{license.code.title}</Typography>
                                <Typography color="text.secondary" sx={{ mt: 1 }}>
                                    {license.code.summary}
                                </Typography>
                                <List sx={{ listStyleType: "disc", pl: 3 }}>
                                    {license.code.rights.map((item) => (
                                        <ListItem key={item} sx={{ display: "list-item", pl: 1 }}>
                                            {renderInlineCode(item)}
                                        </ListItem>
                                    ))}
                                </List>
                                <Link href={codeLink} target="_blank" rel="noreferrer" fontWeight={600}>
                                    {license.code.linkLabel}
                                </Link>
                            </Paper>

                            <Paper variant="outlined" sx={{ ...sectionLayoutSx, p: { xs: 3, md: 4 } }} id={anchorFor("data")}>
                                <Typography variant="h5">{license.data.title}</Typography>
                                <Typography color="text.secondary" sx={{ mt: 1 }}>
                                    {license.data.summary}
                                </Typography>
                                <List sx={{ listStyleType: "disc", pl: 3 }}>
                                    {license.data.rights.map((item) => (
                                        <ListItem key={item} sx={{ display: "list-item", pl: 1 }}>
                                            {renderInlineCode(item)}
                                        </ListItem>
                                    ))}
                                </List>
                                <Link href={dataLink} target="_blank" rel="noreferrer" fontWeight={600}>
                                    {license.data.linkLabel}
                                </Link>
                            </Paper>

                            <Box sx={sectionLayoutSx} id={anchorFor("contact")}>
                                <Typography variant="h5" sx={{ mb: 1.5 }}>
                                    Contact
                                </Typography>
                                <Typography color="text.secondary">
                                    {license.contactCta}{" "}
                                    <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
                                </Typography>
                            </Box>
                        </Stack>

                        <TableOfContents
                            items={tocItems}
                            sx={{
                                maxWidth: 260,
                                display: { xs: "none", md: "block" },
                            }}
                        />
                    </Stack>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
