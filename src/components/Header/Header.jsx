import styles from "./Header.module.css";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoBox}>
            <i className={`fa-solid fa-cube ${styles.logoIcon}`} />
          </div>

          <span className={styles.brandText}>
            HarmonyEngine
          </span>
        </div>

        <div className={styles.actions}>
          <button className={styles.ctaButton}>
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}