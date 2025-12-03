// src/components/HE/MiddlePane.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./RHE.module.css";
import { marked } from "marked";
import DOMPurify from "dompurify";

// envs
const WS_URL = process.env.NEXT_PUBLIC_HE_WS_URL;
const PROJECT_ID = process.env.NEXT_PUBLIC_HE_PROJECT_ID;
const EMAIL = process.env.NEXT_PUBLIC_HE_EMAIL;

const STORAGE_KEY = "rhe_chat_messages_v1";

/** Markdown → Safe HTML */
function md(htmlText) {
  if (!htmlText) return "";
  const html = marked(htmlText, { breaks: true });
  return DOMPurify.sanitize(html);
}

/** Auto scroll helper */
function useAutoScroll(ref, deps) {
  useEffect(() => {
    if (ref?.current) {
      requestAnimationFrame(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
      });
    }
  }, deps);
}

export default function MiddlePane({ activeItem, onCloseActive }) {
  return (
    <div className={styles.middlePane}>
      {/* Restore correct original behavior */}
      {!activeItem ? (
        <ChatShell />
      ) : (
        <Viewer item={activeItem} onClose={onCloseActive} />
      )}
    </div>
  );
}

/* =======================================================================
   CHAT SHELL
   ======================================================================= */

function ChatShell() {
  const [messages, setMessages] = useState(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  });

  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);

  const chatRef = useRef(null);
  useAutoScroll(chatRef, [messages, waiting]);

  // persist messages
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  /** SEND MESSAGE → open WS only now, close after completion */
  const sendMessage = () => {
    const userText = input.trim();
    if (!userText) return;

    setInput("");

    // append user message
    setMessages((p) => [...p, { role: "user", text: userText }]);

    // placeholder assistant bubble
    setMessages((p) => [...p, { role: "assistant", text: "" }]);

    // show waiting indicator until WS streams
    setWaiting(true);

    // open WS
    let ws;
    try {
      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            user_question: userText,
            project_id: PROJECT_ID,
            email: EMAIL,
            checklistAssistant: false,
            uploaded_files: [],
          })
        );
      };

      ws.onmessage = (ev) => {
        const chunk = ev.data;

        if (waiting) setWaiting(false);

        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last.role === "assistant") {
            return [
              ...prev.slice(0, -1),
              { ...last, text: last.text + chunk },
            ];
          }
          return prev;
        });
      };

      ws.onclose = () => {
        setWaiting(false);
      };

      ws.onerror = () => {
        setWaiting(false);
        try {
          ws.close();
        } catch {}
      };
    } catch (err) {
      console.error("WS error:", err);
      setWaiting(false);
      try {
        ws && ws.close();
      } catch {}
    }
  };

  return (
    <div className={styles.chatShell}>
      {/* header */}
      <div className={styles.chatHeader}>
        <div className={styles.chatTitle}>Live Chat</div>
        <div className={styles.chatSubtitle}>Ask anything about your project</div>
      </div>

      {/* messages */}
      <div ref={chatRef} className={`${styles.chatArea} ${styles.noScrollbar}`}>
        {messages.length === 0 && (
          <div className={styles.chatPlaceholder}>
            <div className={styles.chatMask}>
              Welcome — ask anything about the project here.
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role} text={m.text} />
        ))}

        {waiting && (
          <div className={styles.chatBubbleAssistant}>
            <div className={styles.loadingDots}>
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>

      {/* input */}
      <div className={styles.chatInput}>
        <input
          placeholder="Type your message... Press Enter to send"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className={styles.sendBtn} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

/* =======================================================================
   BUBBLE
   ======================================================================= */

function ChatBubble({ role, text }) {
  const cls = role === "user" ? styles.chatBubbleUser : styles.chatBubbleAssistant;
  const html = md(text);

  return <div className={cls} dangerouslySetInnerHTML={{ __html: html }} />;
}

/* =======================================================================
   VIEWER
   ======================================================================= */

function Viewer({ item, onClose }) {
  const isCode = item?.type === "file";

  return (
    <div className={styles.viewer}>
      <div className={styles.viewerHeader}>
        <div>
          <div className={styles.viewerTitle}>{item.title}</div>
          <div className={styles.viewerSub}>
            {isCode ? "File preview" : "Document preview"}
          </div>
        </div>

        <button
          className={`${styles.closeViewerBtn} ${styles.activeBtn}`}
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className={`${styles.viewerContent} ${styles.noScrollbar}`}>
        {isCode ? (
          <>
            {item.summary && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Summary</div>
                <div style={{ whiteSpace: "pre-wrap", color: "var(--muted)" }}>
                  {item.summary}
                </div>
              </div>
            )}
            <pre className={styles.codeBlock}>
              <code>{item.content}</code>
            </pre>
          </>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        )}
      </div>
    </div>
  );
}
