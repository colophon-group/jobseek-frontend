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
    ui: {
        tableOfContents: {
            title: "Contents",
            ariaLabel: "Page contents",
        },
        publicDomainCreditFallback: "Public Domain",
    },
    hero: {
        eyebrow: "Keep your hand on the job market pulse.",
        title: "Find relevant roles faster.",
        description:
            "Subscribe to updates from companies, track applications, and never miss new openings. " +
            "Designed to keep you in control, not hand your decisions to a bot.",
        primaryCta: "Get started",
        secondaryCta: "Learn more",
        art: {
            assetKey: "the_astrologer",
            focus: { x: 0, y: 35 },
        },
    },
    features: {
        sections: [
            {
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
                points: [
                    {
                        icon: "notifications",
                        title: "Company alerts",
                        description: "Follow target employers and get notified when they add new roles.",
                    },
                    {
                        icon: "check_circle",
                        title: "Application tracker",
                        description: "Log where you applied, status, contacts, and next steps.",
                    },
                    {
                        icon: "bookmark",
                        title: "Saved searches",
                        description: "Save your filters for quick scans without retyping everything.",
                    },
                ],
            },
            {
                eyebrow: "Stay in control",
                title: "The first job aggregator that puts you behind the wheel",
                description:
                    "Don't see your favourite company in the feed? Paste its careers link and we'll start scraping it for you—no scripts, no spreadsheets, no waiting in support queues.",
                screenshot: {
                    light: "/js_missing_screenshot_black.png",
                    dark: "/js_missing_screenshot_white.png",
                    alt: "Job Seek dashboard showing tracked applications and company alerts",
                    width: 1200,
                    height: 630,
                },
                points: [
                    {
                        icon: "bug",
                        title: "Paste a link, kick off a crawl",
                        description:
                            "Point us at any careers page or Notion job board and Job Seek mirrors it in your workspace within minutes.",
                    },
                    {
                        icon: "travel_explore",
                        title: "Kill the 50-tab routine",
                        description: "Park every interesting startup in one dashboard instead of juggling Chrome windows and bookmarks.",
                    },
                    {
                        icon: "campaign",
                        title: "Alerts you actually drive",
                        description: "Set the cadence per company so you hear about fresh openings without doom-scrolling job sites all day.",
                    },
                ],
            },
        ],
    },
    pricing: {
        eyebrow: "Pricing",
        title: "Choose the right plan for you",
        description:
            "Simple, transparent pricing. Start for free and upgrade when you get serious about your job search.",
        tiers: [
            {
                name: "Free",
                price: "$0",
                period: "Forever",
                description: "Test Job Seek with enough headroom to be up to date with your dream companies.",
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
            description: "We look for structured feeds before scraping raw HTML. First we check for sitemaps, then " +
                "client-side JSON APIs, and only parse full pages when neither exists.",
            steps: [
                {
                    title: "Sitemap first.",
                    body: "We look for a sitemap that already lists every careers or job detail page—ideally linked " +
                        "from `robots.txt`—and rely on it whenever possible.",
                },
                {
                    title: "Client APIs second.",
                    body: "If no sitemap exists we inspect the client application for JSON APIs it calls; when found " +
                        "we hit those endpoints directly to enumerate posting URLs without scraping the DOM.",
                },
                {
                    title: "Graceful page parsing.",
                    body: "As a last resort we parse the careers pages themselves, preferring newest-first sorts and " +
                        "stopping once previously indexed roles reappear instead of crawling every page.",
                },
                {
                    title: "Selective storage.",
                    body: "Once we fetch an individual posting we store only the job-specific metadata (title, role " +
                        "description, location, compensation notes, posting URL, and timestamps) plus extracted " +
                        "structured fields. We do not archive unrelated site content.",
                },
            ],
        },
        sitemapNote: "We strongly encourage publishing an easily discoverable sitemap for your careers section. " +
            "Without it, we periodically mint lightweight `HEAD` requests against previously discovered job URLs " +
            "to confirm they are still live, which introduces unnecessary traffic.",
        contentsNav: {
            overview: { label: "Overview", anchor: "indexing-overview" },
            assurances: { label: "Crawling assurances", anchor: "indexing-assurances" },
            ingestion: { label: "How postings enter the index", anchor: "indexing-ingestion" },
            optOut: { label: "Opt-out or questions", anchor: "indexing-opt-out" },
            automation: { label: "Our stance on automation", anchor: "indexing-automation" },
            oss: { label: "Open-source crawlers", anchor: "indexing-oss" },
            outreach: { label: "Need to reach us?", anchor: "indexing-outreach" },
        },
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
        tabs: [
            { id: "feed", label: "Feed", icon: "dynamic" },
            { id: "explore", label: "Explore", icon: "explore" },
            { id: "settings", label: "Settings", icon: "settings" },
        ],
        sections: {
            feed: {
                title: "Your feed",
                description:
                    "Track new postings from companies you follow. Alerts, reminders, and saved searches will land here.",
            },
            explore: {
                title: "Explore companies",
                description:
                    "Discover new employers to follow. We highlight trending teams, hiring velocity, and fresh openings.",
            },
            settings: {
                title: "Settings",
                description:
                    "Manage notification preferences, saved searches, and export your application data.",
            },
        },
        shell: {
            navAriaLabel: "Dashboard navigation",
            fallbackTitle: "Coming soon",
            fallbackDescription: "Dashboard content is on the way.",
        },
        settingsPanel: {
            alerts: {
                loading: "Loading your profile…",
                requireLogin: "You need to sign in to manage settings.",
                signInToUpdate: "Please sign in to update your profile.",
                updateFailed: "Failed to update profile",
                updated: "Profile updated",
            },
            profileCard: {
                title: "Display name",
                subheader: "Show up in shared links and alerts using this name.",
                fieldLabel: "Name",
                actions: {
                    save: "Save",
                    saving: "Saving…",
                    saved: "Saved",
                },
            },
            notificationsCard: {
                title: "Alert preferences",
                subheader: "Pick how we notify you about new jobs.",
                toggles: [
                    "Email me weekly digests",
                    "Instant alerts for followed companies",
                ],
            },
        },
    },
    license: {
        hero: {
            eyebrow: "Licensing",
            title: "License of Job Seek",
            description:
                "Job Seek’s codebase is open source under MIT. The job data we collect and enrich is " +
                "Creative Commons BY-NC 4.0. Below is the plain-language summary — please read the full licenses " +
                "for exact terms.",
            art: {
                assetKey: "the_judge",
                focus: { x: 0, y: 20 },
            },
        },
        contentsNav: {
            overview: { label: "Overview", anchor: "license-overview" },
            code: { label: "Application code (MIT)", anchor: "license-code" },
            data: { label: "Job data (CC BY-NC 4.0)", anchor: "license-data" },
            contact: { label: "Contact", anchor: "license-contact" },
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
    publicdomain: {
        operateur_cephalique: {
            href: "/publicdomain/master/operateur_cephalique.jpg",
            light: "/publicdomain/operateur_cephalique_dark.png",
            dark: "/publicdomain/operateur_cephalique_light.png",
            height: 1024,
            width: 774,
            alt: "Operateur Cephalique by Campion",
            link: "https://pdimagearchive.org/images/d526ff08-72e3-4ebf-a858-ffc50becbd56",
            publisher: "Public Domain Image Archive",
            title: "Operateur Cephalique",
            author: "Campion",
            date: "1663",
        },
        the_king: {
            href: "/publicdomain/master/the_king.jpg",
            light: "/publicdomain/the_king_dark.png",
            dark: "/publicdomain/the_king_light.png",
            height: 724,
            width: 550,
            alt: "The King by Hans Holbein",
            link: "https://pdimagearchive.org/images/1c02a0da-9b8e-4756-9e60-a22e6b72b0a8/",
            publisher: "Public Domain Image Archive",
            title: "The King",
            author: "Hans Holbein",
            date: "1523-5",
        },
        the_astrologer: {
            href: "/publicdomain/master/the_astrologer.jpg",
            light: "/publicdomain/the_astrologer_dark.png",
            dark: "/publicdomain/the_astrologer_light.png",
            height: 733,
            width: 550,
            alt: "The Astrologer by Hans Holbein",
            link: "https://pdimagearchive.org/images/408c1d91-25a7-40bc-80e3-4796a9fb9aca/",
            publisher: "Public Domain Image Archive",
            title: "The Astrologer",
            author: "Hans Holbein",
            date: "1523-5",
        },
        the_miser: {
            href: "/publicdomain/master/the_miser.jpg",
            light: "/publicdomain/the_miser_dark.png",
            dark: "/publicdomain/the_miser_light.png",
            height: 735,
            width: 550,
            alt: "The Miser by Hans Holbein",
            link: "https://pdimagearchive.org/images/14742445-d1ff-46c2-bade-57c59cf6be40/",
            publisher: "Public Domain Image Archive",
            title: "The Miser",
            author: "Hans Holbein",
            date: "1523-5",
        },
        the_monk: {
            href: "/publicdomain/master/the_monk.jpg",
            light: "/publicdomain/the_monk_dark.png",
            dark: "/publicdomain/the_monk_light.png",
            height: 719,
            width: 550,
            alt: "The Monk by Hans Holbein",
            link: "https://pdimagearchive.org/images/e7a7ebf2-5cb5-4f84-b059-1694dedb1360/",
            publisher: "Public Domain Image Archive",
            title: "The Monk",
            author: "Hans Holbein",
            date: "1523-5",
        },
        the_judge: {
            href: "/publicdomain/master/the_judge.jpg",
            light: "/publicdomain/the_judge_dark.png",
            dark: "/publicdomain/the_judge_light.png",
            height: 730,
            width: 550,
            alt: "The Judge by Hans Holbein",
            link: "https://pdimagearchive.org/images/9bc16851-a40d-4592-bfca-375b68995f9d/",
            publisher: "Public Domain Image Archive",
            title: "The Judge",
            author: "Hans Holbein",
            date: "1523-5",
            crop: {
                left: 50,
                bottom: 120,
            },
        },
        expulsion_from_paradise: {
            href: "/publicdomain/master/expulsion_from_paradise.jpg",
            light: "/publicdomain/expulsion_from_paradise_dark.png",
            dark: "/publicdomain/expulsion_from_paradise_light.png",
            height: 705,
            width: 550,
            alt: "Expulsion from Paradise by Hans Holbein",
            link: "https://pdimagearchive.org/images/402db071-bd53-4a89-b612-b1711d14ab4d/",
            publisher: "Public Domain Image Archive",
            title: "Expulsion from Paradise",
            author: "Hans Holbein",
            date: "1523-5",
        }
    }
};
