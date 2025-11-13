// Results.jsx
import React from 'react';
import { FileText, Download, ExternalLink } from "lucide-react";
import styles from './results.module.css';

const results = [
  {
    id: 1,
    title: "SSC CGL Tier 1 Result 2024",
    date: "18 Jan 2025",
    status: "NEW",
    organization: "Staff Selection Commission"
  },
  {
    id: 2,
    title: "Railway Group D Final Result",
    date: "17 Jan 2025",
    status: "NEW",
    organization: "Railway Recruitment Board"
  },
  {
    id: 3,
    title: "IBPS PO Prelims Result 2024",
    date: "15 Jan 2025",
    status: "UPDATED",
    organization: "Institute of Banking Personnel"
  },
  {
    id: 4,
    title: "UPSC CDS II Result 2024",
    date: "12 Jan 2025",
    status: "ANNOUNCED",
    organization: "Union Public Service Commission"
  },
  {
    id: 5,
    title: "Delhi Police Constable Result",
    date: "10 Jan 2025",
    status: "ANNOUNCED",
    organization: "Delhi Police"
  },
];

const admitCards = [
  {
    id: 1,
    title: "SSC CHSL Tier 1 Admit Card 2025",
    examDate: "25 Jan 2025",
    status: "LIVE",
    organization: "Staff Selection Commission"
  },
  {
    id: 2,
    title: "IBPS Clerk Mains Admit Card",
    examDate: "28 Jan 2025",
    status: "LIVE",
    organization: "Institute of Banking Personnel"
  },
  {
    id: 3,
    title: "Railway ALP Admit Card 2025",
    examDate: "05 Feb 2025",
    status: "SOON",
    organization: "Railway Recruitment Board"
  },
  {
    id: 4,
    title: "UPSC NDA Admit Card",
    examDate: "15 Feb 2025",
    status: "SOON",
    organization: "Union Public Service Commission"
  },
];

export const Results = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Results Section */}
          <div>
            <div className={styles.header}>
              <div>
                <h2 className={styles.title}>
                  Latest Results
                </h2>
                <p className={styles.subtitle}>
                  Check your exam results here
                </p>
              </div>
            </div>

            <div className={styles.list}>
              {results.map((result) => (
                <div key={result.id} className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={`${styles.iconWrapper} ${styles.primary}`}>
                      <FileText className={styles.icon} />
                    </div>
                    
                    <div className={styles.contentMain}>
                      <div className={styles.titleRow}>
                        <h3 className={styles.cardTitle}>
                          {result.title}
                        </h3>
                        <span className={styles.badge}>
                          {result.status}
                        </span>
                      </div>
                      <p className={styles.organization}>
                        {result.organization}
                      </p>
                      <p className={styles.date}>
                        Published: {result.date}
                      </p>
                    </div>

                    <button className={styles.downloadBtn}>
                      <Download className={styles.btnIcon} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={styles.viewAllBtn}
            >
              View All Results
              <ExternalLink className={styles.btnIcon} />
            </button>
          </div>

          {/* Admit Cards Section */}
          <div>
            <div className={styles.header}>
              <div>
                <h2 className={styles.title}>
                  Admit Cards
                </h2>
                <p className={styles.subtitle}>
                  Download your hall tickets
                </p>
              </div>
            </div>

            <div className={styles.list}>
              {admitCards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={`${styles.iconWrapper} ${styles.accent}`}>
                      <Download className={styles.icon} />
                    </div>
                    
                    <div className={styles.contentMain}>
                      <div className={styles.titleRow}>
                        <h3 className={styles.cardTitle}>
                          {card.title}
                        </h3>
                        <span className={`${styles.badge} ${
                          card.status === 'LIVE' 
                            ? styles.badgeLive 
                            : styles.badgeSoon
                        }`}>
                          {card.status}
                        </span>
                      </div>
                      <p className={styles.organization}>
                        {card.organization}
                      </p>
                      <p className={styles.date}>
                        Exam: {card.examDate}
                      </p>
                    </div>

                    <button 
                      className={card.status === 'LIVE' ? styles.actionBtn : styles.downloadBtn}
                    >
                      {card.status === 'LIVE' ? 'Download' : 'Soon'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={styles.viewAllBtn}
            >
              View All Admit Cards
              <ExternalLink className={styles.btnIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};