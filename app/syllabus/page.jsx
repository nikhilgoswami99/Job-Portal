// Syllabus.jsx
import React from 'react';
import { FileText, Download } from "lucide-react";
import styles from './syllabus.module.css';

const syllabusData = [
  {
    id: 1,
    title: "SSC CGL Syllabus 2025",
    organization: "Staff Selection Commission",
    sections: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English Comprehension"]
  },
  {
    id: 2,
    title: "UPSC Civil Services Syllabus",
    organization: "Union Public Service Commission",
    sections: ["GS Paper I-IV", "Essay", "Optional Subject", "Personality Test"]
  },
  {
    id: 3,
    title: "Railway Group D Syllabus",
    organization: "Railway Recruitment Board",
    sections: ["Mathematics", "General Intelligence", "General Science", "General Awareness"]
  },
  {
    id: 4,
    title: "IBPS PO Syllabus 2025",
    organization: "Institute of Banking Personnel",
    sections: ["Reasoning Ability", "Quantitative Aptitude", "English Language", "Computer Aptitude", "General Awareness"]
  },
  {
    id: 5,
    title: "SSC CHSL Syllabus 2025",
    organization: "Staff Selection Commission",
    sections: ["English Language", "General Intelligence", "Quantitative Aptitude", "General Awareness"]
  },
  {
    id: 6,
    title: "UPSC NDA Syllabus",
    organization: "Union Public Service Commission",
    sections: ["Mathematics", "General Ability Test", "English", "Physics", "Chemistry", "General Knowledge"]
  },
];

const Syllabus = () => {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Exam Syllabus</h1>
            <p className={styles.subtitle}>Download detailed syllabus and exam patterns</p>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {syllabusData.map((syllabus) => (
                <div key={syllabus.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.headerContent}>
                      <div className={styles.iconWrapper}>
                        <FileText className={styles.icon} />
                      </div>
                      <div>
                        <h3 className={styles.cardTitle}>{syllabus.title}</h3>
                        <p className={styles.organization}>{syllabus.organization}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.sectionsWrapper}>
                      <h4 className={styles.sectionHeading}>Main Topics:</h4>
                      <ul className={styles.sectionList}>
                        {syllabus.sections.map((section, idx) => (
                          <li key={idx} className={styles.sectionItem}>
                            <span className={styles.bullet}>•</span>
                            <span>{section}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className={styles.downloadBtn}>
                      <Download className={styles.btnIcon} />
                      Download PDF
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

export default Syllabus;