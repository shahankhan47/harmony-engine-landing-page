"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Timeline.module.css";

const steps = [
  {
    title: "Scan Your Repository",
    text: "Harmony Engine quickly analyzes your entire codebase structure.",
    video: "/videos/sample-1.mp4",
    poster: "/images/poster1.png"
  },
  {
    title: "Generate AI Knowledge Maps",
    text: "See how everything connects—modules, flows, services, logic.",
    video: "/videos/sample-1.mp4",
    poster: "/images/poster2.png"
  },
  {
    title: "Ask Anything",
    text: "Query legacy code like ChatGPT—with precise technical context.",
    video: "/videos/sample-1.mp4",
    poster: "/images/poster3.png"
  },
  {
    title: "Ship With Confidence",
    text: "Get PR insights, explanations, and architecture-level commentary.",
    video: "/videos/sample-1.mp4",
    poster: "/images/poster4.png"
  },
];

export default function Timeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // line opacity to avoid flicker (remains 0 until progress > tiny threshold)
  const lineOpacity = useTransform(smoothProgress, [0, 0.01, 0.02], [0, 0, 1]);

  return (
    <section className={styles.wrapper} ref={ref}>
      <h2 className={styles.heading}>How It Works</h2>

      <div className={styles.timeline}>
        {/* Vertical center line */}
        <div className={styles.lineContainer}>
          <motion.div
            className={styles.lineFill}
            style={{
              scaleY: smoothProgress,
              opacity: lineOpacity
            }}
          />
        </div>

        <div className={styles.steps}>
          {steps.map((step, idx) => {
            const offset = idx % 2 === 0 ? -30 : 30;

            // compute when the fill "reaches" this dot
            // using a threshold based on step index (approximate)
            const threshold = (idx + 0.5) / steps.length;

            // create a smooth transition for glow around the threshold
            const glow = useTransform(
              smoothProgress,
              [Math.max(0, threshold - 0.03), threshold, Math.min(1, threshold + 0.03)],
              ["none", "0 0 16px rgba(88,169,66,0.75)", "0 0 16px rgba(88,169,66,0.75)"]
            );

            return (
              <motion.div
                key={idx}
                className={`${styles.step} ${idx % 2 === 0 ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: offset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className={styles.dot}
                  style={{ boxShadow: glow }}
                />

                <div className={styles.content}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  <video
                    className={styles.video}
                    src={step.video}
                    poster={step.poster}
                    preload="metadata"
                    muted
                    playsInline
                    autoPlay
                    loop
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
