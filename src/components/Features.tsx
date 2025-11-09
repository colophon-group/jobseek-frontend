"use client";

import type { ReactNode } from "react";
import { siteCopy } from "@/content/site";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ThemedImage } from "@/components/ThemedImage";

const iconMap: Record<string, ReactNode> = {
    notifications: <NotificationsIcon className="feature-icon" />,
    check_circle: <CheckCircleIcon className="feature-icon" />,
    bookmark: <BookmarkIcon className="feature-icon" />,
};

export function Features() {
    const content = siteCopy.features;
    const screenshot = content.screenshot;

    return (
        <section id="features" className="feature-section section-pad">
            <div className="container-6xl grid-2-lg gap-12">
                {/* Text column */}
                <div className="feature-text-col lg:pt-4 lg:pr-10">
                    <p className="eyebrow">{content.eyebrow}</p>
                    <h2 className="heading-section">{content.title}</h2>
                    <p className="mt-6 body-muted">{content.description}</p>

                    <dl className="feature-list">
                        {content.items.map((feature) => (
                            <div key={feature.name} className="feature-item">
                                {iconMap[feature.icon]}
                                <dt>{feature.name}</dt>{" "}
                                <dd>{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Image column */}
                <div className="media-bleed lg:mt-0">
                    <ThemedImage
                        darkSrc={screenshot.dark}
                        lightSrc={screenshot.light}
                        alt={screenshot.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                        className="media-img md:-ml-10 lg:-ml-0"
                    />
                </div>
            </div>
        </section>
    );
}
