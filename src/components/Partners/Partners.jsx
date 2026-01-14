"use client";

import styles from "./Partners.module.css";

const partners = [
  "Which parts of the codebase run on legacy tech?",
  "How tangled is our current architecture?",
  "Where is the logic for pricing?",
  "How long would it take for my team to implement this architecture?",
  "Why am I getting this error?",
  "Why are my customers not able to see their purchase history ?",
];

export default function Partners() {
  return (
    <div className={styles.wrap}>
      <div className={styles.caption}>
        Harmony reads your codebase and answers these questions in plain language – so leaders don’t need to read code.
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
