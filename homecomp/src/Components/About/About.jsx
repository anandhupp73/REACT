import styles from "./About.module.css";

export default function About() {
  return (
    <>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Our Company</h1>
        <p>Building modern, reliable, and user-friendly digital experiences</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of developers, designers, and problem solvers
            focused on creating high-quality web applications. Our goal is to make
            technology accessible, efficient, and enjoyable for everyone.
          </p>
          <p>
            Founded with a vision to simplify complex ideas, we believe that clean
            design and well-structured code are the foundation of successful
            products.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver scalable, secure, and performance-driven
            solutions while maintaining simplicity and clarity. We aim to empower
            businesses and individuals through technology.
          </p>
          <p>
            We constantly learn, adapt, and improve to stay ahead in the fast-moving
            world of web development.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What We Do</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Web Development</h3>
              <p>
                We build responsive and modern web applications using the latest
                technologies and best practices.
              </p>
            </div>

            <div className={styles.card}>
              <h3>UI / UX Design</h3>
              <p>
                Our designs focus on usability, accessibility, and clean visual
                aesthetics to enhance user experience.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Performance Optimization</h3>
              <p>
                We optimize applications for speed, efficiency, and scalability to
                ensure smooth performance.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Values</h2>
          <p>
            We value honesty, collaboration, and continuous improvement. Our team
            believes in writing clean code, following standards, and always putting
            users first.
          </p>
          <p>
            Every project we take on is treated with care, attention to detail, and
            a strong commitment to quality.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Looking Ahead</h2>
          <p>
            As technology evolves, so do we. Our future goals include exploring new
            frameworks, improving accessibility, and delivering even better digital
            experiences.
          </p>
          <p>
            We are excited about what lies ahead and look forward to building
            meaningful solutions that make a difference.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}
