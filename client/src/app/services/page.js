"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Services() {
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (city.trim() === '') {
      alert('Please enter a city.');
      return;
    };
    
    router.push('/services/selection');
  }  

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
      <div className={styles.container}>
        <h1 className={styles.title}>Enter Your City</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="city-input">
            Enter City:
          </label>
          <input 
            id="city-input"
            type="text"
            placeholder="e.g., San Diego, CA"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.textbox}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Community Access Hub</p>
      </footer>
    </main>
  );
}