import styles from "./ReadOnly.module.css";

export default function ReadOnly() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.stack}>
            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.green}`}>📖</div>
              <div>
                <h4>Read & Analyze</h4>
                <p>Scans your codebase safely</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.blue}`}>🧭</div>
              <div>
                <h4>Understand & Map</h4>
                <p>Builds knowledge graphs</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.purple}`}>💬</div>
              <div>
                <h4>Explain & Answer</h4>
                <p>Provides clear explanations</p>
              </div>
            </div>

            <div className={`${styles.item} ${styles.danger}`}>
              <div className={`${styles.icon} ${styles.red}`}>⛔</div>
              <div>
                <h4>Never Modifies</h4>
                <p>Zero changes to your code</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <span className={styles.badge}>Safe & Read-Only</span>

          <h2 className={styles.heading}>
            A calm, <span>read-only</span> way to understand
          </h2>

          <p className={styles.description}>
            Harmony Engine doesn't change your systems. It doesn't deploy code.
            It doesn't automate decisions.
          </p>

          <p className={styles.description}>
            Instead, it quietly reads and explains what already exists—turning
            complexity into clear, visual explanations and plain-language
            answers.
          </p>

          <div className={styles.callout}>
            <div className={styles.lock}>🔒</div>
            <div>
              <strong>100% Safe to Explore</strong>
              <p>
                You can explore freely, knowing nothing you do will affect
                production. No deployments, no changes, no risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
