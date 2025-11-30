"use client";

import { useState } from "react";
import styles from "./HeroSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const items = [
  {
    id: "analysis",
    title: "AI Code Analysis",
    subtitle: "Instant structure. Instant clarity.",
    img: "/images/hero-1.png",
  },
  {
    id: "chat",
    title: "AI Chat for Your Code",
    subtitle: "Ask anything. Build anything.",
    img: "/images/hero-2.png",
  },
  {
    id: "reports",
    title: "Knowledge Reports",
    subtitle: "Your codebase, documented.",
    img: "/images/hero-3.png",
  },
  {
    id: "prs",
    title: "Pull Request Insights",
    subtitle: "Business-level context for every PR.",
    img: "/images/hero-4.png",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(items[0].id);
  const activeItem = items.find((i) => i.id === active);

  // 🔥 mouse data only for background
  const [cursor, setCursor] = useState({ x: 50, y: 50, angle: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCursor((prev) => {
      const dx = x - prev.x;
      const dy = y - prev.y;
      // angle of movement → ray direction
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      return { x, y, angle };
    });
  };

  const handleMouseLeave = () => {
    setCursor({ x: 50, y: 50, angle: 0 });
  };

  return (
    <div
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mouse-x": `${cursor.x}%`,
        "--mouse-y": `${cursor.y}%`,
        "--ray-angle": `${cursor.angle}deg`,
      }}
    >
      <div className={styles.top}>
        <h1 className={styles.title}>Understand Your Entire Codebase in Seconds</h1>

        <p className={styles.subtitle}>
          Harmony Engine analyzes legacy systems, uncovers hidden logic, and lets
          you ask anything — from bug fixes to new features.
        </p>

        <Link href="/get-started">
          <button className={styles.cta}>Get Started</button>
        </Link>

        <div className={styles.controls}>
          {items.map((it) => (
            <div
              key={it.id}
              onMouseEnter={() => setActive(it.id)}
              onClick={() => setActive(it.id)}
              className={`${styles.control} ${
                active === it.id ? styles.active : ""
              }`}
            >
              <div className={styles.controlInner}>
                <div className={styles.controlTitle}>{it.title}</div>
                <div className={styles.controlSubtitle}>{it.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mediaWrap}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeItem.img}
              src={activeItem.img}
              alt={activeItem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className={styles.heroImage}
            />
          </AnimatePresence>
        </div>

        <p className={styles.smallText}>
          Trusted by teams modernizing large, complex, or undocumented systems.
        </p>
      </div>
    </div>
  );
}
