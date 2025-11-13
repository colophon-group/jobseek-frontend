import { PaletteMode, ThemeOptions, createTheme } from "@mui/material/styles";

const lightBackground = "#f5f5f5";
const darkBackground = "#050505";
const darkAccent = "#111111";
const lightAccent = "#f5f5f5";

const primaryColorLight = {
    light: "#1f1f1f",
    main: darkAccent,
    dark: "#000000",
    contrastText: lightAccent,
};

const primaryColorDark = {
    light: "#d4d4d4",
    main: lightAccent,
    dark: "#ffffff",
    contrastText: darkBackground,
};

const secondaryColorLight = {
    light: "#1f1f1f",
    main: "#2b2b2b",
    dark: "#000000",
    contrastText: lightAccent,
};

const secondaryColorDark = {
    light: "#e5e5e5",
    main: "#dcdcdc",
    dark: "#ffffff",
    contrastText: darkBackground,
};

const typography: ThemeOptions["typography"] = {
    fontFamily: "var(--font-sans), 'JetBrains Mono', 'Inter', 'Helvetica Neue', 'Arial', sans-serif",
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    body1: {
        fontWeight: 500,
    },
    body2: {
        fontWeight: 500,
    },
    button: {
        fontWeight: 600,
        letterSpacing: 0.2,
    },
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
};

const shape = { borderRadius: 12 };

const lightPalette: ThemeOptions["palette"] = {
    mode: "light",
    primary: primaryColorLight,
    secondary: secondaryColorLight,
    background: {
        default: lightBackground,
        paper: "#ffffff",
    },
    text: {
        primary: darkAccent,
        secondary: "#4a4a4a",
    },
    divider: "#d4d4d4",
    info: { main: "#2f2f2f" },
    success: { main: "#2f2f2f" },
    warning: { main: "#2f2f2f" },
    error: { main: "#2f2f2f" },
};

const darkPalette: ThemeOptions["palette"] = {
    mode: "dark",
    primary: primaryColorDark,
    secondary: secondaryColorDark,
    background: {
        default: darkBackground,
        paper: "#0f0f0f",
    },
    text: {
        primary: lightAccent,
        secondary: "#c7c7c7",
    },
    divider: "#2a2a2a",
    info: { main: lightAccent },
    success: { main: lightAccent },
    warning: { main: lightAccent },
    error: { main: lightAccent },
};

const componentOverrides: ThemeOptions["components"] = {
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 999,
                border: "1px solid currentColor",
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 20,
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.08)",
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: 12,
            },
        },
    },
};

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    shape,
    components: componentOverrides,
});

export function buildMuiTheme(mode: PaletteMode) {
    return createTheme(getDesignTokens(mode));
}
