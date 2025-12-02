"use client";
import React from "react";
import SummaryPlaceholder from "./SummaryPlaceholder";
import FileTreePlaceholder from "./FileTreePlaceholder";
import styles from "./RHE.module.css";

export default function LeftPane({ mode, onOpenSummary, onOpenFile }) {
  // the outer wrapper (.left) handles scrolling; leftPane itself expands with content
  return (
    <div className={styles.leftPane + " " + styles.noScrollbar}>
      {mode === "summary" ? (
        <SummaryPlaceholder onOpen={onOpenSummary} />
      ) : (
        <FileTreePlaceholder onOpenFile={onOpenFile} />
      )}
    </div>
  );
}
