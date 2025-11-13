"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import type { IconButtonProps } from "@mui/material/IconButton";

// static imports -> no flicker
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { siteCopy } from "@/content/site";

type ThemeToggleButtonProps = Omit<IconButtonProps, "onClick" | "color">;

export function ThemeToggleButton({ sx, ...iconButtonProps }: ThemeToggleButtonProps) {
    const { mode, setMode } = useContext(ThemeContext);
    const next = mode === "dark" ? "light" : "dark";

    const label = mode === "dark" ? siteCopy.themeSwitch.darkAriaLabel : siteCopy.themeSwitch.lightAriaLabel;
    return (
        <Tooltip title={label}>
            <IconButton
                onClick={() => setMode(next)}
                size="small"
                color="inherit"
                aria-label={label}
                sx={sx}
                {...iconButtonProps}
            >
                {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
        </Tooltip>
    );
}
