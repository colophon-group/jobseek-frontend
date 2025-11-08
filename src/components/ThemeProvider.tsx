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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // must match SSR (<html className="dark">)
    const [mode, setMode] = useState<ThemeMode>("dark");

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
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", mode);
        }
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
