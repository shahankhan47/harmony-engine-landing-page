import Link from 'next/link'
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
              <Link href="/">Home</Link>
              <Link href="#howItWorks">How It Works</Link>
              <Link href="/about#successStories">Success Stories</Link>
            </div>

            <div className={styles.column}>
              <h4 className={styles.heading}>Support</h4>
              <Link href="/pricing#faq">FAQ</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
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
