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
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export function HowWeIndexContent() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const indexing = siteCopy.indexing;
    const sectionScrollMargin = { xs: 96, md: 128 } as const;
    const sectionLayoutSx = {
        width: "100%",
        maxWidth: 840,
        scrollMarginTop: sectionScrollMargin,
    };
    const monkArt = siteCopy.publicdomain?.the_monk;
    const monkMaxWidth = 320;
    const monkEffectiveWidth = monkArt ? Math.min(monkArt.width, monkMaxWidth) : undefined;
    const monkAspectRatio = monkArt ? monkArt.width / monkArt.height : 1;
    const contentsNav = indexing.contentsNav as Record<string, { label: string; anchor?: string }> | undefined;
    const navEntries = contentsNav ? Object.entries(contentsNav) : [];
    const anchorFor = (key: string) => contentsNav?.[key]?.anchor ?? `indexing-${key}`;
    const tocItems = navEntries.map(([key, entry]) => ({
        label: entry.label,
        href: `#${anchorFor(key)}`,
    }));

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
                            <Stack spacing={2} sx={sectionLayoutSx} id={anchorFor("overview")}>
                                <Typography variant="overline" color="text.secondary" letterSpacing={1.5}>
                                    {indexing.hero.eyebrow}
                                </Typography>
                                <Typography variant="h3" component="h1">
                                    {indexing.hero.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {renderInlineCode(indexing.hero.description)}
                                </Typography>
                            </Stack>

                            <Box sx={sectionLayoutSx} id={anchorFor("assurances")}>
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={{ xs: 4, md: 6 }}
                                    alignItems={{ xs: "stretch", md: "flex-start" }}
                                    justifyContent="center"
                                >
                                    <Paper
                                        variant="outlined"
                                        sx={{ flex: 1, p: { xs: 3, md: 4 }, order: { xs: 1, md: 1 } }}
                                    >
                                        <Typography variant="h5">{indexing.assurances.title}</Typography>
                                        <List>
                                            {indexing.assurances.items.map((item) => (
                                                <ListItem key={item.title} alignItems="flex-start" disablePadding sx={{ mt: 2 }}>
                                                    <ListItemText
                                                        primary={item.title}
                                                        secondary={renderInlineCode(item.body)}
                                                        slotProps={{
                                                            primary: {
                                                                sx: { fontWeight: 600 },
                                                            },
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>

                                    {monkArt && monkEffectiveWidth && (
                                        <Box
                                            sx={{
                                                flexBasis: { md: monkEffectiveWidth },
                                                flexShrink: 0,
                                                width: "100%",
                                                maxWidth: { xs: "100%", md: monkEffectiveWidth },
                                                order: { xs: 2, md: 2 },
                                                display: "flex",
                                                justifyContent: "center",
                                                aspectRatio: monkAspectRatio,
                                                minHeight: { xs: 240, md: "auto" },
                                                maxHeight: { xs: 320, md: "none" },
                                                mx: "auto",
                                            }}
                                        >
                                            <PublicDomainArt
                                                asset={monkArt}
                                                credit={true}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    mx: "auto",
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Stack>
                            </Box>

                            <Box sx={sectionLayoutSx} id={anchorFor("ingestion")}>
                                <Typography variant="h5">{indexing.ingestion.title}</Typography>
                                {indexing.ingestion.description && (
                                    <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                                        {renderInlineCode(indexing.ingestion.description)}
                                    </Typography>
                                )}
                                <List component="ol" sx={{ listStyleType: "decimal", pl: 3, mt: 2 }}>
                                    {indexing.ingestion.steps.map((step) => (
                                        <ListItem
                                            key={step.title}
                                            component="li"
                                            sx={{ display: "list-item", pl: 1, mb: 1.5 }}
                                        >
                                            <Typography fontWeight={600} component="span">
                                                {step.title}
                                            </Typography>{" "}
                                            <Typography component="span" color="text.secondary">
                                                {renderInlineCode(step.body)}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Alert
                                severity="info"
                                icon={<InfoOutlinedIcon fontSize="small" />}
                                variant="outlined"
                                sx={{
                                    ...sectionLayoutSx,
                                    mt: { xs: 2, md: 3 },
                                    borderColor: "var(--info-border)",
                                    backgroundColor: "var(--info-bg)",
                                    color: "var(--info-color)",
                                    "& .MuiAlert-icon": {
                                        color: "var(--info-color)",
                                    },
                                }}
                                id={anchorFor("sitemap")}
                            >
                                {renderInlineCode(indexing.sitemapNote)}
                            </Alert>

                            <Stack
                                spacing={4}
                                divider={<Divider sx={{ borderColor: "divider" }} />}
                                sx={{ width: "100%", maxWidth: 840 }}
                            >
                                {[
                                    {
                                        id: "optOut",
                                        title: indexing.optOut.title,
                                        body: (
                                            <>
                                                {renderInlineCode(indexing.optOut.body)}{" "}
                                                <Link href={`mailto:${indexing.contactEmail}`}>
                                                    {indexing.contactEmail}
                                                </Link>
                                                .
                                            </>
                                        ),
                                    },
                                    {
                                        id: "automation",
                                        title: indexing.automation.title,
                                        body: renderInlineCode(indexing.automation.body),
                                    },
                                    {
                                        id: "oss",
                                        title: indexing.oss.title,
                                        body: (
                                            <>
                                                {renderInlineCode(indexing.oss.body)} {" "}
                                                Browse the repository at {" "}
                                                <Link href={indexing.ossRepoUrl} target="_blank" rel="noreferrer">
                                                    {indexing.ossRepoUrl.replace("https://", "")}
                                                </Link>
                                                .
                                            </>
                                        ),
                                    },
                                    {
                                        id: "outreach",
                                        title: indexing.outreach.title,
                                        body: (
                                            <>
                                                {renderInlineCode(indexing.outreach.body)}{" "}
                                                <Link href={`mailto:${indexing.contactEmail}`}>
                                                    {indexing.contactEmail}
                                                </Link>
                                                .
                                            </>
                                        ),
                                    },
                                ].map((section) => (
                                    <Box key={section.id} id={anchorFor(section.id)} sx={{ scrollMarginTop: sectionScrollMargin }}>
                                        <Typography variant="h5">{section.title}</Typography>
                                        <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                                            {section.body}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
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
