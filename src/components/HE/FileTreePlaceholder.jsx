"use client";
import React from "react";
import styles from "./RHE.module.css";

/**
 * Minimal placeholder file tree. Clicking a file opens dummy content.
 * We'll replace this with a real tree in Step 3.
 */

const files = [
  { id: "layout.js", path: "app/layout.js", type: "file" },
  { id: "home.page.js", path: "app/page.js", type: "file" },
  { id: "hero", path: "components/HeroSection/HeroSection.jsx", type: "file" },
  { id: "header", path: "components/Header/Header.jsx", type: "file" },
  { id: "styles", path: "globals.css", type: "file" },
];

export default function FileTreePlaceholder({ onOpenFile }) {
  return (
    <div className={styles.fileTree}>
      <h3 className={styles.panelTitle}>Project Files</h3>

      <div className={styles.treeList}>
        <div className={styles.folder}>
          <div className={styles.folderName}>src</div>
          <div className={styles.folderChildren}>
            <div className={styles.folder}>
              <div className={styles.folderName}>app</div>
              <div className={styles.fileList}>
                {files.slice(0, 2).map((f) => (
                  <div
                    key={f.id}
                    className={styles.fileItem}
                    onClick={() =>
                      onOpenFile({
                        id: f.id,
                        title: f.path,
                        content:
                          `// ${f.path}\n\n// This is placeholder file content for ${f.path}\n\nfunction example() {\n  return "Hello from ${f.id}";\n}\n`,
                        language: "javascript",
                      })
                    }
                  >
                    <span className={styles.fileIcon}>📄</span>
                    <span className={styles.fileName}>{f.path}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.folder}>
              <div className={styles.folderName}>components</div>
              <div className={styles.fileList}>
                {files.slice(2).map((f) => (
                  <div
                    key={f.id}
                    className={styles.fileItem}
                    onClick={() =>
                      onOpenFile({
                        id: f.id,
                        title: f.path,
                        content:
                          `// ${f.path}\n\n// Placeholder component file contents for ${f.path}\n\nexport default function Comp(){ return null }\n`,
                        language: "javascript",
                      })
                    }
                  >
                    <span className={styles.fileIcon}>📄</span>
                    <span className={styles.fileName}>{f.path}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
