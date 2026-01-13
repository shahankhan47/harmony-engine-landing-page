"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const items = [
  {
    id: "analysis",
    title: "Visibility",
    subtitle: "See the system as it really is",
    img: "/images/hero-1.png",
    subtext: "Faster Due Diligence. Fewer surprises",
    bullets: [
      "Instant architecture map ( Services, Modules, Dependencies)",
      "Highlights fragile areas, Upgrade paths and bottlenecks",
      "Creates a shared system overview for leadership and Vendors"
    ]
  },
  {
    id: "chat",
    title: "Allignment",
    subtitle: "Give every stakeholder the same source of truth",
    img: "/images/hero-2.png",
    subtext: "Less tribal knowledge. Faster onboarding.",
    bullets: [
      "Ask Plain English Questions and get consistent answers",
      "Turn answers into living documentation",
      "Preserve knowledge when teams change or vendors rotate"
    ]
  },
  {
    id: "reports",
    title: "Control",
    subtitle: "Understand impact before it ships",
    img: "/images/hero-3.png",
    subtext: "Lower delivery risk. Better governance",
    bullets: [
      "Executive summaries of pull requests",
      "What changed, why it matters and why it might break",
      "Reports you can share with audits, leaderships and customers"
    ]
  }
];

export default function HeroSection() {
  const [active, setActive] = useState(items[0].id);
  const activeItem = items.find((i) => i.id === active);

  // This is what actually drives the CSS vars (SMOOTH)
  const [cursor, setCursor] = useState({ x: 50, y: 50, angle: 0 });

  // This is the raw mouse target (JUMPY, but we don't use it directly)
  const targetRef = useRef({ x: 50, y: 50, angle: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const prev = targetRef.current;
    const dx = x - prev.x;
    const dy = y - prev.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    targetRef.current = { x, y, angle };
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 50, y: 50, angle: 0 };
  };

  // 🔥 Smooth animation loop: lerp cursor → targetRef.current
  useEffect(() => {
    let frameId;

    const smoothStep = () => {
      setCursor((prev) => {
        const target = targetRef.current;
        const lerp = 0.12; // smaller = smoother / slower

        const x = prev.x + (target.x - prev.x) * lerp;
        const y = prev.y + (target.y - prev.y) * lerp;

        // shortest path for angles
        let deltaAngle = target.angle - prev.angle;
        if (deltaAngle > 180) deltaAngle -= 360;
        if (deltaAngle < -180) deltaAngle += 360;
        const angle = prev.angle + deltaAngle * lerp;

        return { x, y, angle };
      });

      frameId = requestAnimationFrame(smoothStep);
    };

    frameId = requestAnimationFrame(smoothStep);
    return () => cancelAnimationFrame(frameId);
  }, []);

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
        <h1 className={styles.title}>Turn your codebase into clarity you can run the business on</h1>

        <p className={styles.subtitle}>
          HarmonyEngine analyzes your repo and produces an executive summary, architecture diagrams, and searchable answers—so you can make decisions, reduce risk, and onboard faster.
        </p>

        <Link href="/get-started">
          <button className={styles.cta}>Explore a sample project</button>
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
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={styles.mediaContent}
            >
              {/* 🔹 BULLET LIST */}
              <ul className={styles.bullets}>
                {activeItem.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              {/* 🔹 IMAGE */}
              <motion.img
                src={activeItem.img}
                alt={activeItem.title}
                className={styles.heroImage}
              />

              {/* 🔹 SUBTEXT */}
              <p className={styles.smallText}>
                {activeItem.subtext}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
