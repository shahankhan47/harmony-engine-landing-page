"use client";

import { useState } from "react";
import styles from "./HeroSection.module.css";

import DemoModal from "../../../components/DemoModal/DemoModal";
import DemoForm from "../../../components/DemoForm/DemoForm";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const handleDemoSuccess = () => {
    setStatus("success");
    setTimeout(() => {
      setStatus(null);
      setIsModalOpen(false)
    }, 3000);
  }

  const handleDemoError = (err) => {
    setStatus("error");
    setTimeout(() => {
      setStatus(null);
      setIsModalOpen(true)
    }, 3000);
  }

  return (
    <>
      <section id="hero-section" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.left}>
              <p className={styles.preHeading}>
                Accountable for software outcomes without reading every line of
                code?
              </p>

              <h1 className={styles.heading}>
                <span className={styles.primary}>
                  Understand the system
                <br />
                before you change it.
                </span>
              </h1>

              <p className={styles.description}>
                Give strategic stakeholders a structured, board-ready
                understanding of complex codebases—so you can make confident,
                high-impact decisions without living inside the code.
              </p>

              <div className={styles.actions}>
                <button
                  className={styles.ctaButton}
                  onClick={() => setIsModalOpen(true)}
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <i className="fa-solid fa-file-lines" />
                </div>
                <h3 className={styles.cardTitle}>
                  A strategic briefing for your codebase
                </h3>
              </div>

              <p className={styles.cardIntro}>
                From your existing repositories, HarmonyEngine delivers:
              </p>

              <ul className={styles.list}>
                <li>
                  <i className="fa-solid fa-circle" />
                  <span>An executive-level narrative of your system</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle" />
                  <span>A clear view of architecture and dependencies</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle" />
                  <span>Key risks, constraints, and leverage points</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle" />
                  <span>Decision options with trade-offs made explicit</span>
                </li>
              </ul>

              <div className={styles.cardFooter}>
                <p>
                  So you can walk into board, investor, and leadership
                  conversations with grounded, defensible positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <DemoForm onSuccess={handleDemoSuccess} onError={handleDemoError} />
        {status && (
          <div
            className={`${styles.statusMessage} ${
              status === "success"
                ? styles.statusSuccess
                : styles.statusError
            }`}
          >
            {status === "success"
              ? "Request submitted successfully."
              : "Unable to send request. Please try again."}
          </div>
        )}
      </DemoModal>
    </>
  );
}