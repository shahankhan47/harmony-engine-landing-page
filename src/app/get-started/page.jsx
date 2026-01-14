"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import RHELayout from "../../components/HE/RHELayout";
import projectData from "../../../data/test/project.json";

// Env
const API_BASE_URL = process.env.NEXT_PUBLIC_HE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_HE_API_KEY;

// Demo projects (content can be changed later)
const DEMO_PROJECTS = [
  {
    id: "tinygpu",
    title: "Tiny-GPU",
    image: "/images/demo-1.png",
    projectId: "241ed538-3bb9-4350-8746-953394d0d768",
    description:
      "A minimal GPU design in Verilog to learn how GPUs work from the ground up"
  },
  {
    id: "medusa",
    title: "Medusa-Ecommerce",
    image: "/images/demo-2.png",
    projectId: "2a332cf9-ead0-4aa3-87f4-9a214068a22f",
    description:
      "Medusa is a commerce platform with a built-in framework for customization that allows you to build custom commerce applications without reinventing core commerce logic."
  },
  {
    id: "twitter",
    title: "Twitter-The Alogirthm",
    image: "/images/demo-3.png",
    projectId: "590dfdf9-5fd3-4e10-b44a-abefa46047e9",
    description:
      "X's Recommendation Algorithm is a set of services and jobs that are responsible for serving feeds of posts and other content across all X product surfaces (e.g. For You Timeline, Search, Explore, Notifications)."
  },
  {
    id: "apollo",
    title: "Apollo-11 Guidance Computer",
    image: "/images/demo-4.png",
    projectId: "4751acd8-3289-4812-bd7c-00966171fccc",
    description:
      "Original Apollo 11 guidance computer (AGC) source code for Command Module (Comanche055) and Lunar Module (Luminary099)."
  }
];

export default function GetStartedPage() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFiles, setProjectFiles] = useState(null);
  const [loadingFiles, setLoadingFiles] = useState(false);

  // Fetch files when project changes
  useEffect(() => {
    if (!selectedProject) return;

    async function loadFiles() {
      setLoadingFiles(true);
      try {
        const res = await fetch(
          `${API_BASE_URL}/projects/${selectedProject.projectId}/files`,
          {
            headers: { "X-API-Key": API_KEY }
          }
        );

        const json = await res.json();
        const cleaned = json.files.map((f) => ({
          ...f,
          file_path: f.file_path.replace(
            /^\/?tmp\/[^/]+\/extracted_files\//,
            ""
          )
        }));

        setProjectFiles(cleaned);
      } catch (e) {
        console.error("Failed to load project files", e);
      } finally {
        setLoadingFiles(false);
      }
    }

    loadFiles();
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsClosing(false);
    setOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setSelectedProject(null);
      setProjectFiles(null);
      setIsClosing(false);
    }, 280);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h1 className={styles.title}>Get Started</h1>
        <p className={styles.text}>
          Select a project below to explore Harmony Engine.
        </p>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {DEMO_PROJECTS.map((project) => (
            <button
              key={project.id}
              className={styles.projectCard}
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && selectedProject && (
        <div
          className={`${styles.modalOverlay} ${
            isClosing ? styles.fadeOut : styles.fadeIn
          }`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modal} ${
              isClosing ? styles.modalClose : styles.modalOpen
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{ padding: 0 }}
          >
            <RHELayout
              onClose={closeModal}
              projectFiles={projectFiles}
              loadingFiles={loadingFiles}
              projectMeta={projectData[selectedProject.id]}
              projectId={selectedProject.projectId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
