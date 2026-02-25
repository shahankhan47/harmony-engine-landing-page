"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

import DemoModal from "../DemoModal/DemoModal";
import DemoForm from "../DemoForm/DemoForm";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <div className={styles.logoBox}>
              <Image
                src="/svg/logo-black.svg"
                alt="Logo"
                width={14}
                height={14}
                className={styles.logoIcon}
              />
            </div>

            <span className={styles.brandText}>
              HarmonyEngine
            </span>
          </div>

          <div className={styles.actions}>
            <button className={styles.ctaButton}  onClick={() => setIsModalOpen(true)}>
              Join Waitlist
            </button>
          </div>
        </div>
      </header>
      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <DemoForm onSuccess={() => setIsModalOpen(false)} />
      </DemoModal>
    </>
  );
}