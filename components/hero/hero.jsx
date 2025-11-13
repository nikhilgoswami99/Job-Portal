// Hero.jsx
import React from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import styles from './hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.pulse}>
              <span className={styles.pulseRing}></span>
              <span className={styles.pulseDot}></span>
            </span>
            1000+ New Jobs This Week
          </div>
          
          <h1 className={styles.title}>
            Find Your Dream{" "}
            <span className={styles.gradient}>
              Government Job
            </span>
          </h1>
          
          <p className={styles.subtitle}>
            Search and apply for the latest central & state government jobs, results, and admit cards all in one place
          </p>

          {/* Search Box */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
              <div className={styles.searchGrid}>
                <div className={styles.searchInputWrapper}>
                  <Search className={styles.searchIcon} />
                  <input
                    type="text"
                    placeholder="Search by job title, department..."
                    className={styles.searchInput}
                  />
                </div>

                <div className={styles.selectGroup}>
                  <div className={styles.selectWrapper}>
                    <MapPin className={styles.selectIcon} />
                    <select className={styles.select}>
                      <option value="">Location</option>
                      <option value="all">All India</option>
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="kolkata">Kolkata</option>
                    </select>
                  </div>

                  <div className={styles.selectWrapper}>
                    <Briefcase className={styles.selectIcon} />
                    <select className={styles.select}>
                      <option value="">Category</option>
                      <option value="all">All Categories</option>
                      <option value="banking">Banking</option>
                      <option value="railway">Railway</option>
                      <option value="ssc">SSC</option>
                      <option value="upsc">UPSC</option>
                    </select>
                  </div>

                  <button className={styles.searchButton}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={`${styles.statNumber} ${styles.primary}`}>5000+</div>
              <div className={styles.statLabel}>Active Jobs</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statNumber} ${styles.accent}`}>200+</div>
              <div className={styles.statLabel}>Departments</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statNumber} ${styles.success}`}>1M+</div>
              <div className={styles.statLabel}>Users</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statNumber} ${styles.info}`}>500+</div>
              <div className={styles.statLabel}>Results Daily</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </div>
    </section>
  );
};