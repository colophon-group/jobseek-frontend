"use client";

import type { ElementType } from "react";
import { siteCopy } from "@/content/site";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BugReportIcon from "@mui/icons-material/BugReport";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CampaignIcon from "@mui/icons-material/Campaign";
import { ThemedImage } from "@/components/ThemedImage";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import type { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import type { Theme } from "@mui/material/styles";

const iconMap: Record<string, ElementType> = {
    notifications: NotificationsIcon,
    check_circle: CheckCircleIcon,
    bookmark: BookmarkIcon,
    bug: BugReportIcon,
    travel_explore: TravelExploreIcon,
    campaign: CampaignIcon,
};

const TEXT_COLUMN_WIDTH = 520;
const IMAGE_BORDER_RADIUS = 24;
const EXTRA_WIDE_BREAKPOINT = 2448;
const MEDIA_SHADOW = "0px 12px 32px rgba(15, 23, 42, 0.18)";

const heroStartOffset = (theme: Theme) =>
    `calc((100vw - ${theme.breakpoints.values.lg}px) / 2 + ${theme.spacing(3)})`;

const extraWideInset = (theme: Theme, mediaWidth: number) => {
    const columnGap = parseFloat(theme.spacing(10));
    const heroGutter = parseFloat(theme.spacing(3));
    const halfLg = theme.breakpoints.values.lg / 2;
    const requiredWidth = TEXT_COLUMN_WIDTH + mediaWidth + columnGap;
    const constant = halfLg - heroGutter - requiredWidth;
    return `max(0px, calc(50vw + ${constant}px))`;
};

const featureRowBaseStyles = (mediaWidth: number, align: "left" | "right" = "left") => (theme: Theme) => {
    const smKey = theme.breakpoints.up("sm");
    const lgKey = theme.breakpoints.up("lg");
    const extraWideKey = `@media (min-width: ${EXTRA_WIDE_BREAKPOINT}px)`;

    if (align === "left") {
        return {
            width: "100%",
            paddingLeft: theme.spacing(2),
            paddingRight: 0,
            [smKey]: {
                paddingLeft: theme.spacing(3),
                paddingRight: 0,
            },
            [lgKey]: {
                paddingLeft: heroStartOffset(theme),
                paddingRight: 0,
            },
            [extraWideKey]: {
                paddingRight: extraWideInset(theme, mediaWidth),
            },
        };
    }

    return {
        width: "100%",
        paddingLeft: theme.spacing(2),
        paddingRight: 0,
        [smKey]: {
            paddingLeft: theme.spacing(3),
            paddingRight: 0,
        },
        [lgKey]: {
            paddingLeft: 0,
            paddingRight: heroStartOffset(theme),
        },
        [extraWideKey]: {
            paddingLeft: extraWideInset(theme, mediaWidth),
        },
    };
};

const buildImageWrapperSx = (mediaWidth: number, inverted: boolean) => ({
    width: "100%",
    maxWidth: mediaWidth,
    borderTopLeftRadius: inverted
        ? { xs: IMAGE_BORDER_RADIUS, sm: 0 }
        : IMAGE_BORDER_RADIUS,
    borderBottomLeftRadius: inverted
        ? { xs: IMAGE_BORDER_RADIUS, sm: 0 }
        : IMAGE_BORDER_RADIUS,
    borderTopRightRadius: inverted
        ? { xs: 0, sm: IMAGE_BORDER_RADIUS }
        : 0,
    borderBottomRightRadius: inverted
        ? { xs: 0, sm: IMAGE_BORDER_RADIUS }
        : 0,
    overflow: "hidden",
    boxShadow: MEDIA_SHADOW,
    backgroundColor: "background.paper",
    display: "flex",
    justifyContent: "flex-start",
    "& img": {
        width: mediaWidth,
        maxWidth: "none",
        height: "auto",
        display: "block",
    },
    [`@media (min-width: ${EXTRA_WIDE_BREAKPOINT}px)`]: {
        borderTopLeftRadius: IMAGE_BORDER_RADIUS,
        borderBottomLeftRadius: IMAGE_BORDER_RADIUS,
        borderTopRightRadius: IMAGE_BORDER_RADIUS,
        borderBottomRightRadius: IMAGE_BORDER_RADIUS,
    },
});

type FeaturePoint = {
    icon?: keyof typeof iconMap | string;
    title: string;
    description: string;
};

type FeatureSection = {
    eyebrow?: string;
    title: string;
    description?: string;
    screenshot: {
        light: string;
        dark: string;
        alt: string;
        width: number;
        height: number;
    };
    points?: FeaturePoint[];
};

type FeatureRowProps = {
    section: FeatureSection;
};

type FeatureLayoutProps = FeatureRowProps & { inverted?: boolean };

function FeatureRow({ section }: FeatureRowProps) {
    return <FeatureLayout section={section} inverted={false} />;
}

function InvertedFeatureRow({ section }: FeatureRowProps) {
    return <FeatureLayout section={section} inverted />;
}

function FeatureLayout({ section, inverted = false }: FeatureLayoutProps) {
    const screenshot = section.screenshot;
    const points = section.points ?? [];
    const mediaWidth = screenshot?.width ?? 1200;
    const align = inverted ? "right" : "left";
    const direction: StackProps["direction"] = inverted
        ? { xs: "column", sm: "row-reverse" }
        : { xs: "column", sm: "row" };
    const stackSx = featureRowBaseStyles(mediaWidth, align);
    const textPadding = inverted ? { pl: { xs: 2, sm: 0 } } : {};
    const mediaJustify = inverted
        ? { xs: "flex-start", sm: "flex-start" }
        : { xs: "flex-start", sm: "flex-end" };

    return (
        <Stack direction={direction} spacing={{ xs: 6, md: 8, lg: 10 }} alignItems="stretch" sx={stackSx}>
            <Box
                sx={{
                    flexBasis: { sm: 400, md: 460, lg: TEXT_COLUMN_WIDTH },
                    flexShrink: 0,
                    width: "100%",
                    maxWidth: { xs: "100%", sm: TEXT_COLUMN_WIDTH },
                    px: 0,
                    ...textPadding,
                }}
            >
                <Stack spacing={2}>
                    <Box>
                        {section.eyebrow && (
                            <Typography variant="overline" color="text.secondary" letterSpacing={1.5}>
                                {section.eyebrow}
                            </Typography>
                        )}
                        <Typography variant="h3" component="h2" sx={{ mt: section.eyebrow ? 1 : 0 }}>
                            {section.title}
                        </Typography>
                        {section.description && (
                            <Typography color="text.secondary" sx={{ mt: 2 }}>
                                {section.description}
                            </Typography>
                        )}
                    </Box>
                    {points.length ? (
                        <Stack component="dl" spacing={3} sx={{ mt: 4 }}>
                            {points.map((point) => {
                                const IconComponent = iconMap[point.icon ?? "notifications"] ?? NotificationsIcon;
                                return (
                                    <Stack
                                        key={point.title}
                                        direction="row"
                                        spacing={2}
                                        component="div"
                                        alignItems="flex-start"
                                    >
                                        <IconComponent fontSize="small" />
                                        <Box>
                                            <Typography variant="subtitle1" component="dt">
                                                {point.title}
                                            </Typography>
                                            <Typography component="dd" color="text.secondary" sx={{ mt: 0.5 }}>
                                                {point.description}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    ) : null}
                </Stack>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: mediaJustify,
                    minHeight: { xs: 320, sm: 360, md: 400, lg: 460 },
                    pr: 0,
                }}
            >
                <Box sx={buildImageWrapperSx(mediaWidth, inverted)}>
                    <ThemedImage
                        darkSrc={screenshot.dark}
                        lightSrc={screenshot.light}
                        alt={screenshot.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                    />
                </Box>
            </Box>
        </Stack>
    );
}

export function Features() {
    const sections = siteCopy.features.sections ?? [];

    if (!sections.length) {
        return null;
    }

    return (
        <Container
            id="features"
            component="section"
            maxWidth={false}
            disableGutters
            sx={{
                py: { xs: 8, md: 12 },
                overflowX: "hidden",
                overflowY: "visible",
                position: "relative",
                zIndex: 1,
                pb: { xs: 4, md: 6 },
            }}
        >
            <Stack spacing={{ xs: 12, md: 16 }}>
                {sections.map((section, index) => {
                    const Component = index % 2 === 0 ? FeatureRow : InvertedFeatureRow;
                    return <Component key={`${section.title}-${index}`} section={section} />;
                })}
            </Stack>
        </Container>
    );
}
