"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { siteCopy } from "@/content/site";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { ThemedImage } from "@/components/ThemedImage";
import { useUser } from "@stackframe/stack";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const CloseIcon = dynamic(() => import("@mui/icons-material/Close"), { ssr: false });

type MobileMenuProps = {
    open: boolean;
    onCloseAction: () => void;
};

export function MobileMenu({ open, onCloseAction }: MobileMenuProps) {
    const user = useUser();
    const isLoggedIn = Boolean(user);
    const authHref = isLoggedIn ? siteCopy.nav.dashboard.href : siteCopy.nav.login.href;
    const authLabel = isLoggedIn ? siteCopy.dashboard.action : siteCopy.auth.login;
    const navItems = Object.values(siteCopy.nav).filter((item) => !item.hide);

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onCloseAction}
            slotProps={{ paper: { sx: { width: 320 } } }}
        >
            <Box sx={{ px: 2.5, py: 3 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                    <Box
                        component={Link}
                        href="/"
                        onClick={onCloseAction}
                        sx={{ display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none" }}
                    >
                        <ThemedImage
                            darkSrc={siteCopy.logoWide.dark}
                            lightSrc={siteCopy.logoWide.light}
                            alt={siteCopy.logoWide.alt}
                            width={siteCopy.logoWide.width}
                            height={siteCopy.logoWide.height}
                            style={{ height: 32, width: "auto" }}
                        />
                    </Box>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <ThemeToggleButton />
                        <IconButton onClick={onCloseAction} aria-label={siteCopy.mobileMenu.closeMenu}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </Stack>

                <List sx={{ mt: 2 }}>
                    {navItems.map((item) => (
                        <ListItemButton
                            key={item.label}
                            component={Link}
                            href={item.href}
                            onClick={onCloseAction}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>

                <Divider sx={{ my: 2 }} />

                <Button href={authHref} fullWidth variant="outlined" size="large" onClick={onCloseAction}>
                    {authLabel}
                </Button>
            </Box>
        </Drawer>
    );
}
