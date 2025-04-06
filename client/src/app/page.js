import Image from 'next/image'
import styles from './page.module.css'

/*
  This is a simple boilerplate template built with Next.js, Express, MongoDB, and Node.js.
*/
export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>This is our MERN website!</h1>
        <p>This is a simple boilerplate template built with Next.js</p>
      </header>

      <footer>
        <p>&copy; {new Date().getFullYear()} My MERN App</p>
      </footer>
    </main>
  );
}
