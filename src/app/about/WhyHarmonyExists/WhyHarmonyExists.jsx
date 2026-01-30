import styles from "./WhyHarmonyExists.module.css";

export default function WhyHarmonyExists() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Harmony Engine exists to <span>change that</span>
        </h2>

        <p className={styles.subheading}>
          Not by adding more tools or complexity, but by making understanding
          feel calm, accessible, and shared.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.green}`}>🌿</div>
            <h3>Calm</h3>
            <p>
              No pressure, no rush. Explore your systems at your own pace
              without the anxiety of breaking things.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.blue}`}>♿</div>
            <h3>Accessible</h3>
            <p>
              Built for everyone—no code reading required. If you've ever felt
              excluded from technical conversations, this is for you.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.purple}`}>👥</div>
            <h3>Shared</h3>
            <p>
              Knowledge shouldn't live in one person's head. We help teams
              build collective understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
