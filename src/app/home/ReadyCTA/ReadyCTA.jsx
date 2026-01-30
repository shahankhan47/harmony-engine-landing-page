import Link from "next/link";
import styles from "./ReadyCTA.module.css";

export default function ReadyCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Ready to understand your codebase?
        </h2>

        <p className={styles.subtitle}>
          Explore safely. Nothing is changed. Everything is explained.
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
