// Categories.jsx
import React from 'react';
import { 
  Building2, 
  Train, 
  Shield, 
  GraduationCap, 
  Landmark,
  Briefcase,
  Users,
  FileText
} from "lucide-react";
import styles from './categories.module.css';

const categories = [
  { icon: Building2, name: "Banking", count: "450+ Jobs", colorClass: "blue" },
  { icon: Train, name: "Railway", count: "320+ Jobs", colorClass: "green" },
  { icon: Shield, name: "Defense", count: "280+ Jobs", colorClass: "red" },
  { icon: GraduationCap, name: "SSC", count: "520+ Jobs", colorClass: "purple" },
  { icon: Landmark, name: "UPSC", count: "180+ Jobs", colorClass: "amber" },
  { icon: Briefcase, name: "State Govt", count: "890+ Jobs", colorClass: "cyan" },
  { icon: Users, name: "Teaching", count: "620+ Jobs", colorClass: "pink" },
  { icon: FileText, name: "Others", count: "340+ Jobs", colorClass: "indigo" },
];

export const Categories = () => {
//   const handleNavigate = () => {
//     // Navigation logic here
//     window.location.href = '/jobs';
//   };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Browse by Category
          </h2>
          <p className={styles.subtitle}>
            Explore government jobs by department and sector
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name} 
                className={styles.card}
                // onClick={handleNavigate}
              >
                <div className={styles.cardContent}>
                  <div className={`${styles.iconWrapper} ${styles[category.colorClass]}`}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.textContent}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <p className={styles.categoryCount}>{category.count}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};