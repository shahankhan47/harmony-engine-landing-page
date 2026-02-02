import styles from "./AskAnything.module.css";

export default function AskAnything() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            Conversational Intelligence
          </span>

          <h2 className={styles.heading}>
            Ask anything, get <span>instant answers</span>
          </h2>

          <p className={styles.description}>
            Don't wait for the lead developer to be free. Ask HarmonyEngine
            about business logic, data flow, or specific feature
            implementations. It's like having the original architect on speed
            dial 24/7.
          </p>

          <ul className={styles.list}>
            <li>Where is the discount logic applied?</li>
            <li>Explain the user onboarding flow in plain English</li>
            <li>Are there any hardcoded API keys?</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.chatCard}>
            <div className={styles.question}>
              Can you explain how the payment processing module handles failed
              transactions?
            </div>

            <div className={styles.answer}>
              <p>
                The payment module uses a retry mechanism with exponential
                backoff.
              </p>
              <ol>
                <li>Initial Failure: Caught in PaymentService.ts.</li>
                <li>Retry Logic: Retries 3 times via RetryHandler.</li>
                <li>
                  Final State: If all fail, a <code>PaymentFailed</code> event is
                  emitted to the message queue for manual review.
                </li>
              </ol>

              <div className={styles.actions}>
                <button>View Source File</button>
                <button>See Diagram</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
