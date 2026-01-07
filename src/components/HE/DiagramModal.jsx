"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./RHE.module.css";
import mermaid from "mermaid";
import panzoom from "panzoom";
import { saveAs } from "file-saver";

import data from "../../../data/test/project.json";

export default function DiagramModal({ diag, onClose }) {
  const [svgCode, setSvgCode] = useState("");
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("default");

  const svgContainerRef = useRef(null);
  const panzoomInstance = useRef(null);

  const diagramsData = data.Diagrams
  const diagramEntry = diagramsData[diag.title];

  // Detect variants
  const variants = diagramEntry?.variants
    ? diagramEntry.variants
    : { default: diagramEntry.mermaid_code };

  const mermaidCode = variants[activeTab];

  // ---- 1. Mermaid Rendering ----
  useEffect(() => {
    setSvgCode(""); 
    setError(null);
    let isMounted = true;

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      flowchart: { curve: "basis" },
      securityLevel: "loose",
    });

    async function renderDiagram() {
      try {
        const { svg } = await mermaid.render(
          `mermaid-${diag.title.replace(/\s+/g, "-")}-${activeTab}`,
          mermaidCode
        );

        if (isMounted) {
          setSvgCode(svg);
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
        setError("Failed to render diagram.");
      }
    }

    renderDiagram();
    return () => (isMounted = false);
  }, [diag.title, activeTab, mermaidCode]);

  // ---- 2. Pan + Zoom ----
  useEffect(() => {
    if (svgContainerRef.current && svgCode) {
      if (panzoomInstance.current) {
        panzoomInstance.current.dispose();
      }

      panzoomInstance.current = panzoom(svgContainerRef.current, {
        maxZoom: 5,
        minZoom: 0.5,
        smoothScroll: true,
      });
    }
  }, [svgCode]);

  // ---- 3. Export as SVG ----
  const exportSVG = () => {
    const blob = new Blob([svgCode], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, `${diag.title}-${activeTab}.svg`);
  };


  // ---- 4. Copy Mermaid code ----
  const copyCode = async () => {
    await navigator.clipboard.writeText(mermaidCode);
    alert("Mermaid code copied to clipboard!");
  };

  return (
    <div className={styles.diagramModalOverlay} onClick={onClose}>
      <div className={styles.diagramModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.diagramModalHeader}>
          <div className={styles.diagramModalTitle}>{diag.title}</div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button className={styles.closeViewerBtn} onClick={copyCode}>
              Copy Code
            </button>
            <button className={styles.closeViewerBtn} onClick={exportSVG}>
              Export SVG
            </button>
            <button className={styles.closeViewerBtn} onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        {/* ---- Variant Tabs ---- */}
        <div style={{ padding: "10px 20px", display: "flex", gap: "10px" }}>
          {Object.keys(variants).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`${styles.button} ${
                activeTab === key ? styles.activeBtn : ""
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ---- Diagram Display ---- */}
        <div className={styles.diagramModalContent}>
          {error ? (
            <div style={{ color: "salmon" }}>{error}</div>
          ) : svgCode ? (
            <div
              ref={svgContainerRef}
              className={styles.diagramLarge}
              dangerouslySetInnerHTML={{ __html: svgCode }}
            />
          ) : (
            <div className={styles.diagramLarge}>Rendering diagram...</div>
          )}
        </div>
      </div>
    </div>
  );
}
