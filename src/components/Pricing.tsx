import { siteCopy } from "@/content/site";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function Pricing() {
    const { pricing } = siteCopy;

    if (!pricing) {
        return null;
    }

    return (
        <section id="pricing" className="section-pad">
            <div className="pricing-shell">
                <div className="container-6xl pricing-inner">
                    <div className="pricing-header">
                        <p className="eyebrow pricing-eyebrow">{pricing.eyebrow}</p>
                        <h2 className="heading-section">{pricing.title}</h2>
                        <p className="pricing-description">{pricing.description}</p>
                    </div>

                    <div className="pricing-grid">
                        {pricing.tiers.map((tier) => (
                            <article
                                key={tier.name}
                                className={`pricing-tier ${tier.highlight ? "pricing-tier--highlight" : ""}`}
                            >
                                <div>
                                    <p className="pricing-tier-name">{tier.name}</p>
                                    <p className="pricing-price">
                                        <span>{tier.price}</span>
                                        <span>{tier.period}</span>
                                    </p>
                                    <p className="pricing-tier-copy">{tier.description}</p>
                                </div>

                                <ul className="pricing-feature-list">
                                    {tier.features.map((feature) => (
                                        <li key={feature}>
                                            <CheckCircleIcon fontSize="small" className="pricing-feature-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={tier.href}
                                    className={`pricing-cta ${tier.highlight ? "pricing-cta--accent" : ""}`}
                                >
                                    {tier.cta}
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
