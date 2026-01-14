"use client";
import React, { useEffect, useState } from "react";
import styles from "./RHE.module.css";

import { marked } from "marked";
import DOMPurify from "dompurify";

export default function SummaryPlaceholder({ summary = {}, onOpen }) {
  const entries = Object.entries(summary || {});

  const convertMarkdown = (md) =>
    DOMPurify.sanitize(marked(md, { breaks: true }));

  if (!entries.length) {
    return (
      <div className={styles.summaryList}>
        <h3 className={styles.panelTitle}>Project Summary</h3>
        <div style={{ padding: 16, opacity: 0.6 }}>
          No summary available.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.summaryList}>
      <h3 className={styles.panelTitle}>Project Summary</h3>

      <div className={styles.summaryItems}>
        {entries.map(([title, mdContent]) => (
          <button
            key={title}
            className={styles.summaryItem}
            onClick={() =>
              onOpen({
                id: title,
                title,
                content: convertMarkdown(mdContent)
              })
            }
          >
            <div className={styles.dot} />
            <div className={styles.summaryMeta}>
              <div className={styles.summaryTitle}>{title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
