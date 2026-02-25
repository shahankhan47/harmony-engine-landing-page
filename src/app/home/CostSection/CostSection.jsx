import styles from "./CostSection.module.css";

export default function CostSection() {
  return (
    <section id="cost-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Decision-making under partial visibility is expensive.
        </h2>

        <div className={styles.headerRow}>
          <h3>Visible costs</h3>
          <h3>Hidden costs</h3>
        </div>

        <div className={styles.rows}>
          {/* ROW 1 */}
          <div className={styles.row}>
            <div className={styles.card}>
              <h4>Decision latency</h4>
              <p>
                Weeks of meetings just to align on "how the system works"
                before you can even debate options.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-triangle-exclamation" />
                <div>
                  <h4>Key-person risk</h4>
                  <p>
                    A few senior engineers become bottlenecks for every
                    important decision—and a single departure creates real
                    exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className={styles.row}>
            <div className={styles.card}>
              <h4>Estimates that don't hold</h4>
              <p>
                Scope and timing slip because hidden dependencies and coupling
                only show up after work begins.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-triangle-exclamation" />
                <div>
                  <h4>Over- or under-engineering</h4>
                  <p>
                    You either over-invest "just to be safe" or cut corners in
                    places that later become structural problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className={styles.row}>
            <div className={styles.card}>
              <h4>Stalled initiatives</h4>
              <p>
                High-stakes projects (migrations, consolidations, new lines of
                business) drag because no one feels confident enough to commit.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-triangle-exclamation" />
                <div>
                  <h4>Communication risk</h4>
                  <p>
                    Explaining a complex, partially understood system to
                    executives, investors, or acquirers using
                    back-of-the-napkin models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}