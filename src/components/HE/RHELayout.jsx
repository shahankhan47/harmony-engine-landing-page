"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import LeftPane from "./LeftPane";
import MiddlePane from "./MiddlePane";
import RightPane from "./RightPane";
import styles from "./RHE.module.css";

export default function RHELayout({ onClose }) {
  // leftMode: "summary" | "files"
  const [leftMode, setLeftMode] = useState("summary");
  // open content from left pane (type: 'summary'|'file', id, title, content)
  const [activeItem, setActiveItem] = useState(null);

  const openSummary = (summary) => {
    setActiveItem({ type: "summary", ...summary });
  };

  const openFile = (file) => {
    setActiveItem({ type: "file", ...file });
  };

  const closeActive = () => setActiveItem(null);

  return (
    <div className={styles.rheShell}>
      <TopBar
        leftMode={leftMode}
        setLeftMode={setLeftMode}
        onClose={onClose}
      />

      <div className={styles.workspace}>
        <div className={styles.left}>
          <LeftPane
            mode={leftMode}
            onOpenSummary={openSummary}
            onOpenFile={openFile}
          />
        </div>

        <div className={styles.middle}>
          <MiddlePane activeItem={activeItem} onCloseActive={closeActive} />
        </div>

        <div className={styles.right}>
          <RightPane />
        </div>
      </div>
    </div>
  );
}
