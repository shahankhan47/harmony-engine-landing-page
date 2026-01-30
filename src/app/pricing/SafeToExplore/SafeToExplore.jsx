import styles from "./SafeToExplore.module.css";

export default function SafeToExplore() {
  return (
    <section className={styles.section}>
      <div className={styles.lock}>🔒</div>

      <h2 className={styles.heading}>
        Built to be safe to explore
      </h2>

      <p className={styles.subheading}>
        Harmony Engine is read-only by design.
      </p>

      <div className={styles.group}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.red}`}>{"</>"}</div>
            <p>It does not modify your code.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.orange}`}>🚀</div>
            <p>It does not deploy changes.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.yellow}`}>🤖</div>
            <p>It does not automate decisions.</p>
          </div>
        </div>

        <div className={styles.footer}>
          You can explore freely, knowing <span>nothing you do</span> will affect
          production.
        </div>
      </div>
    </section>
  );
}
