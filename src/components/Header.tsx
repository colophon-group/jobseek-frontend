"use client";

import Link from "next/link";
import { siteCopy } from "@/content/site";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { ThemedImage } from "@/components/ThemedImage";
import { useUser } from "@stackframe/stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

type HeaderProps = {
    onOpenMobileAction: () => void;
};

export function Header({ onOpenMobileAction }: HeaderProps) {
    const user = useUser();
    const isLoggedIn = Boolean(user);
    const authHref = isLoggedIn ? siteCopy.nav.dashboard.href : siteCopy.nav.login.href;
    const authLabel = isLoggedIn ? siteCopy.dashboard.action : siteCopy.auth.login;
    const navItems = Object.values(siteCopy.nav).filter((item) => !item.hide);

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{
                backdropFilter: "blur(12px)",
                borderBottom: 1,
                borderColor: "divider",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
                    <Box component={Link} href="/" sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
                        <ThemedImage
                            lightSrc={siteCopy.logoWide.light}
                            darkSrc={siteCopy.logoWide.dark}
                            alt={siteCopy.logoWide.alt}
                            width={siteCopy.logoWide.width}
                            height={siteCopy.logoWide.height}
                            style={{ height: 36, width: "auto" }}
                        />
                    </Box>

                    <Box flexGrow={1} />

                    <Stack
                        component="nav"
                        direction="row"
                        spacing={2.5}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={Link}
                                href={item.href}
                                variant="outlined"
                                color="inherit"
                                size="small"
                                disableElevation
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    textTransform: "none",
                                    px: 1.5,
                                    py: 0.5,
                                    borderColor: "transparent",
                                    color: "text.primary",
                                    letterSpacing: 0.2,
                                    minWidth: "auto",
                                    "&:hover": {
                                        borderColor: "transparent",
                                        backgroundColor: "transparent",
                                        color: "text.secondary",
                                    },
                                    "&:focus-visible": {
                                        outline: "none",
                                        borderColor: "transparent",
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <ThemeToggleButton />
                        <Button
                            component={Link}
                            href={authHref}
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<LoginIcon fontSize="small" />}
                            sx={{ "&:focus-visible": { outline: "none" } }}
                        >
                            {authLabel}
                        </Button>
                    </Stack>

                    <IconButton
                        edge="end"
                        onClick={onOpenMobileAction}
                        sx={{ display: { xs: "inline-flex", md: "none" } }}
                        aria-label={siteCopy.header.menuAction}
                        disableRipple
                        disableFocusRipple
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
