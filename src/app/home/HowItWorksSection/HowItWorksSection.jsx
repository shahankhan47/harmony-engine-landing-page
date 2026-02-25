import styles from "./HowItWorksSection.module.css";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Before You Commit to Architectural Change
        </h2>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div className={styles.track}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div className={styles.number}>1</div>
                    <h3>Align on what's at stake</h3>
                  </div>

                  <div className={styles.cardBody}>
                    <p>You share:</p>

                    <ul>
                      <li><i className="fa-solid fa-circle" />Your current questions and concerns</li>
                      <li><i className="fa-solid fa-circle" />The decisions you need to make</li>
                      <li><i className="fa-solid fa-circle" />Relevant repos and systems in scope</li>
                    </ul>

                    <div className={styles.callout}>
                      We calibrate on what "useful clarity" looks like for your specific context.
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div className={styles.number}>2</div>
                    <h3>System analysis from your existing code</h3>
                  </div>

                  <div className={styles.cardBody}>
                    <p>HarmonyEngine ingests your repositories and focuses on:</p>

                    <ul>
                      <li><i className="fa-solid fa-circle" />Architectural structure and boundaries</li>
                      <li><i className="fa-solid fa-circle" />Critical dependencies and coupling</li>
                      <li><i className="fa-solid fa-circle" />Data flows and integration points</li>
                      <li><i className="fa-solid fa-circle" />Complexity hotspots and debt clusters</li>
                    </ul>

                    <div className={styles.callout}>
                      We extract the structural understanding you need to reason about big decisions.
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div className={styles.number}>3</div>
                    <h3>Strategic briefing and discussion</h3>
                  </div>

                  <div className={styles.cardBody}>
                    <p>You receive:</p>

                    <ul>
                      <li><i className="fa-solid fa-circle" /><strong>Executive Brief:</strong> 4–8 pages, written for decision-makers</li>
                      <li><i className="fa-solid fa-circle" /><strong>System Map:</strong> visual overview of architecture and risk areas</li>
                      <li><i className="fa-solid fa-circle" /><strong>Chat-style springboarding tool:</strong> Q&A focused on your decisions</li>
                    </ul>

                    <div className={styles.callout}>
                      You walk away with a shared, board-ready view of the system—grounded in the code, not opinions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button className={`${styles.navButton} ${styles.prev}`}>
            <i className="fa-solid fa-chevron-left" />
          </button>

          <button className={`${styles.navButton} ${styles.next}`}>
            <i className="fa-solid fa-chevron-right" />
          </button> */}
        </div>
      </div>
    </section>
  );
}