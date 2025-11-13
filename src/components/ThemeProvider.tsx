"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import { CssBaseline, PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { buildMuiTheme } from "@/theme/createMuiTheme";

type ThemeMode = "light" | "dark";

export const ThemeContext = createContext<{
    mode: ThemeMode;
    setMode: (m: ThemeMode) => void;
}>({
    mode: "dark",
    setMode: () => {},
});

export function ThemeProvider({ children, initialTheme = "dark" }: { children: React.ReactNode; initialTheme?: ThemeMode }) {
    const [mode, setMode] = useState<ThemeMode>(() => {
        if (typeof document === "undefined") return initialTheme;
        return document.documentElement.dataset.theme === "light" ? "light" : "dark";
    });

    // read saved value, but don't set state synchronously in the effect
    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
            // defer to avoid "setState synchronously within an effect"
            setTimeout(() => {
                setMode(saved);
            }, 0);
        }
    }, []);

    // apply to <html> and persist
    useEffect(() => {
        const root = document.documentElement;
        if (mode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", mode);
        document.cookie = `theme=${mode}; path=/; max-age=31536000`;
    }, [mode]);

    const muiTheme = useMemo(() => buildMuiTheme(mode as PaletteMode), [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <AppRouterCacheProvider>
                <MuiThemeProvider theme={muiTheme}>
                    <CssBaseline enableColorScheme />
                    {children}
                </MuiThemeProvider>
            </AppRouterCacheProvider>
        </ThemeContext.Provider>
    );
}
