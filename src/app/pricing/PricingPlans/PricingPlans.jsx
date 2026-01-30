import styles from "./PricingPlans.module.css";

export default function PricingPlans() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Explore */}
        <div className={styles.card}>
          <div className={styles.planHeader}>
            <div className={`${styles.icon} ${styles.green}`}>🌱</div>
            <h3 className={styles.plan}>Explore</h3>
          </div>

          <p className={styles.planDesc}>
            For individuals and small teams who want to understand a codebase
            without pressure.
          </p>

          <div className={styles.price}>
            <span className={styles.amount}>$29</span>
            <span className={styles.period}>/month</span>
          </div>

          <p className={styles.subPrice}>per user</p>

          <ul className={styles.list}>
            <li>Upload or connect a project safely</li>
            <li>Ask questions in plain language</li>
            <li>Explore files without fear of breaking anything</li>
            <li>Generate summaries and diagrams you can share</li>
            <li>Understand pull requests before they merge</li>
          </ul>

          <div className={styles.note}>
            🔒 Read-only by design. Nothing is changed.
          </div>

          <button className={styles.secondaryBtn}>Start Exploring</button>
        </div>

        {/* Team */}
        <div className={`${styles.card} ${styles.popular}`}>
          <div className={styles.popularBadge}>Most Popular</div>

          <div className={styles.planHeader}>
            <div className={`${styles.icon} ${styles.green}`}>👥</div>
            <h3 className={styles.plan}>Team</h3>
          </div>

          <p className={styles.planDesc}>
            For teams who need shared understanding, not bottlenecks.
          </p>

          <div className={styles.price}>
            <span className={styles.amount}>$79</span>
            <span className={styles.period}>/month</span>
          </div>

          <p className={styles.subPrice}>per user · billed annually</p>

          <p className={styles.included}>Everything in Explore, plus:</p>

          <ul className={styles.list}>
            <li>Team collaboration with shared context</li>
            <li>Pull request summaries everyone can understand</li>
            <li>Downloadable diagrams and summaries</li>
            <li>One place where questions get consistent answers</li>
          </ul>

          <div className={styles.highlight}>
            💡 No more “ask the one person who knows.”
          </div>

          <button className={styles.primaryBtn}>Start Team Trial</button>
        </div>

        {/* Organization */}
        <div className={styles.card}>
          <div className={styles.planHeader}>
            <div className={`${styles.icon} ${styles.purple}`}>🏢</div>
            <h3 className={styles.plan}>Organization</h3>
          </div>

          <p className={styles.planDesc}>
            For organizations where understanding software is a risk, not a
            luxury.
          </p>

          <div className={styles.custom}>Custom</div>
          <p className={styles.subPrice}>Contact us for pricing</p>

          <p className={styles.included}>Everything in Team, plus:</p>

          <ul className={styles.list}>
            <li>Multiple projects and repositories</li>
            <li>Visibility for leadership and compliance</li>
            <li>Safer reviews before changes land</li>
            <li>A shared source of truth across teams</li>
            <li>Dedicated support and onboarding</li>
          </ul>

          <div className={styles.note}>
            Designed for long-term clarity and trust.
          </div>

          <button className={styles.secondaryBtn}>Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
