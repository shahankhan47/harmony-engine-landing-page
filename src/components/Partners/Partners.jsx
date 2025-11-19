"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Partners.module.css";

const logos = [
  "/images/logo-1.svg",
  "/images/logo-2.svg",
  "/images/logo-3.svg",
  "/images/logo-4.svg",
];

export default function Partners() {
  const trackRef = useRef(null);
  const [setWidth, setSetWidth] = useState(0);

  // WAIT FOR IMAGES TO LOAD → THEN MEASURE WIDTH
  useEffect(() => {
    const imgs = trackRef.current.querySelectorAll("img");
    let loaded = 0;

    imgs.forEach((img) => {
      if (img.complete) loaded++;
      else img.onload = () => {
        loaded++;
        if (loaded === imgs.length) measureWidth();
      };
    });

    if (loaded === imgs.length) measureWidth();
  }, []);

  const measureWidth = () => {
    if (!trackRef.current) return;

    const children = trackRef.current.children;
    const singleSetCount = children.length / 4; // 4 duplicated sets

    let width = 0;
    for (let i = 0; i < singleSetCount; i++) {
      width += children[i].offsetWidth;
    }

    setSetWidth(width);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container + " container"}>
        <div className={styles.caption}>
          Trusted by engineering leaders and innovation teams.
        </div>

        <div className={styles.marquee}>
          <div className={styles.fadeLeft}></div>
          <div className={styles.fadeRight}></div>

          <div
            className={styles.track}
            ref={trackRef}
            style={{
              "--loop-distance": `${-setWidth}px`,
            }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((src, idx) => (
              <div className={styles.logo} key={idx}>
                <img src={src} alt={`logo-${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
