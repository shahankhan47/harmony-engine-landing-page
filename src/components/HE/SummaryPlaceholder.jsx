"use client";
import React, { useEffect, useState } from "react";
import styles from "./RHE.module.css";

import { marked } from "marked";
import DOMPurify from "dompurify";

// Import the raw stringify JSON text
import data from "../../../data/test/project.json";

export default function SummaryPlaceholder({ onOpen }) {
  const [summaryData, setSummaryData] = useState({});

  useEffect(() => {
    try {
      const parsed = data.Summary;
      setSummaryData(parsed);
    } catch (err) {
      console.error("Failed to parse project-summary.json", err);
    }
  }, []);

  const entries = Object.entries(summaryData);

  const convertMarkdown = (md) => {
    const html = marked(md, { breaks: true });
    return DOMPurify.sanitize(html);
  };

  return (
    <div className={styles.summaryList}>
      <h3 className={styles.panelTitle}>Project Summary</h3>

      <div className={styles.summaryItems}>
        {entries.map(([title, mdContent]) => {
          const htmlContent = convertMarkdown(mdContent);

          return (
            <button
              key={title}
              className={styles.summaryItem}
              onClick={() =>
                onOpen({
                  id: title,
                  title,
                  content: htmlContent, // send sanitized HTML
                })
              }
            >
              <div className={styles.dot} />
              <div className={styles.summaryMeta}>
                <div className={styles.summaryTitle}>{title}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
