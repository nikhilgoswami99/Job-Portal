// AdmitCard.jsx
import React from 'react';
import { Download } from "lucide-react";
import styles from './admitCard.module.css';

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
  {
    id: 5,
    title: "SBI Clerk Prelims Admit Card",
    examDate: "10 Feb 2025",
    status: "LIVE",
    organization: "State Bank of India"
  },
  {
    id: 6,
    title: "SSC MTS Admit Card 2025",
    examDate: "20 Feb 2025",
    status: "SOON",
    organization: "Staff Selection Commission"
  },
];

const AdmitCard = () => {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Admit Cards</h1>
            <p className={styles.subtitle}>Download your hall tickets and exam call letters</p>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {admitCards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.badgeWrapper}>
                      <span 
                        className={`${styles.badge} ${
                          card.status === 'LIVE' 
                            ? styles.badgeLive 
                            : styles.badgeSoon
                        }`}
                      >
                        {card.status}
                      </span>
                    </div>
                    
                    <h3 className={styles.cardTitle}>
                      {card.title}
                    </h3>
                    <p className={styles.organization}>
                      {card.organization}
                    </p>
                    <p className={styles.examDate}>
                      Exam Date: {card.examDate}
                    </p>
                    <button 
                      className={card.status === 'LIVE' ? styles.downloadBtn : styles.disabledBtn}
                      disabled={card.status !== 'LIVE'}
                    >
                      <Download className={styles.btnIcon} />
                      {card.status === 'LIVE' ? 'Download' : 'Coming Soon'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdmitCard;