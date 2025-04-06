"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Selection() {
  const router = useRouter();

  // Track which services are selected
  const [selectedServices, setSelectedServices] = useState({
    ebtFriendly: false,
    communityGardens: false,
    foodPantries: false,
  });

  // Handle toggling each checkbox
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedServices((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Go back to the previous page (services page)
  const handleBack = () => {
    router.push('/services');
  };

  // Handle final submission (logging to console for now)
  const handleFindResources = () => {
    console.log('Selected Services:', selectedServices);
    // Later, navigate to a results page or fetch data from your server
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* Back link at the top (optional) */}
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>

        <h1 className={styles.heading}>Find Food Resources</h1>
        <p className={styles.subheading}>What services are you looking for?</p>

        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="ebtFriendly"
              checked={selectedServices.ebtFriendly}
              onChange={handleCheckboxChange}
            />
            EBT-Friendly Stores
          </label>

          <label>
            <input
              type="checkbox"
              name="communityGardens"
              checked={selectedServices.communityGardens}
              onChange={handleCheckboxChange}
            />
            Community Gardens
          </label>

          <label>
            <input
              type="checkbox"
              name="foodPantries"
              checked={selectedServices.foodPantries}
              onChange={handleCheckboxChange}
            />
            Food Pantries
          </label>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.backButton} onClick={handleBack}>
            Back
          </button>
          <button
            type="button"
            className={styles.findButton}
            onClick={handleFindResources}
          >
            Find Resources
          </button>
        </div>
      </div>
    </main>
  );
}