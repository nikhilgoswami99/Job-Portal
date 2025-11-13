// ResultsPage.jsx
import React from 'react';
import { Results } from "@/components/results/results";
import styles from './results.module.css';

const ResultsPage = () => {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Exam Results</h1>
            <p className={styles.subtitle}>Check latest exam results and merit lists</p>
          </div>
        </div>
        <div className={styles.content}>
          <Results />
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;