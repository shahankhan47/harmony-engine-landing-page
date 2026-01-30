import styles from "./EverythingTogether.module.css";

export default function EverythingTogether() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Everything works together — calmly
      </h2>

      <p className={styles.subheading}>
        Three core capabilities that create understanding without chaos
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          💡
          <h4>Understanding</h4>
          <ul>
            <li>Upload or connect a repository</li>
            <li>Browse files safely</li>
            <li>Ask questions in plain language</li>
          </ul>
        </div>

        <div className={styles.card}>
          🔍
          <h4>Visibility</h4>
          <ul>
            <li>View and download summaries</li>
            <li>See how systems fit together</li>
            <li>Share explanations easily</li>
          </ul>
        </div>

        <div className={styles.card}>
          🛡️
          <h4>Confidence</h4>
          <ul>
            <li>Review PRs with context</li>
            <li>Reduce surprises</li>
            <li>Support better conversations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
