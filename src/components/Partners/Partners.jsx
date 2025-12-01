"use client";

import styles from "./Partners.module.css";

const logos = [
  "/images/logo-1.svg",
  "/images/logo-2.svg",
  "/images/logo-3.svg",
  "/images/logo-4.svg",
  "/images/logo-5.svg",
  "/images/logo-6.svg",
  "/images/logo-7.svg",
];

export default function Partners() {
  return (
    <div className={styles.wrap}>
      <div className={styles.caption}>
        Trusted by engineering leaders and innovation teams.
      </div>

      <div className={styles.marquee}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <div className={styles.track}>
          {/* 7 logos x 2 = 14 cells */}
          {logos.concat(logos).map((src, idx) => (
            <div className={styles.logo} key={idx}>
              <img src={src} alt={`logo-${(idx % logos.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
