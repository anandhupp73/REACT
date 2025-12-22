import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Our Website</h1>
        <p>Explore our services and learn more about what we do</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Featured Services</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Web Development</h3>
              <p>Building modern and responsive web applications for all platforms.</p>
              <Link to="/about">
                <button className={styles.aboutbtn}>About</button>
              </Link>
            </div>
            <div className={styles.card}>
              <h3>UI / UX Design</h3>
              <p>Designing interfaces that are intuitive, accessible, and beautiful.</p>
            </div>
            <div className={styles.card}>
              <h3>Performance Optimization</h3>
              <p>Ensuring fast, reliable, and scalable applications.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us?</h2>
          <p>We combine experience, creativity, and technology to deliver amazing digital solutions.</p>
          <p>Our team focuses on clean code, scalable architecture, and user-friendly design.</p>
        </section>

        <section className={styles.section}>
          <h2>Get Started</h2>
          <p>Contact us today to start your project or learn more about our services.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
