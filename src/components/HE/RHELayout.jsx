"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import LeftPane from "./LeftPane";
import MiddlePane from "./MiddlePane";
import RightPane from "./RightPane";
import styles from "./RHE.module.css";

export default function RHELayout({ onClose, projectFiles, loadingFiles, projectMeta, projectId, projectTitle }) {
  const [leftMode, setLeftMode] = useState("summary");
  const [activeItem, setActiveItem] = useState(null);
  const filesData = projectFiles || [];

  const openSummary = (summary) => {
    setActiveItem({ type: "summary", ...summary });
  };

  // Open a file from in-memory dataset
  const openFile = (fileMeta) => {
    const f = filesData.find((x) => x.id === fileMeta.id);
    if (!f) return;

    setActiveItem({
      type: "file",
      id: f.id,
      title: f.file_name,
      summary: f.summary,
      content: f.content,
    });
  };

  return (
    <div className={styles.rheShell}>
      <TopBar leftMode={leftMode} setLeftMode={setLeftMode} onClose={onClose} projectTitle={projectTitle} />

      <div className={styles.workspace}>
        <div className={styles.left}>
          <LeftPane
            mode={leftMode}
            onOpenSummary={openSummary}
            loadingFiles={loadingFiles}
            onOpenFile={openFile}
            files={filesData}
            projectMeta={projectMeta}
          />
        </div>

        <div className={styles.middle}>
          <MiddlePane
            activeItem={activeItem}
            onCloseActive={() => setActiveItem(null)}
            projectId={projectId}
          />
        </div>

        <div className={styles.right}>
          <RightPane diagramsData={projectMeta?.Diagrams} />
        </div>
      </div>
    </div>
  );
}
