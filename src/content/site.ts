export const siteCopy = {
    url: "https://jobseek-frontend-bice.vercel.app/",
    domain: "jobseek-frontend-bice.vercel.app",
    repoUrl: "https://github.com/colophon-group/jobseek-frontend",
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
        product: {label: "Product", href: "/", hide: false},
        features: {label: "Features", href: "/#features", hide: false},
        pricing: {label: "Pricing", href: "/#pricing", hide: false},
        company: {label: "How do we index jobs?", href: "/how-we-index", hide: false},
        license: {label: "License", href: "/license", hide: true},
        login: {label: "Log in", href: "/handler/signup", hide: true},
        dashboard: {label: "Dashboard", href: "/dashboard", hide: true},
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
    pricing: {
        eyebrow: "Pricing",
        title: "Choose the right plan for you",
        description:
            "Simple, transparent pricing. Start for free and upgrade when you need more reach.",
        tiers: [
            {
                name: "Free",
                price: "$0",
                period: "Forever",
                description: "Test Job Seek with enough headroom to track a focused search.",
                features: [
                    "Subscribe to up to 5 companies",
                    "Application tracker",
                    "Saved searches",
                ],
                cta: "Start for free",
                href: "/handler/signup",
                highlight: false,
            },
            {
                name: "Pro",
                price: "$10",
                period: "per month",
                description: "For active job seekers who need unlimited reach and faster insight.",
                features: [
                    "Unlimited company subscriptions",
                    "Application tracker",
                    "Saved searches",
                    "Email alerts & updates",
                ],
                cta: "Upgrade to Pro",
                href: "/handler/signup",
                highlight: true,
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
        text: "Released under the MIT License. Job data is CC BY-NC 4.0.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/colophon-group/jobseek-frontend",
            },
            {
                label: "Contact",
                href: "mailto:business@colophon-group.org",
            },
            {
                label: "License",
                href: "/license",
            },
        ],
    },
    themeSwitch: {
        lightAriaLabel: "Switch to dark mode",
        darkAriaLabel: "Switch to light mode",
    },
    seo: {
        disallow: ["/dashboard", "/handler/"],
        sitemap: [
            { path: "/", changeFrequency: "weekly", priority: 1 },
            { path: "/how-we-index", changeFrequency: "monthly", priority: 0.6 },
            { path: "/license", changeFrequency: "monthly", priority: 0.5 },
        ],
    },
    indexing: {
        hero: {
            eyebrow: "Indexing policy",
            title: "How we find and process job postings",
            description:
                "Job Seek is a search engine for both active candidates and professionals who passively track " +
                "the market—it surfaces fresh roles while staying respectful of employer infrastructure. This " +
                "page documents exactly how our crawler behaves, the controls that keep it polite, and how jobs " +
                "ultimately land in the index.",
        },
        botName: "JobSeekBot",
        contactEmail: "business@colophon-group.org",
        ossRepoUrl: "https://github.com/colophon-group/jobseek-indexing",
        assurances: {
            title: "Crawling assurances",
            items: [
                {
                    title: "Respectful pacing.",
                    body: "Every retry window uses exponential backoff so we never hammer an origin, and we bail " +
                        "if a host keeps timing out.",
                },
                {
                    title: "Robots, attribution, and TDM reservation.",
                    body: "Our crawler reads `robots.txt`, honours disallow rules, identifies itself via " +
                        "`User-Agent`, and respects the W3C `TDM-Reservation` header—if a page signals reservation, " +
                        "we skip it.",
                },
                {
                    title: "One page per minute.",
                    body: "Even after discovery we retrieve job detail pages at a strict limit of one request per " +
                        "site per minute.",
                },
            ],
        },
        ingestion: {
            title: "How postings enter the index",
            steps: [
                {
                    title: "Sitemap first.",
                    body: "We start by following sitemap declarations exposed via `robots.txt` or standard endpoints " +
                        "because it is the cheapest, most accurate channel for both parties.",
                },
                {
                    title: "Career page fallback.",
                    body: "When no sitemap exists we crawl the canonical careers page, follow links that look like " +
                        "individual postings, and keep track of what we already saw.",
                },
                {
                    title: "Graceful pagination.",
                    body: "If the careers site is paginated we sort by newest roles, fetch the first few pages, " +
                        "and stop as soon as previously indexed roles appear—avoiding deep pagination scrapes.",
                },
                {
                    title: "Selective storage.",
                    body: "After we collect candidate URLs we download them one-by-one (still one per minute) and " +
                        "persist only role-specific data such as title, description, location, compensation notes, " +
                        "and other job-related metadata surfaced on the page. We never store unrelated site content.",
                },
            ],
        },
        sitemapNote: "We strongly encourage publishing an easily discoverable sitemap for your careers section. " +
            "Without it, we periodically mint lightweight `HEAD` requests against previously discovered job URLs " +
            "to confirm they are still live, which introduces unnecessary traffic.",
        optOut: {
            title: "Opt-out or questions",
            body: "If you notice unexpected activity from our crawler or prefer that your careers site not be " +
                "indexed, please email us and we will respond promptly.",
        },
        automation: {
            title: "Our stance on automation",
            body: "We oppose handing hiring or job-search decisions over to black-box automation — whether on the " +
                "employer or applicant side. Every outbound link we share includes `utm_source=jobseek` so recruiters " +
                "recognise the traffic, and we continuously review usage patterns plus enforce friction to deter " +
                "scripted applications.",
        },
        oss: {
            title: "Open-source crawlers",
            body: "Transparency matters, so the code for our job link collection service and extraction pipeline is " +
                "open source.",
        },
        outreach: {
            title: "Need to reach us?",
            body: "If you notice unusual crawler behaviour, prefer that we do not index your content, or have " +
                "suggestions on how to improve our safeguards, please reach out.",
        },
    },
    dashboard: {
        action: "To dashboard",
        actionGoTo: "Go to dashboard",
        actionOpen: "Open dashboard",
    },
    license: {
        hero: {
            eyebrow: "Licensing",
            title: "License of Job Seek",
            description:
                "Job Seek’s codebase is open source under MIT. The job data we collect and enrich is " +
                "Creative Commons BY-NC 4.0. Below is the plain-language summary — please read the full licenses " +
                "for exact terms.",
        },
        code: {
            title: "Application code (MIT License)",
            summary: "You can use, modify, and redistribute the code in personal or commercial products as long as " +
                "you include the copyright and license notice.",
            rights: [
                "Copy and modify the code for any purpose, including commercial products.",
                "Redistribute your changes, as long as you include the MIT notice.",
                "No warranty — use at your own risk.",
            ],
            linkLabel: "Read the full MIT License",
        },
        data: {
            title: "Collection of job postings (CC BY-NC 4.0)",
            summary: "You may reuse the job dataset with attribution for non-commercial purposes. Commercial " +
                "usage requires prior written consent.",
            rights: [
                "Credit: “Viktor Shcherbakov, Collection of Job Postings” with a link to the source.",
                "No commercial redistribution or resale without permission.",
                "You can remix/transform the data for research or personal dashboards.",
            ],
            linkLabel: "Read the CC BY-NC 4.0 License",
        },
        contactCta: "Questions about licensing or commercial use? Email us.",
    },
};
