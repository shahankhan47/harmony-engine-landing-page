"use client";
import React from "react";
import styles from "./RHE.module.css";

function ChatShell() {
  return (
    <div className={styles.chatShell}>
      <div className={styles.chatHeader}>
        <div className={styles.chatTitle}>Live Chat</div>
        <div className={styles.chatSubtitle}>Ask questions about the project</div>
      </div>

      {/* messages area: scrolls only when content overflows */}
      <div className={`${styles.chatArea} ${styles.noScrollbar}`}>
        {/* Placeholder message block; real messages will be appended here */}
        <div className={styles.chatPlaceholder}>
          <div className={styles.chatMask}>Welcome — ask anything about the project here.</div>
        </div>
      </div>

      {/* input area stays fixed at bottom of the middle pane */}
      <div className={styles.chatInput}>
        <input placeholder="Type your message... Press Enter to send" />
        <button className={styles.sendBtn}>Send</button>
      </div>
    </div>
  );
}

function Viewer({ item, onClose }) {
  // item: {type, id, title, content or language}
  const isCode = item?.type === "file";
  return (
    <div className={styles.viewer}>
      <div className={styles.viewerHeader}>
        <div>
          <div className={styles.viewerTitle}>{item.title}</div>
          <div className={styles.viewerSub}>{isCode ? "File preview" : "Document preview"}</div>
        </div>

        <div>
          {/* styled to match the active "Show Files" button look */}
          <button
            className={`${styles.closeViewerBtn} ${styles.activeBtn}`}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      {/* viewerContent scrolls independently and is hidden scrollbar */}
      <div className={`${styles.viewerContent} ${styles.noScrollbar}`}>
        {isCode ? (
          <pre className={styles.codeBlock}>
            <code>{item.content}</code>
          </pre>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        )}
      </div>
    </div>
  );
}

export default function MiddlePane({ activeItem, onCloseActive }) {
  return (
    <div className={styles.middlePane}>
      {!activeItem ? <ChatShell /> : <Viewer item={activeItem} onClose={onCloseActive} />}
    </div>
  );
}
