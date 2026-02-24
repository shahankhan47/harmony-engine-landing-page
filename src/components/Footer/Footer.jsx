import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoBox}>
              <Image
                src="/svg/logo-black.svg"
                alt="Logo"
                width={14}
                height={14}
                className={styles.logoIcon}
              />
            </div>

            <span className={styles.brandText}>
              HarmonyEngine
            </span>
          </div>

          {/* Links */}
          <div className={styles.links}>
            <a href="#" className={styles.link}>Company</a>
            <a href="#" className={styles.link}>Privacy</a>
            <a href="#" className={styles.link}>Terms</a>
            <a href="#" className={styles.link}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}