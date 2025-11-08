export const siteCopy = {
    url: "https://jobseek-frontend-bice.vercel.app/",
    logoUrl: "https://jobseek-frontend-bice.vercel.app/js_logo_black_circle.svg",
    logoWidth: 500,
    logoHeight: 500,
    logoWide: {
        light: "/js_wide_logo_black.svg",
        dark: "/js_wide_logo_white.svg",
        alt: "Job Seek",
        width: 144,
        height: 36,
    },
    name: "Job Seek",
    logoAlt: "Job Seek",
    creator: "Viktor Shcherbakov",
    authors: [{ name: "Viktor Shcherbakov", url: "https://viktor-shcherb.github.io/" }],
    nav: {
        product: {label: "Product", href: "#", hide: false},
        features: {label: "Features", href: "#", hide: false},
        pricing: {label: "Pricing", href: "#", hide: false},
        company: {label: "Company", href: "#", hide: false},
        login: {label: "Log in", href: "/handler/signup", hide: true},
    },
    hero: {
        eyebrow: "Keep your hand on the job market pulse.",
        title: "Find relevant roles faster.",
        description:
            "Subscribe to updates from companies, track applications, and never miss new openings. " +
            "Designed to keep you in control, not hand your decisions to a bot.",
        primaryCta: "Get started",
        secondaryCta: "Learn more",
    },
    features: {
        eyebrow: "Everything you need to stay ahead",
        title: "Built for active job seekers",
        description:
            "Track roles, get notified when companies post something new, and keep your pipeline clean.",
        screenshot: {
            light: "/js_missing_screenshot_black.png",
            dark: "/js_missing_screenshot_white.png",
            alt: "Job Seek dashboard showing tracked applications and company alerts",
            width: 1200,
            height: 630,
        },
        items: [
            {
                name: "Company alerts",
                description: "Follow target employers and get notified when they add new roles.",
                icon: "notifications",
            },
            {
                name: "Application tracker",
                description: "Log where you applied, status, contacts, and next steps.",
                icon: "check_circle",
            },
            {
                name: "Saved searches",
                description: "Save your filters for quick scans without retyping everything.",
                icon: "bookmark",
            },
        ],
    },
    auth: {
        login: "Log in",
        icon: "Login",
    },
    header: {
        mobileOpenIcon: "Menu",
        menuAction: "Open main menu"
    },
    mobileMenu: {
        closeMenu: "Close menu"
    },
    footer: {
        text: "All rights reserved.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/colophon-group/jobseek-frontend",
            },
        ],
    },
};
