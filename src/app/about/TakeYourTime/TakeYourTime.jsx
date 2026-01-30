import styles from "./TakeYourTime.module.css";

export default function TakeYourTime() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.iconWrap}>🕒</div>

        <h2 className={styles.heading}>
          Take your <span>time</span>
        </h2>

        <p className={styles.subheading}>
          Understanding complex systems doesn't have to be rushed.
        </p>

        <p className={styles.description}>
          Harmony Engine is designed to be explored at your own pace—
          <span className={styles.green}> calmly</span>,{" "}
          <span className={styles.blue}>safely</span>, and{" "}
          <span className={styles.purple}>without pressure</span>.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.green}`}>🍃</div>
            <h4>No Pressure</h4>
            <p>Explore at your own speed</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.blue}`}>🛡️</div>
            <h4>Always Safe</h4>
            <p>Nothing breaks in production</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.purple}`}>🎓</div>
            <h4>Deep Learning</h4>
            <p>Build genuine understanding</p>
          </div>
        </div>
      </div>
    </section>
  );
}
