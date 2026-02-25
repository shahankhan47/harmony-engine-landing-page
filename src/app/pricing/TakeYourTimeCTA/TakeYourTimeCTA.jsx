import Link from "next/link";
import styles from "./TakeYourTimeCTA.module.css";

export default function TakeYourTimeCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Take your time</h2>

        <p className={styles.subheading}>
          Choosing a tool to understand your software shouldn't feel rushed.
        </p>

        <p className={styles.description}>
          Explore Harmony Engine at your own pace. Ask questions. See if it fits
          the way your team works.
        </p>

        <div className={styles.actions}>
          <Link href="https://app.harmonyengine.ai">
            <button className={styles.primary}>
              Start Free Trial →
            </button>
          </Link>

          <Link href="/contact">
            <button className={styles.secondary}>
              Schedule a Demo
            </button>
          </Link>
        </div>

        <p className={styles.footer}>
          When clarity matters, <span>Harmony Engine</span> is here.
        </p>
      </div>
    </section>
  );
}
