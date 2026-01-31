import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  {
    q: "Do I need to be technical to use this?",
    a: "No. Harmony Engine is designed for people who need understanding, not expertise. You don’t need to read or write code to get value.",
    color: "green",
  },
  {
    q: "Will this replace our developers?",
    a: "No. It supports better conversations and shared clarity. Developers still write code and make decisions — this just helps everyone understand what’s happening.",
    color: "blue",
  },
  {
    q: "What if I don’t know what to ask?",
    a: "That’s okay. Most users start with simple questions and build confidence over time. Harmony Engine helps guide the conversation.",
    color: "purple",
  },
  {
    q: "How secure is my code?",
    a: "Your code remains under your control. Harmony Engine is read-only by design and focuses on security best practices.",
    color: "orange",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel at any time without penalties.",
    color: "red",
  },
  {
    q: "What languages and frameworks are supported?",
    a: "Harmony Engine supports many popular languages and frameworks. If you have a specific stack, you can reach out to confirm support.",
    color: "teal",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Common questions</h2>
        <p className={styles.subheading}>
          Everything you need to know to feel confident
        </p>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={`${styles.icon} ${styles[item.color]}`}>?</div>

              <div className={styles.content}>
                <h4 className={styles.question}>{item.q}</h4>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
