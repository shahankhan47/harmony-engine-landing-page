"use client"
import styles from './Header.module.css'
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.shrink : ''}`}>
      <div className={styles.inner + ' container'}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="/svg/logo-black.svg" alt="Harmony Engine Logo" />
          </div>

          <nav className={styles.navLeft}>
            <Link href="/">Home</Link>
          </nav>
        </div>

        <div className={styles.right}>
          <nav className={styles.navRight}>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
            <Link href="https://app.harmonyengine.ai" className={styles.ctaLink}>
              <button className={styles.cta}>Upload your project</button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
