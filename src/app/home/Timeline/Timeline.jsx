"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Timeline.module.css";

const steps = [
  {
    title: "Bring your code into Harmony",
    text: "Securely connect a repository or upload a snapshot. Harmony reads your software structure — nothing is changed.",
    video: "/videos/sample-1.mp4",
    poster: "/images/logo-hd.png"
  },
  {
    title: "See how the system fits together",
    text: "Harmony automatically maps modules, services, and data flows into a clear visual overview.",
    video: "/videos/sample-2.mp4",
    poster: "/images/logo-hd.png"
  },
  {
    title: "Ask the questions that matter",
    text: "Ask in plain English — Harmony answers using your real system, not guesses.",
    video: "/videos/sample-3.mp4",
    poster: "/images/logo-hd.png"
  },
  {
    title: "Understand changes before they surprise you",
    text: "Harmony summarizes changes and pull requests, showing what changed and what it affects.",
    video: "/videos/sample-4.mp4",
    poster: "/images/logo-hd.png"
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
    <section id="howItWorks" className={styles.wrapper} ref={ref}>
      <h2 className={styles.heading}>From code to clarity — step by step</h2>

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

                  <div className={styles.videoWrapper}>
                    <video
                      className={styles.video}
                      src={step.video}
                      poster={step.poster}
                      muted
                      playsInline
                      autoPlay
                      loop
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
