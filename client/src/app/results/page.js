"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ResultsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("distance");

  const sampleServices = [
    {
      name: "Fresh Harvest Pantry",
      type: "Food Pantry",
      contact: "(555) 123-4567",
      website: "https://freshharvest.org",
      rating: 4.6,
      distance: 2.3,
      tags: ["Vegan", "Pickup", "Open Now"],
    },
    {
      name: "Grow Together Garden",
      type: "Community Garden",
      contact: "(555) 765-4321",
      website: "https://growtogether.org",
      rating: 4.8,
      distance: 1.4,
      tags: ["Spanish Speaking Staff", "Open Now"],
    },
    {
      name: "Sunshine Foods",
      type: "EBT-Friendly Store",
      contact: "(555) 222-1212",
      website: "https://sunshinefoods.com",
      rating: 4.2,
      distance: 4.7,
      tags: ["Delivery", "Vegan", "Open Now"],
    },
    {
      name: "Urban Green Patch",
      type: "Community Garden",
      contact: "(555) 888-9191",
      website: "https://urbangreenpatch.org",
      rating: 4.5,
      distance: 3.2,
      tags: ["Pickup", "Spanish Speaking Staff"],
    },
    {
      name: "Harvest Helpers Pantry",
      type: "Food Pantry",
      contact: "(555) 111-0000",
      website: "https://harvesthelpers.org",
      rating: 4.7,
      distance: 0.9,
      tags: ["Vegan", "Open Now"],
    },
    {
      name: "Roots Market",
      type: "EBT-Friendly Store",
      contact: "(555) 303-1010",
      website: "https://rootsmarket.com",
      rating: 4.3,
      distance: 5.8,
      tags: ["Delivery", "Open Now"],
    },
    {
      name: "Community Crops Garden",
      type: "Community Garden",
      contact: "(555) 606-6060",
      website: "https://communitycrops.org",
      rating: 4.9,
      distance: 6.1,
      tags: ["Pickup", "Vegan"],
    },
    {
      name: "Better Bites Pantry",
      type: "Food Pantry",
      contact: "(555) 707-4040",
      website: "https://betterbites.org",
      rating: 4.1,
      distance: 9.6,
      tags: ["Open Now", "Spanish Speaking Staff"],
    },
  ];

  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setActiveFilters((prev) =>
      checked ? [...prev, value] : prev.filter((tag) => tag !== value)
    );
  };

  const applyFilters = (services) => {
    if (activeFilters.length === 0) return services;

    return services.filter(service =>
      activeFilters.every(filter => service.tags.includes(filter))
    );
  };

  const filteredServices = applyFilters(sampleServices).sort((a, b) => {
    if (sortOption === "distance") return a.distance - b.distance;
    if (sortOption === "type") return a.type.localeCompare(b.type);
    return 0;
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Local Services</h1>
  
        <div className={styles.controls}>
          <button
            className={styles.filterButton}
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            {filtersOpen ? "Hide Filters" : "Show Filters"}
          </button>
  
          <select
            className={styles.sortSelect}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="type">Sort by Type</option>
            <option value="distance">Sort by Distance</option>
          </select>
        </div>
  
        {filtersOpen && (
          <div className={styles.filters}>
            {["Spanish Speaking Staff", "Delivery", "Pickup", "Vegan", "Open Now"].map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={activeFilters.includes(tag)}
                  onChange={handleFilterChange}
                />
                {tag}
              </label>
            ))}
          </div>
        )}
      </header>

      {filteredServices.length === 0 && (
        <div className={styles.noResults}>
        <h2>No services match your filters.</h2>
      </div>
    )}

      <section className={styles.grid}>
      {filteredServices.map((service, index) => (
        <div key={index} className={styles.card}>
        <h2 className={styles.cardTitle}>{service.name}</h2>
      <p><strong>Type:</strong> {service.type}</p>
      <p><strong>Contact:</strong> {service.contact}</p>
      <p><strong>Rating:</strong> {service.rating} / 5</p>
      <p><strong>Distance:</strong> {service.distance} miles</p>
      <a
        href={service.website}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.websiteButton}
      >
        Visit Website
      </a>
      <div className={styles.tagContainer}>
        {service.tags.map((tag, idx) => (
          <span key={idx} className={styles.tag}>{tag}</span>
        ))}
      </div>
    <button className={styles.reviewButton}>View Reviews</button>
  </div>
))}
      </section>
    </main>
  );
} 