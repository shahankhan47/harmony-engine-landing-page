"use client"
import styles from "./Timeline.module.css"
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"

const points = [
  {
    title: "Connect Your Codebase",
    desc: "Import from GitHub, GitLab, Azure DevOps, or Bitbucket.",
    video: "/videos/sample-1.mp4",
  },
  {
    title: "Explore & Understand",
    desc: "See every component, dependency, and flow — clearly visualized.",
    video: "/videos/sample-2.mp4",
  },
  {
    title: "Build With Confidence",
    desc: "Generate documentation, design features, and collaborate with your team.",
    video: "/videos/sample-3.mp4",
  },
]

export default function Timeline() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  })

  // dot glow transforms
  const glows = points.map((_, idx) => {
    const start = (idx / points.length) * 1.0
    const end = ((idx + 0.2) / points.length) * 1.0
    return useTransform(scrollYProgress, [start, end], [0, 1])
  })

  const scales = glows.map(g => useTransform(g, [0, 1], [1, 1.35]))
  const boxShadows = glows.map(g =>
    useTransform(g, v => {
      const alpha = (0.55 * v).toFixed(2)
      const blur = Math.round(25 * v)
      return `0 0 ${blur}px rgba(88,169,66,${alpha})`
    })
  )

  return (
    <section className={styles.wrap} ref={sectionRef}>
        <div className={styles.inner + " container"}>

            {/* TIMELINE LINE (fixed: spans the entire points container) */}
            <div className={styles.timelineLine}>
            <div className={styles.lineTrack}></div>
            <motion.div
                className={styles.lineFill}
                style={{ scaleY: scrollYProgress }}
            />
            </div>

            <div className={styles.points}>
            {points.map((p, idx) => {
                const even = idx % 2 === 0

                return (
                <div key={idx} className={styles.pointRow}>

                    {/* LEFT SIDE */}
                    <div className={styles.side}>
                    {even ? (
                        <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 150 }}
                        viewport={{ once: true }}
                        >
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        </motion.div>
                    ) : (
                        <motion.div
                        className={styles.media}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 90 }}
                        viewport={{ once: true }}
                        >
                        <div className={styles.videoCard}>
                            <video src={p.video} autoPlay loop muted playsInline />
                        </div>
                        </motion.div>
                    )}
                    </div>

                    {/* CENTER COLUMN WITH DOT */}
                    <div className={styles.centerColumn}>
                    <motion.div
                        className={styles.dot}
                        style={{
                        scale: scales[idx],
                        boxShadow: boxShadows[idx],
                        }}
                    />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={styles.side}>
                    {!even ? (
                        <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        >
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        </motion.div>
                    ) : (
                        <motion.div
                        className={styles.media}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        >
                        <div className={styles.videoCard}>
                            <video src={p.video} autoPlay loop muted playsInline />
                        </div>
                        </motion.div>
                    )}
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    </section>

  )
}
