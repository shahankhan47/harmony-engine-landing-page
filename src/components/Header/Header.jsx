"use client"
import styles from './Header.module.css'
import { useState, useEffect } from 'react'

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
            <img src="/images/logo.png" alt="Harmony Engine Logo" />
          </div>

          <nav className={styles.navLeft}>
            <a href="#">Home</a>
          </nav>
        </div>

        <div className={styles.right}>
          <nav className={styles.navRight}>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <button className={styles.cta}>Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  )
}
