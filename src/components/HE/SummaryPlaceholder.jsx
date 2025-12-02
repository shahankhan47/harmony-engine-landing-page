"use client";
import React from "react";
import styles from "./RHE.module.css";

const summaries = [
  { id: "exec", title: "Executive Summary", excerpt: "Project overview and goals..." },
  { id: "req", title: "Requirements and Setup Details", excerpt: "Dependencies, setup..." },
  { id: "personas", title: "User Personas", excerpt: "Primary users and roles..." },
  { id: "stories", title: "User Stories", excerpt: "Key user journeys..." },
  { id: "modules", title: "Key Business Modules", excerpt: "Major modules..." },
  { id: "stack", title: "Current Tech Stack", excerpt: "Tools and libs..." },
  { id: "recstack", title: "Recommended Stable Tech Stack", excerpt: "Suggestions..." },
];

export default function SummaryPlaceholder({ onOpen }) {
  return (
    <div className={styles.summaryList}>
      <h3 className={styles.panelTitle}>Project Summary</h3>
      <div className={styles.summaryItems}>
        {summaries.map((s) => (
          <button
            key={s.id}
            className={styles.summaryItem}
            onClick={() =>
              onOpen({
                id: s.id,
                title: s.title,
                content:
                  `<h2>${s.title}</h2><p>${s.excerpt}</p><p>Sample content for ${s.title}. Replace with real data.</p>`,
              })
            }
          >
            <div className={styles.dot} />
            <div className={styles.summaryMeta}>
              <div className={styles.summaryTitle}>{s.title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
