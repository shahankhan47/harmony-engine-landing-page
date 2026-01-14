"use client";
import React from "react";
import styles from "./RHE.module.css";

export default function TopBar({ leftMode, setLeftMode, onClose, projectTitle }) {
  return (
    <div className={styles.topbar}>
      <div className={styles.topLeft}>
        <img src="/images/logo.png" alt="Harmony" className={styles.logo} />
        <div className={styles.brand}>{projectTitle}</div>
      </div>

      <div className={styles.topRight}>
        <button
          className={`${styles.button} ${
            leftMode === "files" ? styles.activeBtn : ""
          }`}
          onClick={() => setLeftMode((m) => (m === "files" ? "summary" : "files"))}
        >
          {leftMode === "files" ? "Show Summary" : "Show Files"}
        </button>

        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
