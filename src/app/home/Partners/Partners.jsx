"use client";

import styles from "./Partners.module.css";

const partners = [
  "Which parts of our system rely on older technology?",
  "How complex is our current architecture?",
  "Where does our pricing logic live?",
  "How much effort would it take for our team to build this?",
  "What might be causing this error?",
  "Why are my customers not able to see their purchase history ?",
];

export default function Partners() {
  return (
    <div className={styles.wrap}>
      <div className={styles.caption}>
        Harmony understands your software and answers the questions people actually ask — in plain language, without needing to read code.
      </div>

      <div className={styles.marquee}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <div className={styles.track}>
          {partners.concat(partners).map((name, idx) => (
            <div className={styles.logo} key={idx}>
              <span className={styles.text}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
