"use client";
import React from "react";
import SummaryPlaceholder from "./SummaryPlaceholder";
import FileTreePlaceholder from "./FileTreePlaceholder";
import styles from "./RHE.module.css";

export default function LeftPane({ mode, onOpenSummary, onOpenFile, files, loadingFiles }) {
  if (loadingFiles) {
    return (
      <div className={styles.leftPane}>
        <div style={{ padding: 20, opacity: 0.6 }}>Loading project files...</div>
      </div>
    );
  }

  return (
    <div className={styles.leftPane + " " + styles.noScrollbar}>
      {mode === "summary" ? (
        <SummaryPlaceholder onOpen={onOpenSummary} />
      ) : (
        <FileTreePlaceholder onOpenFile={onOpenFile} files={files} />
      )}
    </div>
  );
}

