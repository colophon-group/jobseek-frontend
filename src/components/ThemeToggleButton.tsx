"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";

// static imports -> no flicker
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {siteCopy} from "@/content/site";

export function ThemeToggleButton({ className = "" }: { className?: string }) {
    const { mode, setMode } = useContext(ThemeContext);
    const next = mode === "dark" ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={() => setMode(next)}
            className={`icon-btn ${className}`}
            aria-label={mode === "dark" ? siteCopy.themeSwitch.darkAriaLabel : siteCopy.themeSwitch.lightAriaLabel}
        >
            {mode === "dark" ? (
                <LightModeIcon fontSize="small" />
            ) : (
                <DarkModeIcon fontSize="small" />
            )}
        </button>
    );
}
