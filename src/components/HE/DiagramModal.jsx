"use client";
import React from "react";
import styles from "./RHE.module.css";

export default function DiagramModal({ diag, onClose }) {
  return (
    <div className={styles.diagramModalOverlay} onClick={onClose}>
      <div className={styles.diagramModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.diagramModalHeader}>
          <div className={styles.diagramModalTitle}>{diag.title}</div>
          <button className={styles.closeViewerBtn} onClick={onClose}>Close</button>
        </div>

        <div className={styles.diagramModalContent}>
          <div className={styles.diagramLarge}>
            <div style={{ fontSize: 18, opacity: 0.8 }}>Zoomable diagram placeholder for:</div>
            <div style={{ fontWeight: 700, marginTop: 8 }}>{diag.title}</div>
            <div style={{ marginTop: 18, color: "#aaa" }}>
              (Mermaid rendering & zoom/pan will be implemented in Step 4.)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
