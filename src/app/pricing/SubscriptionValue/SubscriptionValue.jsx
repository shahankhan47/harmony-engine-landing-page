import styles from "./SubscriptionValue.module.css";

export default function SubscriptionValue() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        What your subscription actually gives you
      </h2>

      <p className={styles.text}>
        You're not paying for more dashboards, more alerts, or more work.
      </p>

      <p className={styles.text}>
        You're paying for <span>confidence when making decisions</span>, fewer
        unknowns hiding in your software, and the ability to ask questions —
        and get clear answers.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.iconGreen}>🧠</div>
          <h4>Confidence</h4>
          <p>Make decisions knowing you understand what's actually happening.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconBlue}>👁️</div>
          <h4>Visibility</h4>
          <p>See what matters, when it matters.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconPurple}>💬</div>
          <h4>Understanding</h4>
          <p>Ask questions in plain language and get clear answers.</p>
        </div>
      </div>

      <div className={styles.footer}>
        <i>Harmony Engine helps teams move from <s>uncertainty</s>{" "} <b>to</b> {" "}
        <span>shared understanding</span>.</i>
      </div>
    </section>
  );
}
