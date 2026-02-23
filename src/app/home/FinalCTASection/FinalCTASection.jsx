import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  return (
    <section id="final-cta-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          CTO-level decision-making in software-driven businesses.
        </h2>

        <div className={styles.actions}>
          <button className={styles.button}>
            Book Your 15-Minute Demo
          </button>
        </div>
      </div>
    </section>
  );
}