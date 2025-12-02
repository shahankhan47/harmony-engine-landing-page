"use client";
import React, { useState } from "react";
import DiagramModal from "./DiagramModal";
import styles from "./RHE.module.css";

const diagrams = [
  { id: "prog", title: "Program Structure" },
  { id: "flow", title: "User Flow" },
  { id: "personas", title: "User Personas" },
];

export default function RightPane() {
  const [openDiag, setOpenDiag] = useState(null);

  return (
    <div className={styles.rightPane}>
      <h3 className={styles.panelTitle}>Diagrams</h3>

      <div className={styles.diagramList}>
        {diagrams.map((d) => (
          <div key={d.id} className={styles.diagramThumb} onClick={() => setOpenDiag(d)}>
            <div className={styles.diagramPreview}>📊</div>
            <div className={styles.diagramTitle}>{d.title}</div>
          </div>
        ))}
      </div>

      <div className={styles.utilities}>
        <h4 className={styles.utilTitle}>Pinned Topics</h4>
        <div className={styles.placeholderBox}>Nothing to show here</div>

        <h4 className={styles.utilTitle}>Task Checklist</h4>
        <div className={styles.placeholderBox}>Nothing to show here</div>
      </div>

      {openDiag && <DiagramModal diag={openDiag} onClose={() => setOpenDiag(null)} />}
    </div>
  );
}
