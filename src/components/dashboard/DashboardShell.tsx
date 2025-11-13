"use client";

import { useMemo, useState, type ElementType } from "react";
import dynamic from "next/dynamic";
import { siteCopy } from "@/content/site";
import { Footer } from "@/components/Footer";
import { SettingsPanel } from "@/components/dashboard/SettingsPanel";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const DynamicFeedIcon = dynamic(() => import("@mui/icons-material/DynamicFeed"), { ssr: false });
const TravelExploreIcon = dynamic(() => import("@mui/icons-material/TravelExplore"), { ssr: false });
const SettingsIcon = dynamic(() => import("@mui/icons-material/Settings"), { ssr: false });

const iconMap: Record<string, ElementType> = {
    feed: DynamicFeedIcon,
    explore: TravelExploreIcon,
    settings: SettingsIcon,
};

type DashboardSection = {
    title: string;
    description: string;
};

export function DashboardShell() {
    const tabs = siteCopy.dashboard.tabs ?? [];
    const fallbackTab = tabs[0]?.id ?? "feed";
    const [activeTab, setActiveTab] = useState<string>(fallbackTab);
    const sections = useMemo<Record<string, DashboardSection>>(() => siteCopy.dashboard.sections ?? {}, []);
    const shellCopy = siteCopy.dashboard.shell;
    const activeSection = sections[activeTab] ?? {
        title: shellCopy?.fallbackTitle ?? "",
        description: shellCopy?.fallbackDescription ?? "",
    };

    const handleTabChange = (_event: React.SyntheticEvent, value: string) => {
        setActiveTab(value);
    };

    return (
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Paper variant="outlined" sx={{ overflow: "hidden" }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label={shellCopy?.navAriaLabel}
                >
                    {tabs.map((tab) => {
                        const Icon = iconMap[tab.id] ?? DynamicFeedIcon;
                        return (
                            <Tab
                                key={tab.id}
                                value={tab.id}
                                icon={<Icon fontSize="small" />}
                                iconPosition="start"
                                label={tab.label}
                            />
                        );
                    })}
                </Tabs>
                <Divider />
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="overline" color="text.secondary">
                        {tabs.find((t) => t.id === activeTab)?.label}
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1 }}>
                        {activeSection.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {activeSection.description}
                    </Typography>
                    {activeTab === "settings" && (
                        <Box sx={{ mt: 4 }}>
                            <SettingsPanel />
                        </Box>
                    )}
                </Box>
            </Paper>
            <Box sx={{ mt: 6 }}>
                <Footer />
            </Box>
        </Container>
    );
}
