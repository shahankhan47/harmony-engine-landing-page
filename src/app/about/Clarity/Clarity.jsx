import styles from "./Clarity.module.css";

export default function Clarity() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Clarity changes <span>conversations</span>
        </h2>

        <p className={styles.subheading}>
          When everyone can see how a system fits together, conversations
          change. Teams align faster—without relying on guesswork or
          gatekeepers.
        </p>

        <div className={styles.cards}>
          {/* Before */}
          <div className={`${styles.card} ${styles.before}`}>
            <div className={styles.cardTitle}>
              <span className={styles.iconRed}>✕</span>
              Before Harmony
            </div>

            <ul>
              <li>Questions feel risky to ask</li>
              <li>Decisions based on assumptions</li>
              <li>Knowledge locked in few heads</li>
              <li>Long onboarding times</li>
              <li>Technical gatekeepers</li>
            </ul>
          </div>

          {/* After */}
          <div className={`${styles.card} ${styles.after}`}>
            <div className={styles.cardTitle}>
              <span className={styles.iconGreen}>✓</span>
              With Harmony
            </div>

            <ul>
              <li>Questions become easier to ask</li>
              <li>Decisions become easier to explain</li>
              <li>Shared understanding across teams</li>
              <li>Faster alignment and onboarding</li>
              <li>Everyone has access to knowledge</li>
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          Harmony Engine helps teams move from{" "}
          <span className={styles.red}>confusion</span> to{" "}
          <span className={styles.green}>shared understanding</span>.
        </div>
      </div>
    </section>
  );
}
