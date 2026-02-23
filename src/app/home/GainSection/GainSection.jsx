import styles from "./GainSection.module.css";

export default function GainSection() {
  return (
    <section id="gain-section-2" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          What you gain from a HarmonyEngine briefing.
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="fa-solid fa-eye" />
            </div>

            <h3 className={styles.cardTitle}>
              Architectural Position
            </h3>

            <ul className={styles.list}>
              <li>
                A consistent, system-level mental model shared across leadership
                and senior engineering.
              </li>
              <li>
                Plain-language articulation of how the system is actually put
                together.
              </li>
              <li>
                A clear understanding of where complexity and risk really live.
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="fa-solid fa-sliders" />
            </div>

            <h3 className={styles.cardTitle}>
              Confident Commitment
            </h3>

            <ul className={styles.list}>
              <li>
                Ability to compare options (rewrite vs refactor vs contain) with
                technical implications spelled out.
              </li>
              <li>
                Earlier visibility into risks that could derail timelines and
                budgets.
              </li>
              <li>
                Reduced dependence on single individuals for system-level
                explanations.
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="fa-solid fa-comments" />
            </div>

            <h3 className={styles.cardTitle}>
              Executive Articulation
            </h3>

            <ul className={styles.list}>
              <li>
                Board- and investor-ready materials that withstand scrutiny.
              </li>
              <li>
                Cleaner conversations with product, finance, and operations
                about trade-offs.
              </li>
              <li>
                A foundation for aligning teams around realistic plans, not
                wishful thinking.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}