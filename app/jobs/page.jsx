
import React from 'react';
import { LatestJobs } from "@/components/latestJobs/latestJobs";
import styles from './jobs.module.css';

const Jobs = () => {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>All Government Jobs</h1>
            <p className={styles.subtitle}>Browse all available job opportunities</p>
          </div>
        </div>
        <LatestJobs />
      </main>
    </div>
  );
};

export default Jobs;