import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Left */}
          <div className={styles.about}>
            <h3 className={styles.title}>Harmony Engine</h3>
            <p className={styles.text}>
              Placeholder text explaining what Harmony Engine is. Will
              replace this later.
            </p>
          </div>

          {/* Right */}
          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.heading}>Quick Links</h4>
              <a href="/">Home</a>
              <a href="/">How It Works</a>
              <a href="/">Success Stories</a>
            </div>

            <div className={styles.column}>
              <h4 className={styles.heading}>Support</h4>
              <a href="/">FAQ</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          © {new Date().getFullYear()} zpqv Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
