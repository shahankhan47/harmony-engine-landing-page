import styles from "./ChatMock.module.css";

/**
 * Set showAssistantCard = false
 * to completely remove the Harmony AI card
 * without affecting layout.
 */
export default function ChatMock({ showAssistantCard = true }) {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.avatar} />
          <div className={styles.sidebarLines}>
            <span />
            <span />
            <span />
          </div>

          <button className={styles.askBtn}>🤖 Ask AI</button>
        </aside>

        {/* Main Panels */}
        <div className={styles.panels}>
          {/* Architecture */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span>System Architecture</span>
              <span className={styles.live}>Live</span>
            </div>

            <div className={styles.diagram}>
              <div className={styles.row}>
                <div className={`${styles.node} ${styles.auth}`}>Auth</div>
                <div className={`${styles.node} ${styles.api}`}>API</div>
              </div>

              <div className={styles.arrow}>↓</div>

              <div className={`${styles.node} ${styles.database}`}>
                Database
              </div>
            </div>
          </div>

          {/* Codebase Health */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span>Codebase Health</span>
            </div>

            <div className={styles.chart}>
              <div className={`${styles.bar} ${styles.green}`} style={{ height: "80%" }}>
                <span>Security</span>
              </div>
              <div className={`${styles.bar} ${styles.blue}`} style={{ height: "65%" }}>
                <span>Performance</span>
              </div>
              <div className={`${styles.bar} ${styles.purple}`} style={{ height: "85%" }}>
                <span>Maintainability</span>
              </div>
              <div className={`${styles.bar} ${styles.orange}`} style={{ height: "60%" }}>
                <span>Docs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Assistant Card */}
        {showAssistantCard && (
          <div className={styles.assistant}>
            <div className={styles.assistantHeader}>
              <span className={styles.bot}>🤖</span>
              <span>Harmony AI</span>
            </div>

            <p>
              I found <strong>3 potential security risks</strong> in the
              authentication module. Would you like a summary?
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
