"use client";

import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.aboutSection}>
        <h1 className={styles.title}>About Harmony Engine</h1>
        <p className={styles.paragraph}>
          Harmony Engine transforms your complex codebase into clear,
          actionable insights. Designed for software leaders, architects,
          and engineers, it provides instant architecture maps, risk
          assessments, and searchable documentation to power smarter decisions.
        </p>

        <h2 className={styles.subtitle}>Our Mission</h2>
        <p className={styles.paragraph}>
          To empower teams with visibility and control over their software,
          enabling faster onboarding, reduced risks, and continuous improvement.
        </p>

        <h2 className={styles.subtitle}>Key Features</h2>
        <ul className={styles.featuresList}>
          <li>Automated architecture discovery and visualization</li>
          <li>Natural language answers to your codebase questions</li>
          <li>Executive summaries and impact reports</li>
          <li>Collaboration and knowledge retention tools</li>
        </ul>
      </section>
    </main>
  );
}
