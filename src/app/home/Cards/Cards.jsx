import styles from "./Cards.module.css";

const items = [
  {
    id: "analysis",
    title: "Visibility",
    subtitle: "See how the system actually works",
    img: "/images/hero-1.png",
    subtext: "Faster Due Diligence. Fewer surprises",
    bullets: [
      "Instant visual map of how everything connects",
      "Highlights risky or sensitive areas, upgrade paths and bottlenecks",
      "Creates a shared system overview for leadership and vendors"
    ]
  },
  {
    id: "chat",
    title: "Alignment",
    subtitle: "Everyone sees and understands the same picture",
    img: "/images/hero-2.png",
    subtext: "Less tribal knowledge. Faster onboarding.",
    bullets: [
      "Ask questions in plain English — no technical knowledge required",
      "Turn answers into living documentation",
      "No more knowledge locked in people’s heads when teams change or vendors rotate"
    ]
  },
  {
    id: "reports",
    title: "Control",
    subtitle: "Know what will change — before it changes",
    img: "/images/hero-3.png",
    subtext: "Lower delivery risk. Better governance",
    bullets: [
      "Clear summaries of changes before they go live",
      "What changed, why it matters and what could be affected",
      "Reports you can share with audits, leaderships and customers"
    ]
  }
];

export default function Cards() {
    return (
        <div className={styles.cardsSection}>
          <div className={styles.cardsRow}>
            {items.map((item) => (
              <div key={item.id} className={styles.card}>
                {/* Title */}
                <h3 className={styles.cardTitle}>{item.title}</h3>

                {/* Text block (bullets) */}
                <div className={styles.cardBullets}>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={styles.cardImageWrap}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                </div>

                {/* Subtext */}
                <p className={styles.cardSubtext}>{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
    )
}