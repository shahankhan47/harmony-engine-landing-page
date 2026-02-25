import styles from "./SituationSection.module.css";

export default function SituationSection() {
  return (
    <section id="situation-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>
              You're accountable for a system you can't personally audit.
            </h2>
            <p className={styles.text}>
              As systems grow, no one person can hold the full picture in their head.
            </p>
          </div>

          <div className={styles.right}>
            <ul className={styles.list}>
              <li><i className="fa-solid fa-circle" />Decide on replatforming, rewrites, and major refactors</li>
              <li><i className="fa-solid fa-circle" />Sign off on timelines, budgets, and delivery risk</li>
              <li><i className="fa-solid fa-circle" />Explain system constraints to non-technical stakeholders</li>
              <li><i className="fa-solid fa-circle" />Absorb the consequences when things go wrong</li>
            </ul>

            <div className={styles.warning}>
              <p>
                You depend on fragmented, tribal knowledge—the people who
                understand the system best are busy shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}