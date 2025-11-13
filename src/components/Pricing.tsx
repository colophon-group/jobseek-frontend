"use client";

import { siteCopy } from "@/content/site";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useUser } from "@stackframe/stack";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

export function Pricing() {
    const { pricing } = siteCopy;
    const user = useUser();
    const isLoggedIn = Boolean(user);

    if (!pricing) {
        return null;
    }

    return (
        <Container id="pricing" component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Stack spacing={2} textAlign="center" maxWidth={640} mx="auto">
                <Typography variant="overline" color="text.secondary" letterSpacing={1.5}>
                    {pricing.eyebrow}
                </Typography>
                <Typography variant="h3" component="h2">
                    {pricing.title}
                </Typography>
                <Typography color="text.secondary">{pricing.description}</Typography>
            </Stack>

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                justifyContent="center"
                alignItems={{ xs: "center", md: "stretch" }}
                sx={{ mt: { xs: 4, md: 6 }, flexWrap: "wrap" }}
            >
                {pricing.tiers.map((tier) => {
                    const ctaHref = isLoggedIn ? siteCopy.nav.dashboard.href : tier.href;
                    const ctaLabel = isLoggedIn ? siteCopy.dashboard.actionOpen : tier.cta;
                    const isFreeTier = tier.name.toLowerCase() === "free";
                    return (
                        <Box
                            key={tier.name}
                            sx={{
                                flex: { xs: "0 1 auto", md: "1 1 320px" },
                                maxWidth: { xs: 500, md: 360 },
                                width: "100%",
                                display: "flex",
                                mx: { xs: "auto", md: 0 },
                            }}
                        >
                            <Card
                                variant="outlined"
                                sx={(theme) => ({
                                    display: "flex",
                                    flexDirection: "column",
                                    borderWidth: tier.highlight ? 2 : 1,
                                    borderColor: tier.highlight
                                        ? theme.palette.primary.main
                                        : theme.palette.mode === "light" && isFreeTier
                                            ? theme.palette.grey[300]
                                            : theme.palette.divider,
                                    boxShadow: tier.highlight ? theme.shadows[2] : "none",
                                    width: "100%",
                                })}
                            >
                                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {tier.name}
                                    </Typography>
                                    <Stack direction="row" spacing={1} alignItems="baseline" sx={{ mt: 1 }}>
                                        <Typography variant="h3">{tier.price}</Typography>
                                        <Typography color="text.secondary">{tier.period}</Typography>
                                    </Stack>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        {tier.description}
                                    </Typography>
                                    <List sx={{ mt: 2, flexGrow: 1 }}>
                                        {tier.features.map((feature) => (
                                            <ListItem key={feature} disableGutters>
                                                <ListItemIcon sx={{ minWidth: 32, color: "primary.main" }}>
                                                    <CheckCircleIcon fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={feature} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                                    <Button
                                        href={ctaHref}
                                        fullWidth
                                        variant={tier.highlight ? "contained" : "outlined"}
                                        size="large"
                                    >
                                        {ctaLabel}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    );
                })}
            </Stack>
        </Container>
    );
}
