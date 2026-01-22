"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, just clear form and show success
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className={styles.container}>
      <section className={styles.contactSection}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Have questions or want to learn more about Harmony Engine? Send us a message.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Your full name"
            />
          </label>

          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="you@example.com"
            />
          </label>

          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              placeholder="Write your message here..."
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </section>
    </main>
  );
}
