"use client";

import { createContext, useEffect, useState } from "react";

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
        document.cookie = `theme=${mode}; path=/; max-age=31536000`
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
