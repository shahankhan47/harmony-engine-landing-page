import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* <span className={styles.badge}>
          <span className={styles.dot} />
          Our Mission
        </span> */}

        <h1 className={styles.heading}>
          Software shouldn't feel impossible to{" "}
          <span>understand</span>
        </h1>

        <p className={styles.description}>
          Most software systems grow quietly over time. People change,
          decisions pile up, and eventually only a few individuals truly
          understand how everything fits together.
        </p>
      </div>
    </section>
  );
}
