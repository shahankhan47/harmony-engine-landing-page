"use client";

import { useState } from "react";
import styles from "./FinalCTASection.module.css";

import DemoModal from "../../../components/DemoModal/DemoModal";
import DemoForm from "../../../components/DemoForm/DemoForm";

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="final-cta-section" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            CTO-level decision-making in software-driven businesses.
          </h2>

          <div className={styles.actions}>
            <button className={styles.button} onClick={() => setIsModalOpen(true)}>
              Book Your 15-Minute Demo
            </button>
          </div>
        </div>
      </section>
      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <DemoForm onSuccess={() => setIsModalOpen(false)} />
      </DemoModal>
    </>
  );
}