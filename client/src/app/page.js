import Link from 'next/link';
import styles from './page.module.css'

/*
  This is the main page template of the application, which contains a button to
  navigate to the services page. The page is styled using CSS modules.
*/
export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          {" | "}
          <Link href="/services" className={styles.navLink}>Services</Link>
        </nav>
      </header>

      {/* Main Content */}    
      <section className={styles.hero}>
        <h1 className={styles.title}>Community Access Hub</h1>
        <p className={styles.description}>
          Connecting you to essential services like food pantries, community gardens, and EBT-friendly stores.
          Discover local support and resources in your area.
        </p>
        <Link href="/services" className={styles.button}>
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Community Access Hub</p>
      </footer>

    </main>
  );
}
