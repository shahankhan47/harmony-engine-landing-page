import styles from "./BuiltForPeople.module.css";

export default function BuiltForPeople() {
  return (
    <section id="successStories" className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            Human-Centered Design
          </span>

          <h2 className={styles.heading}>
            Built for <span>people</span>, not just engineers
          </h2>

          <p className={styles.description}>
            Harmony Engine is designed for anyone who needs to understand how a
            software system works—without needing to read or write code.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Founders</strong> who need to understand their technical
              foundation
            </li>
            <li>
              <strong>Product Managers</strong> planning features and roadmaps
            </li>
            <li>
              <strong>Operations Teams</strong> managing deployments and
              incidents
            </li>
            <li>
              <strong>Compliance Teams</strong> auditing security and data flows
            </li>
          </ul>

          <blockquote className={styles.quote}>
            “If you've ever hesitated to ask a question because it felt ‘too
            technical’, this is for you.”
          </blockquote>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.visual}>
            {/* Placeholder silhouettes */}
            <div className={styles.peopleGroup} />

            <div className={styles.testimonial}>
              <div className={styles.avatar}>💬</div>
              <div>
                <p>
                  “Finally, I can understand our backend without bothering
                  engineering.”
                </p>
                <span>Sarah, Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
