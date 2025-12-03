// src/components/HE/MiddlePane.jsx
"use client";
import React from "react";
import styles from "./RHE.module.css";

/**
 * MiddlePane: shows ChatShell (when no activeItem) or Viewer (when activeItem)
 * Viewer now shows:
 *  - Summary (rendered as sanitized HTML if present)
 *  - Code block (plain pre/code)
 *
 * No syntax highlighting by default (per your choice).
 */

function ChatShell() {
  return (
    <div className={styles.chatShell}>
      <div className={styles.chatHeader}>
        <div className={styles.chatTitle}>Live Chat</div>
        <div className={styles.chatSubtitle}>Ask questions about the project</div>
      </div>

      <div className={`${styles.chatArea} ${styles.noScrollbar}`}>
        <div className={styles.chatPlaceholder}>
          <div className={styles.chatMask}>Welcome — ask anything about the project here.</div>
        </div>
      </div>

      <div className={styles.chatInput}>
        <input placeholder="Type your message... Press Enter to send" />
        <button className={styles.sendBtn}>Send</button>
      </div>
    </div>
  );
}

function Viewer({ item, onClose }) {
  // item: {type:'file'|'summary', id, title, content, summary}
  const isCode = item?.type === "file";

  return (
    <div className={styles.viewer}>
      <div className={styles.viewerHeader}>
        <div>
          <div className={styles.viewerTitle}>{item.title}</div>
          <div className={styles.viewerSub}>{isCode ? "File preview" : "Document preview"}</div>
        </div>

        <div>
          <button className={`${styles.closeViewerBtn} ${styles.activeBtn}`} onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <div className={`${styles.viewerContent} ${styles.noScrollbar}`}>
        {isCode ? (
          <>
            {/* Summary at the top (if available) */}
            {item.summary ? (
              <div style={{ marginBottom: 18 }}>
                {/* summary often contains markdown/plain text. It's safer to render as preformatted text for now */}
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Summary</div>
                <div style={{ color: "var(--muted)", whiteSpace: "pre-wrap" }}>{item.summary}</div>
              </div>
            ) : null}

            {/* Code block */}
            <pre className={styles.codeBlock}>
              <code>{item.content}</code>
            </pre>
          </>
        ) : (
          // For non-file documents (summaries opened from left), show HTML or raw content
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        )}
      </div>
    </div>
  );
}

export default function MiddlePane({ activeItem, onCloseActive }) {
  return <div className={styles.middlePane}>{!activeItem ? <ChatShell /> : <Viewer item={activeItem} onClose={onCloseActive} />}</div>;
}
