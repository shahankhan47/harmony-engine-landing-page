"use client";

import styles from "./page.module.css";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$0",
    description: "For personal projects and evaluation.",
    features: [
      "Analyze up to 1 repository",
      "Basic architecture maps",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49 / month",
    description: "Advanced features for growing teams.",
    features: [
      "Analyze up to 10 repositories",
      "Advanced diagrams and metrics",
      "Priority email support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited repositories",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Pricing Plans</h1>
      <p className={styles.subtitle}>
        Choose the plan that fits your needs. Upgrade anytime.
      </p>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={styles.pricingCard}>
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.planPrice}>{plan.price}</p>
            <p className={styles.planDescription}>{plan.description}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>Choose Plan</button>
          </div>
        ))}
      </div>
    </main>
  );
}
