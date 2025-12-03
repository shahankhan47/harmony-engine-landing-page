// src/components/HE/FileTreePlaceholder.jsx
"use client";
import React, { useMemo, useState } from "react";
import styles from "./RHE.module.css";

/**
 * Build a nested tree from the backend-provided files array.
 * Each file object expected to have: id, file_path (cleaned), file_name, summary, content
 */

function buildTree(files) {
  const root = { name: "/", path: "", type: "folder", children: [] };
  const map = { "": root };

  (files || []).forEach((f) => {
    const cleanPath = (f.file_path || "").replace(/^\/+/, "");
    if (!cleanPath) return;
    const parts = cleanPath.split("/");

    let curr = root;
    let currentPath = "";

    parts.forEach((part, idx) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      if (!map[currentPath]) {
        const isFile = idx === parts.length - 1;
        const node = {
          name: part,
          path: currentPath,
          type: isFile ? "file" : "folder",
          children: [],
        };

        if (isFile) {
          node.id = f.id;
          node.summary = f.summary;
          node.content = f.content;
          node.file_name = f.file_name;
        }

        map[currentPath] = node;
        curr.children.push(node);
      }

      curr = map[currentPath];
    });
  });

  return root;
}

/**
 * TreeNode - renders either a folder (collapsible) or a file row.
 * level: integer depth (0 = top-level). Used for indentation.
 */
function TreeNode({ node, onOpenFile, level = 0 }) {
  const [open, setOpen] = useState(true);
  const paddingLeft = level * 16; // 16px per level indent - tweak as needed

  if (node.type === "folder") {
    return (
      <div className={styles.folder}>
        <div
          className={styles.folderName}
          onClick={() => setOpen((s) => !s)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingLeft,
          }}
        >
          <span style={{ transform: open ? "rotate(90deg)" : "none" }}>▶</span>
          <strong style={{ fontWeight: 700 }}>{node.name}</strong>
        </div>

        <div
          className={styles.folderChildren}
          style={{ display: open ? "block" : "none", paddingLeft: 8 }}
        >
          {node.children.map((child) => (
            <TreeNode
              key={child.path}
              node={child}
              onOpenFile={onOpenFile}
              level={level + 1}
            />
          ))}
        </div>
      </div>
    );
  }

  // file node
  return (
    <div
      className={styles.fileItem}
      onClick={() =>
        onOpenFile({
          id: node.id,
          title: node.file_name,
        })
      }
      title={node.path}
      style={{ paddingLeft }}
    >
      <span className={styles.fileIcon}>📄</span>
      <span className={styles.fileName}>{node.name}</span>
    </div>
  );
}

export default function FileTreePlaceholder({ files = [], onOpenFile }) {
  const tree = useMemo(() => buildTree(files || []), [files]);

  // If no files yet (loading), show lightweight placeholder
  if (!files || files.length === 0) {
    return (
      <div className={styles.fileTree}>
        <h3 className={styles.panelTitle}>Project Files</h3>
        <div style={{ padding: 16, color: "var(--muted)" }}>
          Loading files...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.fileTree}>
      <h3 className={styles.panelTitle}>Project Files</h3>
      <div>
        {tree.children.map((n) => (
          <TreeNode key={n.path} node={n} onOpenFile={onOpenFile} level={0} />
        ))}
      </div>
    </div>
  );
}
