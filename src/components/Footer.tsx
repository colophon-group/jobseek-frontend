"use client";

import { siteCopy } from "@/content/site";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export function Footer() {
    const year = new Date().getFullYear();
    const footer = siteCopy.footer;

    const footerButtonStyles = {
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
    } as const;

    return (
        <Box
            component="footer"
            sx={{ borderTop: 1, borderColor: "divider", mt: { xs: 4, md: 8 } }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 2, sm: 3 }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    sx={{ py: { xs: 3, md: 3 }, gap: { xs: 2, sm: 0 } }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ order: { xs: 2, sm: 1 } }}
                    >
                        © {year} {siteCopy.creator}. {footer.text}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            order: { xs: 1, sm: 2 },
                            width: { xs: "100%", sm: "auto" },
                            justifyContent: { xs: "flex-start", sm: "flex-end" },
                            flexWrap: "nowrap",
                            overflowX: { xs: "auto", sm: "visible" },
                            pb: { xs: 0.5, sm: 0 },
                        }}
                    >
                        {footer.links.map((link) => (
                            <Button
                                key={link.href}
                                component="a"
                                href={link.href}
                                size="small"
                                variant="outlined"
                                color="inherit"
                                disableElevation
                                sx={footerButtonStyles}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
