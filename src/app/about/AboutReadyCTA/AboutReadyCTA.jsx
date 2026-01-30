import Link from "next/link";
import styles from "./AboutReadyCTA.module.css";

export default function AboutReadyCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ready to bring clarity to your team?
        </h2>

        <p className={styles.subheading}>
          Join teams who've transformed confusion into shared understanding.
        </p>

        <div className={styles.actions}>
          <Link href="/get-started">
            <button className={styles.primary}>
              Explore a sample project →
            </button>
          </Link>
          <Link href="https://app.harmonyengine.ai">
            <button className={styles.secondary}>
              Upload your project
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
