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
  const [isRecording, setIsRecording] = useState(false);  // Tracks if recognition is active
  const recognitionRef = useRef(null);                    // Holds SpeechRecognition instance


  const chatRef = useRef(null);
  useAutoScroll(chatRef, [messages, waiting]);

  // persist messages
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      console.warn("Speech Recognition API not supported in this browser");
      return;
    }
    
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false; // Stop automatically after speech ends
    recognition.interimResults = true; // Get partial (interim) results for live input
    recognition.lang = "en-US";  // You can adjust the language code as needed

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      // Prefer final transcript if available, else show interim transcript
      setInput((prevInput) => {
        // Combine original input with interim/final transcription so far
        // This helps if user typed before starting speech
        return finalTranscript || interimTranscript || prevInput;
      });
    };

    recognitionRef.current = recognition;

    // Cleanup on unmount
    return () => {
      recognition.stop();
    };
  }, []);


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

  const startRecognition = () => {
    if (recognitionRef.current && !isRecording) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        // Avoid "recognition already started" error on quick re-click
        console.warn("Recognition start error:", e);
      }
    }
  };

  const stopRecognition = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
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
        <button
          className={styles.micBtn}
          onClick={isRecording ? stopRecognition : startRecognition}
          title={isRecording ? "Stop recording" : "Start voice input"}
          aria-pressed={isRecording}
          type="button"
        >
          {isRecording ? "🎙️" : "🎤"}
        </button>
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
