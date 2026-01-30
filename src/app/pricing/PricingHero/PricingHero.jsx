import styles from "./PricingHero.module.css";

export default function PricingHero() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>
        Pricing that reflects clarity, not <span>complexity</span>
      </h1>

      <p className={styles.subheading}>
        Harmony Engine is priced to make understanding accessible — not to gate
        it behind technical roles or steep commitments.
      </p>
    </section>
  );
}
