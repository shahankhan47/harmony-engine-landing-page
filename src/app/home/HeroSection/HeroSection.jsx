"use client";

import styles from "./HeroSection.module.css";
import Link from "next/link";
import ChatMock from "../ChatMock/ChatMock";
import Cards from "../Cards/Cards";

export default function HeroSection() {
  return (
    <div>
      <div className={styles.top}>
        <h1 className={styles.title}>Turn complex code into clarity — <span>for everyone</span></h1>

        <p className={styles.subtitle}>
          Harmony Engine explains complex code in plain English and visuals, so teams can make confident decisions together.
        </p>

        <Link href="/get-started">
          <button className={styles.cta}>Explore a sample project</button>
        </Link>

        <section>
          <ChatMock />
        </section>

        <section>
          <Cards />
        </section>
      </div>
    </div>
  );
}
