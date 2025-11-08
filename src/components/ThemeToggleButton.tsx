"use client";

import { useContext } from "react";
import dynamic from "next/dynamic";
import { ThemeContext } from "@/components/ThemeProvider";

// load icons only on client
const DarkModeIcon = dynamic(() => import("@mui/icons-material/DarkMode"), {
    ssr: false,
});
const LightModeIcon = dynamic(() => import("@mui/icons-material/LightMode"), {
    ssr: false,
});

export function ThemeToggleButton({ className = "" }: { className?: string }) {
    const { mode, setMode } = useContext(ThemeContext);
    const next = mode === "dark" ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={() => setMode(next)}
            className={`icon-btn ${className}`}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </button>
    );
}
