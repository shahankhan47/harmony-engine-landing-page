"use client";
import { useState } from "react";
import styles from "./page.module.css";
import RHELayout from "../../components/HE/RHELayout";

export default function GetStartedPage() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsClosing(false);
    setOpen(true);
  };

  const closeModal = () => {
    // we'll gracefully close the underlying modal via animation
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 280);
  };

  return (
    <div className={styles.wrapper}>
      {/* SECTION 1 — INTRO */}
      <section className={styles.section}>
        <h1 className={styles.title}>Welcome to Harmony Engine</h1>

        <p className={styles.text}>
          Harmony Engine analyzes legacy systems, uncovers hidden logic, creates
          architecture maps, and allows AI-powered understanding of any part of
          your codebase within seconds.
        </p>
      </section>

      {/* SECTION 2 — BENEFITS */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>What You Can Do</h2>

        <ul className={styles.list}>
          <li>Instantly understand large codebases.</li>
          <li>Navigate files and architecture visually.</li>
          <li>Chat with your entire codebase in natural language.</li>
          <li>Generate knowledge reports and module explanations.</li>
          <li>Explore deep logic paths and dependencies.</li>
        </ul>
      </section>

      {/* SECTION 3 — ABOUT RHE */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Interactive UI — RHE</h2>

        <p className={styles.text}>
          The Reconstruction Harmony Environment (RHE) is the interactive
          interface that visualizes your code, architecture, and logic while
          enabling AI-powered exploration.
        </p>

        <p className={styles.text}>
          Click below to open a live demo window. The full UI will appear in a
          modal popup.
        </p>
      </section>

      {/* CTA BUTTON */}
      <div className={styles.center}>
        <button className={styles.demoBtn} onClick={openModal}>
          Try Live Demo
        </button>
      </div>

      {/* NEXT STEPS */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>What’s Next?</h2>

        <p className={styles.text}>
          In the next phases we’ll implement the full RHE experience — including
          the sidebar, code navigator, AI assistant chat, architecture explorer,
          and interactive flow diagrams. Once complete, it will load directly
          inside the modal you just opened.
        </p>
      </section>

      {/* MODAL WITH RHE (Step 1) */}
      {open && (
        <div
          className={`${styles.modalOverlay} ${isClosing ? styles.fadeOut : styles.fadeIn}`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modal} ${isClosing ? styles.modalClose : styles.modalOpen}`}
            onClick={(e) => e.stopPropagation()}
            style={{ padding: 0 }}
          >
            {/* RHE is self-contained and includes its own close button */}
            <RHELayout onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
