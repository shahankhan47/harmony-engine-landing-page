import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Left */}
          <div className={styles.about}>
            <h3 className={styles.title}>
              Harmony Engine
              <img
                src="/svg/logo-black.svg"
                alt=""
                className={styles.titleIcon}
              />
            </h3>
            <p className={styles.text}>
              Harmony Engine makes complex software easier to understand.
              It offers a calm, read-only way to see how systems work, so everyone can participate in technical 
              conversations with confidence.
            </p>
          </div>

          {/* Right */}
          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.heading}>Quick Links</h4>
              <a href="/">Home</a>
              <a href="/get-started">How It Works</a>
              <a href="/about">Success Stories</a>
            </div>

            <div className={styles.column}>
              <h4 className={styles.heading}>Support</h4>
              <a href="/contact">FAQ</a>
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
