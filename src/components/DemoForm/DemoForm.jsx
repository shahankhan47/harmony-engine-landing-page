import { useState } from "react";
import axios from "axios";
import styles from "./DemoForm.module.css";

export default function DemoForm({ onSuccess, onError }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    jobtitle: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with real API later
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("job_title", form.jobtitle);
      formData.append("consent", form.consent);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HE_API_URL}/store-demo-requests`, formData, 
        {
          headers: { "X-API-Key": process.env.NEXT_PUBLIC_HE_API_KEY }
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to submit demo request");
      }

      setForm({
        name: "",
        email: "",
        jobtitle: "",
        consent: false,
      });
      onSuccess?.();
    } catch (err) {
      console.error(err);
      onError?.(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Book a 15-Minute Demo</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Work Email"
        required
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="jobtitle"
        placeholder="Job Title"
        required
        value={form.jobtitle}
        onChange={handleChange}
      />

      <div className={styles.checkboxRow}>
        <input
          id="consent"
          type="checkbox"
          name="consent"
          required
          checked={form.consent || false}
          onChange={(e) =>
            setForm({
              ...form,
              consent: e.target.checked,
            })
          }
        />

        <span className={styles.customCheckbox} />

        <label htmlFor="consent" className={styles.checkboxLabel}>
          By joining the waitlist, you agree to receive updates about Harmony
          Engine.
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}