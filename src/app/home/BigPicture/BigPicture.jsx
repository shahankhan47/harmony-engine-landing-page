import styles from "./BigPicture.module.css";

export default function BigPicture() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT: Diagram */}
        <div className={styles.left}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span>Data Flow Diagram</span>
              <div className={styles.actions}>
                <span />
                <span />
              </div>
            </div>

            <div className={styles.diagram}>
              <div className={styles.row}>
                <div className={`${styles.node} ${styles.frontend}`}>
                  Frontend
                </div>
                <div className={`${styles.node} ${styles.api}`}>
                  API Gateway
                </div>
              </div>

              <div className={styles.arrow}>↓</div>

              <div className={`${styles.node} ${styles.auth}`}>
                Auth Service
              </div>

              <div className={styles.arrow}>↓</div>

              <div className={styles.row}>
                <div className={`${styles.node} ${styles.database}`}>
                  Database
                </div>
                <div className={`${styles.node} ${styles.cache}`}>
                  Cache
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className={styles.right}>
          <span className={styles.badge}>Automated Visualization</span>

          <h2 className={styles.heading}>
            See the big picture <span>instantly</span>
          </h2>

          <p className={styles.description}>
            HarmonyEngine automatically generates interactive diagrams showing
            data flows, dependencies, and system architecture. No more hunting
            through scattered documentation or outdated wiki pages.
          </p>

          <ul className={styles.list}>
            <li>Auto-generated diagrams for every module</li>
            <li>Interactive dependency graphs with drill-down capability</li>
            <li>Export diagrams for presentations and documentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
