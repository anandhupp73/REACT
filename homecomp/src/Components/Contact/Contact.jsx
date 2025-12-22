import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Send us a message below.</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Get in Touch</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Our Office</h2>
          <p>1234 Digital Avenue, Tech City, TX 75001</p>
          <p>Email: contact@company.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
